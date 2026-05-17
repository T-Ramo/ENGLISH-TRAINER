# English Trainer

Un site personnel d'apprentissage de l'anglais (niveau B1 → C1, objectif TOEIC) à héberger sur **GitHub Pages**. 100% statique, pas de serveur, pas de framework, pas de build. Toute la progression est sauvegardée en `localStorage` dans ton navigateur.

---

## 🚀 Déploiement sur GitHub Pages

1. Crée un repo GitHub (par exemple `english-trainer`).
2. Pousse tout le contenu de ce dossier à la racine du repo.
3. Sur GitHub : **Settings → Pages → Build and deployment → Source = Deploy from a branch → Branch = `main` / root**.
4. Attends 1-2 minutes. Le site sera disponible à : `https://<ton-pseudo>.github.io/english-trainer/`

C'est tout. Aucune compilation, aucun outil à installer.

---

## 📁 Structure des fichiers

```
english-trainer/
├── index.html              ← Page d'accueil (dashboard)
├── vocabulary.html         ← Module vocabulaire (FONCTIONNEL)
├── grammar.html            ← Module grammaire (à venir)
├── conjugation.html        ← Module conjugaison (à venir)
├── toeic.html              ← Module tests TOEIC (à venir)
├── stats.html              ← Statistiques détaillées (à venir)
├── data/
│   └── vocab.js            ← TES 3000 MOTS — c'est ici qu'il faut éditer
├── scripts/
│   ├── storage.js          ← Gestion progression (localStorage)
│   ├── shared.js           ← Topbar, audio, helpers
│   └── vocab-engine.js     ← Moteur du jeu (quiz, SRS, scoring)
└── styles/
    ├── main.css            ← Identité visuelle de base
    ├── home.css            ← Styles dashboard
    └── vocab.css           ← Styles module vocabulaire
```

---

## ✏️ Ajouter tes 3000 mots

Ouvre `data/vocab.js`. Tu y verras un tableau `VOCAB` avec ~50 mots d'exemple. **Remplace ou complète** ce tableau avec tes mots, en respectant ce format :

```js
{
  id: 'achieve',              // identifiant UNIQUE et stable (pour ta progression)
  en: 'achieve',              // anglais (US). Plusieurs réponses : 'gray/grey'
  fr: 'accomplir, réaliser',  // français
  pos: 'v',                   // type : n, v, adj, adv, prep, conj, pron, det, phr
  tier: 2,                    // 1=top 500, 2=500-1500, 3=1500-3000
  theme: 'work',              // voir liste ci-dessous
  example: 'She achieved her goal.', // optionnel mais recommandé
},
```

### Thèmes disponibles

| Code | Libellé |
|------|---------|
| `basic` | Mots de base |
| `people` | Personnes & famille |
| `body` | Corps & santé |
| `food` | Nourriture & boisson |
| `home` | Maison & quotidien |
| `work` | Travail & business |
| `travel` | Voyage & lieux |
| `time` | Temps & dates |
| `feelings` | Émotions & sentiments |
| `nature` | Nature & environnement |
| `tech` | Technologie |
| `abstract` | Concepts abstraits |
| `verbs` | Verbes courants |
| `connectors` | Connecteurs & grammaire |

Tu peux en ajouter dans `data/vocab.js` au début du fichier (objet `THEMES`).

### Conseil pratique

Pour traiter tes 3000 mots efficacement, envoie-les-moi par lots de 300-500 dans un format simple :

```
mot_français | mot_anglais | type | tier | thème
```

Et je te génère le bloc JavaScript prêt à coller. Exemple :

```
travail | work | n | 1 | work
améliorer | improve | v | 2 | abstract
réticent | reluctant | adj | 3 | feelings
```

---

## 🎮 Fonctionnalités actuelles (v1.0)

### Module vocabulaire ✅
- **3 modes de jeu** :
  - **Découverte** : à ton rythme, indices disponibles, pas de pénalité (5 pts/mot)
  - **Challenge** : chronométré, bonus de vitesse, multiplicateur de série (10 pts/mot, ×1.5 à partir de 5 d'affilée)
  - **Révision SRS** : algorithme de répétition espacée (SM-2 simplifié) — les mots ratés reviennent au bon moment
- **Filtres** : par niveau (tier), thème, type grammatical
- **Tolérance** : accents et majuscules ignorés, 1-2 fautes de frappe acceptées
- **Synthèse vocale US** pour entendre la prononciation correcte
- **Système de points** avec bonus série, pénalité indices
- **Badges** : 100/500/1000 mots, session parfaite, 7/30 jours de série
- **Sauvegarde automatique** en localStorage
- **Bouton reset** sur la page d'accueil

### Dashboard ✅
- Points totaux, série de jours, mots vus, précision globale
- 3 barres de progression (Tier 1/2/3)
- Galerie de badges (verrouillés/débloqués)
- Citation quotidienne tournante

---

## 🗺️ Roadmap (modules à venir)

| Module | Statut | Contenu prévu |
|--------|--------|---------------|
| Grammaire | À faire | Leçons + exercices : temps, pronoms, prépositions, conditionnels, voix passive, modaux |
| Conjugaison | À faire | Drill verbes irréguliers, tous les temps, mode chronométré |
| Compréhension | À faire | Textes courts style TOEIC Part 7, dialogues Part 3/4 |
| Tests TOEIC | À faire | Tests blancs complets, scoring /990, debrief par section |
| Stats avancées | À faire | Courbes de progression, mots faibles détectés, heatmap d'activité |

---

## 🛠️ Tester en local

Tu peux ouvrir `index.html` directement dans ton navigateur (double-clic). Tout fonctionnera **sauf** que certains navigateurs bloquent `localStorage` sur les fichiers `file://`. Pour éviter ça, lance un mini serveur local :

```bash
# Avec Python
cd english-trainer
python3 -m http.server 8000
# Puis ouvre http://localhost:8000
```

---

## 🐛 En cas de problème

- **Ma progression a disparu** : le localStorage est par navigateur et par domaine. Si tu changes de navigateur ou que tu vides le cache → tout est perdu. Garde ça en tête.
- **La voix ne fonctionne pas** : Chrome charge les voix de manière asynchrone, ça peut prendre 1-2 secondes au premier lancement. Sur Safari iOS, il faut une interaction utilisateur pour activer le son.
- **Je veux exporter ma progression** : pas encore implémenté, mais facile à ajouter (j'exposerai un bouton "Export JSON" dans une prochaine itération).

---

*v1.0 — Module vocabulaire fonctionnel. Suivants : grammaire, conjugaison, TOEIC.*
# ENGLISH-TRAINER
