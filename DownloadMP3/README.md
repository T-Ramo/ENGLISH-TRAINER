# 🎧 ELLLO Downloader — Guide complet

Pipeline pour télécharger des audios anglais B2+ depuis ELLLO.org et les intégrer dans le projet **English Trainer**.

---

## ⚠️ Légal

ELLLO autorise l'usage **personnel et éducatif** de leur contenu mais **interdit la redistribution**. Donc :

- ✅ **OK** : télécharger pour ton propre apprentissage
- ✅ **OK** : utiliser dans ton site perso si privé / local
- ❌ **PAS OK** : republier les MP3 dans un repo GitHub PUBLIC

Si tu veux héberger les audios en ligne, deux options :
1. **Garde le repo en PRIVÉ** (GitHub gratuit le permet ; mais alors GitHub Pages = compte payant ~4€/mois)
2. **Ne push pas les MP3** : ajoute `audio/` à `.gitignore`, garde-les en local sur ta machine et utilise le site uniquement sur ton ordi/téléphone connecté à ton serveur local

Pour un projet 100% public, il vaut mieux **générer tes propres MP3 avec ElevenLabs** (5€/mois) à partir de scripts que tu écris toi-même.

---

## 📦 Installation

```bash
# 1. Crée un dossier de travail
mkdir english-trainer-audio && cd english-trainer-audio

# 2. Installe les dépendances Python
pip install requests beautifulsoup4 tqdm

# 3. Récupère les 2 scripts (copie-colle depuis le pack)
#    - ello_downloader.py
#    - ello_to_comprehension.py
```

---

## 🚀 Utilisation — étape par étape

### Étape 1 — Tester avec 5 audios

Avant de tout télécharger, fais un test rapide :

```bash
python3 ello_downloader.py --section mixer --max 5
```

Tu auras :
```
ello_b2/
└── mixer/
    ├── 001-some-title/
    │   ├── audio.mp3
    │   ├── transcript.txt
    │   └── metadata.json
    ├── 002-other-title/
    │   └── ...
    └── catalog.json
```

**Écoute un MP3** pour vérifier la qualité, **lis un transcript** pour vérifier qu'il est propre.

### Étape 2 — Télécharger en masse

Quand tu es content :

```bash
# Toutes les sections B2+, 30 leçons chacune (~120 audios au total)
python3 ello_downloader.py --section all --max 30

# Ou par section, à ton rythme :
python3 ello_downloader.py --section mixer --max 50
python3 ello_downloader.py --section views --max 30
python3 ello_downloader.py --section level6 --max 50
python3 ello_downloader.py --section level7 --max 50
```

**Durée estimée** : avec un délai de 1.5s entre requêtes (pour respecter le serveur), compte environ **3-4 secondes par leçon** (page + MP3). Donc 100 leçons ≈ 6 minutes.

### Étape 3 — Convertir au format du projet

```bash
python3 ello_to_comprehension.py ello_b2/catalog.json --out data/comprehension-ello.js
```

Tu obtiens `data/comprehension-ello.js` avec tous tes supports formatés.

### Étape 4 — Générer les questions QCM

⚠️ **Le script ne génère PAS les questions** (un script ne peut pas vraiment faire ça correctement). Tu as 3 options :

**Option A — Faire faire par Claude/Copilot (gratuit, manuel)**

Pour chaque transcript, copie ce prompt dans Claude/Copilot :

```
Voici un dialogue/monologue ELLLO. Génère 3 questions QCM type TOEIC Part 3/4 :

[colle le transcript]

Format JSON pour chaque question :
{
  "id": "q1",
  "prompt": "...",
  "options": ["A", "B", "C", "D"],
  "correctAnswer": "B",
  "explanation": "Court rappel en français de la phrase clé du transcript",
  "points": 10
}

Règles :
- Une question d'idée principale, une de détail, une d'inférence/intention
- Distracteurs plausibles (pas évidents)
- Réponse littéralement présente dans le transcript pour les questions de détail
- Difficulté B2
```

