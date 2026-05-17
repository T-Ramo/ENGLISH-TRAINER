/* ============================================================
   CONJUGATION ENGINE — quiz logic, conjugation rules, scoring
   ============================================================ */

const ConjEngine = {

  session: null,

  MODES: {
    forms: {
      key: 'forms',
      label: 'Forms',
      icon: '✦',
      desc: 'Donne les 3 formes d\'un verbe irrégulier (base / prétérit / participe passé).',
      eyebrow: 'Verbes irréguliers',
      basePoints: 5,       // par forme correcte ; +15 bonus si les 3 sont bonnes
      sessionSize: 15,
      usesTimer: false,
    },
    conjugate: {
      key: 'conjugate',
      label: 'Conjugate',
      icon: '⌨',
      desc: 'Complète la phrase avec le verbe conjugué au temps demandé.',
      eyebrow: 'Temps & formes',
      basePoints: 8,
      sessionSize: 15,
      usesTimer: true,
      timerMs: 12000,
    },
    recognition: {
      key: 'recognition',
      label: 'Recognition',
      icon: '?',
      desc: 'Identifie le temps verbal utilisé dans la phrase (QCM à 4 choix).',
      eyebrow: 'Identification des temps',
      basePoints: 6,
      sessionSize: 12,
      usesTimer: false,
    },
    transformation: {
      key: 'transformation',
      label: 'Transform',
      icon: '↔',
      desc: 'Reformule la phrase : affirmatif→négatif ou actif→passif.',
      eyebrow: 'Transformation',
      basePoints: 12,
      sessionSize: 10,
      usesTimer: true,
      timerMs: 20000,
    },
    conditional: {
      key: 'conditional',
      label: 'Conditional',
      icon: '⊛',
      desc: 'Complète les deux membres d\'une phrase conditionnelle.',
      eyebrow: 'Conditionnels 0-1-2-3',
      basePoints: 10,
      sessionSize: 10,
      usesTimer: false,
    },
  },

  // ================================================================
  // HELPERS DE CONJUGAISON
  // ================================================================

  /* Gérondif : run→running, write→writing, study→studying, die→dying */
  toGerund(base) {
    const b = base.toLowerCase().replace(/^to\s+/, '');
    if (b.endsWith('ie')) return b.slice(0, -2) + 'ying';
    if (b.endsWith('ee') || b.endsWith('oe') || b.endsWith('ye')) return b + 'ing';
    if (b.endsWith('e') && !b.endsWith('ee') && b.length > 2) return b.slice(0, -1) + 'ing';
    // CVC doubling : consonant + vowel + single consonant (not w, x, y)
    if (/[^aeiou][aeiou][bcdfghjklmnprstvz]$/.test(b)) return b + b.slice(-1) + 'ing';
    return b + 'ing';
  },

  /* 3e personne du singulier au présent simple */
  toThirdPerson(base) {
    const b = base.toLowerCase();
    if (b === 'be')   return 'is';
    if (b === 'have') return 'has';
    if (b === 'do')   return 'does';
    if (b === 'go')   return 'goes';
    if (/[sxz]$/.test(b) || /[cs]h$/.test(b)) return b + 'es';
    if (/[^aeiou]y$/.test(b)) return b.slice(0, -1) + 'ies';
    return b + 's';
  },

  /* Passé simple régulier : work→worked, stop→stopped, study→studied, plan→planned */
  regularPast(base) {
    const b = base.toLowerCase();
    if (b.endsWith('e')) return b + 'd';
    if (/[^aeiou]y$/.test(b)) return b.slice(0, -1) + 'ied';
    // CVC doubling : consonant + vowel + single consonant (not w, x, y)
    if (/[^aeiou][aeiou][bcdfghjklmnprstvz]$/.test(b)) return b + b.slice(-1) + 'ed';
    return b + 'ed';
  },

  /* Auxiliaire be selon la personne */
  auxBe(person, past) {
    const p = person.toLowerCase();
    if (past) return (p === 'i' || p === 'he' || p === 'she' || p === 'it') ? 'was' : 'were';
    return p === 'i' ? 'am' : (p === 'he' || p === 'she' || p === 'it') ? 'is' : 'are';
  },

  /* Auxiliaire have selon la personne */
  auxHave(person) {
    const p = person.toLowerCase();
    return (p === 'he' || p === 'she' || p === 'it') ? 'has' : 'have';
  },

  /*
   * conjugate(verb, tense, person)
   * verb   : { base, past?, pp? }  (past peut valoir 'was/were' pour 'be')
   * tense  : clé de TENSES ou 'would-base' / 'would-have-pp'
   * person : 'I'|'you'|'he'|'she'|'it'|'we'|'they' ou sujet nominal
   * Retourne la forme verbale complète (auxiliaire inclus si besoin).
   */
  conjugate(verb, tense, person) {
    const base  = verb.base.toLowerCase().replace(/^to\s+/, '');
    const pp    = verb.pp ? verb.pp.split('/')[0].toLowerCase() : this.regularPast(base);
    const rawPast = verb.past || this.regularPast(base);
    // 'was/were' : choisir selon la personne
    let past;
    if (rawPast === 'was/were') {
      past = this.auxBe(person, true);
    } else {
      past = rawPast.split('/')[0].toLowerCase();
    }
    const gerund  = this.toGerund(base);
    const third   = this.toThirdPerson(base);
    const p       = (person || 'I').toLowerCase();
    const is3rd   = ['he','she','it'].includes(p);

    switch (tense) {
      case 'simple-present':
        if (base === 'be') return this.auxBe(person, false);
        return is3rd ? third : base;

      case 'simple-past':
        return past;

      case 'simple-future':
        return 'will ' + base;

      case 'present-continuous':
        return this.auxBe(person, false) + ' ' + gerund;

      case 'past-continuous':
        return this.auxBe(person, true) + ' ' + gerund;

      case 'future-continuous':
        return 'will be ' + gerund;

      case 'present-perfect':
        return this.auxHave(person) + ' ' + pp;

      case 'past-perfect':
        return 'had ' + pp;

      case 'future-perfect':
        return 'will have ' + pp;

      case 'present-perfect-continuous':
        return this.auxHave(person) + ' been ' + gerund;

      case 'past-perfect-continuous':
        return 'had been ' + gerund;

      case 'passive-present': {
        // V3 seul, l'auxiliaire dépend du sujet grammatical de la phrase
        return this.auxBe(person, false) + ' ' + pp;
      }

      case 'passive-past':
        return this.auxBe(person, true) + ' ' + pp;

      case 'used-to':
        return 'used to ' + base;

      // Modes conditionnels
      case 'would-base':
        return 'would ' + base;

      case 'would-have-pp':
        return 'would have ' + pp;

      default:
        return base;
    }
  },

  /* Lookup d'un verbe par id dans IRREGULAR ou REGULAR */
  findVerb(id) {
    return IRREGULAR_VERBS.find(v => v.id === id)
        || REGULAR_VERBS.find(v => v.id === id)
        || null;
  },

  /* Clé SRS pour une paire verbe + temps */
  cardKey(verbId, tense) {
    return verbId + '::' + tense;
  },

  // ================================================================
  // CONSTRUCTION DES FILES (queues)
  // ================================================================

  buildFormsQueue(tier, size) {
    let pool = IRREGULAR_VERBS.slice();
    if (tier) pool = pool.filter(v => v.tier === parseInt(tier, 10));
    return Shared.shuffle(pool).slice(0, size);
  },

  buildConjugateQueue(selectedTenses, size) {
    const tenseKeys = selectedTenses.length ? selectedTenses : Object.keys(TENSES);
    const pool = [];
    const allVerbs = IRREGULAR_VERBS.concat(REGULAR_VERBS);
    for (const tk of tenseKeys) {
      const templates = SENTENCE_TEMPLATES[tk] || [];
      for (const tmpl of templates) {
        for (const person of tmpl.persons) {
          const verb = Shared.shuffle(allVerbs)[0];
          pool.push({ tense: tk, template: tmpl.tpl, person, verb });
        }
      }
    }
    return Shared.shuffle(pool).slice(0, size);
  },

  buildRecognitionQueue(selectedTenses, size) {
    let pool = RECOGNITION_SENTENCES.slice();
    if (selectedTenses.length) {
      pool = pool.filter(s => selectedTenses.includes(s.tense));
    }
    return Shared.shuffle(pool).slice(0, size);
  },

  buildTransformQueue(subtype, size) {
    const source = TRANSFORMATION_EXERCISES[subtype] || TRANSFORMATION_EXERCISES['affirmative-to-negative'];
    return Shared.shuffle(source).slice(0, size);
  },

  buildConditionalQueue(condType, size) {
    let pool = CONDITIONAL_EXERCISES.slice();
    if (condType && condType !== 'mix') pool = pool.filter(e => e.type === condType);
    return Shared.shuffle(pool).slice(0, size);
  },

  /* File SRS : priorité aux paires dues, puis non vues */
  buildSRSQueue(size) {
    const now = Date.now();
    const due = [], unseen = [], low = [];
    for (const v of IRREGULAR_VERBS) {
      for (const tk of Object.keys(TENSES)) {
        const key = this.cardKey(v.id, tk);
        const c = Storage.getConjCard(key);
        if (!c) { unseen.push({ verb: v, tense: tk, key }); continue; }
        if (c.nextDueAt && c.nextDueAt <= now) due.push({ verb: v, tense: tk, key, card: c });
        else if (c.correct < 3) low.push({ verb: v, tense: tk, key, card: c });
      }
    }
    const list = [
      ...Shared.shuffle(due),
      ...Shared.shuffle(unseen),
      ...Shared.shuffle(low),
    ];
    return list.slice(0, size);
  },

  // ================================================================
  // SESSION
  // ================================================================

  startSession({ mode, options = {} }) {
    const m = this.MODES[mode];
    if (!m) throw new Error('Mode inconnu : ' + mode);
    let queue;
    switch (mode) {
      case 'forms':
        queue = this.buildFormsQueue(options.tier, m.sessionSize);
        break;
      case 'conjugate':
        queue = this.buildConjugateQueue(options.tenses || [], m.sessionSize);
        break;
      case 'recognition':
        queue = this.buildRecognitionQueue(options.tenses || [], m.sessionSize);
        break;
      case 'transformation':
        queue = this.buildTransformQueue(options.subtype || 'affirmative-to-negative', m.sessionSize);
        break;
      case 'conditional':
        queue = this.buildConditionalQueue(options.condType || 'mix', m.sessionSize);
        break;
    }
    if (!queue || queue.length === 0) throw new Error('Aucun exercice disponible avec ces filtres.');

    this.session = {
      mode: m,
      options,
      queue,
      index: 0,
      results: [],
      streak: 0,
      points: 0,
      startedAt: Date.now(),
      currentStart: Date.now(),
      hintsUsed: 0,
      timerHandle: null,
    };
    return this.session;
  },

  current() {
    return this.session ? this.session.queue[this.session.index] || null : null;
  },

  next() {
    if (!this.session) return null;
    this.session.index += 1;
    this.session.hintsUsed = 0;
    this.session.currentStart = Date.now();
    return this.current();
  },

  isFinished() {
    return !this.session || this.session.index >= this.session.queue.length;
  },

  // ================================================================
  // SCORING
  // ================================================================

  computePoints(basePoints, ok, timeMs) {
    if (!ok) { this.session.streak = 0; return 0; }
    let pts = basePoints;
    pts -= this.session.hintsUsed * 2;
    // Speed bonus: <8s
    if (this.session.mode.usesTimer && timeMs < 8000) pts += 3;
    this.session.streak += 1;
    if (this.session.streak >= 5) pts = Math.round(pts * 1.5);
    return Math.max(1, pts);
  },

  /*
   * submitForms({ past, pp }) — mode 1
   * Retourne { pastOk, ppOk, allOk, pointsEarned }
   */
  submitForms(userPast, userPP) {
    const verb = this.current();
    const timeMs = Date.now() - this.session.currentStart;
    const pastOk = Shared.matchAnswer(userPast, verb.past).ok;
    const ppOk   = Shared.matchAnswer(userPP,   verb.pp).ok;
    const allOk  = pastOk && ppOk;

    let pts = 0;
    if (pastOk) pts += this.session.mode.basePoints;
    if (ppOk)   pts += this.session.mode.basePoints;
    if (allOk)  pts += 15; // bonus triple
    pts -= this.session.hintsUsed * 2;
    this.session.streak = allOk ? this.session.streak + 1 : 0;
    if (allOk && this.session.streak >= 5) pts = Math.round(pts * 1.5);
    pts = Math.max(0, pts);

    this.session.points += pts;
    this.session.results.push({ verb, userPast, userPP, pastOk, ppOk, allOk, pointsEarned: pts });
    this.updateCardSRS(this.cardKey(verb.id, 'forms'), allOk);
    return { pastOk, ppOk, allOk, pointsEarned: pts, verb };
  },

  /* submitConjugate(userInput) — mode 2 */
  submitConjugate(userInput) {
    const item = this.current();
    const expected = this.conjugate(item.verb, item.tense, item.person);
    const { ok, near } = Shared.matchAnswer(userInput, expected);
    const timeMs = Date.now() - this.session.currentStart;
    const pts = this.computePoints(this.session.mode.basePoints, ok, timeMs);
    this.session.points += pts;
    this.session.results.push({ item, userInput, expected, ok, near, pointsEarned: pts });
    this.updateCardSRS(this.cardKey(item.verb.id, item.tense), ok);
    return { ok, near, pointsEarned: pts, expected };
  },

  /* submitRecognition(selectedTense) — mode 3 */
  submitRecognition(selectedTense) {
    const item  = this.current();
    const ok    = selectedTense === item.tense;
    const timeMs = Date.now() - this.session.currentStart;
    const pts   = this.computePoints(this.session.mode.basePoints, ok, timeMs);
    this.session.points += pts;
    this.session.results.push({ item, selectedTense, ok, pointsEarned: pts });
    return { ok, pointsEarned: pts, correctTense: item.tense };
  },

  /* submitTransformation(userInput) — mode 4 */
  submitTransformation(userInput) {
    const item  = this.current();
    const { ok, near } = Shared.matchAnswer(userInput, item.answer);
    const timeMs = Date.now() - this.session.currentStart;
    const pts   = this.computePoints(this.session.mode.basePoints, ok, timeMs);
    this.session.points += pts;
    this.session.results.push({ item, userInput, ok, near, pointsEarned: pts });
    return { ok, near, pointsEarned: pts, expected: item.answer };
  },

  /* submitConditional({ ifAnswer, mainAnswer }) — mode 5 */
  submitConditional(userIf, userMain) {
    const item   = this.current();
    const ifOk   = Shared.matchAnswer(userIf,   item.ifAnswer).ok;
    const mainOk = Shared.matchAnswer(userMain, item.mainAnswer).ok;
    const allOk  = ifOk && mainOk;
    const timeMs = Date.now() - this.session.currentStart;
    let pts = this.computePoints(this.session.mode.basePoints, allOk, timeMs);
    if (ifOk && !mainOk) pts = Math.max(1, Math.round(this.session.mode.basePoints / 2));
    this.session.points += pts;
    this.session.results.push({ item, userIf, userMain, ifOk, mainOk, allOk, pointsEarned: pts });
    return { ifOk, mainOk, allOk, pointsEarned: pts, item };
  },

  // ================================================================
  // SRS (SM-2 simplifié — même algo que vocab)
  // ================================================================

  updateCardSRS(key, ok) {
    const c = Storage.getConjCard(key) || { seen: 0, correct: 0, wrong: 0, ease: 2.5, intervalDays: 0 };
    c.seen = (c.seen || 0) + 1;
    c.lastSeenAt = Date.now();
    if (ok) {
      c.correct = (c.correct || 0) + 1;
      const q = this.session.hintsUsed === 0 ? 5 : 3;
      c.ease = Math.max(1.3, (c.ease || 2.5) + (0.1 - (5 - q) * (0.08 + (5 - q) * 0.02)));
      if (c.correct === 1) c.intervalDays = 1;
      else if (c.correct === 2) c.intervalDays = 3;
      else c.intervalDays = Math.round((c.intervalDays || 1) * c.ease);
    } else {
      c.wrong = (c.wrong || 0) + 1;
      c.intervalDays = 0;
      c.ease = Math.max(1.3, (c.ease || 2.5) - 0.2);
    }
    c.nextDueAt = Date.now() + c.intervalDays * 86400000;
    Storage.upsertConjCard(key, c);
  },

  // ================================================================
  // FIN DE SESSION
  // ================================================================

  finishSession() {
    if (!this.session) return null;
    const results = this.session.results;
    const correctCount = results.filter(r => r.ok || r.allOk).length;
    const total = results.length;

    Storage.addPoints(this.session.points);
    Storage.registerActivity();

    // Historique
    Storage.state.conj.history.push({
      date:    new Date().toISOString().slice(0, 10),
      mode:    this.session.mode.key,
      correct: correctCount,
      total,
      points:  this.session.points,
    });
    Storage.save();

    this.checkBadges(correctCount, total);

    const durationS = Math.round((Date.now() - this.session.startedAt) / 1000);
    // Calcul du meilleur streak dans les résultats
    let maxStreak = 0, cur = 0;
    for (const r of results) {
      if (r.ok || r.allOk) { cur++; maxStreak = Math.max(maxStreak, cur); } else cur = 0;
    }

    const missed = results.filter(r => !(r.ok || r.allOk));

    const summary = {
      mode:           this.session.mode.label,
      total,
      correct:        correctCount,
      points:         this.session.points,
      durationS,
      streakAchieved: maxStreak,
      missed,
    };

    this.session = null;
    return summary;
  },

  // ================================================================
  // BADGES
  // ================================================================

  checkBadges(correctInSession, total) {
    const cards = Storage.state.conj.cards;

    // 50 verbes irréguliers maîtrisés (mode Forms)
    const masteredForms = IRREGULAR_VERBS.filter(v => {
      const c = cards[this.cardKey(v.id, 'forms')];
      return c && c.correct >= 3;
    }).length;
    if (masteredForms >= 50  && !Storage.hasBadge('conj-irreg-50'))  Storage.awardBadge('conj-irreg-50');
    if (masteredForms >= IRREGULAR_VERBS.length && !Storage.hasBadge('conj-irreg-all')) Storage.awardBadge('conj-irreg-all');

    // 100% sur session conditionnelle de 10+
    if (this.session && this.session.mode.key === 'conditional' &&
        correctInSession === total && total >= 10 &&
        !Storage.hasBadge('conditional-pro')) {
      Storage.awardBadge('conditional-pro');
    }

    // Maîtrise d'un temps : 90%+ sur 20 questions
    const tenseStats = {};
    for (const [key, c] of Object.entries(cards)) {
      const parts = key.split('::');
      if (parts.length < 2) continue;
      const tk = parts[1];
      if (!tenseStats[tk]) tenseStats[tk] = { correct: 0, total: 0 };
      tenseStats[tk].total   += (c.seen || 0);
      tenseStats[tk].correct += (c.correct || 0);
    }
    for (const [tk, s] of Object.entries(tenseStats)) {
      if (s.total >= 20 && s.correct / s.total >= 0.9) {
        const bid = 'conj-tense-master-' + tk;
        if (!Storage.hasBadge(bid)) Storage.awardBadge(bid);
        if (!Storage.hasBadge('conj-tense-master')) Storage.awardBadge('conj-tense-master');
      }
    }

    // Modaux : 10 modaux avec correct >= 3
    const masteredModals = MODALS.filter(m => {
      const c = cards[this.cardKey(m.id, 'recognition')];
      return c && c.correct >= 3;
    }).length;
    if (masteredModals >= 10 && !Storage.hasBadge('modal-pro')) Storage.awardBadge('modal-pro');
  },

  // ================================================================
  // INDICE (mode Forms)
  // ================================================================

  getHint(field) {
    const verb = this.current();
    if (!verb) return '';
    this.session.hintsUsed += 1;
    const answer = field === 'past' ? verb.past.split('/')[0] : verb.pp.split('/')[0];
    const chars = answer.split('');
    return chars.map((ch, i) => {
      if (ch === ' ' || ch === "'" || ch === '-') return ch;
      if (i === 0) return ch;
      if (i <= this.session.hintsUsed) return ch;
      return '·';
    }).join('');
  },

  // ================================================================
  // HELPERS UI
  // ================================================================

  /* Génère 3 mauvaises réponses pour le mode Recognition (QCM) */
  buildRecognitionOptions(correctTense) {
    const all = Object.keys(TENSES);
    const wrong = Shared.shuffle(all.filter(k => k !== correctTense)).slice(0, 3);
    return Shared.shuffle([correctTense, ...wrong]);
  },

  /* Résoud le template de phrase pour le mode Conjugate */
  buildConjugateSentence(item) {
    const conjugated = this.conjugate(item.verb, item.tense, item.person);
    const subjDisplay = this.capitalizeFirst(item.person);
    // Phrase avec trou
    const withBlank = item.template
      .replace('{S}', subjDisplay)
      .replace('{V}', `_____ (${item.verb.fr})`);
    // Phrase corrigée
    const withAnswer = item.template
      .replace('{S}', subjDisplay)
      .replace('{V}', conjugated);
    return { withBlank, withAnswer, conjugated, subject: subjDisplay };
  },

  capitalizeFirst(s) {
    if (!s) return '';
    return s.charAt(0).toUpperCase() + s.slice(1);
  },

  /* Stats de maîtrise des verbes irréguliers */
  getIrregularStats() {
    const cards = Storage.state.conj.cards;
    let mastered = 0;
    for (const v of IRREGULAR_VERBS) {
      const c = cards[this.cardKey(v.id, 'forms')];
      if (c && c.correct >= 3 && c.intervalDays >= 7) mastered++;
    }
    return { mastered, total: IRREGULAR_VERBS.length };
  },
};

window.ConjEngine = ConjEngine;
