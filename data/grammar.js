/* ============================================================
   GRAMMAR — 48 leçons A1→B2 + exercices
   ============================================================ */

const GRAMMAR_CATEGORIES = {
  'verbs-tenses':     { label: 'Temps verbaux',        order: 1,  pillClass: 'cat-pill-amber' },
  'modals':           { label: 'Modaux',                order: 2,  pillClass: 'cat-pill-moss' },
  'conditionals':     { label: 'Conditionnels',         order: 3,  pillClass: 'cat-pill-burgundy' },
  'verbs-structures': { label: 'Structures verbales',   order: 4,  pillClass: 'cat-pill-amber-deep' },
  'determiners':      { label: 'Articles & déterminants', order: 5, pillClass: 'cat-pill-ink' },
  'pronouns':         { label: 'Pronoms',               order: 6,  pillClass: 'cat-pill-moss-deep' },
  'adjectives':       { label: 'Adjectifs & adverbes',  order: 7,  pillClass: 'cat-pill-rose' },
  'prepositions':     { label: 'Prépositions',          order: 8,  pillClass: 'cat-pill-amber' },
  'connectors':       { label: 'Connecteurs',           order: 9,  pillClass: 'cat-pill-moss' },
  'sentence':         { label: 'Phrase et ordre',       order: 10, pillClass: 'cat-pill-burgundy' },
  'nouns':            { label: 'Noms & pluriels',       order: 11, pillClass: 'cat-pill-ink' }
};

const LEVELS = {
  'A1': { label: 'A1 — Débutant',      color: 'var(--moss)',       order: 1 },
  'A2': { label: 'A2 — Élémentaire',   color: 'var(--moss)',       order: 2 },
  'B1': { label: 'B1 — Intermédiaire', color: 'var(--amber)',      order: 3 },
  'B2': { label: 'B2 — Avancé',        color: 'var(--amber-deep)', order: 4 }
};