Tu peux aussi te faire un batch : envoie 5 transcripts d'un coup dans Claude avec ce même prompt, il te génère 15 questions en une fois.

**Option B — Script automatisé avec l'API Anthropic/OpenAI (~2-5€ pour 100 supports)**

Je peux te générer ce script si tu veux. Il appelle l'API de Claude (ou GPT-4) pour chaque transcript et remplit les questions. Coût : ~0.02-0.05€ par support.

**Option C — Garder le mode "écoute libre" sans QCM**

Tu peux aussi laisser les supports sans questions et juste les utiliser comme matériel d'écoute pure (mode "podcast"). Moins utile pour le TOEIC mais ça reste utile pour l'oreille.

### Étape 5 — Intégrer dans English Trainer

Une fois que tes questions sont prêtes dans `data/comprehension-ello.js` :

1. **Copie le dossier `ello_b2/`** dans ton projet English Trainer, renomme-le en `audio/` :
   ```bash
   mv ello_b2 /chemin/vers/english-trainer/audio
   ```

2. **Inclus le fichier JS** dans `comprehension.html` :
   ```html
   <script src="data/comprehension.js"></script>
   <script src="data/comprehension-ello.js"></script>
   <script>
     // Fusionne les deux sources
     window.COMPREHENSION_DATA = [
       ...(window.COMPREHENSION_DATA || []),
       ...(window.COMPREHENSION_DATA_ELLO || [])
     ];
   </script>
   ```

3. **Ajoute `audio/` à `.gitignore`** si ton repo est public :
   ```
   audio/
   ```

4. **Test** : `python3 -m http.server 8000` → va sur `comprehension.html`, lance une session listening, vérifie que les MP3 jouent.

---

## 🎯 Recommandation finale pour ton workflow

Vu que tu vises le TOEIC, je suggère ce **mix** :

1. **Web Speech API** pour ~30-50 dialogues "TOEIC Part 3/4" sur mesure (formel, business) — gratuit, contrôlable
2. **ELLLO B2+** pour ~50-100 vrais audios variés (accents, vitesses naturelles) — gratuit, vraie qualité d'écoute
3. **(Optionnel)** Plus tard, ElevenLabs pour générer ~20 audios "haute qualité" sur tes propres scripts spécifiquement TOEIC

Comme ça tu as :
- Du matériel **calibré TOEIC** (Web Speech tes scripts)
- Du matériel **réaliste** (ELLLO vrais natifs)
- Une **scalabilité** (tu peux toujours ajouter ElevenLabs après)

---

## 🐛 Troubleshooting

**"Aucune leçon trouvée"** → ELLLO a peut-être changé la structure de ses pages d'index. Inspecte la page dans ton navigateur (F12), regarde les liens vers les leçons, et adapte la regex dans `extract_lesson_links()`.

**"MP3 non trouvé sur la page"** → Certaines pages ELLLO chargent le MP3 dynamiquement via JS. Le script ne gère que les MP3 dans le HTML statique. Pour les pages dynamiques, il faudrait Selenium / Playwright (plus lourd).

**"Téléchargement très lent"** → Le `DELAY_BETWEEN = 1.5s` est volontaire pour ne pas surcharger leurs serveurs. Ne descends pas en dessous de 1s par respect.

**"Transcript vide ou bizarre"** → ELLLO a plusieurs formats de pages selon l'âge de la leçon. Inspecte la page concernée et adapte le sélecteur dans `parse_lesson_page()`.

---

## 📁 Fichiers du pack

| Fichier | Rôle |
|--|--|
| `ello_downloader.py` | Télécharge MP3 + transcripts depuis ELLLO |
| `ello_to_comprehension.py` | Convertit le catalogue en format English Trainer |
| `README-ELLO.md` | Ce fichier |
