/* ============================================================
   STORAGE — User state, points, progress, SRS data
   ============================================================ */

const STORAGE_KEY = 'englishtrainer.v1';

const DEFAULT_STATE = {
  user: {
    name: 'Apprenant',
    createdAt: null,
    lastSeen: null,
  },
  points: 0,
  streak: { current: 0, best: 0, lastDay: null },
  totals: {
    answersGiven: 0,
    answersCorrect: 0,
    sessionsCompleted: 0,
  },
  vocab: {
    // word_id -> { seen, correct, wrong, lastSeenAt, nextDueAt, ease, intervalDays }
    cards: {},
    history: [], // { date, mode, correct, total, points }
  },
  badges: [],
  settings: {
    voice: 'en-US',
    voiceRate: 0.95,
    autoPlayAudio: true,
  },
  toeic: {
    history: [], // { date, score, listening, reading }
  },
  conj: {
    // key: 'verb_id::tense' -> { seen, correct, wrong, ease, intervalDays, nextDueAt }
    cards: {},
    history: [], // { date, mode, correct, total, points }
  },
  grammar: {
    cards: {}, // exercise_id -> { seen, correct, wrong, ease, intervalDays, nextDueAt }
    lessonsRead: [], // ids des leçons consultées
    history: [], // { date, mode, correct, total, points }
  },
  comprehension: {
    cards: {}, // exercise_id -> { seen, correct, wrong, ease, intervalDays, nextDueAt, lastSeenAt }
    history: [], // { date, type, correct, total, points }
  },
};

