/* ============================================================
   COMPREHENSION ENGINE — Listening & Reading sessions
   ============================================================ */

// Change this to your Cloudflare R2 public URL once audios are uploaded.
// For local testing: keep the DownloadMP3 path below.
const AUDIO_BASE_URL = 'https://pub-a6b3be47c48b4a7ead36a1523f3af9f9.r2.dev/audio';
// Local fallback: './DownloadMP3/ello_b2'

const SECTION_LABELS = {
  level_b2:  'Level B2',
  level6:    'Level 6',
  level7:    'Level 7',
  mixer:     'Mixer',
  mixer001:  'Mixer 001',
  mixer026:  'Mixer 026',
  mixer051:  'Mixer 051',
  mixer076:  'Mixer 076',
  mixer101:  'Mixer 101',
  views_b2:  'Views B2',
  views_c1:  'Views C1',
  views_c1b: 'Views C1+',
};

const GENRE_LABELS = {
  email:   'E-mail',
  notice:  'Notice',
  article: 'Article',
  memo:    'Mémo',
  ad:      'Publicité',
  report:  'Rapport',
};

const LEVEL_LABELS = { 1: 'B1', 2: 'B2', 3: 'C1' };

const ComprehensionEngine = {
  session: null,

  // ----- Data helpers -----

  getAudioList(filters = {}) {
    let list = typeof COMPREHENSION_AUDIO !== 'undefined' ? COMPREHENSION_AUDIO : [];
    if (filters.section && filters.section !== 'all') {
      list = list.filter(e => e.section === filters.section);
    }
    // Only keep entries that have at least one question
    list = list.filter(e => e.questions && e.questions.length > 0);
    return list;
  },

  getReadingList(filters = {}) {
    let list = typeof COMPREHENSION_READING !== 'undefined' ? COMPREHENSION_READING : [];
    if (filters.level && filters.level !== 'all') {
      list = list.filter(e => e.level === parseInt(filters.level));
    }
    if (filters.genre && filters.genre !== 'all') {
      list = list.filter(e => e.genre === filters.genre);
    }
    return list;
  },

  audioUrl(audioPath) {
    return AUDIO_BASE_URL + '/' + audioPath;
  },

  getAudioSections() {
    const list = typeof COMPREHENSION_AUDIO !== 'undefined' ? COMPREHENSION_AUDIO : [];
    const sections = [...new Set(list.map(e => e.section))];
    return sections;
  },

  getReadingGenres() {
    const list = typeof COMPREHENSION_READING !== 'undefined' ? COMPREHENSION_READING : [];
    return [...new Set(list.map(e => e.genre))];
  },

  // ----- Session management -----

  startSession({ type, filters = {}, count = 5 }) {
    let pool;
    if (type === 'listening') {
      pool = Shared.shuffle(this.getAudioList(filters));
    } else {
      pool = Shared.shuffle(this.getReadingList(filters));
    }

    // Prioritise exercises not seen recently (simple SRS)
    const now = Date.now();
    pool.sort((a, b) => {
      const ca = Storage.getComprehensionCard(a.id);
      const cb = Storage.getComprehensionCard(b.id);
      const dueA = ca && ca.nextDueAt ? ca.nextDueAt : 0;
      const dueB = cb && cb.nextDueAt ? cb.nextDueAt : 0;
      return dueA - dueB;
    });

    const queue = pool.slice(0, count);

    this.session = {
      type,
      queue,
      index: 0,
      results: [],       // { exerciseId, questionResults: [{qId, ok, pts}] }
      totalPoints: 0,
      startedAt: Date.now(),
    };
    return this.session;
  },

  current() {
    return this.session ? this.session.queue[this.session.index] : null;
  },

  // Submit answers for all questions of the current exercise at once.
  // answers: { [questionId]: "A"|"B"|"C"|"D" }
  submitExercise(answers) {
    const ex = this.current();
    if (!ex) return null;

    const questionResults = ex.questions.map(q => {
      const given = answers[q.id];
      const ok = given === q.correct;
      const pts = ok ? 10 : 0;
      return { qId: q.id, given, ok, pts, explanation: q.explanation, correct: q.correct };
    });

    const exPoints = questionResults.reduce((s, r) => s + r.pts, 0);
    this.session.totalPoints += exPoints;
    this.session.results.push({ exerciseId: ex.id, questionResults, exPoints });

    const correctCount = questionResults.filter(r => r.ok).length;
    this._updateSRS(ex.id, correctCount, ex.questions.length);

    return { questionResults, exPoints };
  },

  next() {
    if (this.session) this.session.index++;
  },

  isLast() {
    return this.session && this.session.index >= this.session.queue.length - 1;
  },

  finish() {
    if (!this.session) return null;
    const s = this.session;

    let totalCorrect = 0, totalQuestions = 0;
    s.results.forEach(r => {
      totalCorrect += r.questionResults.filter(q => q.ok).length;
      totalQuestions += r.questionResults.length;
    });

    const accuracy = totalQuestions > 0 ? Math.round((totalCorrect / totalQuestions) * 100) : 0;

    Storage.addPoints(s.totalPoints);
    Storage.registerActivity();
    Storage.pushComprehensionHistory({
      date: new Date().toISOString().slice(0, 10),
      type: s.type,
      correct: totalCorrect,
      total: totalQuestions,
      points: s.totalPoints,
    });

    if (accuracy === 100) Storage.awardBadge('comp-perfect');
    if (s.type === 'listening') {
      const total = Storage.state.comprehension.history.filter(h => h.type === 'listening').length;
      if (total >= 10) Storage.awardBadge('comp-listener-10');
      if (total >= 50) Storage.awardBadge('comp-listener-50');
    }

    return { totalCorrect, totalQuestions, accuracy, points: s.totalPoints };
  },

  _updateSRS(exerciseId, correctCount, totalQuestions) {
    const ratio = totalQuestions > 0 ? correctCount / totalQuestions : 0;
    const ok = ratio >= 0.67;
    const card = Storage.getComprehensionCard(exerciseId) || {
      seen: 0, correct: 0, wrong: 0, ease: 2.5, intervalDays: 0,
    };
    card.seen++;
    card.lastSeenAt = Date.now();
    if (ok) {
      card.correct++;
      card.ease = Math.min(3.0, card.ease + 0.1);
      card.intervalDays = card.intervalDays === 0 ? 1 : Math.round(card.intervalDays * card.ease);
    } else {
      card.wrong++;
      card.ease = Math.max(1.3, card.ease - 0.2);
      card.intervalDays = 0;
    }
    card.nextDueAt = card.intervalDays > 0
      ? Date.now() + card.intervalDays * 86400000
      : Date.now();
    Storage.upsertComprehensionCard(exerciseId, card);
  },

  // ----- Stats -----

  getStats() {
    const hist = (Storage.state.comprehension && Storage.state.comprehension.history) || [];
    const listening = hist.filter(h => h.type === 'listening');
    const reading   = hist.filter(h => h.type === 'reading');

    function acc(arr) {
      const tot = arr.reduce((s, h) => s + h.total, 0);
      const cor = arr.reduce((s, h) => s + h.correct, 0);
      return tot > 0 ? Math.round((cor / tot) * 100) : null;
    }

    return {
      listeningSessionsTotal: listening.length,
      listeningAccuracy: acc(listening),
      readingSessionsTotal: reading.length,
      readingAccuracy: acc(reading),
      totalPoints: hist.reduce((s, h) => s + h.points, 0),
    };
  },
};
