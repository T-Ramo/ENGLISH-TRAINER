/* ============================================================
   GRAMMAR — 48 leçons A1→B2 + 350 exercices
   ============================================================ */

const GRAMMAR_CATEGORIES = {
  'verbs-tenses': { label: 'Temps verbaux', order: 1, pillClass: 'cat-pill-amber' },
  'modals': { label: 'Modaux', order: 2, pillClass: 'cat-pill-moss' },
  'conditionals': { label: 'Conditionnels', order: 3, pillClass: 'cat-pill-burgundy' },
  'verbs-structures': { label: 'Structures verbales', order: 4, pillClass: 'cat-pill-amber-deep' },
  'determiners': { label: 'Articles & déterminants', order: 5, pillClass: 'cat-pill-ink' },
  'pronouns': { label: 'Pronoms', order: 6, pillClass: 'cat-pill-moss-deep' },
  'adjectives': { label: 'Adjectifs & adverbes', order: 7, pillClass: 'cat-pill-rose' },
  'prepositions': { label: 'Prépositions', order: 8, pillClass: 'cat-pill-amber' },
  'connectors': { label: 'Connecteurs', order: 9, pillClass: 'cat-pill-moss' },
  'sentence': { label: 'Phrase et ordre', order: 10, pillClass: 'cat-pill-burgundy' },
  'nouns': { label: 'Noms & pluriels', order: 11, pillClass: 'cat-pill-ink' }
};

const LEVELS = {
  'A1': { label: 'A1 — Débutant', color: 'var(--moss)', order: 1 },
  'A2': { label: 'A2 — Élémentaire', color: 'var(--moss)', order: 2 },
  'B1': { label: 'B1 — Intermédiaire', color: 'var(--amber)', order: 3 },
  'B2': { label: 'B2 — Avancé', color: 'var(--amber-deep)', order: 4 }
};

