/* ============================================================
   GRAMMAR ENGINE — Logic & UI for 5 exercise types
   ============================================================ */

const GrammarEngine = {
  session: null,

  MODES: {
    lesson:    { key: 'lesson', label: 'Leçon + Pratique', icon: '📖', sessionSize: 12 },
    mixed:     { key: 'mixed', label: 'Pratique Mixte', icon: '🔀', sessionSize: 20 },
    diagnostic:{ key: 'diagnostic', label: 'Test Diagnostic', icon: '🩺', sessionSize: 25 },
    srs:       { key: 'srs', label: 'Révision SRS', icon: '↻', sessionSize: 20 },
  },

  startSession({ mode, lessonId = null }) {
    let pool = EXERCISES;
    if (lessonId) pool = EXERCISES.filter(ex => ex.lessonId === lessonId);

    let queue;
    if (mode === 'srs') {
      queue = this.buildSRSQueue(pool, this.MODES[mode].sessionSize);
    } else {
      queue = Shared.shuffle(pool).slice(0, this.MODES[mode].sessionSize);
    }

    this.session = {
      mode: this.MODES[mode],
      queue,
      index: 0,
      results: [],
      streak: 0,
      points: 0,
      startedAt: Date.now(),
      currentStart: Date.now(),
      errorSelected: null
    };
    return this.session;
  },

  buildSRSQueue(pool, size) {
    const now = Date.now();
    const due = pool.filter(ex => {
      const c = Storage.getGrammarCard(ex.id);
      return c && c.nextDueAt && c.nextDueAt <= now;
    });
    const rest = pool.filter(ex => !due.includes(ex));
    return [...Shared.shuffle(due), ...Shared.shuffle(rest)].slice(0, size);
  },

  current() { return this.session ? this.session.queue[this.session.index] : null; },

  submit(userInput) {
    const ex = this.current();
    const timeMs = Date.now() - this.session.currentStart;
    let ok = false, near = false, pts = 0;

    if (ex.type === 'mcq') {
      ok = userInput === ex.answer;
      pts = ok ? 6 : 0;
    } else if (ex.type === 'error') {
      const wordOk = Shared.normalize(userInput.word) === Shared.normalize(ex.errorWord);
      const resCorr = Shared.matchAnswer(userInput.correction, ex.answer);
      ok = wordOk && resCorr.ok;
      pts = ok ? 12 : (wordOk ? 4 : 0);
      near = resCorr.near;
    } else {
      const res = Shared.matchAnswer(userInput, ex.answer);
      ok = res.ok;
      near = res.near;
      if (ex.type === 'reorder') pts = ok ? 12 : 0;
      else if (ex.type === 'transform') pts = ok ? 10 : 0;
      else pts = ok ? 8 : 0; // type 'blank'
    }

    if (ok) {
      this.session.streak++;
      if (this.session.streak >= 5) pts = Math.round(pts * 1.5);
      if (timeMs < 10000) pts += 3;
    } else {
      this.session.streak = 0;
    }

    this.session.points += pts;
    this.session.results.push({ ex, ok, near, pointsEarned: pts, timeMs, lessonId: ex.lessonId });
    this.updateSRS(ex.id, ok);

    return { ok, near, pts, explanation: ex.explanation, answer: ex.answer };
  },

  updateSRS(id, ok) {
    const c = Storage.getGrammarCard(id) || { seen:0, correct:0, wrong:0, ease:2.5, intervalDays:0 };
    c.seen++;
    if (ok) {
      c.correct++;
      c.ease = Math.min(3.0, c.ease + 0.1);
      c.intervalDays = c.intervalDays === 0 ? 1 : Math.round(c.intervalDays * c.ease);
    } else {
      c.wrong++;
      c.ease = Math.max(1.3, c.ease - 0.2);
      c.intervalDays = 0;
    }
    c.nextDueAt = Date.now() + (c.intervalDays * 86400000);
    Storage.upsertGrammarCard(id, c);
  },

  next() {
    this.session.index++;
    this.session.currentStart = Date.now();
    return this.current();
  },

  finish() {
    Storage.addPoints(this.session.points);
    Storage.registerActivity();
    this.checkBadges();
    const diag = this.session.mode.key === 'diagnostic' ? this.calculateDiagnostic() : null;
    const correct = this.session.results.filter(r => r.ok).length;
    const total = this.session.queue.length;

    // Enregistrement dans l'historique
    Storage.state.grammar.history.push({
      date: new Date().toISOString().slice(0, 10),
      mode: this.session.mode.key,
      correct,
      total,
      points: this.session.points
    });
    Storage.save();

    return { score: correct, total, points: this.session.points, diag, results: this.session.results };
  },

  calculateDiagnostic() {
    const results = this.session.results;
    const score = results.filter(r => r.ok).length;
    const pct = (score / results.length) * 100;
    
    let level = 'A2 (Elementary)';
    if (pct >= 85) level = 'B2 (Upper Intermediate / Advanced)';
    else if (pct >= 55) level = 'B1 (Intermediate)';

    const lessonMistakes = {};
    results.forEach(r => {
      if (!r.ok) {
        lessonMistakes[r.lessonId] = (lessonMistakes[r.lessonId] || 0) + 1;
      }
    });

    const recommendations = Object.entries(lessonMistakes)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 3)
      .map(([id]) => LESSONS.find(l => l.id === id))
      .filter(l => l);

    return { level, score, total: results.length, recommendations };
  },

  checkBadges() {
    const readCount = Storage.state.grammar.lessonsRead.length;
    if (readCount >= 10) Storage.awardBadge('grammar-lesson-10');
    if (readCount >= 33) Storage.awardBadge('grammar-lesson-all');
  }
};

