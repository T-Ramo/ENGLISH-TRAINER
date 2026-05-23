# English Trainer

Un site personnel d'apprentissage de l'anglais (niveau B1 → C1, objectif TOEIC). 100% statique, pas de serveur, pas de framework, pas de build. Toute la progression est sauvegardée en `localStorage` dans le navigateur.

**Production :** déployé sur Cloudflare Workers.

---

## Déploiement

```bash
npx wrangler deploy
```

Ou manuellement : pusher le code sur le repo, le worker Cloudflare prend en charge la livraison statique.

---

## Structure des fichiers

```
english-trainer/
├── index.html              ← Dashboard (accueil)
├── vocabulary.html         ← Module 01 — Vocabulaire
├── grammar.html            ← Module 02 — Grammaire
├── conjugation.html        ← Module 03 — Conjugaison
├── comprehension.html      ← Module 04 — Lecture & Écoute
├── toeic.html              ← Module 05 — Tests TOEIC
├── stats.html              ← Module 06 — Statistiques
├── data/
│   ├── vocab.js                  ← 2999 mots (Tier 1/2/3)
│   ├── grammar.js                ← 21 leçons, 535 exercices
│   ├── conjugation.js            ← 202 verbes, 14 temps
│   ├── comprehension-reading.js  ← 300 textes de lecture
│   ├── comprehension-audio.js    ← 304 exercices audio
│   └── toeic-tests.js            ← 5 tests × 100 questions
├── scripts/
│   ├── storage.js          ← Persistance centralisée (localStorage)
│   ├── shared.js           ← Topbar, footer, helpers communs
│   ├── vocab-engine.js     ← Moteur vocabulaire (SRS SM-2, scoring)
│   ├── grammar-engine.js   ← Moteur grammaire (5 types, SRS, diagnostic)
│   ├── conj-engine.js      ← Moteur conjugaison (14 temps, SRS)
│   └── comprehension-engine.js ← Moteur lecture/écoute
└── styles/
    ├── main.css            ← Design system (variables, typographie)
    ├── home.css, vocab.css, grammar.css, conjugation.css
    ├── comprehension.css, toeic.css, stats.css
    └── animations.css
```

---

## Modules

| # | Module | Contenu |
|---|--------|---------|
| 01 | Vocabulaire | 2999 mots (Tier 1/2/3), 3 modes (Découverte, Challenge, SRS), audio TTS, répétition espacée |
| 02 | Grammaire | 21 leçons, 535 exercices (MCQ, texte à trous, reorder, error-spotting, transform), SRS, test diagnostic |
| 03 | Conjugaison | 202 verbes, 14 temps, 5 modes d'exercice, algorithme de conjugaison, SRS |
| 04 | Compréhension | 300 textes de lecture + 304 exercices audio, niveaux B1→C1, style TOEIC Part 3/4/7 |
| 05 | Tests TOEIC | 5 tests blancs (100 questions, 75 min), scoring /495 Reading, débrief par partie |
| 06 | Statistiques | Courbes de progression, mots maîtrisés, points faibles, recommandations intelligentes |

---

## Tester en local

```bash
cd english-trainer
python3 -m http.server 8000
# Ouvre http://localhost:8000
```

---

## Notes techniques

- **Données** : `vocab.js` (2999 mots), `grammar.js` (21 leçons / 535 exercices), `conjugation.js` (202 verbes / 14 temps).
- **SRS** : algorithme SM-2 simplifié dans tous les modules (`ease`, `intervalDays`, `nextDueAt`).
- **Storage** : toute la persistance passe par `scripts/storage.js`. Exception : TOEIC écrit aussi des clés `toeic_p_*` / `toeic_r_*` directement dans `localStorage`.
- **Audio** : fichiers MP3 hébergés sur Cloudflare R2 (non versionnés — voir `DownloadMP3/ello_b2/` dans `.gitignore`).
- **Secrets** : clé API dans `.secrets.local` (jamais committé).