const Storage = {
  state: null,

  load() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        this.state = { ...DEFAULT_STATE, ...JSON.parse(raw) };
        // Merge nested defaults defensively
        this.state.user = { ...DEFAULT_STATE.user, ...this.state.user };
        this.state.streak = { ...DEFAULT_STATE.streak, ...this.state.streak };
        this.state.totals = { ...DEFAULT_STATE.totals, ...this.state.totals };
        this.state.vocab = { ...DEFAULT_STATE.vocab, ...this.state.vocab };
        this.state.settings = { ...DEFAULT_STATE.settings, ...this.state.settings };
        this.state.toeic = { ...DEFAULT_STATE.toeic, ...this.state.toeic };
        this.state.conj  = { ...DEFAULT_STATE.conj,  ...this.state.conj  };
        this.state.grammar = { ...DEFAULT_STATE.grammar, ...this.state.grammar };
        this.state.comprehension = { ...DEFAULT_STATE.comprehension, ...this.state.comprehension };
      } else {
        this.state = JSON.parse(JSON.stringify(DEFAULT_STATE));
        this.state.user.createdAt = Date.now();
      }
    } catch (e) {
      console.warn('Storage load failed, resetting', e);
      this.state = JSON.parse(JSON.stringify(DEFAULT_STATE));
    }
    this.touchDay();
    this.save();
    return this.state;
  },

  save() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.state));
    } catch (e) {
      console.warn('Storage save failed', e);
    }
  },

  reset() {
    Object.keys(localStorage)
      .filter(k => k.startsWith('toeic_p_') || k.startsWith('toeic_r_'))
      .forEach(k => localStorage.removeItem(k));
    localStorage.removeItem(STORAGE_KEY);
    this.load();
  },

  // ----- Streak / day tracking -----
  touchDay() {
    const today = new Date().toISOString().slice(0, 10);
    const last = this.state.streak.lastDay;
    this.state.user.lastSeen = Date.now();
    if (!last) {
      // first session, do nothing — streak starts on first completed activity
      return;
    }
    if (last === today) return;
    // compare day diff
    const dayDiff = Math.round(
      (new Date(today) - new Date(last)) / 86400000
    );
    if (dayDiff > 1) {
      // streak broken
      this.state.streak.current = 0;
    }
  },

  addPoints(n) {
    this.state.points = Math.max(0, this.state.points + n);
    this.save();
  },

  // ----- Vocab card data -----
  getCard(id) {
    return this.state.vocab.cards[id] || null;
  },

  upsertCard(id, partial) {
    const cur = this.state.vocab.cards[id] || {
      seen: 0, correct: 0, wrong: 0,
      lastSeenAt: null, nextDueAt: null,
      ease: 2.5, intervalDays: 0,
    };
    this.state.vocab.cards[id] = { ...cur, ...partial };
    this.save();
  },

  // ----- Aggregate helpers -----
  getMasteryStats(wordIds) {
    let mastered = 0, learning = 0, untouched = 0;
    for (const id of wordIds) {
      const c = this.state.vocab.cards[id];
      if (!c) { untouched++; continue; }
      if (c.correct >= 3 && c.intervalDays >= 7) mastered++;
      else learning++;
    }
    return { mastered, learning, untouched, total: wordIds.length };
  },

  // ----- Grammar card data -----
  getGrammarCard(id) {
    return this.state.grammar.cards[id] || null;
  },

  upsertGrammarCard(partial) {
    const id = partial.id;
    const cur = this.state.grammar.cards[id] || {
      id,
      seen: 0, correct: 0, wrong: 0,
      lastSeenAt: null, nextDueAt: null,
      ease: 2.5, intervalDays: 0,
    };
    this.state.grammar.cards[id] = { ...cur, ...partial };
    this.save();
  },

  markLessonRead(module, lessonId) {
    if (!this.state[module]) this.state[module] = { cards: {}, lessonsRead: [], history: [] };
    if (!this.state[module].lessonsRead) this.state[module].lessonsRead = [];
    if (!this.state[module].lessonsRead.includes(lessonId)) {
      this.state[module].lessonsRead.push(lessonId);
      this.save();
    }
  },

  isLessonRead(module, lessonId) {
    if (!this.state[module] || !this.state[module].lessonsRead) return false;
    return this.state[module].lessonsRead.includes(lessonId);
  },

  getLessonsRead(module) {
    if (!this.state[module] || !this.state[module].lessonsRead) return [];
    return this.state[module].lessonsRead;
  },

  getGrammarDueCards(maxCards = 10) {
    const now = new Date();
    const dueIds = [];
    for (const [id, card] of Object.entries(this.state.grammar.cards || {})) {
      if (!card.nextDueAt || new Date(card.nextDueAt) <= now) {
        dueIds.push(id);
        if (dueIds.length >= maxCards) break;
      }
    }
    return dueIds;
  },

  registerActivity(module, mode, correct, total) {
    if (!this.state[module]) this.state[module] = { cards: {}, lessonsRead: [], history: [] };
    if (!this.state[module].history) this.state[module].history = [];
    
    const today = new Date().toISOString().slice(0, 10);
    const last = this.state.streak.lastDay;
    if (last !== today) {
      if (!last || Math.round((new Date(today) - new Date(last)) / 86400000) === 1) {
        this.state.streak.current += 1;
      } else {
        this.state.streak.current = 1;
      }
      this.state.streak.best = Math.max(this.state.streak.best, this.state.streak.current);
      this.state.streak.lastDay = today;
    }

    this.state[module].history.push({
      date: today,
      mode,
      correct,
      total,
      accuracy: Math.round((correct / total) * 100),
    });
    this.save();
  },

  getGrammarMasteryStats(exerciseIds) {
    let mastered = 0;
    for (const id of exerciseIds) {
      const c = this.state.grammar.cards[id];
      if (c && c.correct >= 3 && c.intervalDays >= 7) mastered++;
    }
    return { mastered, total: exerciseIds.length };
  },

  // ----- Conjugation card data -----
  getConjCard(key) {
    return this.state.conj.cards[key] || null;
  },

  upsertConjCard(key, partial) {
    const cur = this.state.conj.cards[key] || {
      seen: 0, correct: 0, wrong: 0,
      lastSeenAt: null, nextDueAt: null,
      ease: 2.5, intervalDays: 0,
    };
    this.state.conj.cards[key] = { ...cur, ...partial };
    this.save();
  },

  getConjMasteryStats(keys) {
    let mastered = 0, learning = 0, untouched = 0;
    for (const k of keys) {
      const c = this.state.conj.cards[k];
      if (!c) { untouched++; continue; }
      if (c.correct >= 3 && c.intervalDays >= 7) mastered++;
      else learning++;
    }
    return { mastered, learning, untouched, total: keys.length };
  },

  // ----- Badges -----
  hasBadge(id) {
    return this.state.badges.includes(id);
  },
  awardBadge(id) {
    if (!this.hasBadge(id)) {
      this.state.badges.push(id);
      this.save();
      return true;
    }
    return false;
  },

  // ----- Comprehension card data -----
  getComprehensionCard(id) {
    return (this.state.comprehension && this.state.comprehension.cards[id]) || null;
  },

  upsertComprehensionCard(id, partial) {
    if (!this.state.comprehension) this.state.comprehension = { cards: {}, history: [] };
    const cur = this.state.comprehension.cards[id] || {
      seen: 0, correct: 0, wrong: 0,
      lastSeenAt: null, nextDueAt: null,
      ease: 2.5, intervalDays: 0,
    };
    this.state.comprehension.cards[id] = { ...cur, ...partial };
    this.save();
  },

  pushComprehensionHistory(entry) {
    if (!this.state.comprehension) this.state.comprehension = { cards: {}, history: [] };
    this.state.comprehension.history.push(entry);
    this.save();
  },
};

// Expose
window.Storage = Storage;