const GrammarUI = {
  renderExercise(ex, container) {
    container.innerHTML = '';
    const promptEl = document.createElement('div');
    promptEl.className = 'quiz-prompt';
    promptEl.innerHTML = `<div class="prompt-type">${ex.type.toUpperCase()}</div><div class="prompt-word">${ex.prompt}</div>`;
    container.appendChild(promptEl);

    const interactionEl = document.createElement('div');
    interactionEl.className = 'quiz-interaction';

    if (ex.type === 'blank' || ex.type === 'transform') {
      interactionEl.innerHTML = `<input type="text" id="g-input" class="quiz-input" placeholder="Ta réponse..." autocomplete="off">`;
    } else if (ex.type === 'mcq') {
      interactionEl.className = 'qcm-options';
      ex.options.forEach(opt => {
        const btn = document.createElement('button');
        btn.className = 'qcm-option';
        btn.textContent = opt;
        btn.onclick = () => window.handleGrammarSubmit(opt);
        interactionEl.appendChild(btn);
      });
    } else if (ex.type === 'reorder') {
      interactionEl.innerHTML = `
        <div id="reorder-zone" class="reorder-zone"></div>
        <div class="token-pool">
          ${Shared.shuffle(ex.tokens).map(t => `<button class="reorder-token" onclick="GrammarUI.toggleToken(this)">${t}</button>`).join('')}
        </div>
        <div style="margin-top:20px"><button class="btn btn-ghost btn-sm" onclick="GrammarUI.resetReorder()">Réinitialiser</button></div>
      `;
    } else if (ex.type === 'error') {
      const sent = document.createElement('div');
      sent.className = 'error-sentence';
      ex.prompt.split(' ').forEach(w => {
        const span = document.createElement('span');
        span.className = 'error-word'; span.textContent = w + ' ';
        span.onclick = () => {
          document.querySelectorAll('.error-word').forEach(s => s.classList.remove('selected'));
          span.classList.add('selected');
          GrammarEngine.session.errorSelected = w.replace(/[.,!?;]$/, '');
          document.getElementById('error-correction-zone').style.display = 'block';
          document.getElementById('g-input').focus();
        };
        sent.appendChild(span);
      });
      interactionEl.appendChild(sent);
      const corrZone = document.createElement('div');
      corrZone.id = 'error-correction-zone'; corrZone.style.display = 'none';
      corrZone.innerHTML = `<p class="muted">Quelle est la correction ?</p><input type="text" id="g-input" class="quiz-input" style="max-width:300px">`;
      interactionEl.appendChild(corrZone);
    }

    container.appendChild(interactionEl);
    const focusInput = document.getElementById('g-input');
    if (focusInput) focusInput.focus();
  },

  toggleToken(btn) {
    const zone = document.getElementById('reorder-zone');
    if (!zone) return;
    if (btn.classList.contains('used')) {
      btn.classList.remove('used');
      const clones = Array.from(zone.children);
      const target = clones.find(c => c.textContent === btn.textContent);
      if (target) target.remove();
    } else {
      btn.classList.add('used');
      const clone = document.createElement('span');
      clone.className = 'pill pill-amber';
      clone.textContent = btn.textContent;
      clone.style.margin = '4px';
      zone.appendChild(clone);
    }
  },

  resetReorder() {
    const zone = document.getElementById('reorder-zone');
    if (zone) zone.innerHTML = '';
    document.querySelectorAll('.reorder-token').forEach(t => t.classList.remove('used'));
  },

  getReorderValue() {
    const zone = document.getElementById('reorder-zone');
    if (!zone) return '';
    return Array.from(zone.children)
                .map(c => c.textContent).join(' ');
  }
};

window.GrammarEngine = GrammarEngine;