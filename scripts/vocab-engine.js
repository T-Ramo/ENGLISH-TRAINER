/* ============================================================
   VOCAB ENGINE — quiz logic, SRS, scoring, session management
   ============================================================ */

const VocabEngine = {
  // ---- Session state ----
  session: null,

  MODES: {
    discovery: {
      key: 'discovery',
      label: 'Découverte',
      icon: '✦',
      desc: 'Apprends à ton rythme avec des indices. Pas de pénalité.',
      timer: false,
      reveal: true,
      hint: true,
      basePoints: 5,
      sessionSize: 15,
    },
    challenge: {
      key: 'challenge',
      label: 'Challenge',
      icon: '⚡',
      desc: 'Chronométré, bonus de série et de rapidité.',
      timer: true,
      timerPerQuestion: 12,
      reveal: false,
      hint: false,
      basePoints: 10,
      sessionSize: 20,
    },
    srs: {
      key: 'srs',
      label: 'Révision SRS',
      icon: '↻',
      desc: 'Algorithme de répétition espacée. Les mots ratés reviennent.',
      timer: false,
      reveal: true,
      hint: true,
      basePoints: 7,
      sessionSize: 20,
    },
  },

  // ---- Build a list of words from filters ----
  selectPool({ tier, theme, pos } = {}) {
    return VOCAB.filter(w =>
      (!tier || w.tier === tier) &&
      (!theme || w.theme === theme) &&
      (!pos || w.pos === pos)
    );
  },

  // For SRS: pick due cards first, then fill with unseen, then with low-mastery
  buildSRSQueue(pool, size) {
    const now = Date.now();
    const due = [];
    const unseen = [];
    const low = [];
    for (const w of pool) {
      const c = Storage.getCard(w.id);
      if (!c) { unseen.push(w); continue; }
      if (c.nextDueAt && c.nextDueAt <= now) { due.push(w); continue; }
      if (c.correct < 3) low.push(w);
    }
    const list = [];
    list.push(...Shared.shuffle(due));
    list.push(...Shared.shuffle(unseen));
    list.push(...Shared.shuffle(low));
    // last resort: fill from rest of pool
    if (list.length < size) {
      const rest = pool.filter(w => !list.includes(w));
      list.push(...Shared.shuffle(rest));
    }
    return list.slice(0, size);
  },

  // ---- Start a session ----
  startSession({ mode, filters }) {
    const m = this.MODES[mode];
    if (!m) throw new Error('Unknown mode: ' + mode);
    const pool = this.selectPool(filters);
    if (pool.length === 0) {
      throw new Error('Aucun mot ne correspond aux filtres.');
    }
    let queue;
    if (mode === 'srs') {
      queue = this.buildSRSQueue(pool, m.sessionSize);
    } else {
      queue = Shared.shuffle(pool).slice(0, m.sessionSize);
    }
    this.session = {
      mode: m,
      filters,
      queue,
      index: 0,
      results: [], // { word, ok, near, hintsUsed, timeMs, pointsEarned }
      streak: 0,
      points: 0,
      startedAt: Date.now(),
      currentStart: 0,
      hintsUsed: 0,
      timerHandle: null,
      timeLeft: 0,
    };
    return this.session;
  },

  current() {
    return this.session.queue[this.session.index] || null;
  },

  // ---- Submit answer ----
  submit(userInput, opts = { auto: false }) {
    const w = this.current();
    if (!w) return null;
    const { ok, near } = Shared.matchAnswer(userInput, w.en);
    const timeMs = Date.now() - this.session.currentStart;

    let pts = 0;
    if (ok) {
      pts = this.session.mode.basePoints;
      if (near) pts -= 2; // small penalty for typo
      // hint penalty
      pts -= this.session.hintsUsed * 2;
      // speed bonus for challenge mode
      if (this.session.mode.key === 'challenge' && timeMs < 5000) pts += 3;
      // streak multiplier from 5 in a row
      this.session.streak += 1;
      if (this.session.streak >= 5) pts = Math.round(pts * 1.5);
      pts = Math.max(1, pts);
    } else {
      this.session.streak = 0;
      pts = 0;
    }

    this.session.results.push({
      word: w, ok, near, hintsUsed: this.session.hintsUsed,
      timeMs, pointsEarned: pts, userInput,
    });
    this.session.points += pts;

    // Update SRS card data
    this.updateCardOnAnswer(w, ok);

    return { ok, near, pointsEarned: pts, streak: this.session.streak, correctAnswer: w.en };
  },

  // ---- SM-2 simplified algorithm ----
  updateCardOnAnswer(word, ok) {
    const c = Storage.getCard(word.id) || { seen: 0, correct: 0, wrong: 0, ease: 2.5, intervalDays: 0 };
    c.seen = (c.seen || 0) + 1;
    c.lastSeenAt = Date.now();
    if (ok) {
      c.correct = (c.correct || 0) + 1;
      // quality ~ 4 (or 5 if no hint and quick) — simplified
      const q = this.session.hintsUsed === 0 ? 5 : 3;
      c.ease = Math.max(1.3, (c.ease || 2.5) + (0.1 - (5 - q) * (0.08 + (5 - q) * 0.02)));
      if ((c.correct || 0) === 1) c.intervalDays = 1;
      else if ((c.correct || 0) === 2) c.intervalDays = 3;
      else c.intervalDays = Math.round((c.intervalDays || 1) * c.ease);
    } else {
      c.wrong = (c.wrong || 0) + 1;
      c.intervalDays = 0;
      c.ease = Math.max(1.3, (c.ease || 2.5) - 0.2);
    }
    c.nextDueAt = Date.now() + c.intervalDays * 86400000;
    Storage.upsertCard(word.id, c);
  },

  // ---- Hints ----
  getHint() {
    const w = this.current();
    if (!w) return '';
    const answer = w.en.split('/')[0];
    this.session.hintsUsed += 1;
    // reveal letters: first letter + every other up to hintsUsed
    const chars = answer.split('');
    return chars.map((ch, i) => {
      if (ch === ' ' || ch === "'" || ch === '-') return ch;
      if (i === 0) return ch;
      if (i <= this.session.hintsUsed) return ch;
      return '·';
    }).join('');
  },

  // ---- Advance ----
  next() {
    this.session.index += 1;
    this.session.hintsUsed = 0;
    this.session.currentStart = Date.now();
    return this.current();
  },

  isFinished() {
    return this.session.index >= this.session.queue.length;
  },

  finishSession() {
    if (!this.session) return null;
    const totals = Storage.state.totals;
    const correctCount = this.session.results.filter(r => r.ok).length;
    totals.answersGiven += this.session.results.length;
    totals.answersCorrect += correctCount;
    totals.sessionsCompleted += 1;
    Storage.addPoints(this.session.points);
    Storage.registerActivity();

    // Award badges
    this.checkBadges(correctCount);

    const summary = {
      mode: this.session.mode.label,
      total: this.session.results.length,
      correct: correctCount,
      points: this.session.points,
      durationS: Math.round((Date.now() - this.session.startedAt) / 1000),
      missed: this.session.results.filter(r => !r.ok).map(r => ({
        fr: r.word.fr, en: r.word.en, userInput: r.userInput,
      })),
      streakAchieved: Math.max(...this.session.results.map((_, i) => {
        // compute longest correct streak
        let s = 0, max = 0;
        for (const r of this.session.results) {
          if (r.ok) { s++; max = Math.max(max, s); } else s = 0;
        }
        return max;
      }), 0),
    };
    this.session = null;
    return summary;
  },

  checkBadges(correctInSession) {
    const st = Storage.state;
    // 100 mots vus
    const seenCount = Object.values(st.vocab.cards).length;
    if (seenCount >= 100 && !Storage.hasBadge('vocab-100')) Storage.awardBadge('vocab-100');
    if (seenCount >= 500 && !Storage.hasBadge('vocab-500')) Storage.awardBadge('vocab-500');
    if (seenCount >= 1000 && !Storage.hasBadge('vocab-1000')) Storage.awardBadge('vocab-1000');
    // Perfect session
    if (correctInSession === this.session.results.length && this.session.results.length >= 15) {
      if (!Storage.hasBadge('perfect-session')) Storage.awardBadge('perfect-session');
    }
    // 7-day streak
    if (st.streak.current >= 7 && !Storage.hasBadge('streak-7')) Storage.awardBadge('streak-7');
    if (st.streak.current >= 30 && !Storage.hasBadge('streak-30')) Storage.awardBadge('streak-30');
  },
};

window.VocabEngine = VocabEngine;