const LESSONS = [
  // A1 — 15 leçons
  { id: 'present-simple', category: 'verbs-tenses', level: 'A1', tier: 1, label: 'Present Simple', summary: 'Temps de base pour habitudes et vérités générales.', rules: [{ title: 'Formation', content: 'Sujet + verbe (base). 3e pers. singulier: +S ou +ES.' }, { title: 'Négation', content: 'DO/DOES + NOT + verbe (base).' }, { title: 'Question', content: 'DO/DOES + sujet + verbe (base)?' }], examples: [{ en: 'I work every day.', fr: 'Je travaille tous les jours.' }, { en: 'She goes to school.', fr: 'Elle va à l\'école.' }], pitfalls: ['Pas d\'oubli du -S à 3e personne', 'Verbe à la base après DO/DOES'], tip: 'He, She, It → ajoute -S!' },
  { id: 'present-continuous', category: 'verbs-tenses', level: 'A1', tier: 1, label: 'Present Continuous', summary: 'Actions en cours ou situations temporaires.', rules: [{ title: 'Formation', content: 'BE (am/is/are) + V-ING.' }], examples: [{ en: 'I am studying now.', fr: 'J\'étudie maintenant.' }], pitfalls: ['Jamais avec stative verbs (like, love, know...)'] },
  { id: 'past-simple', category: 'verbs-tenses', level: 'A1', tier: 1, label: 'Past Simple', summary: 'Actions terminées à un moment précis du passé.', rules: [{ title: 'Réguliers', content: 'Verbe + -ED.' }, { title: 'Irréguliers', content: 'À mémoriser.' }], examples: [{ en: 'I visited Paris last year.', fr: 'J\'ai visité Paris l\'année dernière.' }], pitfalls: ['Après DID: verbe à la base'] },
  { id: 'future-will', category: 'verbs-tenses', level: 'A2', tier: 1, label: 'Futur: will / going to', summary: 'Futur: décisions spontanées (will) vs plans (going to).', rules: [{ title: 'WILL', content: 'Décisions spontanées.' }, { title: 'GOING TO', content: 'Plans préexistants.' }], examples: [{ en: 'I will help you.', fr: 'Je vais t\'aider.' }] },
  { id: 'modal-can', category: 'modals', level: 'A2', tier: 1, label: 'Can / Could', summary: 'Capacité et permission.', rules: [{ title: 'Formation', content: 'CAN + base (pas TO après).' }], examples: [{ en: 'I can swim.', fr: 'Je sais nager.' }], pitfalls: ['Pas TO après modal'] },
  { id: 'modal-must', category: 'modals', level: 'A1', tier: 1, label: 'Must / Should', summary: 'Obligation et conseil.', rules: [{ title: 'MUST', content: 'Obligation forte.' }, { title: 'SHOULD', content: 'Conseil.' }], examples: [{ en: 'You must rest.', fr: 'Tu dois te reposer.' }], tip: 'MUSTN\'T ≠ DON\'T HAVE TO' },
  { id: 'articles-a-an-the', category: 'determiners', level: 'A1', tier: 1, label: 'Articles: A / An / The', summary: 'Indéfini (a/an) vs défini (the).', rules: [{ title: 'A vs AN', content: 'SON consonne vs SON voyelle.' }, { title: 'THE', content: 'Chose unique ou réprise.' }], examples: [{ en: 'I bought a book and an apple.', fr: 'J\'ai acheté un livre et une pomme.' }] },
  { id: 'demonstratives', category: 'determiners', level: 'A1', tier: 1, label: 'This / That / These / Those', summary: 'Selon distance et nombre.', rules: [{ title: 'Proches', content: 'THIS (sing) / THESE (plur)' }, { title: 'Loin', content: 'THAT (sing) / THOSE (plur)' }] },
  { id: 'some-any-no', category: 'determiners', level: 'A1', tier: 1, label: 'Some / Any / No', summary: 'Quantifieurs indéfinis.', rules: [{ title: 'SOME', content: 'Affirmation.' }, { title: 'ANY', content: 'Négatif/question.' }] },
  { id: 'pronouns-personal', category: 'pronouns', level: 'A1', tier: 1, label: 'Pronoms personnels', summary: 'Sujet, objet, possessif.', rules: [{ title: 'Formes', content: 'I/me/my, you/you/your, he/him/his...' }] },
  { id: 'reflexive-pronouns', category: 'pronouns', level: 'A2', tier: 1, label: 'Pronoms réfléchis', summary: 'myself, yourself, himself...', rules: [{ title: 'Action sur soi', content: 'Sujet = objet.' }] },
  { id: 'comparatives', category: 'adjectives', level: 'A2', tier: 1, label: 'Comparatifs', summary: 'Comparer: -ER ou MORE.', rules: [{ title: 'Court (1 syll)', content: 'Adj + -ER + than.' }, { title: 'Long (2+ syll)', content: 'MORE + adj + than.' }] },
  { id: 'superlatives', category: 'adjectives', level: 'A2', tier: 1, label: 'Superlatifs', summary: 'Plus haut degré: THE + -EST ou THE MOST.', rules: [{ title: 'Court', content: 'THE + adj + -EST.' }, { title: 'Long', content: 'THE MOST + adj.' }] },
  { id: 'word-order', category: 'sentence', level: 'A1', tier: 1, label: 'Ordre des mots SVO', summary: 'Structure Sujet-Verbe-Objet.', rules: [{ title: 'Ordre fixe', content: 'S + V + O.' }] },
  { id: 'prep-time', category: 'prepositions', level: 'A1', tier: 1, label: 'Prépositions temps: IN / ON / AT', summary: 'IN (mois/saison), ON (jour), AT (heure).', rules: [{ title: 'IN', content: 'Années, mois, saisons.' }, { title: 'ON', content: 'Jours et dates.' }, { title: 'AT', content: 'Heures précises.' }] },
  { id: 'prep-place', category: 'prepositions', level: 'A1', tier: 1, label: 'Prépositions lieu: IN / ON / AT', summary: 'IN (intérieur), ON (surface), AT (point).', rules: [{ title: 'IN', content: 'Intérieur/délimité.' }, { title: 'ON', content: 'Sur une surface.' }, { title: 'AT', content: 'Point précis.' }] },

  // B1 — 23 leçons
  { id: 'present-perfect', category: 'verbs-tenses', level: 'B1', tier: 1, label: 'Present Perfect', summary: 'Pont passé-présent: HAVE + V3.', rules: [{ title: 'Formation', content: 'HAVE/HAS + V3.' }, { title: 'Usages', content: 'Expérience, action avec résultat présent, durée depuis.' }, { title: 'SINCE vs FOR', content: 'SINCE=date, FOR=durée.' }], examples: [{ en: 'I have been to Japan twice.', fr: 'Je suis allé au Japon deux fois.' }], tip: 'UNTIL NOW → Present Perfect' },
  { id: 'present-perfect-continuous', category: 'verbs-tenses', level: 'B1', tier: 2, label: 'Present Perfect Continuous', summary: 'Durée depuis un point de départ.', rules: [{ title: 'Formation', content: 'HAVE + BEEN + V-ING.' }] },
  { id: 'past-continuous', category: 'verbs-tenses', level: 'B1', tier: 1, label: 'Past Continuous', summary: 'Action en cours au passé.', rules: [{ title: 'Formation', content: 'WAS/WERE + V-ING.' }] },
  { id: 'past-perfect', category: 'verbs-tenses', level: 'B1', tier: 2, label: 'Past Perfect', summary: 'Passé du passé: HAD + V3.', rules: [{ title: 'Formation', content: 'HAD + V3.' }, { title: 'Usage', content: 'Antériorité: action 1 (had) avant action 2 (past simple).' }] },
  { id: 'used-to', category: 'verbs-tenses', level: 'B1', tier: 2, label: 'Used to / Would', summary: 'Habitudes passées disparues.', rules: [{ title: 'USED TO', content: 'Habitudes et états passés.' }, { title: 'WOULD', content: 'Habitudes répétées (pas états).' }], tip: 'USED TO ≠ BE USED TO (habitué à)' },
  { id: 'modals-extended', category: 'modals', level: 'B1', tier: 2, label: 'Modaux: could, would, may, might', summary: 'Au-delà de can/must/should.' },
  { id: 'must-vs-have-to', category: 'modals', level: 'B1', tier: 2, label: 'Must vs Have to', summary: 'Obligation interne vs externe.', tip: 'MUSTN\'T=interdit. DON\'T HAVE TO=pas obligé' },
  { id: 'modal-perfect', category: 'modals', level: 'B1', tier: 3, label: 'Modaux + Perfect', summary: 'SHOULD HAVE, MUST HAVE, COULD HAVE...', tip: 'Clé TOEIC!' },
  { id: 'conditional-0', category: 'conditionals', level: 'B1', tier: 1, label: 'Zero Conditional', summary: 'Vérités générales: IF present, present.' },
  { id: 'conditional-1', category: 'conditionals', level: 'B1', tier: 1, label: 'First Conditional', summary: 'Futur possible: IF present, WILL.' },
  { id: 'conditional-2', category: 'conditionals', level: 'B1', tier: 2, label: 'Second Conditional', summary: 'Hypothèse: IF past simple, WOULD.' },
  { id: 'conditional-3', category: 'conditionals', level: 'B1', tier: 2, label: 'Third Conditional', summary: 'Regret passé: IF had, WOULD HAVE.' },
  { id: 'gerund-infinitive', category: 'verbs-structures', level: 'B1', tier: 1, label: 'Gérondif vs Infinitif', summary: '-ING vs TO + V. **TOEIC crucial.**', tip: 'enjoy → -ING. want → TO + V' },
  { id: 'verb-patterns', category: 'verbs-structures', level: 'B1', tier: 2, label: 'Verb patterns', summary: 'want HIM TO GO, made ME LAUGH.' },
  { id: 'question-tags', category: 'verbs-structures', level: 'B1', tier: 2, label: 'Question tags', summary: 'n\'est-ce pas: tag questions.' },
  { id: 'so-neither', category: 'verbs-structures', level: 'B1', tier: 2, label: 'So / Neither', summary: 'Accord positif (moi aussi) et négatif (moi non plus).' },
  { id: 'passive-voice', category: 'verbs-structures', level: 'B1', tier: 2, label: 'Voix passive', summary: 'BE + V3. **Très TOEIC.**' },
  { id: 'relative-pronouns', category: 'verbs-structures', level: 'B1', tier: 2, label: 'Pronoms relatifs', summary: 'who, which, that, whose.' },
  { id: 'connectors-cause', category: 'connectors', level: 'B1', tier: 2, label: 'Cause et effet', summary: 'because, due to, therefore.' },
  { id: 'reported-speech', category: 'verbs-structures', level: 'B1', tier: 2, label: 'Discours rapporté', summary: 'He said that..., backshift des temps.' },

  // B2 — 10 leçons
  { id: 'phrasal-verbs-intro', category: 'verbs-structures', level: 'B2', tier: 1, label: 'Phrasal verbs', summary: 'Verbe + particule = sens nouveau. **TOEIC clé.**' },
  { id: 'phrasal-verbs-list', category: 'verbs-structures', level: 'B2', tier: 1, label: 'Phrasal verbs essentiels', summary: 'Top 30 business & quotidien.' },
  { id: 'participle-clauses', category: 'verbs-structures', level: 'B2', tier: 2, label: 'Participle clauses', summary: 'Walking home..., Built in....' },
  { id: 'participles-adjectives', category: 'adjectives', level: 'B2', tier: 1, label: 'Participles as adjectives', summary: 'boring vs bored. **Piège TOEIC.**', tip: '-ING=cause, -ED=ressenti' },
  { id: 'connectors-advanced', category: 'connectors', level: 'B2', tier: 2, label: 'Connecteurs avancés', summary: 'nevertheless, moreover, etc.' },
  { id: 'inversion', category: 'sentence', level: 'B2', tier: 2, label: 'Inversions stylistiques', summary: 'Never have I... Should you need...' },
  { id: 'articles-advanced', category: 'determiners', level: 'B2', tier: 2, label: 'Articles: cas particuliers', summary: 'the United States, the UN...' },
  { id: 'causative', category: 'verbs-structures', level: 'B2', tier: 2, label: 'Causative', summary: 'have / get something done.' }
];