const LESSONS = [

  // ══════════════════════════════════════════
  // A1-A2 — 15 leçons
  // ══════════════════════════════════════════

  {
    id: 'present-simple', category: 'verbs-tenses', level: 'A1', tier: 1,
    label: 'Present Simple',
    summary: "Le temps de base pour parler de vérités générales, d'habitudes et de routines.",
    rules: [
      { title: "Formation affirmative", content: "Sujet + verbe (base). 3e personne du singulier (he/she/it) : ajouter -S. Ex : I work / He works." },
      { title: "Règles d'orthographe à la 3e personne", content: "• Verbes finissant en -O, -CH, -SH, -SS, -X, -Z : ajouter -ES (he goes, she watches).\n• Verbes finissant en consonne + Y : -Y devient -IES (study → studies).\n• Verbes en voyelle + Y : +S normal (play → plays)." },
      { title: "Forme négative", content: "Sujet + DO/DOES + NOT + verbe (base). Contractions : don't / doesn't." },
      { title: "Forme interrogative", content: "DO/DOES + sujet + verbe (base) ? Ex : Do you work? / Does she work?" },
      { title: "Usages principaux", content: "1) Vérités générales (The sun rises in the east). 2) Habitudes/routines (I get up at 7). 3) États permanents (She lives in Paris). 4) Programmes officiels (The train leaves at 8)." },
      { title: "Adverbes de fréquence", content: "always, usually, often, sometimes, rarely, never. Placés AVANT le verbe principal, APRÈS le verbe BE." }
    ],
    examples: [
      { en: 'I drink coffee every morning.', fr: 'Je bois du café chaque matin.' },
      { en: 'She speaks three languages.', fr: 'Elle parle trois langues.' },
      { en: "They don't live here.", fr: "Ils n'habitent pas ici." },
      { en: 'Does he work on Saturdays?', fr: 'Travaille-t-il le samedi ?' }
    ],
    pitfalls: [
      "Ne pas oublier le -S à la 3e personne : 'He WORKS' pas 'He work'.",
      "Utiliser DOES (pas DO) à la 3e personne : 'Does she like...' pas 'Do she like...'",
      "Après DOES/DO + NOT, verbe à la BASE : 'He doesn't WORK' pas 'He doesn't works'."
    ],
    tip: "He, She, It → ajoute -S !"
  },

  {
    id: 'present-continuous', category: 'verbs-tenses', level: 'A1', tier: 1,
    label: 'Present Continuous',
    summary: "Pour parler d'actions en cours au moment où l'on parle, ou de situations temporaires.",
    rules: [
      { title: "Formation", content: "Sujet + BE (am/is/are) + verbe-ING. Ex : I am working / She is reading / They are playing." },
      { title: "Règles d'orthographe pour le -ING", content: "• Verbe en -E muet : supprimer le E (make → making).\n• Verbe court CVC : doubler la consonne (run → running).\n• Verbe en -IE : -IE → -Y (lie → lying)." },
      { title: "Forme négative et interrogative", content: "Négative : sujet + BE + NOT + V-ing. Interrogative : BE + sujet + V-ing ?" },
      { title: "Usages principaux", content: "1) Action en cours maintenant. 2) Situation temporaire. 3) Tendance/changement. 4) Futur planifié." },
      { title: "Verbes NON utilisés au continuous (stative verbs)", content: "like, love, hate, want, need, know, believe, understand, remember, belong, seem, prefer. Ex : 'I LIKE coffee' (pas 'I am liking')." }
    ],
    examples: [
      { en: 'I am studying English right now.', fr: "J'étudie l'anglais en ce moment." },
      { en: 'She is wearing a red dress today.', fr: "Elle porte une robe rouge aujourd'hui.", note: 'Action temporaire' },
      { en: 'They are not coming to the party.', fr: "Ils ne viennent pas à la fête." },
      { en: 'What are you doing?', fr: 'Que fais-tu ?' }
    ],
    pitfalls: [
      "Ne JAMAIS utiliser le continuous avec les stative verbs : 'I am knowing him' ❌ → 'I know him' ✅",
      "Ne pas confondre Simple (habitude) et Continuous (en cours) : 'I work here' vs 'I am working here this week'.",
      "Doubler la consonne pour les verbes courts : 'siting' ❌ → 'sitting' ✅"
    ],
    tip: "Continuous = MAINTENANT, en train de... Si tu peux dire « at this moment », c'est continuous."
  },

  {
    id: 'past-simple', category: 'verbs-tenses', level: 'A1', tier: 1,
    label: 'Past Simple',
    summary: "Le temps du récit : actions terminées dans le passé, à un moment précis.",
    rules: [
      { title: "Formation — verbes réguliers", content: "Sujet + verbe + -ED. Ex : worked, played. Orthographe : -E muet → +D. Consonne + Y → -IED. CVC → doubler (stop → stopped)." },
      { title: "Verbes irréguliers", content: "À mémoriser : be → was/were, have → had, go → went, see → saw, come → came, take → took, get → got, give → gave, make → made, say → said, tell → told, know → knew..." },
      { title: "Forme négative et interrogative", content: "Négative : sujet + DID + NOT + verbe (base !). Interrogative : DID + sujet + verbe (base) ?" },
      { title: "Marqueurs typiques", content: "yesterday, last week/month/year, two days ago, in 2020, when I was young, then, after that, finally..." }
    ],
    examples: [
      { en: 'I visited my grandmother last weekend.', fr: "J'ai rendu visite à ma grand-mère le week-end dernier." },
      { en: "She didn't answer my email.", fr: "Elle n'a pas répondu à mon e-mail." },
      { en: 'Where did you go on vacation?', fr: 'Où es-tu allé(e) en vacances ?' },
      { en: 'He was tired after the meeting.', fr: 'Il était fatigué après la réunion.' }
    ],
    pitfalls: [
      "Après DID/DIDN'T, verbe à la BASE : 'Did you WORKED' ❌ → 'Did you WORK?' ✅",
      "BE au past : WAS (I/he/she/it) et WERE (you/we/they). 'I were' ❌ → 'I was' ✅",
      "Les irréguliers ne prennent pas -ED : 'I goed' ❌ → 'I went' ✅"
    ],
    tip: "« At a SPECIFIC time in the past, what happened? » → Past Simple."
  },

  {
    id: 'future-will-going-to', category: 'verbs-tenses', level: 'A2', tier: 1,
    label: 'Futur : will vs going to',
    summary: "Deux façons de parler du futur, avec des nuances importantes.",
    rules: [
      { title: "WILL : décisions spontanées et prédictions", content: "Sujet + WILL + verbe (base). Contractions : 'll. Négatif : won't.\nUsages : décision prise à l'instant, prédiction sans preuve, promesses/offres." },
      { title: "BE GOING TO : projets et prédictions avec indices", content: "Sujet + BE + GOING TO + verbe (base).\nUsages : projet déjà décidé, prédiction basée sur indices visibles." },
      { title: "Différence clé", content: "WILL = décision au moment où on parle. GOING TO = décision déjà prise avant. Ex : (téléphone sonne) 'I'll get it!' / 'I'm going to call mom tonight'." },
      { title: "Forme interrogative et négative", content: "WILL : Will you help me? / I won't go.\nGOING TO : Are you going to come? / I'm not going to wait." }
    ],
    examples: [
      { en: 'I think it will rain tomorrow.', fr: "Je pense qu'il pleuvra demain.", note: 'Prédiction sans preuve → WILL' },
      { en: "I'm going to start a new diet on Monday.", fr: 'Je vais commencer un nouveau régime lundi.', note: 'Projet déjà décidé → GOING TO' },
      { en: "OK, I'll do it!", fr: 'OK, je vais le faire !', note: 'Décision spontanée → WILL' },
      { en: "Look! He's going to fall!", fr: 'Regarde ! Il va tomber !', note: 'Prédiction avec preuve → GOING TO' }
    ],
    pitfalls: [
      "Ne JAMAIS utiliser 'will' après 'if' : 'If you will come' ❌ → 'If you come' ✅",
      "GOING TO + go peut se contracter : 'I'm going to Paris' est plus naturel que 'I'm going to go'."
    ],
    tip: "Décision au moment où tu parles = WILL. Plan déjà fait = GOING TO."
  },

  {
    id: 'modal-can-must-should', category: 'modals', level: 'A2', tier: 1,
    label: 'Modaux de base : can, must, should',
    summary: "Trois modaux essentiels pour exprimer capacité, obligation et conseil.",
    rules: [
      { title: "Caractéristiques communes des modaux", content: "• Pas de -S à la 3e personne (he can, pas he cans).\n• Verbe suivant à la BASE (sans to) : I can swim, pas I can to swim.\n• Négation directe : cannot/can't, must not/mustn't, shouldn't." },
      { title: "CAN — capacité, permission, possibilité", content: "1) Capacité : I can swim. 2) Permission (informel) : Can I leave? 3) Passé : COULD (I could swim at 5)." },
      { title: "MUST — obligation et déduction", content: "1) Obligation forte : I must finish this. 2) Déduction logique : He must be tired. 3) Passé : HAD TO (pas 'I musted')." },
      { title: "SHOULD — conseil et recommandation", content: "1) Conseil : You should rest. 2) Attente : The package should arrive tomorrow. 3) Reproche passé : should have + V3." },
      { title: "MUSTN'T vs DON'T HAVE TO", content: "MUSTN'T = interdiction. DON'T HAVE TO = pas obligé. Sens TOTALEMENT différent !" }
    ],
    examples: [
      { en: 'I can speak three languages.', fr: 'Je sais parler trois langues.', note: 'Capacité' },
      { en: 'You must wear a seatbelt.', fr: 'Tu dois porter une ceinture.', note: 'Obligation' },
      { en: 'You should drink more water.', fr: 'Tu devrais boire plus d\'eau.', note: 'Conseil' },
      { en: 'She must be at home now.', fr: 'Elle doit être à la maison.', note: 'Déduction logique' }
    ],
    pitfalls: [
      "Pas de TO après un modal : 'I can to swim' ❌ → 'I can swim' ✅",
      "Pas de -S à la 3e personne : 'He cans drive' ❌ → 'He can drive' ✅",
      "MUSTN'T ≠ DON'T HAVE TO. Mustn't = INTERDIT. Don't have to = pas obligé."
    ],
    tip: "CAN = je peux/sais. MUST = je dois (fort). SHOULD = je devrais (conseil)."
  },

  {
    id: 'articles-a-an-the', category: 'determiners', level: 'A1', tier: 1,
    label: 'A / An / The',
    summary: "Articles indéfinis (a/an) et défini (the) : quand utiliser chacun.",
    rules: [
      { title: "A vs An", content: "A devant un SON consonne, AN devant un SON voyelle (pas la lettre !). Ex : a university (son /j/), an hour (h muet)." },
      { title: "The (article défini)", content: "Chose précise, déjà mentionnée, ou unique au monde. Ex : The sun is bright. / I saw a dog. The dog was small." },
      { title: "Zero article (pas d'article)", content: "Pas d'article devant : noms abstraits généraux, pluriels généraux, repas, pays (en général), langues, sports." }
    ],
    examples: [
      { en: 'I bought a book and an apple.', fr: "J'ai acheté un livre et une pomme." },
      { en: 'The book on the table is mine.', fr: 'Le livre sur la table est à moi.' },
      { en: 'She loves music.', fr: 'Elle aime la musique.', note: "Sens général → pas d'article" },
      { en: 'He is an honest man.', fr: "C'est un homme honnête.", note: 'AN (h muet)' }
    ],
    pitfalls: [
      "Exceptions AVEC THE : the United States, the UK, the Netherlands.",
      "A vs An se base sur le SON : an MP, a university, an hour.",
      "Pas d'article devant les langues : 'I speak the French' ❌ → 'I speak French' ✅"
    ],
    tip: "Première mention = A/AN. Reprise ou unique = THE. Sens général = rien."
  },

  {
    id: 'demonstratives', category: 'determiners', level: 'A1', tier: 1,
    label: 'This / That / These / Those',
    summary: "Démonstratifs : choix selon distance (proche/loin) et nombre (singulier/pluriel).",
    rules: [
      { title: "Tableau récap", content: "THIS = singulier proche. THAT = singulier loin. THESE = pluriel proche. THOSE = pluriel loin." },
      { title: "Au téléphone", content: "On dit 'This is John' (pour s'identifier) et 'Is that Mary?' (pour identifier l'autre)." }
    ],
    examples: [
      { en: 'This is my phone.', fr: 'Ceci est mon téléphone.' },
      { en: 'These shoes are new.', fr: 'Ces chaussures sont neuves.' },
      { en: 'That car over there is fast.', fr: 'Cette voiture là-bas est rapide.' },
      { en: 'Those people are my friends.', fr: 'Ces gens-là sont mes amis.' }
    ],
    pitfalls: [
      "Accord en nombre : 'This shoes' ❌ → 'These shoes' ✅",
      "Au téléphone : 'This is John' pour soi, 'Is that John?' pour l'autre."
    ]
  },

  {
    id: 'some-any-no', category: 'determiners', level: 'A1', tier: 1,
    label: 'Some / Any / No',
    summary: "Quantifieurs indéfinis et leurs composés (something, anywhere, nobody…).",
    rules: [
      { title: "SOME — affirmation", content: "SOME en phrases affirmatives. Ex : I have some money." },
      { title: "ANY — négation et question", content: "ANY en négations et questions. Ex : I don't have any money. Do you have any?" },
      { title: "NO — négation forte sur le nom", content: "NO + nom = négation directe. Ex : I have no money (= I don't have any)." },
      { title: "Composés", content: "Some/any/no/every + body/one/thing/where. Mêmes règles : someone (affirmation), anyone (négation/question), no one, everyone." },
      { title: "Exception : offres et demandes", content: "Dans une question qui PROPOSE, on utilise SOME : Would you like some coffee?" }
    ],
    examples: [
      { en: 'I bought some bread.', fr: "J'ai acheté du pain." },
      { en: "There aren't any tickets left.", fr: "Il ne reste plus de billets." },
      { en: 'Nobody knows the answer.', fr: "Personne ne connaît la réponse." },
      { en: 'Would you like some tea?', fr: 'Voudriez-vous du thé ?', note: 'Offre → SOME' }
    ],
    pitfalls: [
      "Pas de double négation : 'I don't have nothing' ❌ → 'I don't have anything' ✅",
      "ANY en affirmation = 'n'importe quel' : 'Anyone can do it'."
    ],
    tip: "Positif → SOME, négatif/question → ANY, sauf offre polie → SOME."
  },

  {
    id: 'personal-pronouns', category: 'pronouns', level: 'A1', tier: 1,
    label: 'Pronoms personnels (sujet / objet / possessif)',
    summary: "Les trois formes des pronoms personnels et leurs usages.",
    rules: [
      { title: "Tableau complet", content: "Sujet → Objet → Adj. poss. → Pron. poss.\nI → me → my → mine\nyou → you → your → yours\nhe → him → his → his\nshe → her → her → hers\nit → it → its → —\nwe → us → our → ours\nthey → them → their → theirs" },
      { title: "Pronoms objets", content: "Placés APRÈS le verbe ou la préposition. Ex : I saw him. / Give it to me." },
      { title: "Adjectifs possessifs vs Pronoms possessifs", content: "Adjectif : toujours suivi d'un nom (my book). Pronom : remplace le nom (The book is mine)." }
    ],
    examples: [
      { en: 'I saw her yesterday.', fr: "Je l'ai vue hier.", note: 'her = objet' },
      { en: 'This is my house. Where is yours?', fr: "C'est ma maison. Où est la tienne ?", note: 'my = adj, yours = pron' },
      { en: 'Their car is faster than ours.', fr: 'Leur voiture est plus rapide que la nôtre.' }
    ],
    pitfalls: [
      "ITS (possessif) ≠ IT'S (it is). 'The dog wagged ITS tail' / 'IT'S a nice day'.",
      "Hers/theirs/yours/ours SANS apostrophe : 'their's' ❌ → 'theirs' ✅",
      "Après préposition : pronom OBJET. 'Between you and I' ❌ → 'between you and me' ✅"
    ],
    tip: "Pronom = remplace tout. Adjectif = accompagne le nom."
  },

  {
    id: 'reflexive-pronouns', category: 'pronouns', level: 'A2', tier: 1,
    label: 'Pronoms réfléchis',
    summary: "myself, yourself, himself, herself, itself, ourselves, yourselves, themselves.",
    rules: [
      { title: "Tableau", content: "I → myself, you → yourself, he → himself, she → herself, it → itself, we → ourselves, they → themselves." },
      { title: "Action sur soi-même", content: "Sujet et objet = même personne. Ex : She cut herself. / I hurt myself." },
      { title: "Emphase", content: "Insister sur la personne. Ex : I did it myself (et personne d'autre)." },
      { title: "BY + réfléchi = tout seul", content: "Ex : I live by myself = je vis seul." }
    ],
    examples: [
      { en: 'He introduced himself to the class.', fr: 'Il s\'est présenté à la classe.' },
      { en: "I'll fix it myself.", fr: 'Je vais le réparer moi-même.', note: 'Emphase' },
      { en: 'She lives by herself.', fr: 'Elle vit toute seule.' }
    ],
    pitfalls: [
      "Pluriel : -SELVES (pas -SELFS). 'themself' ❌ → 'themselves' ✅",
      "Certains verbes ne sont PAS réfléchis en anglais : 'I get up' (pas 'I get myself up')."
    ]
  },

  {
    id: 'comparatives', category: 'adjectives', level: 'A2', tier: 1,
    label: 'Comparatifs',
    summary: "Comparer deux éléments : -er ou more, et les irréguliers.",
    rules: [
      { title: "Adjectifs courts (1 syllabe, ou 2 en -Y)", content: "Adjectif + -ER + than. Ex : tall → taller than. big → bigger than. happy → happier than." },
      { title: "Adjectifs longs (2+ syllabes)", content: "MORE + adjectif + than. Ex : more interesting than, more beautiful than." },
      { title: "Irréguliers", content: "good → better. bad → worse. far → farther/further. little → less. much/many → more." },
      { title: "Égalité : as...as", content: "AS + adj + AS = aussi... que. Ex : She is as tall as me." },
      { title: "Comparatif progressif", content: "-ER and -ER ou MORE AND MORE + adj. Ex : It's getting colder and colder." }
    ],
    examples: [
      { en: 'My car is faster than yours.', fr: 'Ma voiture est plus rapide que la tienne.' },
      { en: 'This problem is more difficult than that one.', fr: 'Ce problème est plus difficile.' },
      { en: "He's better at math than me.", fr: 'Il est meilleur en maths que moi.' },
      { en: 'She runs as fast as he does.', fr: 'Elle court aussi vite que lui.' }
    ],
    pitfalls: [
      "Pas de double comparatif : 'more taller' ❌ → 'taller' ✅",
      "THAN (pas THAT) : 'taller that me' ❌ → 'taller than me' ✅"
    ],
    tip: "Court (1 syllabe) → -ER. Long (2+ syllabes) → MORE."
  },

  {
    id: 'superlatives', category: 'adjectives', level: 'A2', tier: 1,
    label: 'Superlatifs',
    summary: "Le plus haut degré : the + -est ou the most.",
    rules: [
      { title: "Adjectifs courts", content: "THE + adjectif + -EST. Ex : the tallest, the biggest, the happiest." },
      { title: "Adjectifs longs", content: "THE MOST + adjectif. Ex : the most interesting, the most beautiful." },
      { title: "Irréguliers", content: "good → the best. bad → the worst. far → the farthest. little → the least. much/many → the most." },
      { title: "IN ou OF", content: "IN pour un lieu, OF pour un groupe. Ex : the tallest building IN the city. / the tallest OF the brothers." }
    ],
    examples: [
      { en: 'Mount Everest is the highest mountain in the world.', fr: "L'Everest est la plus haute montagne du monde." },
      { en: "This is the most interesting book I've read.", fr: "C'est le livre le plus intéressant que j'aie lu." },
      { en: 'She is the best student in the class.', fr: 'Elle est la meilleure élève de la classe.' }
    ],
    pitfalls: [
      "Toujours THE : 'tallest building' ❌ → 'the tallest building' ✅",
      "IN pour lieu, OF pour groupe."
    ]
  },

  {
    id: 'word-order-basic', category: 'sentence', level: 'A1', tier: 1,
    label: 'Ordre des mots SVO',
    summary: "Structure de base de la phrase anglaise : Sujet-Verbe-Objet, ordre fixe.",
    rules: [
      { title: "SVO de base", content: "Sujet + Verbe + Objet. Ordre rigide en anglais. Ex : She (S) reads (V) books (O)." },
      { title: "Ajout des compléments", content: "S + V + O + manière + lieu + temps. Ex : She reads books quietly in the living room every evening." },
      { title: "Adverbes de fréquence", content: "AVANT le verbe principal, APRÈS le verbe BE. Ex : He always works hard. / She is never late." }
    ],
    examples: [
      { en: 'I drink coffee every morning.', fr: 'Je bois du café tous les matins.' },
      { en: 'She always reads in bed.', fr: 'Elle lit toujours au lit.', note: 'Fréquence avant verbe' },
      { en: 'He is usually tired.', fr: 'Il est généralement fatigué.', note: 'Fréquence après BE' }
    ],
    pitfalls: [
      "Pas de sujet implicite comme en français : 'Is hot' ❌ → 'It is hot' ✅",
      "Fréquence avant le verbe : 'I go always' ❌ → 'I always go' ✅"
    ]
  },

  {
    id: 'prep-time-basic', category: 'prepositions', level: 'A1', tier: 1,
    label: 'Prépositions de temps (in / on / at)',
    summary: "Le trio IN / ON / AT pour situer dans le temps.",
    rules: [
      { title: "IN — périodes longues", content: "IN + années, mois, saisons, parties de la journée. Ex : in 2025, in March, in summer, in the morning." },
      { title: "ON — jours et dates", content: "ON + jours de la semaine, dates précises. Ex : on Monday, on July 4th, on my birthday." },
      { title: "AT — heures et moments précis", content: "AT + heures, moments précis, fêtes. Ex : at 3pm, at noon, at night, at Christmas." }
    ],
    examples: [
      { en: 'I was born in 1995.', fr: 'Je suis né en 1995.' },
      { en: "I'll see you on Friday.", fr: 'Je te verrai vendredi.' },
      { en: 'The meeting is at 3pm.', fr: 'La réunion est à 15h.' }
    ],
    pitfalls: [
      "Long période = IN, jour/date = ON, heure précise = AT.",
      "Exceptions à mémoriser : at night, at the weekend (UK), in the morning/afternoon/evening."
    ],
    tip: "Pyramide du temps : AT (précis) < ON (jour) < IN (période)."
  },

  {
    id: 'prep-place-basic', category: 'prepositions', level: 'A1', tier: 1,
    label: 'Prépositions de lieu (in / on / at)',
    summary: "Le même trio IN / ON / AT pour situer dans l'espace.",
    rules: [
      { title: "IN — à l'intérieur", content: "IN + espace fermé ou délimité. Ex : in the kitchen, in a car, in Paris." },
      { title: "ON — sur une surface", content: "ON + surface. Ex : on the table, on the wall, on a bus/train/plane." },
      { title: "AT — point précis", content: "AT + point précis ou adresse. Ex : at 25 Main Street, at the bus stop, at home, at work." }
    ],
    examples: [
      { en: 'She lives in London.', fr: 'Elle vit à Londres.' },
      { en: 'The keys are on the table.', fr: 'Les clés sont sur la table.' },
      { en: 'We met at the airport.', fr: "On s'est rencontrés à l'aéroport." }
    ],
    pitfalls: [
      "Transports : IN a car/taxi mais ON a bus/train/plane.",
      "AT home / AT work / AT school : pas d'article, expressions figées."
    ]
  },

  // ══════════════════════════════════════════
  // B1 — 23 leçons (partie 1 : temps, modaux, conditionnels, passif)
  // ══════════════════════════════════════════

  {
    id: 'present-perfect', category: 'verbs-tenses', level: 'B1', tier: 1,
    label: 'Present Perfect (have + V3)',
    summary: "Le pont entre passé et présent : actions passées avec lien au moment présent.",
    rules: [
      { title: "Formation", content: "Sujet + HAVE/HAS + V3. Contractions : I've, she's, they've. Négatif : haven't / hasn't." },
      { title: "Trois usages principaux", content: "1) Expérience de vie : I have visited London. 2) Action passée avec résultat présent : I've lost my keys. 3) Action qui continue depuis le passé : I have lived here for 5 years." },
      { title: "Marqueurs typiques", content: "ever, never, already, yet, just, recently, so far, since, for, this week/year." },
      { title: "SINCE vs FOR", content: "SINCE = point de départ précis (since 2020, since Monday). FOR = durée (for 5 years, for a week)." },
      { title: "JUST / ALREADY / YET", content: "JUST = à l'instant (positif). ALREADY = déjà (positif). YET = encore/déjà (négation ou question, en fin de phrase)." }
    ],
    examples: [
      { en: 'I have been to Japan twice.', fr: "Je suis allé(e) au Japon deux fois.", note: 'Expérience' },
      { en: 'She has just finished her homework.', fr: 'Elle vient de finir ses devoirs.', note: 'Action récente' },
      { en: 'We have lived here since 2019.', fr: 'Nous vivons ici depuis 2019.', note: 'Action continue' },
      { en: 'Have you ever tried Thai food?', fr: "As-tu déjà essayé la cuisine thaï ?", note: "Question d'expérience" }
    ],
    pitfalls: [
      "Present Perfect ≠ Past Simple ! Moment PRÉCIS → Past Simple : 'I have seen him yesterday' ❌ → 'I saw him yesterday' ✅",
      "SINCE (date) vs FOR (durée) : since 2020 / for 4 years."
    ],
    tip: "Si tu peux dire « UNTIL NOW », c'est Present Perfect."
  },

  {
    id: 'present-perfect-continuous', category: 'verbs-tenses', level: 'B1', tier: 2,
    label: 'Present Perfect Continuous (have been V-ing)',
    summary: "Pour insister sur la DURÉE d'une action qui continue ou vient de s'achever.",
    rules: [
      { title: "Formation", content: "Sujet + HAVE/HAS + BEEN + verbe-ING. Ex : I have been working, She has been studying." },
      { title: "Usages", content: "1) Action commencée dans le passé qui continue, emphase sur la durée : I have been waiting for two hours. 2) Action qui vient de finir mais dont l'effet est visible : She's tired - she has been running." },
      { title: "Différence avec Present Perfect simple", content: "Simple → résultat/quantité ('I have read 3 books'). Continuous → activité/durée ('I have been reading all day')." },
      { title: "Stative verbs", content: "Les stative verbs ne se mettent PAS au continuous. 'I have known him for years' (pas 'been knowing')." }
    ],
    examples: [
      { en: 'I have been studying English for 3 years.', fr: "J'étudie l'anglais depuis 3 ans." },
      { en: 'It has been raining all morning.', fr: 'Il pleut depuis ce matin.' },
      { en: 'You look exhausted! Have you been working out?', fr: "Tu as l'air épuisé ! Tu viens de faire du sport ?" }
    ],
    pitfalls: [
      "Pas avec stative verbs : 'I have been knowing him' ❌ → 'I have known him' ✅",
      "Insiste sur la DURÉE, pas le résultat."
    ],
    tip: "« Depuis combien de temps tu fais ça ? » → Present Perfect Continuous."
  },

  {
    id: 'past-continuous', category: 'verbs-tenses', level: 'B1', tier: 1,
    label: 'Past Continuous (was/were + V-ing)',
    summary: "Action en cours à un moment précis du passé, souvent interrompue.",
    rules: [
      { title: "Formation", content: "Sujet + WAS/WERE + verbe-ING. Ex : I was working, They were playing." },
      { title: "Usages", content: "1) Action en cours à un moment précis : At 8pm, I was watching TV. 2) Action interrompue : I was reading WHEN the phone rang. 3) Deux actions parallèles : While she was cooking, he was reading." },
      { title: "Past Continuous vs Past Simple", content: "Continuous = arrière-plan. Simple = action ponctuelle, finie. Ex : 'I was walking home' (contexte) when 'I saw an accident' (action ponctuelle)." }
    ],
    examples: [
      { en: 'I was sleeping when you called.', fr: 'Je dormais quand tu as appelé.' },
      { en: 'They were playing in the garden at 5pm.', fr: 'Ils jouaient dans le jardin à 17h.' },
      { en: "While I was studying, she was watching TV.", fr: "Pendant que j'étudiais, elle regardait la télé." }
    ],
    pitfalls: [
      "Pas avec stative verbs : 'I was knowing' ❌ → 'I knew' ✅",
      "Action courte = Past Simple. Contexte/arrière-plan = Past Continuous."
    ]
  },

  {
    id: 'past-perfect', category: 'verbs-tenses', level: 'B1', tier: 2,
    label: 'Past Perfect (had + V3)',
    summary: "Le « passé du passé » : une action terminée avant une autre action passée.",
    rules: [
      { title: "Formation", content: "Sujet + HAD + V3. Contractions : I'd, she'd. Négatif : hadn't." },
      { title: "Usage principal", content: "Marquer l'antériorité : action 1 (terminée, had+V3) → action 2 (past simple). Ex : When I arrived, he HAD ALREADY LEFT." },
      { title: "Marqueurs typiques", content: "already, just, never, ever, by the time, before, after, when, until then." },
      { title: "Past Perfect optionnel avec before/after", content: "Quand l'ordre est clair (before, after), le Past Perfect est optionnel. Sans ces marqueurs, il est souvent nécessaire." }
    ],
    examples: [
      { en: 'By the time we arrived, the movie had started.', fr: 'Quand nous sommes arrivés, le film avait déjà commencé.' },
      { en: 'She had never seen snow before that day.', fr: "Elle n'avait jamais vu la neige avant ce jour-là." },
      { en: 'He told me he had finished the project.', fr: "Il m'a dit qu'il avait fini le projet." }
    ],
    pitfalls: [
      "Past Perfect = AVANT un autre événement passé. Pas pour parler du passé tout court.",
      "Avec BEFORE / AFTER, le Past Perfect est optionnel."
    ],
    tip: "Pense « le passé du passé » : action 1 (had+V3) → action 2 (past simple)."
  },

  {
    id: 'used-to-would', category: 'verbs-tenses', level: 'B1', tier: 2,
    label: 'Used to / Would (habitudes passées)',
    summary: "Pour parler d'habitudes passées qui n'existent plus aujourd'hui.",
    rules: [
      { title: "USED TO + base verb", content: "Habitudes ET états passés qui n'existent plus. Ex : I used to smoke. She used to live in Paris." },
      { title: "Forme négative et interrogative", content: "Négatif : didn't use to (sans D !). Question : Did you use to...?" },
      { title: "WOULD + base verb", content: "Habitudes répétées (PAS d'états) dans le passé. Ex : When I was young, I would play football every Sunday." },
      { title: "USED TO vs BE USED TO", content: "USED TO + base = habitude passée. BE USED TO + V-ing = être habitué à (présent). Totalement différent !" }
    ],
    examples: [
      { en: 'I used to live in London.', fr: "J'habitais à Londres (autrefois)." },
      { en: 'We would go camping every summer.', fr: 'Nous allions camper chaque été.' },
      { en: 'Did you use to play the piano?', fr: 'Jouais-tu du piano (avant) ?' },
      { en: 'She is used to waking up early.', fr: "Elle a l'habitude de se lever tôt.", note: 'BE USED TO = habitué' }
    ],
    pitfalls: [
      "Question/négation : 'use to' SANS D. 'Didn't used to' ❌ → 'didn't use to' ✅",
      "WOULD ne marche PAS pour les états : 'I would be a student' ❌ → 'I used to be a student' ✅"
    ],
    tip: "« Avant je faisais ça, mais plus maintenant » = USED TO."
  },

  {
    id: 'modals-extended', category: 'modals', level: 'B1', tier: 2,
    label: 'Modaux étendus : could, would, may, might, shall, ought to',
    summary: "Au-delà de can/must/should : les modaux pour nuancer.",
    rules: [
      { title: "COULD", content: "1) Capacité passée : I could swim at 5. 2) Possibilité : It could rain. 3) Permission polie : Could I borrow your pen? 4) Suggestion : You could try a different approach." },
      { title: "WOULD", content: "1) Conditionnel : I would go if I had time. 2) Habitude passée : He would always complain. 3) Demande polie : Would you help me? 4) Préférence : I would prefer tea." },
      { title: "MAY / MIGHT", content: "Possibilité (might = un peu moins certain que may) : It may rain. / It might rain. MAY = permission formelle : May I come in?" },
      { title: "SHALL", content: "Suggestion (UK, formel) : Shall we go? Très peu utilisé en anglais américain." },
      { title: "OUGHT TO", content: "Synonyme formel de SHOULD : You ought to see a doctor. Plus rare aujourd'hui." }
    ],
    examples: [
      { en: 'Could you help me, please?', fr: "Pourriez-vous m'aider ?" },
      { en: 'It might rain later today.', fr: 'Il pourrait pleuvoir plus tard.' },
      { en: 'Shall I open the window?', fr: "Voulez-vous que j'ouvre la fenêtre ?", note: 'Suggestion formelle' },
      { en: 'You ought to apologize.', fr: "Tu devrais t'excuser." }
    ],
    pitfalls: [
      "MIGHT exprime un doute plus fort que MAY (en pratique, presque interchangeables).",
      "Toujours BASE après le modal : 'could to help' ❌ → 'could help' ✅"
    ]
  },

  {
    id: 'must-vs-have-to', category: 'modals', level: 'B1', tier: 2,
    label: 'Must vs Have to (obligation)',
    summary: "Deux façons d'exprimer l'obligation, avec une nuance importante.",
    rules: [
      { title: "MUST — obligation interne", content: "Vient de la personne qui parle. Ex : I must finish this today (je décide)." },
      { title: "HAVE TO — obligation externe", content: "Vient d'une règle, d'une circonstance. Ex : I have to wear a uniform at work (règle imposée)." },
      { title: "Passé, futur", content: "MUST n'a pas de passé ni de futur. On utilise HAVE TO : had to (passé), will have to (futur)." },
      { title: "MUSTN'T vs DON'T HAVE TO", content: "MUSTN'T = INTERDIT. DON'T HAVE TO = pas obligé. Erreur classique au TOEIC !" },
      { title: "NEED TO / NEEDN'T", content: "NEED TO = avoir besoin de. NEEDN'T = pas besoin de (= don't need to)." }
    ],
    examples: [
      { en: 'I must call my mother today.', fr: "Je dois appeler ma mère.", note: "Obligation que je m'impose" },
      { en: 'Employees have to wear ID badges.', fr: 'Les employés doivent porter un badge.', note: 'Règle externe' },
      { en: "You mustn't use your phone during the test.", fr: 'Tu ne dois pas utiliser ton téléphone.', note: 'INTERDIT' },
      { en: "You don't have to wear a tie.", fr: "Tu n'es pas obligé de porter une cravate.", note: 'Pas obligatoire' }
    ],
    pitfalls: [
      "MUSTN'T ≠ DON'T HAVE TO. Erreur classique au TOEIC !",
      "MUST n'a pas de passé : 'I musted work' ❌ → 'I had to work' ✅"
    ],
    tip: "Obligation imposée par MOI = MUST. Par les RÈGLES/CIRCONSTANCES = HAVE TO."
  },

  {
    id: 'modal-perfect', category: 'modals', level: 'B1', tier: 3,
    label: 'Modaux + Perfect (should have, must have, could have...)',
    summary: "Parler de regrets, déductions et possibilités passées. **Chapitre clé pour le TOEIC.**",
    rules: [
      { title: "Formation universelle", content: "MODAL + HAVE + V3. Le HAVE ne change jamais. Ex : He should have called (pas 'has called')." },
      { title: "SHOULD HAVE + V3 — regret/reproche", content: "Action qu'on aurait dû faire. Ex : I should have studied harder. Négatif : shouldn't have (j'aurais pas dû)." },
      { title: "MUST HAVE + V3 — déduction certaine", content: "Conclusion logique sur le passé. Ex : She must have left (= je suis sûr qu'elle est partie)." },
      { title: "CAN'T HAVE + V3 — déduction négative", content: "Conclusion négative : impossible. Ex : He can't have done it - he was with me." },
      { title: "COULD HAVE + V3 — possibilité non réalisée", content: "Action possible mais non faite. Ex : You could have called me." },
      { title: "MIGHT HAVE + V3 — possibilité incertaine", content: "Je ne suis pas sûr. Ex : She might have forgotten." }
    ],
    examples: [
      { en: 'I should have called you yesterday.', fr: "J'aurais dû t'appeler hier.", note: 'Regret' },
      { en: 'She must have been very tired.', fr: 'Elle devait être très fatiguée.', note: 'Déduction' },
      { en: 'You could have warned me!', fr: "Tu aurais pu me prévenir !", note: 'Reproche' },
      { en: 'They might have missed the train.', fr: 'Ils ont peut-être raté le train.', note: 'Possibilité incertaine' }
    ],
    pitfalls: [
      "Erreur écrite typique : 'should of' ❌ → 'should have' ✅ (on entend 'should've')",
      "Le HAVE est invariable : 'She must has gone' ❌ → 'She must have gone' ✅"
    ],
    tip: "Regret = SHOULD HAVE. Certitude = MUST HAVE. Impossible = CAN'T HAVE. Possibilité = COULD/MIGHT HAVE."
  },

  {
    id: 'conditional-0', category: 'conditionals', level: 'B1', tier: 1,
    label: 'Zero Conditional (vérité générale)',
    summary: "Pour exprimer des vérités générales et des lois scientifiques.",
    rules: [
      { title: "Formation", content: "IF + present simple, present simple. Ex : If you heat water to 100°C, it boils." },
      { title: "Usage", content: "Vérités universelles, faits scientifiques, instructions générales. La condition entraîne TOUJOURS le même résultat." },
      { title: "IF vs WHEN", content: "Souvent interchangeables au Zero Conditional." }
    ],
    examples: [
      { en: 'If you heat ice, it melts.', fr: 'Si tu chauffes la glace, elle fond.' },
      { en: "Plants die if you don't water them.", fr: "Les plantes meurent si tu ne les arroses pas." },
      { en: 'When it rains, the ground gets wet.', fr: 'Quand il pleut, le sol devient mouillé.' }
    ],
    pitfalls: [
      "Pas de WILL après IF : 'If you will press' ❌ → 'If you press' ✅"
    ],
    tip: "Si c'est TOUJOURS vrai = Zero Conditional."
  },

  {
    id: 'conditional-1', category: 'conditionals', level: 'B1', tier: 1,
    label: 'First Conditional (futur possible)',
    summary: "Pour parler d'une situation future possible et probable.",
    rules: [
      { title: "Formation", content: "IF + present simple, WILL + verbe (base). Ex : If it rains, I will stay home." },
      { title: "Usage", content: "Condition réelle ou probable dans le futur." },
      { title: "Variantes", content: "On peut remplacer WILL par : can, may, might, must, going to. Ex : If you study, you can pass." },
      { title: "UNLESS = IF NOT", content: "Ex : I won't come unless you invite me = I won't come if you don't invite me." }
    ],
    examples: [
      { en: "If it rains tomorrow, I will stay home.", fr: "S'il pleut demain, je resterai à la maison." },
      { en: "You'll be late if you don't hurry.", fr: "Tu seras en retard si tu ne te dépêches pas." },
      { en: "Unless you study, you won't pass.", fr: "À moins que tu n'étudies, tu n'auras pas ton examen." }
    ],
    pitfalls: [
      "JAMAIS de WILL après IF : 'If it will rain' ❌ → 'If it rains' ✅",
      "UNLESS = IF NOT, donc pas de NOT supplémentaire : 'unless you don't come' ❌ → 'unless you come' ✅"
    ],
    tip: "Future possible et réaliste = First Conditional."
  },

  {
    id: 'conditional-2', category: 'conditionals', level: 'B1', tier: 2,
    label: 'Second Conditional (hypothèse présent/futur)',
    summary: "Pour parler d'une situation hypothétique, imaginaire ou improbable.",
    rules: [
      { title: "Formation", content: "IF + past simple, WOULD + verbe (base). Ex : If I had more money, I would travel." },
      { title: "Usage", content: "Hypothèse irréaliste ou peu probable dans le présent ou futur." },
      { title: "WERE pour toutes les personnes (formel)", content: "Avec BE, on utilise WERE : 'If I WERE you, I would apologize.' À l'oral, 'If I was you' est très accepté." }
    ],
    examples: [
      { en: 'If I had a million dollars, I would buy a house.', fr: "Si j'avais un million, j'achèterais une maison." },
      { en: 'If she were here, she would help us.', fr: 'Si elle était là, elle nous aiderait.' },
      { en: 'What would you do if you won the lottery?', fr: 'Que ferais-tu si tu gagnais à la loterie ?' },
      { en: 'If I were you, I would tell the truth.', fr: 'À ta place, je dirais la vérité.', note: 'Conseil' }
    ],
    pitfalls: [
      "Pas de WOULD après IF : 'If I would have time' ❌ → 'If I had time' ✅"
    ],
    tip: "« What WOULD I do IF... » + past simple = Second Conditional."
  },

  {
    id: 'conditional-3', category: 'conditionals', level: 'B1', tier: 2,
    label: 'Third Conditional (regret passé)',
    summary: "Pour parler de regrets ou situations hypothétiques dans le passé.",
    rules: [
      { title: "Formation", content: "IF + past perfect (had + V3), WOULD HAVE + V3. Ex : If I had studied, I would have passed." },
      { title: "Usage", content: "Regret, situation imaginaire dans le passé. La condition est IMPOSSIBLE à changer maintenant." },
      { title: "Variantes", content: "WOULD HAVE peut être remplacé par : could have, might have." }
    ],
    examples: [
      { en: 'If I had studied harder, I would have passed the exam.', fr: "Si j'avais étudié plus, j'aurais réussi l'examen." },
      { en: 'She would have called you if she had known.', fr: "Elle t'aurait appelé si elle avait su." },
      { en: "If we hadn't missed the bus, we wouldn't have been late.", fr: "Si on n'avait pas raté le bus, on n'aurait pas été en retard." }
    ],
    pitfalls: [
      "Erreur fréquente : 'If I would have' ❌ → 'If I had' ✅",
      "Toujours HAD + V3 dans la partie IF."
    ],
    tip: "Regret du passé qu'on ne peut plus changer = Third Conditional."
  },

  {
    id: 'passive-voice', category: 'verbs-structures', level: 'B1', tier: 2,
    label: 'Voix passive (be + V3)',
    summary: "Quand l'action est plus importante que celui qui la fait. **Très fréquent au TOEIC.**",
    rules: [
      { title: "Formation générale", content: "Sujet (passif) + BE (conjugué) + V3 + (BY + agent). Ex : Hamlet was written by Shakespeare." },
      { title: "Le passif à différents temps", content: "• Present : is/are + V3\n• Past : was/were + V3\n• Future : will be + V3\n• Present Perfect : has/have been + V3\n• Modaux : modal + be + V3" },
      { title: "Quand utiliser le passif", content: "1) Agent inconnu/évident. 2) Agent non important. 3) Focaliser sur l'objet. 4) Style scientifique/formel." },
      { title: "GET-passive (informel)", content: "GET + V3. Ex : He got fired. She got married." }
    ],
    examples: [
      { en: 'The Mona Lisa was painted by Leonardo da Vinci.', fr: 'La Joconde a été peinte par Léonard de Vinci.' },
      { en: 'English is spoken in over 50 countries.', fr: "L'anglais est parlé dans plus de 50 pays." },
      { en: 'The package will be delivered tomorrow.', fr: 'Le colis sera livré demain.' },
      { en: 'The report has been completed.', fr: 'Le rapport a été terminé.' }
    ],
    pitfalls: [
      "Ne pas oublier BE : 'The house built in 1900' ❌ → 'The house WAS built in 1900' ✅",
      "V3 obligatoire : 'The book was wrote' ❌ → 'The book was written' ✅"
    ],
    tip: "Test : peux-tu retourner la phrase ? Sujet ← Verbe ← Objet → passif possible."
  },

  // ══════════════════════════════════════════
  // B1 — partie 2 : structures verbales, relatifs, connecteurs, déterminants
  // ══════════════════════════════════════════

  {
    id: 'gerund-infinitive', category: 'verbs-structures', level: 'B1', tier: 1,
    label: 'Gérondif vs Infinitif (-ing vs to + V)',
    summary: "**Chapitre crucial pour le TOEIC.** Quels verbes prennent -ing, lesquels to+V.",
    rules: [
      { title: "Verbes suivis de -ING uniquement", content: "enjoy, avoid, mind, finish, suggest, recommend, miss, deny, admit, consider, postpone, practice, imagine, risk, give up, keep, can't help, can't stand, look forward to, be used to. Ex : I enjoy SWIMMING." },
      { title: "Verbes suivis de TO + V uniquement", content: "want, decide, hope, plan, refuse, expect, promise, agree, offer, learn, manage, fail, choose, afford, pretend, seem, tend. Ex : I want TO GO." },
      { title: "Verbes suivis des DEUX (même sens)", content: "like, love, hate, prefer, begin, start, continue. Ex : I like swimming = I like to swim." },
      { title: "Verbes suivis des DEUX (sens DIFFÉRENT !)", content: "• STOP doing (arrêter) vs STOP to do (s'arrêter POUR faire).\n• REMEMBER doing (souvenir) vs REMEMBER to do (penser à faire).\n• TRY doing (essayer comme expérience) vs TRY to do (s'efforcer).\n• FORGET doing vs FORGET to do : même logique." },
      { title: "Après une préposition : TOUJOURS -ING", content: "Ex : I'm interested in LEARNING. / Before LEAVING. ⚠️ 'look forward TO seeing you' (TO est une préposition ici, pas l'infinitif)." }
    ],
    examples: [
      { en: 'I enjoy reading books.', fr: "J'aime lire des livres.", note: 'enjoy → -ING' },
      { en: 'She decided to study abroad.', fr: "Elle a décidé d'étudier à l'étranger.", note: 'decide → to + V' },
      { en: 'I stopped smoking last year.', fr: "J'ai arrêté de fumer l'année dernière." },
      { en: 'He stopped to smoke a cigarette.', fr: 'Il s\'est arrêté pour fumer.' },
      { en: "Remember to call your mother.", fr: "N'oublie pas d'appeler ta mère." }
    ],
    pitfalls: [
      "STOP doing vs STOP to do : sens TRÈS différent !",
      "REMEMBER/FORGET TO DO = action future. DOING = souvenir.",
      "Après TO préposition (look forward to, be used to) : -ING."
    ],
    tip: "Quand tu hésites, mémorise les listes par cœur. C'est de la mémorisation pure."
  },

  {
    id: 'verb-patterns', category: 'verbs-structures', level: 'B1', tier: 2,
    label: 'Verb patterns : verbe + objet + infinitif',
    summary: "Structures du type 'I want HIM TO GO', 'She made ME LAUGH'.",
    rules: [
      { title: "Verb + obj + to + V", content: "want, ask, tell, invite, advise, remind, encourage, expect, allow, force, persuade, teach. Ex : I want him to go. / She asked me to help." },
      { title: "Verb + obj + base verb (sans TO)", content: "make, let, have (causatif). Ex : My mom MADE me CLEAN my room. / She LET me GO." },
      { title: "HELP : les deux marchent", content: "I helped him (to) move. Le TO est optionnel." },
      { title: "Au passif, le TO revient", content: "He was made to clean (passif, le TO réapparaît)." }
    ],
    examples: [
      { en: 'I want you to be happy.', fr: 'Je veux que tu sois heureux.' },
      { en: 'She made him cry.', fr: "Elle l'a fait pleurer.", note: 'make + base verb' },
      { en: "Let me help you.", fr: "Laisse-moi t'aider.", note: 'let + base verb' },
      { en: 'The teacher allowed us to use a calculator.', fr: "Le prof nous a permis d'utiliser une calculatrice." }
    ],
    pitfalls: [
      "Après MAKE / LET : PAS de TO. 'She made me to wait' ❌ → 'She made me wait' ✅",
      "Au passif, TO revient avec MAKE : 'He was made to wait' ✅"
    ]
  },

  {
    id: 'question-tags', category: 'verbs-structures', level: 'B1', tier: 2,
    label: 'Question tags',
    summary: "Petites questions ajoutées en fin de phrase (n'est-ce pas).",
    rules: [
      { title: "Règle d'inversion de polarité", content: "Phrase positive → tag négatif. Phrase négative → tag positif. Ex : You like coffee, don't you? / She doesn't drink, does she?" },
      { title: "Construction du tag", content: "Reprendre l'auxiliaire + pronom sujet. Ex : He works here, doesn't he? / They have arrived, haven't they?" },
      { title: "Cas particuliers", content: "• I am → AREN'T I? (irrégulier !)\n• Let's... → SHALL WE?\n• Impératif → WILL YOU?\n• Avec NOBODY/NEVER → tag POSITIF." },
      { title: "Intonation", content: "Tag montant ↗ = vraie question. Tag descendant ↘ = confirmation." }
    ],
    examples: [
      { en: "It's hot today, isn't it?", fr: "Il fait chaud aujourd'hui, n'est-ce pas ?" },
      { en: "You don't smoke, do you?", fr: "Tu ne fumes pas, n'est-ce pas ?" },
      { en: "Let's go, shall we?", fr: "Allons-y, d'accord ?" },
      { en: "I'm late, aren't I?", fr: "Je suis en retard, non ?" }
    ],
    pitfalls: [
      "I AM → AREN'T I (pas AMN'T I).",
      "Avec NOBODY/NEVER : tag POSITIF (car sens déjà négatif)."
    ]
  },

  {
    id: 'so-neither', category: 'verbs-structures', level: 'B1', tier: 2,
    label: 'So / Neither / Nor + auxiliary',
    summary: "Pour exprimer son accord : moi aussi (positif) / moi non plus (négatif).",
    rules: [
      { title: "SO + auxiliaire + sujet — accord positif", content: "'I like pizza.' → 'So do I.' / 'She is tired.' → 'So am I.'" },
      { title: "NEITHER / NOR + auxiliaire + sujet — accord négatif", content: "'I don't like pizza.' → 'Neither do I.' / 'She isn't ready.' → 'Neither am I.'" },
      { title: "Choix de l'auxiliaire", content: "Reprendre le MÊME auxiliaire que la phrase d'origine. Sinon DO/DOES/DID." },
      { title: "Désaccord", content: "Ex : 'I like pizza.' → 'I don't.' / 'I don't smoke.' → 'I do.'" }
    ],
    examples: [
      { en: '"I love this movie." "So do I."', fr: '"J\'adore ce film." "Moi aussi."' },
      { en: '"I can\'t swim." "Neither can I."', fr: '"Je ne sais pas nager." "Moi non plus."' },
      { en: '"She is tired." "So am I."', fr: '"Elle est fatiguée." "Moi aussi."' }
    ],
    pitfalls: [
      "Inversion OBLIGATOIRE : 'So do I' (pas 'So I do').",
      "Choisir le bon auxiliaire selon la phrase d'origine."
    ]
  },

  {
    id: 'wish-if-only', category: 'verbs-structures', level: 'B1', tier: 3,
    label: 'Wish / If only (souhaits et regrets)',
    summary: "Exprimer souhaits irréels et regrets.",
    rules: [
      { title: "WISH + past simple — souhait irréel au présent", content: "On souhaite que la situation actuelle soit différente. Ex : I wish I had more money (= je n'en ai pas assez)." },
      { title: "WISH + past perfect — regret du passé", content: "On regrette quelque chose du passé. Ex : I wish I had studied harder." },
      { title: "WISH + would — agacement, demande de changement", content: "Ex : I wish you would stop talking (= ça m'énerve)." },
      { title: "IF ONLY — version plus forte de WISH", content: "Ex : If only I had known! Même structures que WISH, mais plus émotionnel." }
    ],
    examples: [
      { en: 'I wish I had a bigger house.', fr: "J'aimerais avoir une plus grande maison.", note: 'Souhait présent' },
      { en: 'I wish I had said something.', fr: "J'aurais voulu dire quelque chose.", note: 'Regret passé' },
      { en: 'I wish he would stop complaining.', fr: "J'aimerais qu'il arrête de se plaindre.", note: 'Agacement' },
      { en: 'If only I were younger!', fr: 'Si seulement j\'étais plus jeune !' }
    ],
    pitfalls: [
      "WISH + present simple ❌ : 'I wish I have' → 'I wish I had' ✅",
      "Pour parler du passé : WISH + had + V3."
    ],
    tip: "Toujours décaler d'un cran dans le passé : WISH I HAD (présent) → WISH I HAD HAD (passé)."
  },

  {
    id: 'relative-pronouns', category: 'pronouns', level: 'B1', tier: 2,
    label: 'Pronoms relatifs (who, which, that, whose...)',
    summary: "Connecter deux propositions. Choisir le bon pronom selon l'antécédent.",
    rules: [
      { title: "WHO / WHOM — personnes", content: "WHO comme sujet. WHOM comme objet (formel). Ex : The man WHO called me / The man WHOM I met." },
      { title: "WHICH — choses et animaux", content: "Ex : The book WHICH I read." },
      { title: "THAT — personnes ou choses (informel)", content: "THAT remplace WHO ou WHICH dans les propositions DÉTERMINATIVES (sans virgules)." },
      { title: "WHOSE — possession", content: "WHOSE = dont le/la. Ex : The man WHOSE car is red." },
      { title: "Defining vs Non-defining", content: "DEFINING (sans virgules) : THAT possible. NON-DEFINING (avec virgules) : WHO/WHICH uniquement, pas THAT. Ex : My brother, WHO lives in Paris, is a doctor." },
      { title: "Omission du relatif quand objet", content: "Quand le relatif est OBJET : 'The book (that) I read was good.' Obligatoire quand sujet." }
    ],
    examples: [
      { en: 'The woman who lives next door is a teacher.', fr: 'La femme qui habite à côté est professeur.' },
      { en: 'The book (which) I bought is fascinating.', fr: "Le livre que j'ai acheté est fascinant." },
      { en: 'The student whose project won is here.', fr: "L'étudiant dont le projet a gagné est ici." },
      { en: 'My brother, who is a doctor, lives in Lyon.', fr: 'Mon frère, qui est médecin, vit à Lyon.', note: 'Non-defining' }
    ],
    pitfalls: [
      "THAT INTERDIT en non-defining (avec virgules) : 'My brother, that lives...' ❌",
      "Omission OK quand OBJET. PAS quand SUJET."
    ]
  },

  {
    id: 'despite-although', category: 'connectors', level: 'B1', tier: 2,
    label: 'In spite of / Despite vs Although',
    summary: "**Souvent confondus, classique du TOEIC.** Tous expriment l'opposition mais avec une structure différente.",
    rules: [
      { title: "ALTHOUGH / EVEN THOUGH / THOUGH + proposition", content: "Suivis d'une proposition complète (sujet + verbe). Ex : Although it was raining, we went out." },
      { title: "DESPITE / IN SPITE OF + nom ou -ing", content: "Suivis d'un NOM ou d'un GÉRONDIF. Ex : Despite the rain, we went out. / In spite of being tired, he kept working." },
      { title: "Erreur fréquente : 'Despite of'", content: "❌ Despite OF — n'existe pas ! ✅ Despite (sans 'of') / In spite OF" }
    ],
    examples: [
      { en: 'Although it was cold, we went swimming.', fr: "Bien qu'il fasse froid, nous sommes allés nager." },
      { en: 'Despite the cold, we went swimming.', fr: 'Malgré le froid, nous sommes allés nager.' },
      { en: 'In spite of being late, he finished the work.', fr: "Bien qu'étant en retard, il a fini le travail." }
    ],
    pitfalls: [
      "DESPITE OF ❌ — c'est juste DESPITE.",
      "ALTHOUGH + sujet+verbe / DESPITE + nom ou -ing. 'Despite she was tired' ❌"
    ],
    tip: "ALTHOUGH = conjonction (+ phrase). DESPITE = préposition (+ nom)."
  },

  {
    id: 'connectors-advanced-b1', category: 'connectors', level: 'B1', tier: 2,
    label: 'However vs But (registre et placement)',
    summary: "Deux mots d'opposition avec des usages différents.",
    rules: [
      { title: "BUT — conjonction de coordination", content: "BUT relie 2 propositions DANS la même phrase. Ex : It was raining, but we went out." },
      { title: "HOWEVER — adverbe de liaison", content: "HOWEVER s'utilise au DÉBUT d'une nouvelle phrase, suivi d'une VIRGULE. Plus formel. Ex : It was raining. However, we went out." },
      { title: "Registre", content: "BUT = neutre, oral et écrit. HOWEVER = formel, écrit. À l'écrit académique/TOEIC, préfère HOWEVER." }
    ],
    examples: [
      { en: "I was tired, but I kept working.", fr: "J'étais fatigué, mais j'ai continué." },
      { en: "I was tired. However, I kept working.", fr: "J'étais fatigué. Cependant, j'ai continué." }
    ],
    pitfalls: [
      "Pas 'However' au milieu sans virgules : 'I was tired however I worked' ❌",
      "Pas 'But' en début de phrase formelle (éviter à l'écrit académique)."
    ]
  },

  {
    id: 'most-some-none-of', category: 'determiners', level: 'B1', tier: 2,
    label: 'Most of / Some of / None of + the/my',
    summary: "Quantifieurs avec OF pour parler d'une partie d'un groupe spécifique.",
    rules: [
      { title: "Quantifieur SEUL vs Quantifieur + OF", content: "Seul = sens général : Most people are nice. Avec OF + THE/MY = sens spécifique : Most OF the people here." },
      { title: "Accord du verbe", content: "OF + pluriel → verbe au pluriel. OF + indénombrable → singulier. Ex : Most of the books ARE old. / Most of the work IS done." }
    ],
    examples: [
      { en: 'Most of my friends speak English.', fr: 'La plupart de mes amis parlent anglais.' },
      { en: 'Some of these books are very old.', fr: 'Certains de ces livres sont très vieux.' },
      { en: 'None of the candidates were selected.', fr: "Aucun des candidats n'a été retenu." }
    ],
    pitfalls: [
      "OF nécessaire devant THE/MY/THIS : 'Most the books' ❌ → 'Most OF the books' ✅",
      "Sans OF si général : 'Most of people' ❌ → 'Most people' ✅"
    ]
  },

  {
    id: 'reported-speech', category: 'verbs-structures', level: 'B1', tier: 3,
    label: 'Discours rapporté (reported speech)',
    summary: "Rapporter des paroles : concordance des temps, pronoms, marqueurs.",
    rules: [
      { title: "Concordance des temps (backshift)", content: "Quand le verbe introducteur est au passé, on recule d'un temps :\nPresent simple → Past simple / Will → Would / Can → Could / Must → Had to / Present perfect → Past perfect." },
      { title: "SAY vs TELL", content: "SAY (à quelqu'un) : sans complément direct. TELL : avec complément direct OBLIGATOIRE. Ex : He said he was tired. / He TOLD ME he was tired. ❌ He said me / He told that he was tired." },
      { title: "Questions rapportées", content: "Pas d'inversion, pas de point d'interrogation. Yes/no questions : IF ou WHETHER. Ex : 'Are you ready?' → He asked IF I was ready." },
      { title: "Ordres rapportés", content: "TELL/ASK + obj + TO + verbe. Ex : 'Be quiet!' → He told us to be quiet." }
    ],
    examples: [
      { en: '"I am tired." → She said (that) she was tired.', fr: '"Je suis fatiguée." → Elle a dit qu\'elle était fatiguée.' },
      { en: '"I will help you." → He told me he would help me.', fr: '"Je vais t\'aider." → Il m\'a dit qu\'il allait m\'aider.' },
      { en: '"Are you ready?" → She asked if I was ready.', fr: '"Es-tu prêt ?" → Elle a demandé si j\'étais prêt.' },
      { en: '"Be quiet!" → He told us to be quiet.', fr: '"Soyez silencieux !" → Il nous a dit de nous taire.' }
    ],
    pitfalls: [
      "Pas d'inversion dans les questions rapportées : 'He asked where did I live' ❌",
      "SAY sans complément direct, TELL avec : 'He said me' ❌ → 'He told me' ✅"
    ]
  },

  // ══════════════════════════════════════════
  // B2 — 10 leçons (TOEIC 700+)
  // ══════════════════════════════════════════

  {
    id: 'phrasal-verbs-intro', category: 'verbs-structures', level: 'B2', tier: 1,
    label: 'Phrasal verbs : introduction et structure',
    summary: "**Chapitre clé pour le TOEIC.** Les verbes à particule sont partout en anglais courant et business.",
    rules: [
      { title: "Qu'est-ce qu'un phrasal verb ?", content: "Verbe + particule (adverbe ou préposition) qui forme un sens nouveau. Ex : look = regarder. Mais look UP = chercher, look FOR = chercher, look AFTER = s'occuper de." },
      { title: "Phrasal verbs SÉPARABLES", content: "Pronom DOIT être au milieu. Nom : peut être au milieu OU après. Ex : I picked UP my keys = I picked my keys UP. Mais : I picked THEM up (pas 'picked up them')." },
      { title: "Phrasal verbs INSÉPARABLES", content: "Le complément vient APRÈS. Ex : I depend ON him (pas 'I depend him on')." },
      { title: "Phrasal verbs à 3 mots (toujours inséparables)", content: "put up with (supporter), look forward to, come up with, get along with, run out of." }
    ],
    examples: [
      { en: 'I picked her up at the airport.', fr: "Je l'ai récupérée à l'aéroport.", note: 'separable, pronom au milieu' },
      { en: "I can't put up with this noise!", fr: 'Je ne supporte pas ce bruit !', note: '3 mots, inséparable' },
      { en: 'We ran out of coffee.', fr: "On n'avait plus de café." }
    ],
    pitfalls: [
      "Pronom TOUJOURS au milieu pour séparable : 'I picked up them' ❌ → 'I picked them up' ✅",
      "Pas de séparation pour inséparable."
    ],
    tip: "Apprends les phrasal verbs comme du VOCABULAIRE, pas comme de la grammaire."
  },

  {
    id: 'phrasal-verbs-toeic', category: 'verbs-structures', level: 'B2', tier: 1,
    label: 'Phrasal verbs essentiels TOEIC',
    summary: "Liste des phrasal verbs les plus fréquents au TOEIC, à mémoriser absolument.",
    rules: [
      { title: "Business / Bureau", content: "• carry out = effectuer\n• set up = mettre en place\n• take over = reprendre\n• point out = signaler\n• deal with = gérer\n• look into = enquêter sur\n• come up with = proposer\n• call off = annuler\n• put off = reporter\n• bring up = soulever (un sujet)" },
      { title: "Quotidien", content: "• get up, wake up, turn on/off, turn up/down, pick up, put on, take off, try on, throw away." },
      { title: "Relations / Communication", content: "• get along with = s'entendre avec\n• catch up with = rattraper\n• run into = tomber sur\n• look after = s'occuper de\n• count on = compter sur" },
      { title: "Difficulté / Problèmes", content: "• put up with = supporter\n• give up = abandonner\n• figure out = comprendre\n• run out of = manquer de\n• break down = tomber en panne\n• go through = traverser (épreuve)" }
    ],
    examples: [
      { en: 'The meeting was called off due to weather.', fr: 'La réunion a été annulée à cause de la météo.' },
      { en: 'Can you look into this issue?', fr: 'Pouvez-vous enquêter sur ce problème ?' },
      { en: 'I look forward to hearing from you.', fr: "J'attends de vos nouvelles avec impatience.", note: 'Email business classique' },
      { en: 'We need to come up with a solution.', fr: 'Nous devons trouver une solution.' }
    ],
    pitfalls: [
      "Look forward TO + V-ing : 'I look forward to meeting you' (pas 'to meet').",
      "Les phrasal verbs varient en registre : 'call off' (informel) vs 'cancel' (formel)."
    ],
    tip: "Top 5 TOEIC : carry out, set up, deal with, point out, look forward to."
  },

  {
    id: 'participle-clauses', category: 'verbs-structures', level: 'B2', tier: 2,
    label: 'Participle clauses (Walking down the street...)',
    summary: "Structures élégantes pour combiner deux actions sans utiliser de conjonction.",
    rules: [
      { title: "Present participle (-ING) — action simultanée ou cause", content: "Ex : Walking down the street, I saw an accident = While I was walking... / Feeling tired, he went to bed = Because he felt tired..." },
      { title: "Past participle (V3) — sens passif", content: "Ex : Built in 1850, the house is now a museum = The house, which was built in 1850, is now a museum." },
      { title: "Perfect participle (HAVING + V3) — antériorité", content: "Ex : Having finished her work, she left = After she had finished her work, she left." },
      { title: "Règle importante : même sujet", content: "Le participe et la proposition principale DOIVENT avoir le même sujet. Sinon 'dangling participle' : 'Walking down the street, the rain started' ❌" }
    ],
    examples: [
      { en: 'Walking home, I met an old friend.', fr: "En rentrant à pied, j'ai rencontré un vieil ami." },
      { en: 'Built in 1900, the church is a historic monument.', fr: "Construite en 1900, l'église est un monument historique." },
      { en: 'Having finished the project, we celebrated.', fr: 'Ayant fini le projet, nous avons célébré.' }
    ],
    pitfalls: [
      "Sujets différents = phrase incorrecte. 'Reading the book, the phone rang' ❌",
      "Past participle (V3) = sens passif. Present participle (-ing) = sens actif."
    ],
    tip: "Style élégant utilisé dans les rapports, lettres formelles."
  },

  {
    id: 'participles-as-adjectives', category: 'verbs-structures', level: 'B2', tier: 1,
    label: 'Participes adjectifs (boring vs bored)',
    summary: "**Piège classique au TOEIC.** -ING décrit la cause, -ED décrit le ressenti.",
    rules: [
      { title: "Adjectifs en -ING — cause/description", content: "Décrit la CHOSE/PERSONNE qui CAUSE l'émotion. Ex : The movie was BORING." },
      { title: "Adjectifs en -ED — ressenti", content: "Décrit la PERSONNE qui RESSENT l'émotion. Ex : I am BORED." },
      { title: "Paires courantes", content: "boring/bored, interesting/interested, exciting/excited, tiring/tired, confusing/confused, surprising/surprised, shocking/shocked, disappointing/disappointed, embarrassing/embarrassed, frightening/frightened, amazing/amazed, annoying/annoyed." }
    ],
    examples: [
      { en: 'The lecture was boring. I was bored.', fr: "La conférence était ennuyeuse. J'étais ennuyé." },
      { en: "It's an interesting book. I'm interested in it.", fr: "C'est un livre intéressant. Je m'y intéresse." },
      { en: 'The instructions are confusing. I\'m confused.', fr: 'Les instructions sont confuses. Je suis confus.' }
    ],
    pitfalls: [
      "Erreur ultra fréquente : 'I am very interesting' ❌ → 'I am very interested' ✅",
      "'The book is bored' ❌ → 'The book is boring' ✅"
    ],
    tip: "Je suis borED par un film borING."
  },

  {
    id: 'connectors-cause-effect', category: 'connectors', level: 'B2', tier: 2,
    label: 'Connecteurs de cause et conséquence',
    summary: "Variétés formelles pour le TOEIC et l'écrit.",
    rules: [
      { title: "Cause (parce que, en raison de)", content: "• + proposition (S+V) : because, since, as, now that.\n• + nom ou V-ing : because of, due to, owing to, on account of." },
      { title: "Conséquence (donc, par conséquent)", content: "• Coordination : so, and so.\n• Adverbes de liaison (début de phrase + virgule) : therefore, thus, hence, consequently, as a result, as a consequence." },
      { title: "Erreur typique TOEIC", content: "DUE TO + nom (pas + proposition). ❌ 'Due to it was raining' → ✅ 'Due to the rain' / 'Because it was raining'." }
    ],
    examples: [
      { en: 'The flight was cancelled due to bad weather.', fr: 'Le vol a été annulé en raison du mauvais temps.' },
      { en: "Since you're here, can you help me?", fr: 'Puisque tu es là, peux-tu m\'aider ?' },
      { en: 'It was raining; therefore, we stayed home.', fr: 'Il pleuvait ; par conséquent, nous sommes restés.' }
    ],
    pitfalls: [
      "DUE TO/OWING TO/BECAUSE OF + nom (pas + proposition).",
      "BECAUSE + proposition (S+V)."
    ],
    tip: "Pour le TOEIC écrit, préfère THEREFORE, THUS, AS A RESULT à 'so'."
  },

  {
    id: 'connectors-concession-addition', category: 'connectors', level: 'B2', tier: 2,
    label: 'Connecteurs de concession et addition',
    summary: "Pour structurer des arguments contrastés ou cumulatifs.",
    rules: [
      { title: "Concession (malgré, néanmoins)", content: "nevertheless / nonetheless = néanmoins (formel), regardless of + nom = peu importe, even so = même ainsi, still = quand même, yet = pourtant." },
      { title: "Addition", content: "furthermore / moreover = de plus (formel), in addition (to) = en outre, besides = par ailleurs, additionally, not to mention, on top of that." }
    ],
    examples: [
      { en: "The plan was risky; nevertheless, they decided to proceed.", fr: 'Le plan était risqué ; néanmoins, ils ont décidé de continuer.' },
      { en: 'In addition to being expensive, the project is also risky.', fr: "En plus d'être cher, le projet est aussi risqué." },
      { en: 'Furthermore, the deadline is unrealistic.', fr: 'De plus, la deadline est irréaliste.' }
    ],
    pitfalls: [
      "NEVERTHELESS, MOREOVER, FURTHERMORE : virgule après en début de phrase.",
      "BESIDES (en plus) ≠ BESIDE (à côté de)."
    ]
  },

  {
    id: 'inversion-negative', category: 'sentence', level: 'B2', tier: 3,
    label: 'Inversions stylistiques (Never have I...)',
    summary: "Style soutenu : quand un adverbe négatif commence la phrase, on inverse.",
    rules: [
      { title: "Règle générale", content: "Quand un adverbe négatif ou restrictif est en début de phrase, on inverse SUJET et AUXILIAIRE. Ex : NEVER have I seen such a thing." },
      { title: "Adverbes concernés", content: "Never, Rarely, Seldom, Hardly, Scarcely, No sooner... than, Not only... but also, Not until, Only then, Only after." },
      { title: "Sans auxiliaire ? On ajoute DO/DOES/DID", content: "Ex : I rarely go → Rarely DO I go. She never spoke → Never DID she speak." }
    ],
    examples: [
      { en: 'Never have I seen such a beautiful sunset.', fr: "Jamais je n'ai vu un coucher de soleil si beau." },
      { en: 'Rarely do we get such opportunities.', fr: 'Rarement avons-nous de telles opportunités.' },
      { en: 'Not only did he apologize, but he also paid.', fr: 'Non seulement il s\'est excusé, mais il a aussi payé.' }
    ],
    pitfalls: [
      "Inversion OBLIGATOIRE après ces adverbes en tête : 'Never I have seen' ❌ → 'Never have I seen' ✅"
    ],
    tip: "Pense : « comme dans une question, mais sans le point d'interrogation »."
  },

  {
    id: 'articles-advanced', category: 'determiners', level: 'B2', tier: 3,
    label: 'Articles fins (géographie, institutions)',
    summary: "Nuances des articles pour atteindre B2/C1.",
    rules: [
      { title: "THE avec noms géographiques", content: "Avec THE : océans, mers, fleuves, chaînes de montagnes, déserts, archipels, certains pays. Ex : the Pacific, the Nile, the Alps, the United States, the UK.\nSans THE : continents, pays (en général), villes, montagnes individuelles, lacs. Ex : France, Paris, Mount Everest." },
      { title: "THE + adjectif = groupe de personnes", content: "the rich, the poor, the elderly, the unemployed. The French, the British (nationalités en -ish, -ese, -ch)." }
    ],
    examples: [
      { en: 'I want to visit the Alps and the Mediterranean.', fr: 'Je veux visiter les Alpes et la Méditerranée.' },
      { en: 'The rich often forget about the poor.', fr: 'Les riches oublient souvent les pauvres.' }
    ],
    pitfalls: [
      "Pas de THE devant les pays sauf exceptions : 'the France' ❌ → 'France' ✅",
      "Mais : 'the United States', 'the UK', 'the Netherlands'."
    ]
  },

  {
    id: 'compound-nouns', category: 'nouns', level: 'B2', tier: 2,
    label: 'Compound nouns (mots composés)',
    summary: "Combiner plusieurs mots pour former un nom unique.",
    rules: [
      { title: "Structures fréquentes", content: "• nom + nom : toothbrush, swimming pool, bus stop\n• adjectif + nom : blackboard, greenhouse\n• verbe + nom : washing machine, dining room" },
      { title: "Écriture : 3 formats", content: "Un seul mot (toothbrush), deux mots (bus stop), trait d'union (mother-in-law). Pas de règle absolue → mémorisation." },
      { title: "Premier mot = invariable", content: "Le premier mot reste au singulier : a SHOE shop (pas 'shoes shop'). A TWO-YEAR-OLD child." },
      { title: "Pluriel : sur le DERNIER mot", content: "toothbrushes, swimming pools, bus stops. Exception : mother-IN-LAW → mothers-in-law." }
    ],
    examples: [
      { en: 'I bought a new toothbrush.', fr: "J'ai acheté une nouvelle brosse à dents." },
      { en: 'The bus stop is around the corner.', fr: "L'arrêt de bus est au coin de la rue." },
      { en: 'She has three sisters-in-law.', fr: 'Elle a trois belles-sœurs.' }
    ],
    pitfalls: [
      "Premier mot invariable : 'a shoes shop' ❌ → 'a shoe shop' ✅",
      "Age compound : 'a 5-years-old boy' ❌ → 'a 5-year-old boy' ✅"
    ]
  },

  {
    id: 'causative', category: 'verbs-structures', level: 'B2', tier: 2,
    label: 'Causative : have/get something done',
    summary: "Faire faire quelque chose par quelqu'un d'autre (un professionnel).",
    rules: [
      { title: "HAVE something DONE — formel", content: "HAVE + objet + V3. Ex : I had my car repaired (je l'ai fait réparer)." },
      { title: "GET something DONE — informel", content: "Même sens, plus oral. Ex : I got my hair cut. / She got her phone fixed." },
      { title: "Tous les temps", content: "Présent : I have my car cleaned. / Past : I had my house painted. / Future : I'll have my eyes tested." },
      { title: "Le sujet ne fait PAS l'action lui-même", content: "I cleaned my car (moi-même) vs I had my car cleaned (par quelqu'un)." }
    ],
    examples: [
      { en: 'I had my hair cut yesterday.', fr: 'Je me suis fait couper les cheveux hier.' },
      { en: 'She got her car serviced.', fr: 'Elle a fait réviser sa voiture.' },
      { en: "We're having our house painted.", fr: 'On fait peindre notre maison.' }
    ],
    pitfalls: [
      "Ordre : HAVE + OBJET + V3 (pas l'inverse). 'I had repaired my car' = je l'avais réparée moi-même !",
      "GET est plus informel que HAVE, même sens."
    ],
    tip: "Si tu paies quelqu'un pour faire l'action → HAVE/GET + obj + V3."
  }

];

