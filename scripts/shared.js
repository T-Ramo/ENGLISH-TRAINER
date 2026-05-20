/* ============================================================
   SHARED — Topbar render, speech, string comparison, helpers
   ============================================================ */

const Shared = {
  // ----- Topbar -----
  renderTopbar(activeRoute = '') {
    const slot = document.getElementById('topbar-slot');
    if (!slot) return;
    const st = Storage.state;
    slot.innerHTML = `
      <div class="topbar">
        <div class="topbar-inner">
          <a href="index.html" class="logo" id="main-logo">
            <span class="logo-mark">E</span>
            <span class="logo-text">English Trainer</span>
          </a>
          <nav class="nav">
            <a href="index.html" data-route="home">Accueil</a>
            <a href="vocabulary.html" data-route="vocab">Vocabulaire</a>
            <a href="grammar.html" data-route="grammar">Grammaire</a>
            <a href="conjugation.html" data-route="conj">Conjugaison</a>
            <a href="comprehension.html" data-route="comprehension">Compréhension</a>
            <a href="toeic.html" data-route="toeic">TOEIC</a>
            <a href="stats.html" data-route="stats">Stats</a>
          </nav>
          <div class="user-stats">
            <div class="user-stat" title="Points totaux">
              <span class="user-stat-icon">◆</span>
              <span class="user-stat-val">${st.points.toLocaleString('fr-FR')}</span>
            </div>
            <div class="user-stat" title="Série de jours consécutifs">
              <span class="user-stat-icon">🔥</span>
              <span class="user-stat-val">${st.streak.current}j</span>
            </div>
          </div>
        </div>
      </div>
    `;
    // Activate nav link
    if (activeRoute) {
      const active = slot.querySelector(`[data-route="${activeRoute}"]`);
      if (active) active.classList.add('active');
    }
  },

  renderFooter() {
    const slot = document.getElementById('footer-slot');
    if (!slot) return;
    slot.innerHTML = `
      <footer class="footer">
        <div class="container">
          English Trainer · Outil personnel d'apprentissage · v1.0
        </div>
      </footer>
    `;
  },

  // ----- Speech synthesis -----
  speak(text, opts = {}) {
    if (!('speechSynthesis' in window)) return;
    try {
      window.speechSynthesis.cancel();
      const u = new SpeechSynthesisUtterance(text);
      u.lang = opts.lang || Storage.state.settings.voice || 'en-US';
      u.rate = opts.rate || Storage.state.settings.voiceRate || 0.95;
      u.pitch = opts.pitch || 1;
      // try to pick a US english voice
      const voices = window.speechSynthesis.getVoices();
      const preferred = voices.find(v => /en[-_]US/i.test(v.lang)) || voices.find(v => /^en/i.test(v.lang));
      if (preferred) u.voice = preferred;
      window.speechSynthesis.speak(u);
    } catch (e) { console.warn(e); }
  },

  // ----- String compare with tolerance -----
  normalize(s) {
    return (s || '')
      .toLowerCase()
      .normalize('NFD').replace(/[\u0300-\u036f]/g, '') // strip accents
      .replace(/^to\s+/, '') // strip leading "to " for verbs
      .replace(/[^a-z0-9\s'-]/g, '')
      .replace(/\s+/g, ' ')
      .trim();
  },

  // Damerau-Levenshtein (counts adjacent transpositions as 1 op)
  editDistance(a, b) {
    if (a === b) return 0;
    const m = a.length, n = b.length;
    if (!m) return n; if (!n) return m;
    const dp = Array.from({ length: m + 1 }, () => new Array(n + 1));
    for (let i = 0; i <= m; i++) dp[i][0] = i;
    for (let j = 0; j <= n; j++) dp[0][j] = j;
    for (let i = 1; i <= m; i++) {
      for (let j = 1; j <= n; j++) {
        const c = a[i - 1] === b[j - 1] ? 0 : 1;
        dp[i][j] = Math.min(dp[i - 1][j] + 1, dp[i][j - 1] + 1, dp[i - 1][j - 1] + c);
        if (i > 1 && j > 1 && a[i - 1] === b[j - 2] && a[i - 2] === b[j - 1]) {
          dp[i][j] = Math.min(dp[i][j], dp[i - 2][j - 2] + 1);
        }
      }
    }
    return dp[m][n];
  },

  // Accept multiple correct answers (separated by /) and minor typos
  matchAnswer(user, expected) {
    const u = this.normalize(user);
    if (!u) return { ok: false, near: false };
    const candidates = expected.split('/').map(s => this.normalize(s));
    let best = Infinity;
    let exact = false;
    for (const c of candidates) {
      if (u === c) { exact = true; break; }
      const d = this.editDistance(u, c);
      if (d < best) best = d;
    }
    if (exact) return { ok: true, near: false };
    // tolerate typos based on word length
    const expectedLen = Math.max(...candidates.map(c => c.length));
    const tol = expectedLen >= 8 ? 2 : expectedLen >= 4 ? 1 : 0;
    if (best <= tol) return { ok: true, near: true };
    return { ok: false, near: false };
  },

  // ----- Misc -----
  shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  },

  formatNum(n) { return n.toLocaleString('fr-FR'); },
};

window.Shared = Shared;

// Make sure voices are loaded (some browsers load them async)
if ('speechSynthesis' in window) {
  window.speechSynthesis.getVoices();
  window.speechSynthesis.onvoiceschanged = () => window.speechSynthesis.getVoices();
}