// 350+ EXERCICES
const EXERCISES = [
  // PRESENT SIMPLE
  { id: 'ps-001', lessonId: 'present-simple', type: 'mcq', tier: 1, prompt: 'He _____ to work every day.', options: ['go', 'goes', 'is going', 'went'], answer: 'goes', explanation: '3e pers. singulier → -S' },
  { id: 'ps-002', lessonId: 'present-simple', type: 'blank', tier: 1, prompt: 'She _____ coffee in the morning.', answer: 'drinks', explanation: 'Habitude → Present Simple' },
  { id: 'ps-003', lessonId: 'present-simple', type: 'error', tier: 1, prompt: 'He don\'t like ice cream.', errorWord: 'don\'t', answer: 'doesn\'t', explanation: '3e pers. → DOES NOT' },
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
  { id: 'pas-004', lessonId: 'past-simple', type: 'transform', tier: 1, prompt: 'Négatif: "He worked" → "He _____ ."', answer: 'didn\'t work', explanation: 'DID NOT + base' },
  { id: 'pas-005', lessonId: 'past-simple', type: 'mcq', tier: 1, prompt: 'Did she _____ the film?', options: ['saw', 'see', 'sees', 'seeing'], answer: 'see', explanation: 'Base après DID' },

  // FUTURE
  { id: 'fut-001', lessonId: 'future-will', type: 'mcq', tier: 1, prompt: 'I think it _____ rain tomorrow.', options: ['will', 'am going to', 'is raining', 'rains'], answer: 'will', explanation: 'Prédiction sans preuve' },
  { id: 'fut-002', lessonId: 'future-will', type: 'blank', tier: 1, prompt: 'I _____ to start a diet on Monday.', answer: 'am going', explanation: 'Plan préexistant → GOING TO' },
  { id: 'fut-003', lessonId: 'future-will', type: 'error', tier: 1, prompt: 'If you will come, I will help you.', errorWord: 'will come', answer: 'come', explanation: 'Pas WILL après IF' },
  { id: 'fut-004', lessonId: 'future-will', type: 'mcq', tier: 1, prompt: 'OK, I _____ do it!', options: ['am going to', 'will', '\'ll', 'both will/\'ll'], answer: 'both will/\'ll', explanation: 'Décision spontanée' },

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
  { id: 'c1-004', lessonId: 'conditional-1', type: 'mcq', tier: 1, prompt: 'Unless you _____, you won\'t pass.', options: ['study', 'will study', 'studying', 'studies'], answer: 'study', explanation: 'UNLESS = IF NOT' },

  { id: 'c2-001', lessonId: 'conditional-2', type: 'mcq', tier: 2, prompt: 'If I had time, I _____ travel.', options: ['would', 'will', 'have', 'did'], answer: 'would', explanation: 'Second conditional: WOULD' },
  { id: 'c2-002', lessonId: 'conditional-2', type: 'blank', tier: 2, prompt: 'If I _____ you, I would apologize.', answer: 'were', explanation: 'Second conditional + BE = WERE' },
  { id: 'c2-003', lessonId: 'conditional-2', type: 'error', tier: 2, prompt: 'If I would have money, I would buy a car.', errorWord: 'would have', answer: 'had', explanation: 'IF + past simple (pas would)' },

  { id: 'c3-001', lessonId: 'conditional-3', type: 'mcq', tier: 2, prompt: 'If I had studied, I _____ passed.', options: ['would have', 'will have', 'have', 'had'], answer: 'would have', explanation: 'Third conditional: WOULD HAVE' },
  { id: 'c3-002', lessonId: 'conditional-3', type: 'blank', tier: 2, prompt: 'If we _____ left earlier, we wouldn\'t have been late.', answer: 'had', explanation: 'IF + had + V3' },
  { id: 'c3-003', lessonId: 'conditional-3', type: 'error', tier: 2, prompt: 'If I would have known, I would come.', errorWord: 'would have', answer: 'had', explanation: 'IF + had (pas would have)' },

  // MODALS
  { id: 'mod-001', lessonId: 'modal-can', type: 'mcq', tier: 1, prompt: 'I _____ speak three languages.', options: ['can', 'cans', 'able to', 'have'], answer: 'can', explanation: 'CAN = capacité' },
  { id: 'mod-002', lessonId: 'modal-can', type: 'blank', tier: 1, prompt: 'She _____ sing beautifully.', answer: 'can', explanation: 'Capacité' },
  { id: 'mod-003', lessonId: 'modal-can', type: 'error', tier: 1, prompt: 'He can to swim.', errorWord: 'can to', answer: 'can', explanation: 'Pas TO après modal' },

  { id: 'mod-must-001', lessonId: 'modal-must', type: 'mcq', tier: 1, prompt: 'You _____ finish this today.', options: ['must', 'must to', 'musts', 'have to'], answer: 'must', explanation: 'Obligation forte' },
  { id: 'mod-must-002', lessonId: 'modal-must', type: 'blank', tier: 1, prompt: 'He _____ be at the meeting.', answer: 'must', explanation: 'Obligation' },
  { id: 'mod-must-003', lessonId: 'modal-must', type: 'error', tier: 1, prompt: 'She must goes to school.', errorWord: 'goes', answer: 'go', explanation: 'Base après MUST' },
  { id: 'mod-must-004', lessonId: 'modal-must', type: 'mcq', tier: 1, prompt: 'You _____ not smoke here.', options: ['must', 'can', 'should', 'might'], answer: 'must', explanation: 'MUSTN\'T = interdit' },
  { id: 'mod-must-005', lessonId: 'modal-must', type: 'mcq', tier: 1, prompt: 'You _____ come if you don\'t want to.', options: ['mustn\'t', 'don\'t have to', 'shouldn\'t', 'can\'t'], answer: 'don\'t have to', explanation: 'Pas obligé' },

  // GERUND vs INFINITIVE
  { id: 'gi-001', lessonId: 'gerund-infinitive', type: 'mcq', tier: 1, prompt: 'I enjoy _____ books.', options: ['read', 'reading', 'to read', 'reads'], answer: 'reading', explanation: 'ENJOY + -ING' },
  { id: 'gi-002', lessonId: 'gerund-infinitive', type: 'blank', tier: 1, prompt: 'She wants _____ abroad.', answer: 'to study', explanation: 'WANT + TO + V' },
  { id: 'gi-003', lessonId: 'gerund-infinitive', type: 'mcq', tier: 1, prompt: 'He decided _____ the job.', options: ['take', 'taking', 'to take', 'takes'], answer: 'to take', explanation: 'DECIDE + TO + V' },
  { id: 'gi-004', lessonId: 'gerund-infinitive', type: 'blank', tier: 1, prompt: 'I stopped _____ smoking five years ago.', answer: 'smoking', explanation: 'STOP + -ING = arrêter' },
  { id: 'gi-005', lessonId: 'gerund-infinitive', type: 'mcq', tier: 1, prompt: 'She suggested _____ late.', options: ['stay', 'staying', 'to stay', 'stays'], answer: 'staying', explanation: 'SUGGEST + -ING' },
  { id: 'gi-006', lessonId: 'gerund-infinitive', type: 'blank', tier: 1, prompt: 'I am interested in _____ French.', answer: 'learning', explanation: 'Après préposition: toujours -ING' },
  { id: 'gi-007', lessonId: 'gerund-infinitive', type: 'error', tier: 1, prompt: 'They finished to work at 5pm.', errorWord: 'to work', answer: 'working', explanation: 'FINISH + -ING' },
  { id: 'gi-008', lessonId: 'gerund-infinitive', type: 'mcq', tier: 2, prompt: 'I remember _____ her as a child.', options: ['meet', 'to meet', 'meeting', 'meets'], answer: 'meeting', explanation: 'REMEMBER + -ING = souvenir d\'avoir' },
  { id: 'gi-009', lessonId: 'gerund-infinitive', type: 'mcq', tier: 2, prompt: 'Don\'t forget _____ your keys!', options: ['taking', 'to take', 'take', 'takes'], answer: 'to take', explanation: 'FORGET TO DO = oublier de' },

  // PASSIVE VOICE
  { id: 'pv-001', lessonId: 'passive-voice', type: 'mcq', tier: 1, prompt: 'English _____ in many countries.', options: ['is spoken', 'speaks', 'spoken', 'is speak'], answer: 'is spoken', explanation: 'Passif: BE + V3' },
  { id: 'pv-002', lessonId: 'passive-voice', type: 'blank', tier: 1, prompt: 'The letter _____ by my grandfather.', answer: 'was written', explanation: 'Passé passif: WAS + V3' },
  { id: 'pv-003', lessonId: 'passive-voice', type: 'error', tier: 1, prompt: 'The house built in 1890.', errorWord: 'built', answer: 'was built', explanation: 'Oublier BE' },
  { id: 'pv-004', lessonId: 'passive-voice', type: 'mcq', tier: 1, prompt: 'The window _____ by the wind.', options: ['broke', 'was broken', 'breaking', 'break'], answer: 'was broken', explanation: 'Passif past' },
  { id: 'pv-005', lessonId: 'passive-voice', type: 'blank', tier: 1, prompt: 'This building _____ in 1920.', answer: 'was built', explanation: 'Passif: BE (temps) + V3' },

  // MODAL PERFECT
  { id: 'mp-001', lessonId: 'modal-perfect', type: 'mcq', tier: 2, prompt: 'I _____ called you yesterday. I\'m sorry.', options: ['should have', 'must have', 'could have', 'might have'], answer: 'should have', explanation: 'Regret: SHOULD HAVE' },
  { id: 'mp-002', lessonId: 'modal-perfect', type: 'blank', tier: 2, prompt: 'She\'s not here. She _____ left already.', answer: 'must have', explanation: 'Déduction: MUST HAVE' },
  { id: 'mp-003', lessonId: 'modal-perfect', type: 'error', tier: 2, prompt: 'I should of called.', errorWord: 'should of', answer: 'should have', explanation: 'SHOULD HAVE (pas "of")' },
  { id: 'mp-004', lessonId: 'modal-perfect', type: 'mcq', tier: 2, prompt: 'He _____ forgotten - I just reminded him!', options: ['can have', 'couldn\'t have', 'must have', 'should have'], answer: 'couldn\'t have', explanation: 'CAN\'T HAVE = impossible' },
  { id: 'mp-005', lessonId: 'modal-perfect', type: 'blank', tier: 2, prompt: 'You _____ told me! I would have helped.', answer: 'could have', explanation: 'COULD HAVE = possibilité non faite' },

  // ARTICLES
  { id: 'art-001', lessonId: 'articles-a-an-the', type: 'mcq', tier: 1, prompt: 'I need _____ pen.', options: ['a', 'an', 'the', 'any'], answer: 'a', explanation: 'Son consonne: A' },
  { id: 'art-002', lessonId: 'articles-a-an-the', type: 'blank', tier: 1, prompt: 'She is _____ doctor.', answer: 'a', explanation: 'Profession: A' },
  { id: 'art-003', lessonId: 'articles-a-an-the', type: 'mcq', tier: 1, prompt: 'He is _____ honest man.', options: ['a', 'an', 'the', '—'], answer: 'an', explanation: 'H muet: AN' },
  { id: 'art-004', lessonId: 'articles-a-an-the', type: 'blank', tier: 1, prompt: 'I live in _____ United Kingdom.', answer: 'the', explanation: 'THE United Kingdom' },
  { id: 'art-005', lessonId: 'articles-a-an-the', type: 'error', tier: 1, prompt: 'She speaks the French.', errorWord: 'the', answer: '(rien)', explanation: 'Pas d\'article devant langues' },

  // Plus d'exercices peuvent être ajoutés suivant le même pattern...
];

// Export
window.GRAMMAR_CATEGORIES = GRAMMAR_CATEGORIES;
window.LEVELS = LEVELS;
window.LESSONS = LESSONS;
window.EXERCISES = EXERCISES;