// ══════════════════════════════════════════
// EXERCICES
// ══════════════════════════════════════════
const EXERCISES = [
  // PRESENT SIMPLE
  { id: 'ps-001', lessonId: 'present-simple', type: 'mcq', tier: 1, prompt: 'He _____ to work every day.', options: ['go', 'goes', 'is going', 'went'], answer: 'goes', explanation: '3e pers. singulier → -S' },
  { id: 'ps-002', lessonId: 'present-simple', type: 'blank', tier: 1, prompt: 'She _____ coffee in the morning.', answer: 'drinks', explanation: 'Habitude → Present Simple' },
  { id: 'ps-003', lessonId: 'present-simple', type: 'error', tier: 1, prompt: "He don't like ice cream.", errorWord: "don't", answer: "doesn't", explanation: '3e pers. → DOES NOT' },
  { id: 'ps-004', lessonId: 'present-simple', type: 'blank', tier: 1, prompt: 'The sun _____ in the east.', answer: 'rises', explanation: 'Vérité générale' },
  { id: 'ps-005', lessonId: 'present-simple', type: 'mcq', tier: 1, prompt: 'Do you _____ sports?', options: ['play', 'plays', 'are playing', 'playing'], answer: 'play', explanation: 'Base après DO' },

  // PRESENT CONTINUOUS
  { id: 'pc-001', lessonId: 'present-continuous', type: 'mcq', tier: 1, prompt: 'I _____ a book right now.', options: ['read', 'am reading', 'reads', 'reading'], answer: 'am reading', explanation: 'NOW → Continuous' },
  { id: 'pc-002', lessonId: 'present-continuous', type: 'blank', tier: 1, prompt: 'She _____ her homework.', answer: 'is doing', explanation: 'BE + V-ING' },
  { id: 'pc-003', lessonId: 'present-continuous', type: 'error', tier: 1, prompt: 'He is play in the garden.', errorWord: 'play', answer: 'playing', explanation: 'BE + -ING (pas base)' },
  { id: 'pc-004', lessonId: 'present-continuous', type: 'mcq', tier: 1, prompt: 'Are you _____ tomorrow?', options: ['coming', 'come', 'comes', 'to come'], answer: 'coming', explanation: 'Futur planifié' },

  // PAST SIMPLE
  { id: 'pas-001', lessonId: 'past-simple', type: 'mcq', tier: 1, prompt: 'Yesterday, I _____ to the cinema.', options: ['go', 'went', 'goes', 'going'], answer: 'went', explanation: 'Yesterday → irrégulier' },
  { id: 'pas-002', lessonId: 'past-simple', type: 'blank', tier: 1, prompt: 'She _____ breakfast at 8am.', answer: 'ate', explanation: 'Moment précis → Past Simple' },
  { id: 'pas-003', lessonId: 'past-simple', type: 'error', tier: 1, prompt: 'I goed to Paris.', errorWord: 'goed', answer: 'went', explanation: 'Irrégulier: went' },
  { id: 'pas-004', lessonId: 'past-simple', type: 'transform', tier: 1, prompt: 'Négatif: "He worked" → "He _____ ."', answer: "didn't work", explanation: 'DID NOT + base' },
  { id: 'pas-005', lessonId: 'past-simple', type: 'mcq', tier: 1, prompt: 'Did she _____ the film?', options: ['saw', 'see', 'sees', 'seeing'], answer: 'see', explanation: 'Base après DID' },

  // FUTURE (lessonId mis à jour : future-will → future-will-going-to)
  { id: 'fut-001', lessonId: 'future-will-going-to', type: 'mcq', tier: 1, prompt: 'I think it _____ rain tomorrow.', options: ['will', 'am going to', 'is raining', 'rains'], answer: 'will', explanation: 'Prédiction sans preuve → WILL' },
  { id: 'fut-002', lessonId: 'future-will-going-to', type: 'blank', tier: 1, prompt: 'I _____ to start a diet on Monday.', answer: 'am going', explanation: 'Plan préexistant → GOING TO' },
  { id: 'fut-003', lessonId: 'future-will-going-to', type: 'error', tier: 1, prompt: 'If you will come, I will help you.', errorWord: 'will come', answer: 'come', explanation: 'Pas WILL après IF' },
  { id: 'fut-004', lessonId: 'future-will-going-to', type: 'mcq', tier: 1, prompt: "OK, I _____ do it!", options: ['am going to', 'will', "'ll", "both will/'ll"], answer: "both will/'ll", explanation: 'Décision spontanée' },

  // PRESENT PERFECT
  { id: 'pp-001', lessonId: 'present-perfect', type: 'mcq', tier: 1, prompt: 'I _____ to Paris three times.', options: ['have been', 'went', 'have gone', 'am going'], answer: 'have been', explanation: 'Expérience → HAVE BEEN' },
  { id: 'pp-002', lessonId: 'present-perfect', type: 'blank', tier: 1, prompt: 'She _____ her homework.', answer: 'has finished', explanation: 'Action juste terminée' },
  { id: 'pp-003', lessonId: 'present-perfect', type: 'error', tier: 1, prompt: 'I have saw him yesterday.', errorWord: 'saw', answer: 'seen', explanation: 'HAVE + V3 (seen, pas saw)' },
  { id: 'pp-004', lessonId: 'present-perfect', type: 'mcq', tier: 1, prompt: 'Have you _____ sushi?', options: ['eaten', 'eat', 'ate', 'eating'], answer: 'eaten', explanation: 'Ever + PP' },
  { id: 'pp-005', lessonId: 'present-perfect', type: 'blank', tier: 1, prompt: 'We have lived here _____ 2020.', answer: 'since', explanation: 'Date précise → SINCE' },
  { id: 'pp-006', lessonId: 'present-perfect', type: 'mcq', tier: 1, prompt: 'They have been waiting _____ two hours.', options: ['since', 'for', 'during', 'ago'], answer: 'for', explanation: 'Durée → FOR' },
  { id: 'pp-007', lessonId: 'present-perfect', type: 'blank', tier: 1, prompt: 'I have never _____ such a beautiful place.', answer: 'seen', explanation: 'Never + PP' },
  { id: 'pp-008', lessonId: 'present-perfect', type: 'error', tier: 1, prompt: 'He has went to the store.', errorWord: 'went', answer: 'gone', explanation: 'V3: gone' },
  { id: 'pp-009', lessonId: 'present-perfect', type: 'mcq', tier: 1, prompt: 'Have you finished _____?', options: ['already', 'yet', 'still', 'anymore'], answer: 'yet', explanation: 'Yet en fin de phrase/question' },
  { id: 'pp-010', lessonId: 'present-perfect', type: 'blank', tier: 1, prompt: 'She has _____ left (=departed already).', answer: 'already', explanation: 'Already = déjà (positif)' },

  // PAST CONTINUOUS
  { id: 'pac-001', lessonId: 'past-continuous', type: 'mcq', tier: 1, prompt: 'I _____ when the phone rang.', options: ['slept', 'was sleeping', 'am sleeping', 'sleep'], answer: 'was sleeping', explanation: 'Action interrompue au passé' },
  { id: 'pac-002', lessonId: 'past-continuous', type: 'blank', tier: 1, prompt: 'They _____ in the park at 3pm.', answer: 'were playing', explanation: 'Moment précis du passé' },
  { id: 'pac-003', lessonId: 'past-continuous', type: 'error', tier: 1, prompt: 'While she was cook, he arrived.', errorWord: 'cook', answer: 'cooking', explanation: 'WAS + V-ING' },
  { id: 'pac-004', lessonId: 'past-continuous', type: 'mcq', tier: 1, prompt: 'Were you _____ when I called?', options: ['study', 'studied', 'studying', 'studies'], answer: 'studying', explanation: 'WAS/WERE + V-ING' },

  // CONDITIONALS
  { id: 'c0-001', lessonId: 'conditional-0', type: 'mcq', tier: 1, prompt: 'If you heat water, it _____.', options: ['will boil', 'boils', 'is boiling', 'boil'], answer: 'boils', explanation: 'Vérité générale → present' },

  { id: 'c1-001', lessonId: 'conditional-1', type: 'mcq', tier: 1, prompt: 'If it rains, I _____ stay home.', options: ['will', 'am going to', 'would', 'shall'], answer: 'will', explanation: 'First conditional: IF present → WILL' },
  { id: 'c1-002', lessonId: 'conditional-1', type: 'blank', tier: 1, prompt: 'If you study, you _____ pass.', answer: 'will', explanation: 'IF + present → WILL + base' },
  { id: 'c1-003', lessonId: 'conditional-1', type: 'error', tier: 1, prompt: 'If you will come, we can play.', errorWord: 'will come', answer: 'come', explanation: 'Jamais WILL après IF' },
  { id: 'c1-004', lessonId: 'conditional-1', type: 'mcq', tier: 1, prompt: "Unless you _____, you won't pass.", options: ['study', 'will study', 'studying', 'studies'], answer: 'study', explanation: 'UNLESS = IF NOT' },

  { id: 'c2-001', lessonId: 'conditional-2', type: 'mcq', tier: 2, prompt: 'If I had time, I _____ travel.', options: ['would', 'will', 'have', 'did'], answer: 'would', explanation: 'Second conditional: WOULD' },
  { id: 'c2-002', lessonId: 'conditional-2', type: 'blank', tier: 2, prompt: 'If I _____ you, I would apologize.', answer: 'were', explanation: 'Second conditional + BE = WERE' },
  { id: 'c2-003', lessonId: 'conditional-2', type: 'error', tier: 2, prompt: 'If I would have money, I would buy a car.', errorWord: 'would have', answer: 'had', explanation: 'IF + past simple (pas would)' },

  { id: 'c3-001', lessonId: 'conditional-3', type: 'mcq', tier: 2, prompt: 'If I had studied, I _____ passed.', options: ['would have', 'will have', 'have', 'had'], answer: 'would have', explanation: 'Third conditional: WOULD HAVE' },
  { id: 'c3-002', lessonId: 'conditional-3', type: 'blank', tier: 2, prompt: "If we _____ left earlier, we wouldn't have been late.", answer: 'had', explanation: 'IF + had + V3' },
  { id: 'c3-003', lessonId: 'conditional-3', type: 'error', tier: 2, prompt: 'If I would have known, I would come.', errorWord: 'would have', answer: 'had', explanation: 'IF + had (pas would have)' },

  // MODAUX (lessonId mis à jour : modal-can / modal-must → modal-can-must-should)
  { id: 'mod-001', lessonId: 'modal-can-must-should', type: 'mcq', tier: 1, prompt: 'I _____ speak three languages.', options: ['can', 'cans', 'able to', 'have'], answer: 'can', explanation: 'CAN = capacité' },
  { id: 'mod-002', lessonId: 'modal-can-must-should', type: 'blank', tier: 1, prompt: 'She _____ sing beautifully.', answer: 'can', explanation: 'Capacité' },
  { id: 'mod-003', lessonId: 'modal-can-must-should', type: 'error', tier: 1, prompt: 'He can to swim.', errorWord: 'can to', answer: 'can', explanation: 'Pas TO après modal' },
  { id: 'mod-must-001', lessonId: 'modal-can-must-should', type: 'mcq', tier: 1, prompt: 'You _____ finish this today.', options: ['must', 'must to', 'musts', 'have to'], answer: 'must', explanation: 'Obligation forte' },
  { id: 'mod-must-002', lessonId: 'modal-can-must-should', type: 'blank', tier: 1, prompt: 'He _____ be at the meeting.', answer: 'must', explanation: 'Obligation' },
  { id: 'mod-must-003', lessonId: 'modal-can-must-should', type: 'error', tier: 1, prompt: 'She must goes to school.', errorWord: 'goes', answer: 'go', explanation: 'Base après MUST' },
  { id: 'mod-must-004', lessonId: 'modal-can-must-should', type: 'mcq', tier: 1, prompt: 'You _____ not smoke here.', options: ['must', 'can', 'should', 'might'], answer: 'must', explanation: "MUSTN'T = interdit" },
  { id: 'mod-must-005', lessonId: 'modal-can-must-should', type: 'mcq', tier: 1, prompt: "You _____ come if you don't want to.", options: ["mustn't", "don't have to", "shouldn't", "can't"], answer: "don't have to", explanation: 'Pas obligé' },

  // GERUND vs INFINITIVE
  { id: 'gi-001', lessonId: 'gerund-infinitive', type: 'mcq', tier: 1, prompt: 'I enjoy _____ books.', options: ['read', 'reading', 'to read', 'reads'], answer: 'reading', explanation: 'ENJOY + -ING' },
  { id: 'gi-002', lessonId: 'gerund-infinitive', type: 'blank', tier: 1, prompt: 'She wants _____ abroad.', answer: 'to study', explanation: 'WANT + TO + V' },
  { id: 'gi-003', lessonId: 'gerund-infinitive', type: 'mcq', tier: 1, prompt: 'He decided _____ the job.', options: ['take', 'taking', 'to take', 'takes'], answer: 'to take', explanation: 'DECIDE + TO + V' },
  { id: 'gi-004', lessonId: 'gerund-infinitive', type: 'blank', tier: 1, prompt: 'I stopped _____ smoking five years ago.', answer: 'smoking', explanation: 'STOP + -ING = arrêter' },
  { id: 'gi-005', lessonId: 'gerund-infinitive', type: 'mcq', tier: 1, prompt: 'She suggested _____ late.', options: ['stay', 'staying', 'to stay', 'stays'], answer: 'staying', explanation: 'SUGGEST + -ING' },
  { id: 'gi-006', lessonId: 'gerund-infinitive', type: 'blank', tier: 1, prompt: 'I am interested in _____ French.', answer: 'learning', explanation: 'Après préposition: toujours -ING' },
  { id: 'gi-007', lessonId: 'gerund-infinitive', type: 'error', tier: 1, prompt: 'They finished to work at 5pm.', errorWord: 'to work', answer: 'working', explanation: 'FINISH + -ING' },
  { id: 'gi-008', lessonId: 'gerund-infinitive', type: 'mcq', tier: 2, prompt: 'I remember _____ her as a child.', options: ['meet', 'to meet', 'meeting', 'meets'], answer: 'meeting', explanation: "REMEMBER + -ING = souvenir d'avoir" },
  { id: 'gi-009', lessonId: 'gerund-infinitive', type: 'mcq', tier: 2, prompt: "Don't forget _____ your keys!", options: ['taking', 'to take', 'take', 'takes'], answer: 'to take', explanation: 'FORGET TO DO = oublier de' },

  // PASSIVE VOICE
  { id: 'pv-001', lessonId: 'passive-voice', type: 'mcq', tier: 1, prompt: 'English _____ in many countries.', options: ['is spoken', 'speaks', 'spoken', 'is speak'], answer: 'is spoken', explanation: 'Passif: BE + V3' },
  { id: 'pv-002', lessonId: 'passive-voice', type: 'blank', tier: 1, prompt: 'The letter _____ by my grandfather.', answer: 'was written', explanation: 'Passé passif: WAS + V3' },
  { id: 'pv-003', lessonId: 'passive-voice', type: 'error', tier: 1, prompt: 'The house built in 1890.', errorWord: 'built', answer: 'was built', explanation: 'Oublier BE' },
  { id: 'pv-004', lessonId: 'passive-voice', type: 'mcq', tier: 1, prompt: 'The window _____ by the wind.', options: ['broke', 'was broken', 'breaking', 'break'], answer: 'was broken', explanation: 'Passif past' },
  { id: 'pv-005', lessonId: 'passive-voice', type: 'blank', tier: 1, prompt: 'This building _____ in 1920.', answer: 'was built', explanation: 'Passif: BE (temps) + V3' },

  // MODAL PERFECT
  { id: 'mp-001', lessonId: 'modal-perfect', type: 'mcq', tier: 2, prompt: "I _____ called you yesterday. I'm sorry.", options: ['should have', 'must have', 'could have', 'might have'], answer: 'should have', explanation: 'Regret: SHOULD HAVE' },
  { id: 'mp-002', lessonId: 'modal-perfect', type: 'blank', tier: 2, prompt: "She's not here. She _____ left already.", answer: 'must have', explanation: 'Déduction: MUST HAVE' },
  { id: 'mp-003', lessonId: 'modal-perfect', type: 'error', tier: 2, prompt: 'I should of called.', errorWord: 'should of', answer: 'should have', explanation: 'SHOULD HAVE (pas "of")' },
  { id: 'mp-004', lessonId: 'modal-perfect', type: 'mcq', tier: 2, prompt: 'He _____ forgotten - I just reminded him!', options: ["can have", "couldn't have", 'must have', 'should have'], answer: "couldn't have", explanation: "CAN'T HAVE = impossible" },
  { id: 'mp-005', lessonId: 'modal-perfect', type: 'blank', tier: 2, prompt: 'You _____ told me! I would have helped.', answer: 'could have', explanation: 'COULD HAVE = possibilité non faite' },

  // ARTICLES
  { id: 'art-001', lessonId: 'articles-a-an-the', type: 'mcq', tier: 1, prompt: 'I need _____ pen.', options: ['a', 'an', 'the', 'any'], answer: 'a', explanation: 'Son consonne: A' },
  { id: 'art-002', lessonId: 'articles-a-an-the', type: 'blank', tier: 1, prompt: 'She is _____ doctor.', answer: 'a', explanation: 'Profession: A' },
  { id: 'art-003', lessonId: 'articles-a-an-the', type: 'mcq', tier: 1, prompt: 'He is _____ honest man.', options: ['a', 'an', 'the', '—'], answer: 'an', explanation: 'H muet: AN' },
  { id: 'art-004', lessonId: 'articles-a-an-the', type: 'blank', tier: 1, prompt: 'I live in _____ United Kingdom.', answer: 'the', explanation: 'THE United Kingdom' },
  { id: 'art-005', lessonId: 'articles-a-an-the', type: 'error', tier: 1, prompt: 'She speaks the French.', errorWord: 'the', answer: '(rien)', explanation: "Pas d'article devant langues" },
];

// Export
window.GRAMMAR_CATEGORIES = GRAMMAR_CATEGORIES;
window.LEVELS = LEVELS;
window.LESSONS = LESSONS;
window.EXERCISES = EXERCISES;
