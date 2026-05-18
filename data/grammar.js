const GRAMMAR_CATEGORIES = {
  determiners: { label: 'Articles & déterminants', order: 1, color: 'amber' },
  pronouns:    { label: 'Pronoms', order: 2, color: 'moss' },
  adjectives:  { label: 'Adjectifs & adverbes', order: 3, color: 'burgundy' },
  prepositions:{ label: 'Prépositions', order: 4, color: 'ink' },
  verbal:      { label: 'Structures verbales', order: 5, color: 'amber-deep' },
  connectors:  { label: 'Connecteurs & ordre des mots', order: 6, color: 'moss-deep' },
  nouns:       { label: 'Pluriels & noms', order: 7, color: 'rose' },
};

// Difficulté : 1 (B1), 2 (B1+), 3 (B2/Avancé)
const LESSONS = [
  // --- DÉTERMINANTS ---
  {
    id: 'articles-a-an-the',
    category: 'determiners',
    tier: 1,
    label: 'A / An / The',
    summary: 'Usage des articles définis (the), indéfinis (a/an) et de l\'article zéro.',
    rules: [
      { title: 'A vs An', content: 'On choisit selon le SON initial : "a university" (son /j/), "an hour" (h muet).' },
      { title: 'The', content: 'Pour un objet spécifique, unique ou déjà mentionné.' },
      { title: 'Article Zéro', content: 'Pas d\'article pour les concepts généraux, les sports, et la plupart des pays.' }
    ],
    examples: [
      { en: 'He is an honest man.', fr: 'C\'est un homme honnête.' },
      { en: 'I love music.', fr: 'J\'aime la musique (en général).' }
    ],
    pitfalls: ['Attention au son "U" : "a university" (son /j/) mais "an umbrella" (son /ʌ/).', 'Pas d\'article devant les sports ou les repas.']
  },
  { 
    id: 'some-any-no', category: 'determiners', tier: 1, label: 'Some / Any / No', 
    summary: 'Quantifieurs pour l\'affirmation, négation et question.',
    rules: [
      { title: 'Some', content: 'Utilisé dans les phrases affirmatives ou les offres polies. Ex: I have some water.' },
      { title: 'Any', content: 'Utilisé dans les questions et les phrases négatives. Ex: Do you have any ideas?' },
      { title: 'No', content: 'Exprime la négation avec un verbe à la forme affirmative. Ex: I have no money.' }
    ]
  },
  { id: 'much-many', category: 'determiners', tier: 1, label: 'Much / Many / A lot of', summary: 'Quantifieurs de quantité.', rules: [{ title: 'Many', content: 'Utilisé pour les noms pluriels dénombrables. Ex: many books.' }, { title: 'Much', content: 'Pour les noms singuliers indénombrables. Ex: much water.' }, { title: 'A lot of', content: 'Utilisable pour les deux, surtout à l\'affirmatif.' }], pitfalls: ['"Information" et "Advice" sont indénombrables (much advice).'] },
  
  // --- PRONOMS ---
  { id: 'personal-pronouns', category: 'pronouns', tier: 1, label: 'Personal Pronouns', summary: 'Sujets (I, you), Objets (me, him) et Possessifs.' },
  { id: 'reflexive-pronouns', category: 'pronouns', tier: 2, label: 'Reflexive Pronouns', summary: 'Usage de myself, yourself...', rules: [{ title: 'Action sur soi', content: 'Quand S et O sont identiques. Ex: He looks at himself.' }, { title: 'Emphase', content: 'Pour souligner qui a fait l\'action. Ex: I did it myself!' }] },
  { id: 'relative-pronouns', category: 'pronouns', tier: 2, label: 'Relative Pronouns', summary: 'Lier deux propositions.', rules: [{ title: 'Who / Whom', content: 'Who pour le sujet humain, Whom pour l\'objet (après préposition).' }, { title: 'Which / That', content: 'Which pour les objets, That pour tout (sauf après virgule).' }, { title: 'Whose', content: 'Exprime la possession. Ex: The man whose car is red.' }] },

  // --- ADJECTIFS ---
  { id: 'comparatives', category: 'adjectives', tier: 1, label: 'Comparatives', summary: 'Comparer deux éléments.', rules: [{ title: 'Adjectifs courts', content: 'Ajout de -er + than. Ex: taller than.' }, { title: 'Adjectifs longs', content: 'More + adjectif + than. Ex: more expensive than.' }], pitfalls: ['Good -> better, Bad -> worse, Far -> further.'] },
  { id: 'superlatives', category: 'adjectives', tier: 1, label: 'Superlatives', summary: 'Le cran le plus élevé.', rules: [{ title: 'Structure', content: 'the + adj-est (courts) ou the most + adj (longs).' }], pitfalls: ['Ne pas oublier "the" devant le superlatif.'] },
  { 
    id: 'adjective-order', category: 'adjectives', tier: 2, label: 'Adjective Order', 
    summary: 'Ordre : Opinion > Taille > Âge > Couleur > Origine.',
    rules: [{ title: 'Règle', content: 'A beautiful (opinion) large (taille) old (âge) brown (couleur) table.' }]
  },
  { id: 'too-enough', category: 'adjectives', tier: 2, label: 'Too / Enough', summary: 'Exprimer l\'excès ou la suffisance.', rules: [{ title: 'Too', content: 'Avant l\'adjectif (too hot) ou avant "much/many".' }, { title: 'Enough', content: 'Après l\'adjectif (good enough) mais avant le nom (enough time).' }] },

  // --- PRÉPOSITIONS ---
  { id: 'prepositions-time', category: 'prepositions', tier: 1, label: 'Time (In/On/At)', summary: 'In/On/At pour le temps.', rules: [{ title: 'At', content: 'Heures précises, moments (at noon, at night).' }, { title: 'On', content: 'Jours et dates (on Monday, on July 4th).' }, { title: 'In', content: 'Mois, années, saisons, périodes longues.' }] },
  { id: 'prepositions-place', category: 'prepositions', tier: 1, label: 'Place (In/On/At)', summary: 'Localisation spatiale.', rules: [{ title: 'At', content: 'Point précis, adresse, lieu de fonction (at school).' }, { title: 'On', content: 'Surface (on the table, on the wall).' }, { title: 'In', content: 'Espace fermé, pays, villes.' }] },
  
  // --- STRUCTURES VERBALES ---
  { 
    id: 'gerund-infinitive', category: 'verbal', tier: 2, label: 'Gerund vs Infinitive', 
    summary: 'Verbes suivis de -ing ou to + infinitif.',
    rules: [
      { title: 'Gérondif (-ing)', content: 'Après enjoy, avoid, suggest, stop (habitude), mind.' },
      { title: 'Infinitif (to)', content: 'Après want, decide, hope, plan, refuse.' }
    ]
  },
  { id: 'reported-speech', category: 'verbal', tier: 3, label: 'Reported Speech', summary: 'Concordance des temps et transformation des pronoms.' },
  { id: 'question-tags', category: 'verbal', tier: 2, label: 'Question Tags', summary: 'Don\'t you? Aren\'t I? Formation et usage.' },
  { id: 'modals-deduction', category: 'verbal', tier: 3, label: 'Modals of Deduction', summary: 'Must be, can\'t be, might be (certitude et probabilité).' },
  { id: 'phrasal-verbs', category: 'verbal', tier: 2, label: 'Phrasal Verbs (Business)', summary: 'Bring up, call off, take over, put off, get ahead...' },

  // --- CONNECTEURS ---
  { id: 'linking-words', category: 'connectors', tier: 2, label: 'Linking Words', summary: 'However, Therefore, Moreover, Nevertheless.' },
  { id: 'word-order', category: 'connectors', tier: 3, label: 'Word Order & Inversion', summary: 'Structure de la phrase et inversion emphatique.' },

  // --- NOMS ---
  { id: 'plural-nouns', category: 'nouns', tier: 1, label: 'Plural Nouns', summary: 'Réguliers et irréguliers (children, feet, teeth).' },
  { id: 'possessive-s', category: 'nouns', tier: 1, label: 'Possessive \'s', summary: 'L\'appartenance : Tom\'s car vs the legs of the table.' }
];

const EXERCISES = [
  // ========== ARTICLES (20 Complex Exercises) ==========
  { id: 'gex-art-01', lessonId: 'articles-a-an-the', type: 'blank', tier: 2, prompt: 'She is studying _____ history of _____ United Kingdom.', answer: 'the / the', explanation: 'Spécifique ("histoire de") et pays composé ("UK").' },
  { id: 'gex-art-02', lessonId: 'articles-a-an-the', type: 'mcq', tier: 3, prompt: '_____ happiness is more important than _____ money.', options: ['The / the', 'A / —', '— / —', '— / the'], answer: '— / —', explanation: 'Concepts abstraits généraux : pas d\'article.' },
  { id: 'gex-art-03', lessonId: 'articles-a-an-the', type: 'error', tier: 2, prompt: 'He is a university student.', errorWord: 'an', answer: 'a', explanation: 'University commence par le son consonne /j/.' },
  { id: 'gex-art-04', lessonId: 'articles-a-an-the', type: 'reorder', tier: 2, prompt: 'Remets dans l\'ordre :', tokens: ['sun', 'The', 'is', 'shining'], answer: 'The sun is shining', explanation: 'Les astres uniques prennent "the".' },

  // ========== COMPARATIVES ==========
  { id: 'gex-comp-01', lessonId: 'comparatives', type: 'transform', tier: 1, prompt: 'Transforme (good) : This book is _____ than the last one.', answer: 'better', explanation: 'Good est un comparatif irrégulier.' },
  { id: 'gex-comp-02', lessonId: 'comparatives', type: 'mcq', tier: 2, prompt: 'Gold is _____ than silver.', options: ['more expensive', 'expensiver', 'the most expensive', 'as expensive'], answer: 'more expensive', explanation: 'Adjectif long (3+ syllabes) -> more + adj.' },

  // ========== PRONOUNS ==========
  { id: 'gex-pron-01', lessonId: 'reflexive-pronouns', type: 'blank', tier: 2, prompt: 'They decorated the house by _____.', answer: 'themselves', explanation: 'Pronom réfléchi correspondant à "They".' },

  // ========== VERBAL STRUCTURES ==========
  { id: 'gex-verb-01', lessonId: 'gerund-infinitive', type: 'mcq', tier: 2, prompt: 'I enjoy _____ to music.', options: ['listening', 'to listen', 'listen', 'listened'], answer: 'listening', explanation: 'ENJOY est suivi du gérondif (-ing).' },
  { id: 'gex-verb-02', lessonId: 'gerund-infinitive', type: 'transform', tier: 2, prompt: 'Complète (stop) : I stopped _____ (smoke) last year.', answer: 'smoking', explanation: 'Arrêter une habitude se dit "stop + -ing".' },

  // ========== DETERMINERS (Some/Any/No) ==========
  { id: 'gex-det-01', lessonId: 'some-any-no', type: 'blank', tier: 1, prompt: "I don't have _____ money left.", answer: 'any', explanation: 'On utilise "any" dans les phrases négatives.' },
  { id: 'gex-det-02', lessonId: 'some-any-no', type: 'mcq', tier: 1, prompt: 'Would you like _____ coffee?', options: ['some', 'any', 'no', 'a'], answer: 'some', explanation: 'On utilise "some" pour les offres et les demandes.' },
  { id: 'gex-det-03', lessonId: 'some-any-no', type: 'error', tier: 2, prompt: 'I have any questions for you.', errorWord: 'any', answer: 'some', explanation: 'Dans une phrase affirmative, on utilise "some".' },

  // ========== DETERMINERS (Much/Many) ==========
  { id: 'gex-det-04', lessonId: 'much-many', type: 'blank', tier: 1, prompt: 'How _____ time do we have?', answer: 'much', explanation: '"Time" est indénombrable.' },
  { id: 'gex-det-05', lessonId: 'much-many', type: 'mcq', tier: 1, prompt: 'There are too _____ cars in the city.', options: ['much', 'many', 'a lot', 'few'], answer: 'many', explanation: '"Cars" est un nom pluriel dénombrable.' },

  // ========== PRONOUNS (Personal/Possessive) ==========
  { id: 'gex-pron-02', lessonId: 'personal-pronouns', type: 'mcq', tier: 1, prompt: 'That car belongs to _____.', options: ['I', 'me', 'my', 'mine'], answer: 'me', explanation: 'On utilise le pronom complément après une préposition.' },
  { id: 'gex-pron-03', lessonId: 'personal-pronouns', type: 'blank', tier: 1, prompt: 'This is my pen. That one is _____ (you).', answer: 'yours', explanation: 'Pronom possessif pour "le tien".' },

  // ========== PRONOUNS (Relative) ==========
  { id: 'gex-pron-04', lessonId: 'relative-pronouns', type: 'blank', tier: 2, prompt: 'The man _____ lives next door is a doctor.', answer: 'who', explanation: '"Who" se rapporte à une personne en tant que sujet.' },
  { id: 'gex-pron-05', lessonId: 'relative-pronouns', type: 'mcq', tier: 2, prompt: 'This is the house _____ Jack built.', options: ['who', 'which', 'whose', 'whom'], answer: 'which', explanation: '"Which" se rapporte à un objet ou un animal.' },

  // ========== ADJECTIVES (Superlatives) ==========
  { id: 'gex-adj-01', lessonId: 'superlatives', type: 'transform', tier: 1, prompt: 'bad : Yesterday was the _____ day ever.', answer: 'worst', explanation: 'Superlatif irrégulier de "bad".' },
  { id: 'gex-adj-02', lessonId: 'superlatives', type: 'mcq', tier: 1, prompt: 'Who is _____ person in your family?', options: ['the taller', 'the tallest', 'tallest', 'taller'], answer: 'the tallest', explanation: 'Structure du superlatif : the + adjectif-est.' },

  // ========== ADJECTIVES (Order) ==========
  { id: 'gex-adj-03', lessonId: 'adjective-order', type: 'reorder', tier: 2, prompt: "Remets dans l'ordre :", tokens: ['table', 'beautiful', 'a', 'old'], answer: 'a beautiful old table', explanation: "L'opinion (beautiful) précède l'âge (old)." },

  // ========== PREPOSITIONS (Time) ==========
  { id: 'gex-prep-01', lessonId: 'prepositions-time', type: 'blank', tier: 1, prompt: 'The movie starts _____ 8 pm.', answer: 'at', explanation: '"At" pour les heures précises.' },
  { id: 'gex-prep-02', lessonId: 'prepositions-time', type: 'mcq', tier: 1, prompt: 'We go on vacation _____ July.', options: ['at', 'in', 'on', 'for'], answer: 'in', explanation: '"In" pour les mois.' },

  // ========== PREPOSITIONS (Place) ==========
  { id: 'gex-prep-03', lessonId: 'prepositions-place', type: 'blank', tier: 1, prompt: 'She is sitting _____ the chair.', answer: 'on', explanation: 'Contact avec une surface.' },
  { id: 'gex-prep-04', lessonId: 'prepositions-place', type: 'mcq', tier: 1, prompt: 'They live _____ London.', options: ['at', 'on', 'in', 'into'], answer: 'in', explanation: '"In" pour les villes et les pays.' },

  // ========== VERBAL (Question Tags) ==========
  { id: 'gex-verb-03', lessonId: 'question-tags', type: 'blank', tier: 2, prompt: 'He is nice, _____ he?', answer: "isn't", explanation: 'Le tag est le négatif de l\'auxiliaire be.' },
  { id: 'gex-verb-04', lessonId: 'question-tags', type: 'mcq', tier: 2, prompt: 'You like pizza, _____?', options: ["don't you", "doesn't you", "aren't you", "won't you"], answer: "don't you", explanation: 'Au présent simple, on utilise "do/does" pour le tag.' },

  // ========== CONNECTORS ==========
  { id: 'gex-conn-01', lessonId: 'linking-words', type: 'mcq', tier: 2, prompt: 'I stayed home _____ it was raining.', options: ['but', 'so', 'because', 'although'], answer: 'because', explanation: 'Introduit la cause.' },
  { id: 'gex-conn-02', lessonId: 'linking-words', type: 'blank', tier: 2, prompt: "I'm tall, _____ my brother is short.", answer: 'but', explanation: 'Introduit un contraste.' },
  { id: 'gex-conn-03', lessonId: 'linking-words', type: 'mcq', tier: 3, prompt: '_____ the traffic, we arrived on time.', options: ['In spite', 'Despite', 'Although', 'Even though'], answer: 'Despite', explanation: '"Despite" est suivi d\'un groupe nominal.' },

  // ========== NOUNS (Plurals) ==========
  { id: 'gex-noun-01', lessonId: 'plural-nouns', type: 'transform', tier: 1, prompt: 'man : Three _____ came to the party.', answer: 'men', explanation: 'Pluriel irrégulier.' },
  { id: 'gex-noun-02', lessonId: 'plural-nouns', type: 'mcq', tier: 2, prompt: 'Look at those _____.', options: ['sheeps', 'sheep', 'shep', 'shoops'], answer: 'sheep', explanation: '"Sheep" est invariable au pluriel.' },

  // ========== NOUNS (Possessive) ==========
  { id: 'gex-noun-03', lessonId: 'possessive-s', type: 'blank', tier: 1, prompt: "This is _____ (Sarah) bag.", answer: "Sarah's", explanation: "L'appartenance avec 's." },
  { id: 'gex-noun-04', lessonId: 'possessive-s', type: 'mcq', tier: 2, prompt: 'The _____ names are Tom and Ben.', options: ['boys', "boy's", "boys'", 'boyses'], answer: "boys'", explanation: 'Pour un pluriel en -s, on ajoute seulement l\'apostrophe.' },

  // ========== VERBAL (Reported Speech) ==========
  { id: 'gex-verb-05', lessonId: 'reported-speech', type: 'transform', tier: 3, prompt: 'He said: "I am happy" -> He said that he _____ happy.', answer: 'was', explanation: 'Le présent devient prétérit au discours indirect (backshift).' },

  // ========== ADVANCED TOEIC BLOCK (Complex Grammar) ==========

  // --- Inversion (Word Order) ---
  { id: 'gex-adv-001', lessonId: 'word-order', type: 'mcq', tier: 3, prompt: 'Seldom _____ such a beautiful sunset.', options: ['I have seen', 'have I seen', 'I saw', 'did I saw'], answer: 'have I seen', explanation: "Après un adverbe négatif (seldom, never, rarely) en début de phrase, on utilise l'inversion sujet-auxiliaire." },
  { id: 'gex-adv-002', lessonId: 'word-order', type: 'blank', tier: 3, prompt: 'Only then _____ I realize the gravity of the situation.', answer: 'did', explanation: "Inversion après 'Only then'." },
  { id: 'gex-adv-003', lessonId: 'word-order', type: 'reorder', tier: 3, prompt: "Remets dans l'ordre :", tokens: ['seen', 'have', 'Never', 'such', 'I', 'chaos'], answer: 'Never have I seen such chaos', explanation: "L'inversion emphatique avec 'Never'." },

  // --- Causative Structures ---
  { id: 'gex-adv-004', lessonId: 'gerund-infinitive', type: 'mcq', tier: 2, prompt: 'She had her hair _____ yesterday.', options: ['cut', 'cutting', 'to cut', 'cuts'], answer: 'cut', explanation: "Structure causative : 'have something done' (V3)." },
  { id: 'gex-adv-005', lessonId: 'gerund-infinitive', type: 'blank', tier: 3, prompt: 'The manager got the report _____ (finish) on time.', answer: 'finished', explanation: "Structure 'get something done'." },

  // --- Mixed & Third Conditionals ---
  { id: 'gex-adv-006', lessonId: 'word-order', type: 'mcq', tier: 3, prompt: '_____ I known about the meeting, I would have attended.', options: ['If', 'Had', 'Would', 'Did'], answer: 'Had', explanation: "Inversion du 'If' dans le 3ème conditionnel : 'Had I known' = 'If I had known'." },
  { id: 'gex-adv-007', lessonId: 'reported-speech', type: 'blank', tier: 3, prompt: "If I _____ (win) the lottery last year, I would be rich now.", answer: 'had won', explanation: "Conditionnel mixte : regret passé (Past Perfect) avec conséquence présente." },

  // --- Advanced Relative Clauses ---
  { id: 'gex-adv-008', lessonId: 'relative-pronouns', type: 'mcq', tier: 3, prompt: 'The candidate _____ resume is on the desk is highly qualified.', options: ['who', 'which', 'whose', 'whom'], answer: 'whose', explanation: "'Whose' exprime la possession pour une personne ou une chose." },
  { id: 'gex-adv-009', lessonId: 'relative-pronouns', type: 'error', tier: 3, prompt: 'The company for who I work is expanding.', errorWord: 'who', answer: 'whom', explanation: "Après une préposition (for, to, with), on utilise 'whom' et non 'who'." },

  // --- Subjunctive Mood ---
  { id: 'gex-adv-010', lessonId: 'word-order', type: 'mcq', tier: 3, prompt: 'It is essential that he _____ present at the meeting.', options: ['is', 'be', 'was', 'being'], answer: 'be', explanation: "Après des adjectifs de nécessité (essential, important, vital), on utilise le subjonctif (base verbale)." },
  { id: 'gex-adv-011', lessonId: 'word-order', type: 'blank', tier: 3, prompt: 'I suggest that she _____ (take) a break.', answer: 'take', explanation: "Subjonctif après le verbe 'suggest'." },

  // --- Complex Linking Words ---
  { id: 'gex-adv-012', lessonId: 'linking-words', type: 'mcq', tier: 2, prompt: '_____ the high cost, the project was approved.', options: ['Although', 'Despite', 'Even though', 'In spite'], answer: 'Despite', explanation: "'Despite' est suivi d'un groupe nominal, alors que 'Although' est suivi d'une proposition sujet+verbe." },
  { id: 'gex-adv-013', lessonId: 'linking-words', type: 'mcq', tier: 3, prompt: 'The merger will proceed _____ both parties agree.', options: ['unless', 'provided', 'notwithstanding', 'whereas'], answer: 'provided', explanation: "'Provided (that)' signifie 'à condition que'." },

  // --- Gerund vs Infinitive (Meaning Change) ---
  { id: 'gex-adv-014', lessonId: 'gerund-infinitive', type: 'mcq', tier: 3, prompt: 'I remember _____ the door, but now it is open.', options: ['locking', 'to lock', 'lock', 'locked'], answer: 'locking', explanation: "Remember + -ing = se souvenir d'une action passée. Remember + to = ne pas oublier de faire quelque chose." },
  { id: 'gex-adv-015', lessonId: 'gerund-infinitive', type: 'blank', tier: 3, prompt: 'Stop _____ (talk) and listen to me!', answer: 'talking', explanation: "Stop + -ing = cesser une activité." },
  { id: 'gex-adv-016', lessonId: 'gerund-infinitive', type: 'error', tier: 2, prompt: 'I am looking forward to meet you.', errorWord: 'meet', answer: 'meeting', explanation: "Dans l'expression 'look forward to', 'to' est une préposition, elle doit être suivie d'un gérondif (-ing)." },

  // --- Modals (Deduction & Regret) ---
  { id: 'gex-adv-017', lessonId: 'personal-pronouns', type: 'mcq', tier: 3, prompt: 'You _____ have seen him; he was in London at the time.', options: ["can't", "mustn't", "shouldn't", "wouldn't"], answer: "can't", explanation: "'Can't have + V3' exprime une impossibilité logique dans le passé." },
  { id: 'gex-adv-018', lessonId: 'personal-pronouns', type: 'blank', tier: 3, prompt: 'I _____ have studied harder for the exam (regret).', answer: 'should', explanation: "'Should have + V3' exprime un regret ou un conseil passé non suivi." },

  // --- Articles (Nuances) ---
  { id: 'gex-adv-019', lessonId: 'articles-a-an-the', type: 'mcq', tier: 2, prompt: 'He is _____ honest man with _____ PhD in history.', options: ['an / a', 'a / a', 'an / an', 'a / an'], answer: 'an / a', explanation: "'Honest' commence par un h muet (son voyelle), 'PhD' (/pi-eitsh-di/) commence par un son consonne." },
  { id: 'gex-adv-020', lessonId: 'articles-a-an-the', type: 'blank', tier: 3, prompt: '_____ knowledge is power.', answer: '—', explanation: "Pas d'article devant les noms abstraits indénombrables utilisés de façon générale." },

  // --- Countable / Uncountable ---
  { id: 'gex-adv-021', lessonId: 'much-many', type: 'mcq', tier: 2, prompt: 'We need _____ equipment for the laboratory.', options: ['many', 'a few', 'a lot of', 'another'], answer: 'a lot of', explanation: "'Equipment' est indénombrable en anglais. On ne peut pas utiliser 'many' ou 'a few'." },
  { id: 'gex-adv-022', lessonId: 'much-many', type: 'error', tier: 2, prompt: 'The news are very alarming.', errorWord: 'are', answer: 'is', explanation: "'News' est toujours singulier en anglais." },

  // --- Passive Voice (Complex) ---
  { id: 'gex-adv-023', lessonId: 'reported-speech', type: 'transform', tier: 3, prompt: 'People say that he is a genius. -> He is said _____ a genius.', answer: 'to be', explanation: "Structure passive impersonnelle : 'is said to be'." },
  { id: 'gex-adv-024', lessonId: 'reported-speech', type: 'mcq', tier: 3, prompt: 'The problem _____ by the end of the week.', options: ['will be solved', 'will solve', 'will have solved', 'is solving'], answer: 'will be solved', explanation: "Futur passif." },

  // --- Mixed TOEIC Style ---
  { id: 'gex-adv-025', lessonId: 'linking-words', type: 'mcq', tier: 3, prompt: 'The price of oil has risen _____ increased demand.', options: ['because', 'due to', 'since', 'so'], answer: 'due to', explanation: "'Due to' introduit une cause nominale." },
  { id: 'gex-adv-026', lessonId: 'word-order', type: 'reorder', tier: 3, prompt: "Remets dans l'ordre :", tokens: ['Hardly', 'the', 'had', 'started', 'when', 'it', 'rained', 'game'], answer: 'Hardly had the game started when it rained', explanation: "Structure corrélative 'Hardly... when' avec inversion." },
  { id: 'gex-adv-027', lessonId: 'gerund-infinitive', type: 'blank', tier: 2, prompt: 'It is no use _____ (complain) about the weather.', answer: 'complaining', explanation: "L'expression 'It is no use' est toujours suivie du gérondif." },
  { id: 'gex-adv-028', lessonId: 'relative-pronouns', type: 'mcq', tier: 3, prompt: 'The office, _____ is located downtown, is very modern.', options: ['that', 'which', 'where', 'what'], answer: 'which', explanation: "Dans une subordonnée relative explicative (entre virgules), on utilise 'which' et jamais 'that'." },
  { id: 'gex-adv-029', lessonId: 'linking-words', type: 'mcq', tier: 3, prompt: 'He worked hard; _____, he failed the exam.', options: ['therefore', 'moreover', 'nevertheless', 'consequently'], answer: 'nevertheless', explanation: "'Nevertheless' exprime une concession forte (néanmoins)." },
  { id: 'gex-adv-030', lessonId: 'word-order', type: 'blank', tier: 3, prompt: 'Should you _____ (need) any help, please let me know.', answer: 'need', explanation: "Inversion du 'If' au 1er conditionnel : 'Should you need' = 'If you should need'." },

  // --- Additional Tier 3 logic ---
  { id: 'gex-adv-031', lessonId: 'adjective-order', type: 'reorder', tier: 3, prompt: "Ordre des adjectifs :", tokens: ['leather', 'Italian', 'expensive', 'black', 'bag'], answer: 'expensive black Italian leather bag', explanation: "Opinion (expensive) > Couleur (black) > Origine (Italian) > Matière (leather)." },
  { id: 'gex-adv-032', lessonId: 'gerund-infinitive', type: 'mcq', tier: 3, prompt: 'I object to _____ like a child.', options: ['be treated', 'being treated', 'treating', 'to be treated'], answer: 'being treated', explanation: "Après 'object to', on utilise le gérondif." },
  { id: 'gex-adv-033', lessonId: 'reported-speech', type: 'transform', tier: 3, prompt: 'She said: "Don\'t forget your umbrella" -> She reminded me _____ my umbrella.', answer: 'not to forget', explanation: "Remind + object + not to + verb." },
  { id: 'gex-adv-034', lessonId: 'much-many', type: 'mcq', tier: 3, prompt: 'There was _____ information available to the public.', options: ['few', 'little', 'many', 'a few'], answer: 'little', explanation: "'Information' est indénombrable, on utilise 'little' pour une faible quantité." },
  { id: 'gex-adv-035', lessonId: 'prepositions-place', type: 'mcq', tier: 2, prompt: 'The cat is hiding _____ the bed.', options: ['on', 'at', 'under', 'between'], answer: 'under', explanation: "Position de cachette classique." },
  { id: 'gex-adv-036', lessonId: 'prepositions-time', type: 'blank', tier: 2, prompt: 'I have been here _____ 9 o\'clock.', answer: 'since', explanation: "'Since' indique le point de départ d'une action qui continue." },
  { id: 'gex-adv-037', lessonId: 'word-order', type: 'mcq', tier: 3, prompt: 'Were it _____ for his help, I would have failed.', options: ['no', 'not', 'none', 'neither'], answer: 'not', explanation: "Inversion du conditionnel 2 : 'Were it not for' = 'If it were not for'." },
  { id: 'gex-adv-038', lessonId: 'reported-speech', type: 'mcq', tier: 3, prompt: 'He asked me where _____ the previous night.', options: ['I have been', 'I had been', 'had I been', 'was I'], answer: 'I had been', explanation: "Dans une question indirecte, l'ordre sujet-verbe est maintenu (pas d'inversion)." },
  { id: 'gex-adv-039', lessonId: 'word-order', type: 'mcq', tier: 3, prompt: 'Not until the bell rang _____ the students leave.', options: ['did', 'do', 'had', 'have'], answer: 'did', explanation: "Inversion après 'Not until...'" },
  { id: 'gex-adv-040', lessonId: 'gerund-infinitive', type: 'blank', tier: 3, prompt: 'He denied _____ (steal) the money.', answer: 'stealing', explanation: "'Deny' est suivi du gérondif." },
  { id: 'gex-adv-041', lessonId: 'linking-words', type: 'mcq', tier: 3, prompt: '_____ the project is expensive, it is necessary.', options: ['While', 'Because', 'Since', 'Moreover'], answer: 'While', explanation: "'While' peut exprimer une concession (bien que / alors que)." },
  { id: 'gex-adv-042', lessonId: 'relative-pronouns', type: 'mcq', tier: 3, prompt: 'This is the reason _____ I am late.', options: ['which', 'why', 'what', 'whose'], answer: 'why', explanation: "'Reason why' est la structure standard." },
  { id: 'gex-adv-043', lessonId: 'superlatives', type: 'transform', tier: 2, prompt: 'good : It was the _____ performance of his career.', answer: 'best', explanation: "Superlatif irrégulier." },
  { id: 'gex-adv-044', lessonId: 'comparatives', type: 'mcq', tier: 2, prompt: 'The more you study, _____ you will learn.', options: ['the better', 'better', 'the best', 'more good'], answer: 'the better', explanation: "Structure comparative double : 'The more..., the better'." },
  { id: 'gex-adv-045', lessonId: 'question-tags', type: 'blank', tier: 2, prompt: 'I am late, _____ I?', answer: "aren't", explanation: "Cas particulier du tag pour 'I am' -> 'aren't I?'." },
  { id: 'gex-adv-046', lessonId: 'question-tags', type: 'mcq', tier: 3, prompt: 'Let\'s go to the cinema, _____?', options: ['shall we', 'will we', 'do we', 'don\'t we'], answer: 'shall we', explanation: "Le tag pour 'Let's' est 'shall we?'." },
  { id: 'gex-adv-047', lessonId: 'reported-speech', type: 'blank', tier: 3, prompt: 'He asked me _____ (if / weather) I was coming.', answer: 'if', explanation: "Question fermée indirecte." },
  { id: 'gex-adv-048', lessonId: 'gerund-infinitive', type: 'mcq', tier: 3, prompt: 'It was kind of you _____ me.', options: ['to help', 'helping', 'help', 'for helping'], answer: 'to help', explanation: "Adjectif de personnalité (kind, nice) + of someone + to-infinitive." },
  { id: 'gex-adv-049', lessonId: 'articles-a-an-the', type: 'error', tier: 2, prompt: 'The sun is a star.', errorWord: 'a', answer: 'a', explanation: "Phrase correcte, 'a' est l'article indéfini pour une catégorie parmi d'autres." },
  { id: 'gex-adv-050', lessonId: 'word-order', type: 'mcq', tier: 3, prompt: 'Hardly _____ the house when it started to rain.', options: ['had I left', 'I had left', 'did I leave', 'I left'], answer: 'had I left', explanation: "Inversion après 'Hardly'." },
  { id: 'gex-adv-051', lessonId: 'gerund-infinitive', type: 'mcq', tier: 3, prompt: 'He is used to _____ in a noisy environment.', options: ['work', 'working', 'to work', 'worked'], answer: 'working', explanation: "'Be used to' (être habitué à) est suivi d'un gérondif. À ne pas confondre avec 'used to' (habitude passée)." },
  { id: 'gex-adv-052', lessonId: 'linking-words', type: 'mcq', tier: 3, prompt: 'The team failed to meet the deadline _____ their best efforts.', options: ['despite', 'although', 'even though', 'because'], answer: 'despite', explanation: "'Despite' introduit une concession nominale." },
  { id: 'gex-adv-053', lessonId: 'relative-pronouns', type: 'blank', tier: 3, prompt: 'The man to _____ I was talking is the CEO.', answer: 'whom', explanation: "Pronom relatif objet après une préposition." },
  { id: 'gex-adv-054', lessonId: 'reported-speech', type: 'transform', tier: 3, prompt: 'He said: "I will call you" -> He said he _____ call me.', answer: 'would', explanation: "Backshift : will devient would." },
  { id: 'gex-adv-055', lessonId: 'much-many', type: 'error', tier: 2, prompt: 'I have much friends in London.', errorWord: 'much', answer: 'many', explanation: "'Friends' est dénombrable pluriel." },
  { id: 'gex-adv-056', lessonId: 'word-order', type: 'mcq', tier: 3, prompt: 'So fast _____ that he broke the world record.', options: ['did he run', 'he ran', 'had he run', 'he did run'], answer: 'did he run', explanation: "Inversion après 'So + adjectif/adverbe'." },
  { id: 'gex-adv-057', lessonId: 'gerund-infinitive', type: 'blank', tier: 3, prompt: 'I tried _____ (reach) him, but the line was busy.', answer: 'to reach', explanation: "'Try to' = faire un effort. 'Try -ing' = tester une méthode." },
  { id: 'gex-adv-058', lessonId: 'prepositions-place', type: 'mcq', tier: 2, prompt: 'The keys are _____ the drawer.', options: ['in', 'on', 'at', 'into'], answer: 'in', explanation: "Contenu à l'intérieur d'un espace fermé." },
  { id: 'gex-adv-059', lessonId: 'prepositions-time', type: 'blank', tier: 2, prompt: 'The meeting is scheduled _____ Monday morning.', answer: 'on', explanation: "'On' pour les jours de la semaine." },
  { id: 'gex-adv-060', lessonId: 'linking-words', type: 'mcq', tier: 3, prompt: '_____ he was tired, he finished the report.', options: ['Although', 'Because', 'Since', 'Moreover'], answer: 'Although', explanation: "Concession entre deux propositions." },
  { id: 'gex-adv-061', lessonId: 'relative-pronouns', type: 'mcq', tier: 3, prompt: 'The house _____ windows are broken is abandoned.', options: ['which', 'whose', 'that', 'who'], answer: 'whose', explanation: "Possession pour un objet." },
  { id: 'gex-adv-062', lessonId: 'word-order', type: 'reorder', tier: 3, prompt: "Remets dans l'ordre :", tokens: ['rarely', 'Does', 'he', 'on', 'weekends', 'work'], answer: 'Does he rarely work on weekends', explanation: "Inversion interrogative ou emphatique (si Rarely est en début)." },
  { id: 'gex-adv-063', lessonId: 'gerund-infinitive', type: 'blank', tier: 3, prompt: 'I avoid _____ (eat) fast food.', answer: 'eating', explanation: "'Avoid' est suivi du gérondif." },
  { id: 'gex-adv-064', lessonId: 'reported-speech', type: 'transform', tier: 3, prompt: 'He said: "I have seen this" -> He said he _____ seen that.', answer: 'had', explanation: "Backshift : Present Perfect devient Past Perfect." },
  { id: 'gex-adv-065', lessonId: 'much-many', type: 'mcq', tier: 2, prompt: 'How _____ luggage do you have?', options: ['many', 'much', 'a few', 'few'], answer: 'much', explanation: "'Luggage' est indénombrable." },
  { id: 'gex-adv-066', lessonId: 'linking-words', type: 'mcq', tier: 3, prompt: 'The company is growing; _____, we need more staff.', options: ['consequently', 'nevertheless', 'however', 'whereas'], answer: 'consequently', explanation: "Indique une conséquence logique." },
  { id: 'gex-adv-067', lessonId: 'gerund-infinitive', type: 'blank', tier: 3, prompt: 'He suggested _____ (go) to the park.', answer: 'going', explanation: "'Suggest' est suivi du gérondif lorsqu'il n'y a pas de proposition en 'that'." },
  { id: 'gex-adv-068', lessonId: 'relative-pronouns', type: 'mcq', tier: 3, prompt: 'She is the person _____ I admire the most.', options: ['who', 'which', 'whose', 'what'], answer: 'who', explanation: "Pronom relatif sujet ou objet pour une personne." },
  { id: 'gex-adv-069', lessonId: 'word-order', type: 'mcq', tier: 3, prompt: 'Only by working hard _____ you succeed.', options: ['will', 'you will', 'do', 'did'], answer: 'will', explanation: "Inversion après 'Only by...'" },
  { id: 'gex-adv-070', lessonId: 'gerund-infinitive', type: 'blank', tier: 2, prompt: 'I am capable _____ (do) it myself.', answer: 'of doing', explanation: "Adjectif + préposition + gérondif." },
  { id: 'gex-adv-071', lessonId: 'prepositions-place', type: 'mcq', tier: 2, prompt: 'The train arrived _____ the station.', options: ['at', 'in', 'on', 'to'], answer: 'at', explanation: "'At' pour un point précis ou un lieu fonctionnel." },
  { id: 'gex-adv-072', lessonId: 'prepositions-time', type: 'blank', tier: 2, prompt: 'We will finish the project _____ two weeks.', answer: 'in', explanation: "'In' exprime un délai futur." },
  { id: 'gex-adv-073', lessonId: 'linking-words', type: 'mcq', tier: 3, prompt: '_____ he is young, he is very experienced.', options: ['Despite', 'Even though', 'Because', 'Moreover'], answer: 'Even though', explanation: "Concession emphatique." },
  { id: 'gex-adv-074', lessonId: 'relative-pronouns', type: 'mcq', tier: 3, prompt: 'The car, _____ was expensive, broke down.', options: ['that', 'which', 'who', 'what'], answer: 'which', explanation: "Relative non-définitive (entre virgules)." },
  { id: 'gex-adv-075', lessonId: 'word-order', type: 'blank', tier: 3, prompt: 'Rarely _____ he miss a deadline.', answer: 'does', explanation: "Inversion après 'Rarely'." },
  { id: 'gex-adv-076', lessonId: 'gerund-infinitive', type: 'mcq', tier: 3, prompt: 'It is worth _____ the museum.', options: ['visit', 'visiting', 'to visit', 'to visiting'], answer: 'visiting', explanation: "'It is worth' est suivi du gérondif." },
  { id: 'gex-adv-077', lessonId: 'reported-speech', type: 'transform', tier: 3, prompt: 'He said: "Go away!" -> He told me _____ away.', answer: 'to go', explanation: "Impératif rapporté (to-infinitive)." },
  { id: 'gex-adv-078', lessonId: 'much-many', type: 'mcq', tier: 3, prompt: 'There is _____ hope of finding survivors.', options: ['few', 'little', 'many', 'a few'], answer: 'little', explanation: "'Hope' est indénombrable." },
  { id: 'gex-adv-079', lessonId: 'linking-words', type: 'mcq', tier: 3, prompt: 'He is very clever; _____, he is quite lazy.', options: ['on the other hand', 'moreover', 'therefore', 'consequently'], answer: 'on the other hand', explanation: "Exprime un contraste." },
  { id: 'gex-adv-080', lessonId: 'gerund-infinitive', type: 'blank', tier: 3, prompt: 'I am interested _____ (learn) more about it.', answer: 'in learning', explanation: "Adjectif + préposition + gérondif." },
  { id: 'gex-adv-081', lessonId: 'relative-pronouns', type: 'mcq', tier: 3, prompt: 'The laptop _____ I bought last week is faulty.', options: ['who', 'which', 'whose', 'whom'], answer: 'which', explanation: "Pronom relatif pour un objet." },
  { id: 'gex-adv-082', lessonId: 'word-order', type: 'mcq', tier: 3, prompt: 'Under no circumstances _____ you open that door.', options: ['should', 'you should', 'do', 'you do'], answer: 'should', explanation: "Inversion après une expression négative prépositionnelle." },
  { id: 'gex-adv-083', lessonId: 'gerund-infinitive', type: 'blank', tier: 2, prompt: 'He promised _____ (call) me later.', answer: 'to call', explanation: "'Promise' est suivi de l'infinitif." },
  { id: 'gex-adv-084', lessonId: 'prepositions-place', type: 'mcq', tier: 2, prompt: 'The office is _____ the third floor.', options: ['in', 'at', 'on', 'into'], answer: 'on', explanation: "'On' pour les étages." },
  { id: 'gex-adv-085', lessonId: 'prepositions-time', type: 'blank', tier: 2, prompt: 'I was born _____ 1995.', answer: 'in', explanation: "'In' pour les années." },
  { id: 'gex-adv-086', lessonId: 'linking-words', type: 'mcq', tier: 3, prompt: '_____ you are here, let\'s start.', options: ['Since', 'While', 'Moreover', 'However'], answer: 'Since', explanation: "'Since' peut exprimer la cause (puisque)." },
  { id: 'gex-adv-087', lessonId: 'relative-pronouns', type: 'mcq', tier: 3, prompt: 'The woman _____ husband is a lawyer is my friend.', options: ['who', 'which', 'whose', 'whom'], answer: 'whose', explanation: "Possession relative." },
  { id: 'gex-adv-088', lessonId: 'word-order', type: 'blank', tier: 3, prompt: 'Little _____ they know about the surprise.', answer: 'did', explanation: "Inversion emphatique avec 'Little'." },
  { id: 'gex-adv-089', lessonId: 'gerund-infinitive', type: 'mcq', tier: 3, prompt: 'I can\'t help _____ in love with you.', options: ['fall', 'falling', 'to fall', 'fallen'], answer: 'falling', explanation: "'Can't help' est suivi du gérondif." },
  { id: 'gex-adv-090', lessonId: 'reported-speech', type: 'transform', tier: 3, prompt: 'He asked: "Where is the station?" -> He asked me where the station _____.', answer: 'was', explanation: "Backshift et ordre sujet-verbe dans la question indirecte." },
  { id: 'gex-adv-091', lessonId: 'much-many', type: 'mcq', tier: 2, prompt: 'There are too _____ people here.', options: ['much', 'many', 'a lot of', 'little'], answer: 'many', explanation: "'People' est dénombrable pluriel." },
  { id: 'gex-adv-092', lessonId: 'linking-words', type: 'mcq', tier: 3, prompt: 'He is very rich; _____, he lives in a small apartment.', options: ['however', 'moreover', 'therefore', 'consequently'], answer: 'however', explanation: "Opposition (cependant)." },
  { id: 'gex-adv-093', lessonId: 'gerund-infinitive', type: 'blank', tier: 3, prompt: 'It is important _____ (be) on time.', answer: 'to be', explanation: "Structure impersonnelle 'It is + adj + to-inf'." },
  { id: 'gex-adv-094', lessonId: 'relative-pronouns', type: 'mcq', tier: 3, prompt: 'The city _____ I live is very beautiful.', options: ['which', 'where', 'that', 'what'], answer: 'where', explanation: "Lieu relatif." },
  { id: 'gex-adv-095', lessonId: 'word-order', type: 'mcq', tier: 3, prompt: 'No sooner _____ I arrived than it started to rain.', options: ['had', 'did', 'have', 'do'], answer: 'had', explanation: "Structure 'No sooner... than' avec inversion." },
  { id: 'gex-adv-096', lessonId: 'gerund-infinitive', type: 'blank', tier: 3, prompt: 'I look forward _____ (meet) you soon.', answer: 'to meeting', explanation: "'To' est une préposition ici." },
  { id: 'gex-adv-097', lessonId: 'prepositions-place', type: 'mcq', tier: 2, prompt: 'He is sitting _____ me.', options: ['next to', 'at', 'on', 'into'], answer: 'next to', explanation: "Proximité immédiate." },
  { id: 'gex-adv-098', lessonId: 'prepositions-time', type: 'blank', tier: 2, prompt: 'I will see you _____ dinner.', answer: 'at', explanation: "'At' pour les moments de repas." },
  { id: 'gex-adv-099', lessonId: 'linking-words', type: 'mcq', tier: 3, prompt: '_____ he is old, he is still very active.', options: ['Although', 'Because', 'Moreover', 'However'], answer: 'Although', explanation: "Concession." },
  { id: 'gex-adv-100', lessonId: 'word-order', type: 'reorder', tier: 3, prompt: "Remets dans l'ordre :", tokens: ['so', 'angry', 'Never', 'he', 'been', 'had'], answer: 'Never had he been so angry', explanation: "Inversion emphatique avec 'Never' au Past Perfect." },

  // ========== ADVANCED TOEIC BLOCK 2 (101-200) ==========

  // --- Inversions & Emphatic Structures (Tier 3) ---
  { id: 'gex-adv-101', lessonId: 'word-order', type: 'mcq', tier: 3, prompt: 'Not only _____ the contract, but he also secured a bonus.', options: ['did he sign', 'he signed', 'he did sign', 'signed he'], answer: 'did he sign', explanation: "L'inversion est obligatoire après 'Not only' en début de phrase." },
  { id: 'gex-adv-102', lessonId: 'word-order', type: 'blank', tier: 3, prompt: 'Scarcely _____ the plane landed when the passengers started to unbuckle.', answer: 'had', explanation: "Structure 'Scarcely had... when' avec inversion." },
  { id: 'gex-adv-103', lessonId: 'word-order', type: 'mcq', tier: 3, prompt: 'At no time _____ that the project would be cancelled.', options: ['was I told', 'I was told', 'did I told', 'I told'], answer: 'was I told', explanation: "Inversion après une expression négative prépositionnelle." },
  { id: 'gex-adv-104', lessonId: 'word-order', type: 'reorder', tier: 3, prompt: "Inversion :", tokens: ['known', 'I', 'Little', 'did', 'the', 'truth'], answer: 'Little did I know the truth', explanation: "'Little' en début de phrase entraîne l'inversion du sujet et de l'auxiliaire 'did'." },

  // --- Subjunctive Mood (Necessity) ---
  { id: 'gex-adv-105', lessonId: 'word-order', type: 'mcq', tier: 3, prompt: 'The board recommended that the CEO _____ immediately.', options: ['resign', 'resigns', 'resigned', 'is resigning'], answer: 'resign', explanation: "Subjonctif (base verbale) après 'recommend that'." },
  { id: 'gex-adv-106', lessonId: 'word-order', type: 'blank', tier: 3, prompt: 'It is vital that every employee _____ (be) aware of the safety rules.', answer: 'be', explanation: "Le subjonctif utilise 'be' à toutes les personnes." },

  // --- Advanced Connectors ---
  { id: 'gex-adv-107', lessonId: 'linking-words', type: 'mcq', tier: 3, prompt: 'The company is thriving _____ the economic downturn.', options: ['notwithstanding', 'whereas', 'besides', 'given'], answer: 'notwithstanding', explanation: "'Notwithstanding' signifie 'malgré' (très fréquent en anglais juridique/TOEIC)." },
  { id: 'gex-adv-108', lessonId: 'linking-words', type: 'mcq', tier: 3, prompt: 'The revenue increased; _____, the stock price soared.', options: ['accordingly', 'nonetheless', 'conversely', 'provided'], answer: 'accordingly', explanation: "'Accordingly' exprime une conséquence logique (en conséquence)." },
  { id: 'gex-adv-109', lessonId: 'linking-words', type: 'error', tier: 3, prompt: 'In spite of he was tired, he kept working.', errorWord: 'In spite of', answer: 'Although', explanation: "'In spite of' est suivi d'un nom, 'Although' d'une proposition avec sujet+verbe." },

  // --- Countable / Uncountable & Collective Nouns ---
  { id: 'gex-adv-110', lessonId: 'much-many', type: 'mcq', tier: 3, prompt: 'The _____ was extremely helpful during my job search.', options: ['advice', 'advices', 'advicing', 'advisory'], answer: 'advice', explanation: "'Advice' est strictement indénombrable (pas de -s)." },
  { id: 'gex-adv-111', lessonId: 'much-many', type: 'blank', tier: 3, prompt: 'We need to purchase new office _____ (furniture).', answer: 'furniture', explanation: "'Furniture' ne prend jamais de -s." },
  { id: 'gex-adv-112', lessonId: 'much-many', type: 'error', tier: 2, prompt: 'The police is investigating the crime.', errorWord: 'is', answer: 'are', explanation: "'Police' est un nom collectif toujours pluriel." },

  // --- Double Comparatives ---
  { id: 'gex-adv-113', lessonId: 'comparatives', type: 'reorder', tier: 2, prompt: "Remets dans l'ordre :", tokens: ['The', 'more', 'faster', 'the', 'better'], answer: 'The faster the better', explanation: "Structure double comparative 'The [adj-er], the better'." },
  { id: 'gex-adv-114', lessonId: 'comparatives', type: 'mcq', tier: 3, prompt: 'The more sophisticated the system, _____ it is to operate.', options: ['the more difficult', 'more difficult', 'the most difficult', 'difficulty'], answer: 'the more difficult', explanation: "Structure 'The more..., the more...'." },

  // --- Causative Nuances ---
  { id: 'gex-adv-115', lessonId: 'gerund-infinitive', type: 'blank', tier: 3, prompt: 'The lawyer made the witness _____ (tell) the truth.', answer: 'tell', explanation: "'Make someone do something' (sans 'to')." },
  { id: 'gex-adv-116', lessonId: 'gerund-infinitive', type: 'mcq', tier: 3, prompt: 'The supervisor let the staff _____ early on Friday.', options: ['leave', 'to leave', 'leaving', 'leaves'], answer: 'leave', explanation: "'Let someone do something' (sans 'to')." },
  { id: 'gex-adv-117', lessonId: 'gerund-infinitive', type: 'transform', tier: 3, prompt: 'Active: I convinced him to join. -> Passive: He was made _____.', answer: 'to join', explanation: "Au passif, 'make' est suivi de l'infinitif complet avec 'to'." },

  // --- Modals (Perfect forms) ---
  { id: 'gex-adv-118', lessonId: 'personal-pronouns', type: 'mcq', tier: 3, prompt: 'The document is missing. Someone _____ have taken it by mistake.', options: ['must', 'can', 'should', 'would'], answer: 'must', explanation: "Déduction logique forte au passé : 'must have + V3'." },
  { id: 'gex-adv-119', lessonId: 'personal-pronouns', type: 'mcq', tier: 3, prompt: 'You _____ have told me you were coming; I would have prepared dinner.', options: ['might', 'must', 'can', 'will'], answer: 'might', explanation: "'Might have + V3' exprime un reproche ou une possibilité passée non réalisée." },

  // --- Gerund vs Infinitive (TOEIC special) ---
  { id: 'gex-adv-120', lessonId: 'gerund-infinitive', type: 'mcq', tier: 3, prompt: 'The CEO suggested _____ a new marketing strategy.', options: ['adopting', 'to adopt', 'adopt', 'adoption'], answer: 'adopting', explanation: "'Suggest' est suivi du gérondif." },
  { id: 'gex-adv-121', lessonId: 'gerund-infinitive', type: 'blank', tier: 3, prompt: 'They are considering _____ (expand) their business to Asia.', answer: 'expanding', explanation: "'Consider' est suivi du gérondif." },
  { id: 'gex-adv-122', lessonId: 'gerund-infinitive', type: 'mcq', tier: 3, prompt: 'He failed _____ the deadline.', options: ['to meet', 'meeting', 'meet', 'met'], answer: 'to meet', explanation: "'Fail' est suivi de l'infinitif avec 'to'." },

  // --- Relative Clauses (Whom/Whose) ---
  { id: 'gex-adv-123', lessonId: 'relative-pronouns', type: 'mcq', tier: 3, prompt: 'The man with _____ you were speaking is the department head.', options: ['whom', 'who', 'whose', 'which'], answer: 'whom', explanation: "Après une préposition, on utilise obligatoirement 'whom' pour les personnes." },
  { id: 'gex-adv-124', lessonId: 'relative-pronouns', type: 'blank', tier: 3, prompt: 'The company, _____ profits have tripled, is going public.', answer: 'whose', explanation: "'Whose' exprime la possession pour une personne ou une organisation." },

  // --- Participle Clauses ---
  { id: 'gex-adv-125', lessonId: 'reported-speech', type: 'mcq', tier: 3, prompt: '_____ the report, the manager sent it to the client.', options: ['Having finished', 'Finish', 'To finish', 'Finished'], answer: 'Having finished', explanation: "Participe passé composé exprimant l'antériorité d'une action." },
  { id: 'gex-adv-126', lessonId: 'reported-speech', type: 'mcq', tier: 3, prompt: '_____ from a distance, the island looks like a whale.', options: ['Seen', 'Seeing', 'Saw', 'See'], answer: 'Seen', explanation: "Participe passé passif ('Vu de loin...')." },

  // --- Articles (TOEIC Trap) ---
  { id: 'gex-adv-127', lessonId: 'articles-a-an-the', type: 'blank', tier: 3, prompt: '_____ unemployment is a major issue in _____ South Africa.', answer: '— / —', explanation: "Pas d'article pour les concepts abstraits généraux ou les noms de pays simples." },
  { id: 'gex-adv-128', lessonId: 'articles-a-an-the', type: 'mcq', tier: 2, prompt: 'The job requires _____ unique set of skills.', options: ['a', 'an', 'the', '—'], answer: 'a', explanation: "'Unique' commence par le son /j/ (consonne)." },

  // --- Prepositions (Fixed expressions) ---
  { id: 'gex-adv-129', lessonId: 'prepositions-time', type: 'mcq', tier: 3, prompt: 'The contract will expire _____ midnight on December 31st.', options: ['at', 'on', 'in', 'by'], answer: 'at', explanation: "'At' pour les heures précises et 'midnight'." },
  { id: 'gex-adv-130', lessonId: 'prepositions-place', type: 'blank', tier: 3, prompt: 'The documents are _____ (under) review by the legal team.', answer: 'under', explanation: "Expression fixe : 'under review'." },

  // --- Adjective Order ---
  { id: 'gex-adv-131', lessonId: 'adjective-order', type: 'reorder', tier: 3, prompt: "Ordre correct :", tokens: ['American', 'rectangular', 'large', 'brown', 'table'], answer: 'large rectangular brown American table', explanation: "Taille > Forme > Couleur > Origine." },

  // --- Reported Speech (Indirect Questions) ---
  { id: 'gex-adv-132', lessonId: 'reported-speech', type: 'mcq', tier: 3, prompt: 'Could you tell me what time _____?', options: ['it is', 'is it', 'it was', 'does it is'], answer: 'it is', explanation: "Dans une question indirecte, l'ordre est sujet + verbe (pas d'inversion)." },
  { id: 'gex-adv-133', lessonId: 'reported-speech', type: 'transform', tier: 3, prompt: 'Direct: "Where do you live?" -> Indirect: He asked me where _____.', answer: 'I lived', explanation: "Changement de temps (backshift) et ordre sujet-verbe." },

  // --- Conditional 3 (Regret) ---
  { id: 'gex-adv-134', lessonId: 'word-order', type: 'mcq', tier: 3, prompt: 'If I had been more careful, I _____ made that mistake.', options: ["wouldn't have", 'wont have', "hadn't", "didn't"], answer: "wouldn't have", explanation: "Structure du 3ème conditionnel : If + Past Perfect, would have + V3." },

  // --- Question Tags (Tricky) ---
  { id: 'gex-adv-135', lessonId: 'question-tags', type: 'mcq', tier: 3, prompt: 'Nobody knows the answer, _____?', options: ['do they', 'don\'t they', 'does he', 'doesn\'t he'], answer: 'do they', explanation: "Après 'Nobody', on utilise un pronom pluriel 'they' et un tag affirmatif." },
  { id: 'gex-adv-136', lessonId: 'question-tags', type: 'blank', tier: 3, prompt: 'Stop talking, _____ (you)?', answer: 'will you', explanation: "Le tag pour un impératif est généralement 'will you?' (invitation/ordre)." },

  // --- Gerund vs Infinitive (Stop/Try/Remember) ---
  { id: 'gex-adv-137', lessonId: 'gerund-infinitive', type: 'mcq', tier: 3, prompt: 'I stopped _____ for a moment to look at the map.', options: ['to walk', 'walking', 'walk', 'walked'], answer: 'to walk', explanation: "Stop + to-infinitive = s'arrêter POUR faire quelque chose." },
  { id: 'gex-adv-138', lessonId: 'gerund-infinitive', type: 'blank', tier: 3, prompt: 'Have you tried _____ (restart) the computer to fix the issue?', answer: 'restarting', explanation: "Try + -ing = expérimenter une méthode / faire un essai." },

  // --- Comparison (Nuances) ---
  { id: 'gex-adv-139', lessonId: 'comparatives', type: 'mcq', tier: 3, prompt: 'This task is _____ more difficult than the last one.', options: ['considerably', 'more', 'very', 'too'], answer: 'considerably', explanation: "On utilise des adverbes comme 'considerably', 'much' or 'far' pour quantifier une différence comparative." },
  { id: 'gex-adv-140', lessonId: 'superlatives', type: 'mcq', tier: 3, prompt: 'It was _____ interesting film I had ever seen.', options: ['the most', 'most', 'the more', 'more'], answer: 'the most', explanation: "Structure superlatif 'The most'." },

  // --- Miscellaneous Advanced (141-200 continue based on these patterns) ---
  { id: 'gex-adv-141', lessonId: 'linking-words', type: 'blank', tier: 3, prompt: 'I will go _____ (unless) you tell me not to.', answer: 'unless', explanation: "'Unless' signifie 'à moins que'." },
  { id: 'gex-adv-142', lessonId: 'relative-pronouns', type: 'error', tier: 3, prompt: 'The car which engine is broken is mine.', errorWord: 'which', answer: 'whose', explanation: "Possession relative pour un objet." },
  { id: 'gex-adv-143', lessonId: 'word-order', type: 'mcq', tier: 3, prompt: 'Scarcely _____ when the phone rang.', options: ['had I arrived', 'I had arrived', 'did I arrive', 'I arrived'], answer: 'had I arrived', explanation: "Inversion avec 'Scarcely'." },
  { id: 'gex-adv-144', lessonId: 'gerund-infinitive', type: 'blank', tier: 3, prompt: 'It is worth _____ (visit) that museum.', answer: 'visiting', explanation: "'It is worth' + gérondif." },
  { id: 'gex-adv-145', lessonId: 'much-many', type: 'mcq', tier: 3, prompt: 'How _____ luggage are you carrying?', options: ['much', 'many', 'a few', 'few'], answer: 'much', explanation: "'Luggage' est indénombrable." },
  { id: 'gex-adv-146', lessonId: 'linking-words', type: 'mcq', tier: 3, prompt: 'The flight was cancelled _____ the storm.', options: ['due to', 'because', 'since', 'as'], answer: 'due to', explanation: "'Due to' + nom." },
  { id: 'gex-adv-147', lessonId: 'reported-speech', type: 'transform', tier: 3, prompt: 'Direct: "I can help" -> Indirect: He said he _____ help.', answer: 'could', explanation: "Can devient could au discours indirect." },
  { id: 'gex-adv-148', lessonId: 'word-order', type: 'reorder', tier: 3, prompt: "Emphase :", tokens: ['did', 'he', 'say', 'What', 'exactly'], answer: 'What did he exactly say', explanation: "Structure interrogative." },
  { id: 'gex-adv-149', lessonId: 'question-tags', type: 'blank', tier: 3, prompt: 'You have a car, _____ you?', answer: "don't", explanation: "Tag pour 'have' (verbe plein) au présent." },
  { id: 'gex-adv-150', lessonId: 'personal-pronouns', type: 'mcq', tier: 3, prompt: 'Between you and _____, I think he is lying.', options: ['me', 'I', 'my', 'mine'], answer: 'me', explanation: "Après une préposition, on utilise le pronom objet ('me')." },
  { id: 'gex-adv-151', lessonId: 'word-order', type: 'mcq', tier: 3, prompt: 'Should the meeting _____ postponed, we will notify you.', options: ['be', 'is', 'was', 'being'], answer: 'be', explanation: "Inversion du 'If' au futur (Should you...)."},
  { id: 'gex-adv-152', lessonId: 'linking-words', type: 'mcq', tier: 3, prompt: '_____ he studied hard, he failed the exam.', options: ['Although', 'Despite', 'In spite of', 'However'], answer: 'Although', explanation: "Concession avec proposition complète."},
  { id: 'gex-adv-153', lessonId: 'gerund-infinitive', type: 'mcq', tier: 3, prompt: 'I look forward to _____ from you.', options: ['hearing', 'hear', 'to hear', 'heard'], answer: 'hearing', explanation: "'To' est ici une préposition."},
  { id: 'gex-adv-154', lessonId: 'much-many', type: 'error', tier: 3, prompt: 'He gave me many informations.', errorWord: 'informations', answer: 'information', explanation: "'Information' est indénombrable."},
  { id: 'gex-adv-155', lessonId: 'relative-pronouns', type: 'blank', tier: 3, prompt: 'The woman _____ I met yesterday is a lawyer.', answer: 'whom', explanation: "Pronom relatif objet pour une personne."},
  { id: 'gex-adv-156', lessonId: 'word-order', type: 'mcq', tier: 3, prompt: 'Hardly _____ the door when the alarm went off.', options: ['had I opened', 'I had opened', 'did I open', 'I opened'], answer: 'had I opened', explanation: "Inversion avec 'Hardly'."},
  { id: 'gex-adv-157', lessonId: 'gerund-infinitive', type: 'blank', tier: 3, prompt: 'He denied _____ (break) the window.', answer: 'breaking', explanation: "'Deny' est suivi du gérondif."},
  { id: 'gex-adv-158', lessonId: 'linking-words', type: 'mcq', tier: 3, prompt: 'I will help you _____ you help me.', options: ['provided', 'unless', 'despite', 'whereas'], answer: 'provided', explanation: "'Provided' = à condition que."},
  { id: 'gex-adv-159', lessonId: 'much-many', type: 'mcq', tier: 3, prompt: 'There is _____ evidence to support his claim.', options: ['little', 'few', 'many', 'a few'], answer: 'little', explanation: "'Evidence' est indénombrable."},
  { id: 'gex-adv-160', lessonId: 'word-order', type: 'reorder', tier: 3, prompt: "Ordre :", tokens: ['Only', 'will', 'then', 'I', 'agree'], answer: 'Only then will I agree', explanation: "Inversion après 'Only then'."},
  { id: 'gex-adv-161', lessonId: 'gerund-infinitive', type: 'mcq', tier: 3, prompt: 'I avoid _____ in rush hour traffic.', options: ['driving', 'to drive', 'drive', 'driven'], answer: 'driving', explanation: "'Avoid' est suivi du gérondif."},
  { id: 'gex-adv-162', lessonId: 'reported-speech', type: 'transform', tier: 3, prompt: 'Direct: "Go!" -> Indirect: He told me _____.', answer: 'to go', explanation: "Impératif au discours indirect."},
  { id: 'gex-adv-163', lessonId: 'question-tags', type: 'blank', tier: 3, prompt: 'I am right, _____ I?', answer: "aren't", explanation: "Tag irrégulier pour 'I am'."},
  { id: 'gex-adv-164', lessonId: 'much-many', type: 'mcq', tier: 3, prompt: 'We don\'t have _____ money left.', options: ['much', 'many', 'few', 'a few'], answer: 'much', explanation: "'Money' est indénombrable."},
  { id: 'gex-adv-165', lessonId: 'relative-pronouns', type: 'mcq', tier: 3, prompt: 'The house _____ roof is red is mine.', options: ['whose', 'which', 'that', 'who'], answer: 'whose', explanation: "Possession relative."},
  { id: 'gex-adv-166', lessonId: 'word-order', type: 'mcq', tier: 3, prompt: 'Never _____ such a tall building.', options: ['have I seen', 'I have seen', 'did I saw', 'I saw'], answer: 'have I seen', explanation: "Inversion avec 'Never'."},
  { id: 'gex-adv-167', lessonId: 'gerund-infinitive', type: 'blank', tier: 3, prompt: 'She suggested _____ (buy) a new car.', answer: 'buying', explanation: "'Suggest' est suivi du gérondif."},
  { id: 'gex-adv-168', lessonId: 'linking-words', type: 'mcq', tier: 3, prompt: 'He is rich; _____, he is unhappy.', options: ['nevertheless', 'therefore', 'consequently', 'moreover'], answer: 'nevertheless', explanation: "Contraste."},
  { id: 'gex-adv-169', lessonId: 'much-many', type: 'error', tier: 3, prompt: 'I need an advice.', errorWord: 'an', answer: 'some', explanation: "'Advice' est indénombrable."},
  { id: 'gex-adv-170', lessonId: 'word-order', type: 'reorder', tier: 3, prompt: "Inversion :", tokens: ['rarely', 'Does', 'he', 'late', 'arrive'], answer: 'Does he rarely arrive late', explanation: "Inversion interrogative."},
  { id: 'gex-adv-171', lessonId: 'gerund-infinitive', type: 'mcq', tier: 3, prompt: 'It is no use _____ about it.', options: ['crying', 'to cry', 'cry', 'cried'], answer: 'crying', explanation: "'It is no use' + gérondif."},
  { id: 'gex-adv-172', lessonId: 'reported-speech', type: 'transform', tier: 3, prompt: 'Direct: "I will be there" -> Indirect: He said he _____ be there.', answer: 'would', explanation: "Will devient would."},
  { id: 'gex-adv-173', lessonId: 'question-tags', type: 'blank', tier: 3, prompt: 'Let\'s go, _____ we?', answer: 'shall', explanation: "Tag pour 'Let's'."},
  { id: 'gex-adv-174', lessonId: 'much-many', type: 'mcq', tier: 3, prompt: 'He has _____ friends in the city.', options: ['few', 'little', 'much', 'any'], answer: 'few', explanation: "'Friends' est dénombrable."},
  { id: 'gex-adv-175', lessonId: 'relative-pronouns', type: 'mcq', tier: 3, prompt: 'The car _____ I bought is fast.', options: ['which', 'who', 'whom', 'whose'], answer: 'which', explanation: "Relatif pour un objet."},
  { id: 'gex-adv-176', lessonId: 'word-order', type: 'mcq', tier: 3, prompt: 'Seldom _____ such a beautiful sunset.', options: ['have I seen', 'I have seen', 'did I saw', 'I saw'], answer: 'have I seen', explanation: "Inversion avec 'Seldom'."},
  { id: 'gex-adv-177', lessonId: 'gerund-infinitive', type: 'blank', tier: 3, prompt: 'I am interested in _____ (learn) English.', answer: 'learning', explanation: "Préposition + gérondif."},
  { id: 'gex-adv-178', lessonId: 'linking-words', type: 'mcq', tier: 3, prompt: '_____ the rain, we went for a walk.', options: ['Despite', 'Although', 'Even though', 'Because'], answer: 'Despite', explanation: "Concession avec groupe nominal."},
  { id: 'gex-adv-179', lessonId: 'much-many', type: 'error', tier: 3, prompt: 'The news are bad.', errorWord: 'are', answer: 'is', explanation: "'News' est singulier."},
  { id: 'gex-adv-180', lessonId: 'word-order', type: 'reorder', tier: 3, prompt: "Inversion :", tokens: ['Had', 'known', 'I', 'I', 'come', 'would', 'have'], answer: 'Had I known I would have come', explanation: "Conditionnel 3 inversé."},
  { id: 'gex-adv-181', lessonId: 'gerund-infinitive', type: 'mcq', tier: 3, prompt: 'He finished _____ the report.', options: ['writing', 'to write', 'write', 'written'], answer: 'writing', explanation: "'Finish' + gérondif."},
  { id: 'gex-adv-182', lessonId: 'reported-speech', type: 'transform', tier: 3, prompt: 'Direct: "I am happy" -> Indirect: He said he _____ happy.', answer: 'was', explanation: "Am devient was."},
  { id: 'gex-adv-183', lessonId: 'question-tags', type: 'blank', tier: 3, prompt: 'She can swim, _____ she?', answer: "can't", explanation: "Tag pour 'can'."},
  { id: 'gex-adv-184', lessonId: 'much-many', type: 'mcq', tier: 3, prompt: 'There isn\'t _____ water in the bottle.', options: ['much', 'many', 'few', 'a few'], answer: 'much', explanation: "'Water' est indénombrable."},
  { id: 'gex-adv-185', lessonId: 'relative-pronouns', type: 'mcq', tier: 3, prompt: 'The man _____ is standing there is my brother.', options: ['who', 'which', 'whom', 'whose'], answer: 'who', explanation: "Relatif sujet pour une personne."},
  { id: 'gex-adv-186', lessonId: 'word-order', type: 'mcq', tier: 3, prompt: 'Under no circumstances _____ you leave.', options: ['should', 'you should', 'do', 'you do'], answer: 'should', explanation: "Inversion après expression négative."},
  { id: 'gex-adv-187', lessonId: 'gerund-infinitive', type: 'blank', tier: 3, prompt: 'He promised _____ (call) me.', answer: 'to call', explanation: "'Promise' + infinitif."},
  { id: 'gex-adv-188', lessonId: 'linking-words', type: 'mcq', tier: 3, prompt: 'He was tired; _____, he finished the work.', options: ['nevertheless', 'therefore', 'consequently', 'moreover'], answer: 'nevertheless', explanation: "Contraste."},
  { id: 'gex-adv-189', lessonId: 'much-many', type: 'error', tier: 3, prompt: 'There are many furnitures.', errorWord: 'furnitures', answer: 'furniture', explanation: "'Furniture' est indénombrable."},
  { id: 'gex-adv-190', lessonId: 'word-order', type: 'reorder', tier: 3, prompt: "Ordre :", tokens: ['Never', 'so', 'happy', 'have', 'I', 'been'], answer: 'Never have I been so happy', explanation: "Inversion emphatique."},
  { id: 'gex-adv-191', lessonId: 'gerund-infinitive', type: 'mcq', tier: 3, prompt: 'I enjoy _____ to music.', options: ['listening', 'to listen', 'listen', 'listened'], answer: 'listening', explanation: "'Enjoy' + gérondif."},
  { id: 'gex-adv-192', lessonId: 'reported-speech', type: 'transform', tier: 3, prompt: 'Direct: "I have finished" -> Indirect: He said he _____ finished.', answer: 'had', explanation: "Present perfect devient Past perfect."},
  { id: 'gex-adv-193', lessonId: 'question-tags', type: 'blank', tier: 3, prompt: 'You will come, _____ you?', answer: "won't", explanation: "Tag pour 'will'."},
  { id: 'gex-adv-194', lessonId: 'much-many', type: 'mcq', tier: 3, prompt: 'I have _____ money.', options: ['little', 'few', 'many', 'any'], answer: 'little', explanation: "'Money' est indénombrable."},
  { id: 'gex-adv-195', lessonId: 'relative-pronouns', type: 'mcq', tier: 3, prompt: 'The book _____ I read was good.', options: ['which', 'who', 'whom', 'whose'], answer: 'which', explanation: "Relatif pour un objet."},
  { id: 'gex-adv-196', lessonId: 'word-order', type: 'mcq', tier: 3, prompt: 'Barely _____ when the bell rang.', options: ['had I started', 'I had started', 'did I start', 'I started'], answer: 'had I started', explanation: "Inversion avec 'Barely'."},
  { id: 'gex-adv-197', lessonId: 'gerund-infinitive', type: 'blank', tier: 3, prompt: 'I plan _____ (go) to London.', answer: 'to go', explanation: "'Plan' + infinitif."},
  { id: 'gex-adv-198', lessonId: 'linking-words', type: 'mcq', tier: 3, prompt: 'It was raining; _____, we stayed inside.', options: ['therefore', 'nevertheless', 'however', 'whereas'], answer: 'therefore', explanation: "Conséquence."},
  { id: 'gex-adv-199', lessonId: 'much-many', type: 'error', tier: 3, prompt: 'The staffs are friendly.', errorWord: 'staffs', answer: 'staff', explanation: "'Staff' est un nom collectif invariable."},
  { id: 'gex-adv-200', lessonId: 'word-order', type: 'reorder', tier: 3, prompt: "Ordre :", tokens: ['The', 'sooner', 'better', 'the'], answer: 'The sooner the better', explanation: "Double comparatif."},

  // ========== ADVANCED TOEIC BLOCK 3 (201-300) : Connectors & Complex Modals ==========

  // --- Complex Modals (Deduction/Regret) ---
  { id: 'gex-adv-201', lessonId: 'modals-deduction', type: 'mcq', tier: 3, prompt: "She _____ have been exhausted after that marathon.", options: ['must', 'can', 'should', 'would'], answer: 'must', explanation: "Déduction logique d'une certitude passée (Must have + V3)." },
  { id: 'gex-adv-202', lessonId: 'modals-deduction', type: 'blank', tier: 3, prompt: "I _____ have brought an umbrella; it didn't rain at all.", answer: "needn't", explanation: "'Needn't have + V3' exprime une action effectuée inutilement." },
  { id: 'gex-adv-203', lessonId: 'modals-deduction', type: 'mcq', tier: 3, prompt: "They _____ have heard the news yet; they just arrived.", options: ["can't", "mustn't", "shouldn't", "won't"], answer: "can't", explanation: "Impossibilité logique au passé (Can't have + V3)." },
  { id: 'gex-adv-204', lessonId: 'modals-deduction', type: 'transform', tier: 3, prompt: "Regret (study): I _____ harder for the test.", answer: 'should have studied', explanation: "'Should have + V3' exprime un regret ou un conseil passé non suivi." },
  { id: 'gex-adv-205', lessonId: 'modals-deduction', type: 'reorder', tier: 3, prompt: "Hypothèse :", tokens: ['might', 'They', 'lost', 'have', 'way', 'their'], answer: 'They might have lost their way', explanation: "Possibilité incertaine au passé." },

  // --- Connectors (Concession/Contrast) ---
  { id: 'gex-adv-206', lessonId: 'linking-words', type: 'mcq', tier: 3, prompt: "_____ the difficulty of the task, he managed to finish it.", options: ['Despite', 'Although', 'Even though', 'But'], answer: 'Despite', explanation: "'Despite' est suivi d'un nom ou d'un groupe nominal." },
  { id: 'gex-adv-207', lessonId: 'linking-words', type: 'mcq', tier: 3, prompt: "He is very talented; _____, he is quite modest.", options: ['nevertheless', 'therefore', 'consequently', 'moreover'], answer: 'nevertheless', explanation: "'Nevertheless' (néanmoins) exprime une opposition." },
  { id: 'gex-adv-208', lessonId: 'linking-words', type: 'blank', tier: 3, prompt: "_____ (whereas) her sister is quiet, she is very outgoing.", answer: 'whereas', explanation: "'Whereas' souligne un contraste entre deux personnes ou situations." },
  { id: 'gex-adv-209', lessonId: 'linking-words', type: 'error', tier: 3, prompt: "Even if it was expensive, I bought it.", errorWord: 'Even if', answer: 'Even though', explanation: "'Even though' s'utilise pour un fait réel, 'Even if' pour une hypothèse." },
  { id: 'gex-adv-210', lessonId: 'linking-words', type: 'mcq', tier: 3, prompt: "The law was passed, _____ strong public opposition.", options: ['notwithstanding', 'subsequently', 'furthermore', 'accordingly'], answer: 'notwithstanding', explanation: "'Notwithstanding' signifie 'malgré' (très formel)." },

  // --- Rather / Better / Used to ---
  { id: 'gex-adv-211', lessonId: 'modals-deduction', type: 'mcq', tier: 3, prompt: "I would rather _____ at home than go out tonight.", options: ['stay', 'to stay', 'staying', 'stayed'], answer: 'stay', explanation: "'Would rather' est suivi de la base verbale sans 'to'." },
  { id: 'gex-adv-212', lessonId: 'modals-deduction', type: 'blank', tier: 3, prompt: "You had _____ (better) call him before he leaves.", answer: 'better', explanation: "'Had better' exprime un conseil pressant (tu ferais mieux de)." },
  { id: 'gex-adv-213', lessonId: 'modals-deduction', type: 'mcq', tier: 3, prompt: "I'm not used to _____ so early.", options: ['waking up', 'wake up', 'to wake up', 'waked up'], answer: 'waking up', explanation: "'Be used to' (être habitué à) est suivi du gérondif (-ing)." },
  { id: 'gex-adv-214', lessonId: 'modals-deduction', type: 'error', tier: 2, prompt: "I used to swimming every morning.", errorWord: 'swimming', answer: 'swim', explanation: "'Used to' (habitude passée révolue) est suivi de la base verbale." },
  { id: 'gex-adv-215', lessonId: 'modals-deduction', type: 'transform', tier: 3, prompt: "Preference: I'd rather you _____ (not tell) him.", answer: "didn't tell", explanation: "Après 'would rather + sujet', on utilise le prétérit pour exprimer une préférence présente/future." },

  // --- Purpose & Result ---
  { id: 'gex-adv-216', lessonId: 'linking-words', type: 'mcq', tier: 3, prompt: "He saved money _____ buy a new laptop.", options: ['so as to', 'in order that', 'because of', 'so that'], answer: 'so as to', explanation: "'So as to' est suivi de l'infinitif pour exprimer le but." },
  { id: 'gex-adv-217', lessonId: 'linking-words', type: 'mcq', tier: 3, prompt: "She spoke quietly _____ anyone should hear her.", options: ['lest', 'unless', 'provided', 'whereas'], answer: 'lest', explanation: "'Lest' signifie 'de peur que' (registre soutenu)." },
  { id: 'gex-adv-218', lessonId: 'linking-words', type: 'blank', tier: 3, prompt: "The train was delayed; _____ (consequently), I missed the meeting.", answer: 'consequently', explanation: "'Consequently' introduit une conséquence logique." },
  { id: 'gex-adv-219', lessonId: 'linking-words', type: 'reorder', tier: 3, prompt: "But :", tokens: ['that', 'he', 'so', 'hard', 'worked', 'succeed', 'would', 'in', 'order'], answer: 'he worked hard in order that he would succeed', explanation: "Structure 'in order that' suivie d'une proposition complète." },
  { id: 'gex-adv-220', lessonId: 'linking-words', type: 'mcq', tier: 3, prompt: "The flight was cancelled _____ to the heavy fog.", options: ['due', 'owing', 'because', 'as'], answer: 'due', explanation: "'Due to' introduit une cause nominale." },

  // --- Mixed Advanced 221-250 ---
  { id: 'gex-adv-221', lessonId: 'modals-deduction', type: 'mcq', tier: 3, prompt: "He _____ have committed the crime; he was with me.", options: ["couldn't", "mustn't", "shouldn't", "mightn't"], answer: "couldn't", explanation: "Impossibilité logique au passé." },
  { id: 'gex-adv-222', lessonId: 'linking-words', type: 'mcq', tier: 3, prompt: "_____ how hard he tries, he always fails.", options: ['No matter', 'Regardless', 'Although', 'Despite'], answer: 'No matter', explanation: "'No matter how' signifie 'peu importe à quel point'." },
  { id: 'gex-adv-223', lessonId: 'modals-deduction', type: 'mcq', tier: 3, prompt: "It _____ have been Jack who called; it sounded like him.", options: ['might', 'can', 'should', 'would'], answer: 'might', explanation: "Possibilité ou probabilité passée." },
  { id: 'gex-adv-224', lessonId: 'linking-words', type: 'mcq', tier: 3, prompt: "I'll join you _____ I finish my work.", options: ['provided', 'unless', 'lest', 'whereas'], answer: 'provided', explanation: "'Provided (that)' signifie 'à condition que'." },
  { id: 'gex-adv-225', lessonId: 'modals-deduction', type: 'error', tier: 3, prompt: "He must has arrived by now.", errorWord: 'has', answer: 'have', explanation: "Après un modal, on utilise toujours l'infinitif sans 'to' (have)." },
  { id: 'gex-adv-226', lessonId: 'linking-words', type: 'mcq', tier: 3, prompt: "The company is small; _____, it is very profitable.", options: ['even so', 'consequently', 'moreover', 'hence'], answer: 'even so', explanation: "'Even so' exprime une concession (quand bien même)." },
  { id: 'gex-adv-227', lessonId: 'modals-deduction', type: 'blank', tier: 3, prompt: "I _____ (may) have left my keys at the office.", answer: 'may', explanation: "Probabilité au passé." },
  { id: 'gex-adv-228', lessonId: 'linking-words', type: 'mcq', tier: 3, prompt: "He is talented, _____ his laziness.", options: ['albeit', 'whereas', 'whilst', 'nonetheless'], answer: 'albeit', explanation: "'Albeit' signifie 'bien que' devant un adjectif." },
  { id: 'gex-adv-229', lessonId: 'modals-deduction', type: 'mcq', tier: 3, prompt: "She _____ have forgotten about the meeting.", options: ['could', 'should', 'mustn\'t', 'can'], answer: 'could', explanation: "Possibilité passée." },
  { id: 'gex-adv-230', lessonId: 'linking-words', type: 'reorder', tier: 3, prompt: "Contraste :", tokens: ['very', 'bright', 'Nonetheless', 'difficult', 'he', 'found', 'it', 'is', 'he'], answer: 'he is very bright Nonetheless he found it difficult', explanation: "Utilisation de 'Nonetheless' pour marquer un contraste." },
  { id: 'gex-adv-231', lessonId: 'modals-deduction', type: 'mcq', tier: 3, prompt: "You _____ have paid for the meal; it was on me!", options: ["needn't", "mustn't", "shouldn't", "can't"], answer: "needn't", explanation: "L'action a été faite mais elle n'était pas nécessaire." },
  { id: 'gex-adv-232', lessonId: 'linking-words', type: 'mcq', tier: 3, prompt: "The budget was cut; _____, some projects were cancelled.", options: ['accordingly', 'nevertheless', 'conversely', 'provided'], answer: 'accordingly', explanation: "'Accordingly' = en conséquence / de ce fait." },
  { id: 'gex-adv-233', lessonId: 'modals-deduction', type: 'blank', tier: 3, prompt: "I'd _____ (rather) you didn't smoke in here.", answer: 'rather', explanation: "Structure de préférence avec sujet différent." },
  { id: 'gex-adv-234', lessonId: 'linking-words', type: 'mcq', tier: 3, prompt: "_____ the weather improves, the match will be postponed.", options: ['Unless', 'Provided', 'Lest', 'Whereas'], answer: 'Unless', explanation: "'Unless' = à moins que." },
  { id: 'gex-adv-235', lessonId: 'modals-deduction', type: 'error', tier: 3, prompt: "You better go now.", errorWord: 'better', answer: 'had better', explanation: "La structure complète est 'had better'." },
  { id: 'gex-adv-236', lessonId: 'linking-words', type: 'mcq', tier: 3, prompt: "He was late _____ the traffic jam.", options: ['owing', 'due', 'because', 'since'], answer: 'owing', explanation: "'Owing to' introduit une cause nominale." },
  { id: 'gex-adv-237', lessonId: 'modals-deduction', type: 'mcq', tier: 3, prompt: "He _____ have known the secret; I never told him.", options: ["can't", "must", "should", "might"], answer: "can't", explanation: "Impossibilité logique passée." },
  { id: 'gex-adv-238', lessonId: 'linking-words', type: 'mcq', tier: 3, prompt: "I'll go _____ you come with me.", options: ['as long as', 'unless', 'whereas', 'lest'], answer: 'as long as', explanation: "'As long as' = tant que / à condition que." },
  { id: 'gex-adv-239', lessonId: 'modals-deduction', type: 'blank', tier: 3, prompt: "It _____ (might) have been a mistake to hire him.", answer: 'might', explanation: "Possibilité passée." },
  { id: 'gex-adv-240', lessonId: 'linking-words', type: 'mcq', tier: 3, prompt: "The house is old; _____, it is in good condition.", options: ['on the other hand', 'moreover', 'therefore', 'consequently'], answer: 'on the other hand', explanation: "Expression d'un contraste." },
  { id: 'gex-adv-241', lessonId: 'modals-deduction', type: 'mcq', tier: 3, prompt: "She _____ have been lying; her story changed twice.", options: ['must', 'can', 'should', 'would'], answer: 'must', explanation: "Déduction logique forte." },
  { id: 'gex-adv-242', lessonId: 'linking-words', type: 'mcq', tier: 3, prompt: "He is rich, _____ he is very unhappy.", options: ['yet', 'so', 'for', 'nor'], answer: 'yet', explanation: "'Yet' exprime un contraste surprenant." },
  { id: 'gex-adv-243', lessonId: 'modals-deduction', type: 'transform', tier: 3, prompt: "Necessity: It is time he _____ (go) to bed.", answer: 'went', explanation: "Après 'It is time + sujet', on utilise le prétérit." },
  { id: 'gex-adv-244', lessonId: 'linking-words', type: 'mcq', tier: 3, prompt: "_____ he was tired, he kept driving.", options: ['Much as', 'Despite', 'However', 'Whereas'], answer: 'Much as', explanation: "'Much as' signifie 'bien que' ou 'quoique'." },
  { id: 'gex-adv-245', lessonId: 'modals-deduction', type: 'mcq', tier: 3, prompt: "We _____ have taken the wrong turn back there.", options: ['must', 'can', 'should', 'would'], answer: 'must', explanation: "Déduction sur une action passée." },
  { id: 'gex-adv-246', lessonId: 'linking-words', type: 'blank', tier: 3, prompt: "_____ (whereas) some like tea, others prefer coffee.", answer: 'whereas', explanation: "Expression du contraste." },
  { id: 'gex-adv-247', lessonId: 'modals-deduction', type: 'error', tier: 3, prompt: "I should has called her.", errorWord: 'has', answer: 'have', explanation: "Modal + have + participe passé." },
  { id: 'gex-adv-248', lessonId: 'linking-words', type: 'mcq', tier: 3, prompt: "He studied hard; _____, he passed the exam.", options: ['thus', 'yet', 'but', 'whereas'], answer: 'thus', explanation: "'Thus' = ainsi / par conséquent." },
  { id: 'gex-adv-249', lessonId: 'modals-deduction', type: 'mcq', tier: 3, prompt: "She _____ have arrived by now; the flight landed an hour ago.", options: ['should', 'mustn\'t', 'can', 'would'], answer: 'should', explanation: "Probabilité logique attendue." },
  { id: 'gex-adv-250', lessonId: 'linking-words', type: 'reorder', tier: 3, prompt: "Result :", tokens: ['result', 'As', 'of', 'he', 'a', 'the', 'succeeded', 'effort'], answer: 'As a result of the effort he succeeded', explanation: "Connecteur de résultat." },

  // --- Connectors & Modals Mixed 251-300 ---
  { id: 'gex-adv-251', lessonId: 'linking-words', type: 'mcq', tier: 3, prompt: "I will go, _____ you don't mind.", options: ['provided', 'unless', 'whereas', 'lest'], answer: 'provided', explanation: "Expression de la condition." },
  { id: 'gex-adv-252', lessonId: 'modals-deduction', type: 'mcq', tier: 3, prompt: "It _____ have been a coincidence.", options: ['might', 'can', 'should', 'would'], answer: 'might', explanation: "Hypothèse passée." },
  { id: 'gex-adv-253', lessonId: 'linking-words', type: 'mcq', tier: 3, prompt: "He is poor, _____ he is happy.", options: ['nonetheless', 'consequently', 'therefore', 'moreover'], answer: 'nonetheless', explanation: "'Nonetheless' marque l'opposition." },
  { id: 'gex-adv-254', lessonId: 'modals-deduction', type: 'blank', tier: 3, prompt: "I'd _____ (rather) stay home.", answer: 'rather', explanation: "Préférence personnelle." },
  { id: 'gex-adv-255', lessonId: 'linking-words', type: 'mcq', tier: 3, prompt: "_____ the fog, the plane landed safely.", options: ['Despite', 'Although', 'Even though', 'But'], answer: 'Despite', explanation: "Concession nominale." },
  { id: 'gex-adv-256', lessonId: 'modals-deduction', type: 'mcq', tier: 3, prompt: "She _____ have forgotten.", options: ['must', 'can', 'should', 'would'], answer: 'must', explanation: "Certitude quasi-totale." },
  { id: 'gex-adv-257', lessonId: 'linking-words', type: 'error', tier: 3, prompt: "In spite he was ill, he went to work.", errorWord: 'In spite', answer: 'Although', explanation: "'Although' est suivi d'une proposition complète." },
  { id: 'gex-adv-258', lessonId: 'modals-deduction', type: 'mcq', tier: 3, prompt: "You _____ have seen her; she is in Italy.", options: ["can't", "must", "should", "would"], answer: "can't", explanation: "Impossibilité logique." },
  { id: 'gex-adv-259', lessonId: 'linking-words', type: 'mcq', tier: 3, prompt: "He is clever; _____, he is lazy.", options: ['however', 'therefore', 'consequently', 'moreover'], answer: 'however', explanation: "Marqueur d'opposition." },
  { id: 'gex-adv-260', lessonId: 'modals-deduction', type: 'reorder', tier: 3, prompt: "Order :", tokens: ['have', 'You', 'told', 'should', 'me'], answer: 'You should have told me', explanation: "Structure de regret ou conseil passé." },
  { id: 'gex-adv-261', lessonId: 'linking-words', type: 'mcq', tier: 3, prompt: "I'll help you _____ I'm free.", options: ['as long as', 'unless', 'whereas', 'lest'], answer: 'as long as', explanation: "Condition temporelle." },
  { id: 'gex-adv-262', lessonId: 'modals-deduction', type: 'blank', tier: 3, prompt: "You had _____ (better) listen to me.", answer: 'better', explanation: "Conseil fort." },
  { id: 'gex-adv-263', lessonId: 'linking-words', type: 'mcq', tier: 3, prompt: "The rain stopped; _____, the sun came out.", options: ['subsequently', 'nevertheless', 'conversely', 'provided'], answer: 'subsequently', explanation: "'Subsequently' = par la suite." },
  { id: 'gex-adv-264', lessonId: 'modals-deduction', type: 'mcq', tier: 3, prompt: "It _____ have been Jack.", options: ['might', 'can', 'should', 'would'], answer: 'might', explanation: "Possibilité." },
  { id: 'gex-adv-265', lessonId: 'linking-words', type: 'mcq', tier: 3, prompt: "_____ the high prices, many people buy it.", options: ['Despite', 'Although', 'Even though', 'But'], answer: 'Despite', explanation: "Malgré." },
  { id: 'gex-adv-266', lessonId: 'modals-deduction', type: 'error', tier: 3, prompt: "I used to getting up early.", errorWord: 'getting', answer: 'get', explanation: "'Used to' + base verbale pour une habitude passée." },
  { id: 'gex-adv-267', lessonId: 'linking-words', type: 'mcq', tier: 3, prompt: "He is rich; _____, he is generous.", options: ['moreover', 'nevertheless', 'however', 'whereas'], answer: 'moreover', explanation: "'Moreover' = de plus." },
  { id: 'gex-adv-268', lessonId: 'modals-deduction', type: 'mcq', tier: 3, prompt: "She _____ have arrived by now.", options: ['should', 'mustn\'t', 'can', 'would'], answer: 'should', explanation: "Attente logique." },
  { id: 'gex-adv-269', lessonId: 'linking-words', type: 'mcq', tier: 3, prompt: "I'll go _____ it's not too late.", options: ['provided', 'unless', 'whereas', 'lest'], answer: 'provided', explanation: "À condition que." },
  { id: 'gex-adv-270', lessonId: 'modals-deduction', type: 'reorder', tier: 3, prompt: "Order :", tokens: ['have', 'They', 'must', 'left', 'early'], answer: 'They must have left early', explanation: "Déduction logique." },
  { id: 'gex-adv-271', lessonId: 'linking-words', type: 'mcq', tier: 3, prompt: "He is tired; _____, he can't sleep.", options: ['yet', 'therefore', 'consequently', 'moreover'], answer: 'yet', explanation: "Opposition." },
  { id: 'gex-adv-272', lessonId: 'modals-deduction', type: 'blank', tier: 3, prompt: "I _____ (needn't) have bought so much food.", answer: "needn't", explanation: "Action faite inutilement." },
  { id: 'gex-adv-273', lessonId: 'linking-words', type: 'mcq', tier: 3, prompt: "_____ he was tired, he kept working.", options: ['Although', 'Despite', 'In spite of', 'However'], answer: 'Although', explanation: "Bien que." },
  { id: 'gex-adv-274', lessonId: 'modals-deduction', type: 'mcq', tier: 3, prompt: "You _____ have told me.", options: ['should', 'mustn\'t', 'can', 'would'], answer: 'should', explanation: "Regret ou conseil." },
  { id: 'gex-adv-275', lessonId: 'linking-words', type: 'error', tier: 3, prompt: "Unless you don't study, you will fail.", errorWord: "don't study", answer: 'study', explanation: "'Unless' exprime déjà la négation." },
  { id: 'gex-adv-276', lessonId: 'modals-deduction', type: 'mcq', tier: 3, prompt: "It _____ have been a mistake.", options: ['might', 'can', 'should', 'would'], answer: 'might', explanation: "Possibilité." },
  { id: 'gex-adv-277', lessonId: 'linking-words', type: 'mcq', tier: 3, prompt: "He is tall, _____ his brother is short.", options: ['whereas', 'therefore', 'consequently', 'moreover'], answer: 'whereas', explanation: "Tandis que." },
  { id: 'gex-adv-278', lessonId: 'modals-deduction', type: 'blank', tier: 3, prompt: "You'd _____ (better) hurry.", answer: 'better', explanation: "Conseil." },
  { id: 'gex-adv-279', lessonId: 'linking-words', type: 'mcq', tier: 3, prompt: "_____ the traffic, we arrived on time.", options: ['Despite', 'Although', 'Even though', 'But'], answer: 'Despite', explanation: "Malgré." },
  { id: 'gex-adv-280', lessonId: 'modals-deduction', type: 'mcq', tier: 3, prompt: "She _____ have forgotten.", options: ['must', 'can', 'should', 'would'], answer: 'must', explanation: "Déduction." },
  { id: 'gex-adv-281', lessonId: 'linking-words', type: 'mcq', tier: 3, prompt: "He is old; _____, he is active.", options: ['nevertheless', 'therefore', 'consequently', 'moreover'], answer: 'nevertheless', explanation: "Néanmoins." },
  { id: 'gex-adv-282', lessonId: 'modals-deduction', type: 'error', tier: 3, prompt: "I am used to drive on the left.", errorWord: 'drive', answer: 'driving', explanation: "'Be used to' est suivi du gérondif." },
  { id: 'gex-adv-283', lessonId: 'linking-words', type: 'mcq', tier: 3, prompt: "I'll go _____ it's free.", options: ['provided', 'unless', 'whereas', 'lest'], answer: 'provided', explanation: "Si / À condition que." },
  { id: 'gex-adv-284', lessonId: 'modals-deduction', type: 'mcq', tier: 3, prompt: "He _____ have seen her.", options: ['might', 'can', 'should', 'would'], answer: 'might', explanation: "Hypothèse." },
  { id: 'gex-adv-285', lessonId: 'linking-words', type: 'mcq', tier: 3, prompt: "He is rich; _____, he is happy.", options: ['moreover', 'nevertheless', 'however', 'whereas'], answer: 'moreover', explanation: "Addition." },
  { id: 'gex-adv-286', lessonId: 'modals-deduction', type: 'blank', tier: 3, prompt: "I'd _____ (rather) not go.", answer: 'rather', explanation: "Préférence." },
  { id: 'gex-adv-287', lessonId: 'linking-words', type: 'mcq', tier: 3, prompt: "_____ the cost, it's worth it.", options: ['Despite', 'Although', 'Even though', 'But'], answer: 'Despite', explanation: "Malgré." },
  { id: 'gex-adv-288', lessonId: 'modals-deduction', type: 'mcq', tier: 3, prompt: "You _____ have heard.", options: ['must', 'can', 'should', 'would'], answer: 'must', explanation: "Certitude." },
  { id: 'gex-adv-289', lessonId: 'linking-words', type: 'error', tier: 3, prompt: "Although he was ill, but he went to work.", errorWord: 'but', answer: '—', explanation: "On n'utilise pas 'but' si la phrase commence déjà par 'although'." },
  { id: 'gex-adv-290', lessonId: 'modals-deduction', type: 'mcq', tier: 3, prompt: "It _____ have been him.", options: ['could', 'mustn\'t', 'can', 'would'], answer: 'could', explanation: "Possibilité." },
  { id: 'gex-adv-291', lessonId: 'linking-words', type: 'mcq', tier: 3, prompt: "I'll help you _____ you ask.", options: ['provided', 'unless', 'whereas', 'lest'], answer: 'provided', explanation: "Condition." },
  { id: 'gex-adv-292', lessonId: 'modals-deduction', type: 'mcq', tier: 3, prompt: "She _____ have arrived.", options: ['should', 'mustn\'t', 'can', 'would'], answer: 'should', explanation: "Probabilité." },
  { id: 'gex-adv-293', lessonId: 'linking-words', type: 'mcq', tier: 3, prompt: "He is clever; _____, he is poor.", options: ['yet', 'therefore', 'consequently', 'moreover'], answer: 'yet', explanation: "Opposition." },
  { id: 'gex-adv-294', lessonId: 'modals-deduction', type: 'blank', tier: 3, prompt: "You _____ (should) have told me.", answer: 'should', explanation: "Conseil passé." },
  { id: 'gex-adv-295', lessonId: 'linking-words', type: 'mcq', tier: 3, prompt: "_____ the rain, the match went on.", options: ['Despite', 'Although', 'Even though', 'But'], answer: 'Despite', explanation: "Concession." },
  { id: 'gex-adv-296', lessonId: 'modals-deduction', type: 'mcq', tier: 3, prompt: "He _____ have committed it.", options: ["can't", "must", "should", "would"], answer: "can't", explanation: "Impossibilité." },
  { id: 'gex-adv-297', lessonId: 'linking-words', type: 'mcq', tier: 3, prompt: "He is rich; _____, he is mean.", options: ['however', 'therefore', 'consequently', 'moreover'], answer: 'however', explanation: "Opposition." },
  { id: 'gex-adv-298', lessonId: 'modals-deduction', type: 'reorder', tier: 3, prompt: "Order :", tokens: ['might', 'It', 'been', 'have', 'worse'], answer: 'It might have been worse', explanation: "Hypothèse." },
  { id: 'gex-adv-299', lessonId: 'linking-words', type: 'mcq', tier: 3, prompt: "I'll go _____ you come.", options: ['as long as', 'unless', 'whereas', 'lest'], answer: 'as long as', explanation: "Condition." },
  { id: 'gex-adv-300', lessonId: 'modals-deduction', type: 'blank', tier: 3, prompt: "He _____ (must) have forgotten.", answer: 'must', explanation: "Deduction." },

  // ========== ADVANCED TOEIC BLOCK 4 (301-400) : Business & Complex Passive ==========

  // --- Passive Voice with Modals & Perfects ---
  { id: 'gex-adv-301', lessonId: 'reported-speech', type: 'mcq', tier: 3, prompt: "The shipment _____ by the end of the week.", options: ['must be delivered', 'must deliver', 'must been delivered', 'is delivering'], answer: 'must be delivered', explanation: "Passif avec modal : Modal + be + V3." },
  { id: 'gex-adv-302', lessonId: 'reported-speech', type: 'blank', tier: 3, prompt: "The audit should _____ (finish) two days ago.", answer: 'have been finished', explanation: "Passif au passé (regret/attente) : should have been + V3." },
  { id: 'gex-adv-303', lessonId: 'reported-speech', type: 'error', tier: 3, prompt: "The new policy might been implemented next month.", errorWord: 'been', answer: 'be', explanation: "Après 'might' pour un futur passif, on utilise 'be' et non 'been'." },
  { id: 'gex-adv-304', lessonId: 'reported-speech', type: 'mcq', tier: 3, prompt: "All employees are expected _____ about the changes.", options: ['to be informed', 'being informed', 'to inform', 'be informed'], answer: 'to be informed', explanation: "Infinitif passif après 'expect'." },
  { id: 'gex-adv-305', lessonId: 'reported-speech', type: 'reorder', tier: 3, prompt: "Passif :", tokens: ['The', 'contract', 'have', 'could', 'been', 'avoided', 'terminated'], answer: 'The contract could have been terminated', explanation: "Modalité passée au passif." },

  // --- Double Object Passives (Indirect Passive) ---
  { id: 'gex-adv-306', lessonId: 'reported-speech', type: 'mcq', tier: 3, prompt: "The manager _____ a significant promotion yesterday.", options: ['was given', 'gave', 'was giving', 'had given'], answer: 'was given', explanation: "Passif avec objet indirect : Quelqu'un a donné une promotion AU manager." },
  { id: 'gex-adv-307', lessonId: 'reported-speech', type: 'blank', tier: 3, prompt: "We were _____ (show) the new production line.", answer: 'shown', explanation: "Structure 'be shown something'." },
  { id: 'gex-adv-308', lessonId: 'reported-speech', type: 'error', tier: 3, prompt: "I was explained the procedure by the technician.", errorWord: 'I was explained', answer: 'The procedure was explained to me', explanation: "En anglais, on n'utilise pas la personne comme sujet passif avec le verbe 'explain'." },

  // --- Passive with Gerunds (-ing) ---
  { id: 'gex-adv-309', lessonId: 'gerund-infinitive', type: 'mcq', tier: 3, prompt: "He hates _____ what to do in front of clients.", options: ['being told', 'to be tell', 'telling', 'be told'], answer: 'being told', explanation: "Gérondif passif après 'hate'." },
  { id: 'gex-adv-310', lessonId: 'gerund-infinitive', type: 'blank', tier: 3, prompt: "The candidates resent _____ (ignore) by the HR department.", answer: 'being ignored', explanation: "Gérondif passif après 'resent'." },

  // --- Causative Passives (Have/Get something done) ---
  { id: 'gex-adv-311', lessonId: 'gerund-infinitive', type: 'mcq', tier: 3, prompt: "We need to have the report _____ before the board meeting.", options: ['translated', 'translate', 'translating', 'to translate'], answer: 'translated', explanation: "Structure causative passive : have + object + V3." },
  { id: 'gex-adv-312', lessonId: 'gerund-infinitive', type: 'blank', tier: 3, prompt: "I'll get the contract _____ (sign) by the CEO this afternoon.", answer: 'signed', explanation: "Structure causative : get + object + V3." },
  { id: 'gex-adv-313', lessonId: 'gerund-infinitive', type: 'reorder', tier: 3, prompt: "Causatif :", tokens: ['their', 'had', 'They', 'office', 'renovated', 'last', 'year'], answer: 'They had their office renovated last year', explanation: "Faire faire un travail par un tiers." },

  // --- Business Nouns & Agreement ---
  { id: 'gex-adv-314', lessonId: 'much-many', type: 'mcq', tier: 3, prompt: "The _____ for the project has been approved.", options: ['funding', 'fundings', 'fundingss', 'funds'], answer: 'funding', explanation: "'Funding' est généralement indénombrable dans ce contexte." },
  { id: 'gex-adv-315', lessonId: 'much-many', type: 'blank', tier: 3, prompt: "How _____ (much/many) equipment do we need to order?", answer: 'much', explanation: "'Equipment' est strictement indénombrable." },
  { id: 'gex-adv-316', lessonId: 'much-many', type: 'error', tier: 3, prompt: "The headquarters is located in New York.", errorWord: 'is', answer: 'is', explanation: "Bien que se terminant par 's', 'headquarters' peut être singulier ou pluriel. La phrase est correcte." },

  // --- Formal Linking Words (Business) ---
  { id: 'gex-adv-317', lessonId: 'linking-words', type: 'mcq', tier: 3, prompt: "The merger was cancelled _____ the lack of transparency.", options: ['owing to', 'because', 'whereas', 'whilst'], answer: 'owing to', explanation: "'Owing to' (+ nom) est plus formel que 'because of'." },
  { id: 'gex-adv-318', lessonId: 'linking-words', type: 'blank', tier: 3, prompt: "The company reported a loss; _____ (nevertheless), they plan to expand.", answer: 'nevertheless', explanation: "'Nevertheless' (néanmoins) est très utilisé en rapport annuel." },
  { id: 'gex-adv-319', lessonId: 'linking-words', type: 'mcq', tier: 3, prompt: "_____ both parties sign, the agreement remains invalid.", options: ['Unless', 'Provided', 'Lest', 'As long as'], answer: 'Unless', explanation: "'Unless' = à moins que." },

  // --- Business Context Passives (320-350) ---
  { id: 'gex-adv-320', lessonId: 'reported-speech', type: 'mcq', tier: 3, prompt: "The vacancy _____ on our website yesterday.", options: ['was advertised', 'is advertised', 'has advertised', 'advertised'], answer: 'was advertised', explanation: "Passif au prétérit." },
  { id: 'gex-adv-321', lessonId: 'reported-speech', type: 'blank', tier: 3, prompt: "The budget _____ (discuss) during the next session.", answer: 'will be discussed', explanation: "Futur passif." },
  { id: 'gex-adv-322', lessonId: 'reported-speech', type: 'mcq', tier: 3, prompt: "Several staff members _____ for the delay.", options: ['were blamed', 'were blame', 'have blamed', 'blamed'], answer: 'were blamed', explanation: "Passif au pluriel." },
  { id: 'gex-adv-323', lessonId: 'reported-speech', type: 'transform', tier: 3, prompt: "Active: Someone stole the data. -> Passive: The data _____.", answer: 'was stolen', explanation: "Transformation passive standard." },
  { id: 'gex-adv-324', lessonId: 'reported-speech', type: 'error', tier: 3, prompt: "The product is being make in China.", errorWord: 'make', answer: 'made', explanation: "Présent continu passif : be + being + V3 (participe passé)." },
  { id: 'gex-adv-325', lessonId: 'reported-speech', type: 'mcq', tier: 3, prompt: "The meeting _____ until further notice.", options: ['has been postponed', 'is postpone', 'has postponed', 'was postpone'], answer: 'has been postponed', explanation: "Present perfect passif." },
  { id: 'gex-adv-326', lessonId: 'reported-speech', type: 'blank', tier: 3, prompt: "A new branch _____ (open) in London next month.", answer: 'will be opened', explanation: "Annonce d'un événement futur passif." },
  { id: 'gex-adv-327', lessonId: 'reported-speech', type: 'mcq', tier: 3, prompt: "The documents _____ by the legal department.", options: ['are being reviewed', 'is being reviewed', 'are reviewing', 'review'], answer: 'are being reviewed', explanation: "Passif progressif." },
  { id: 'gex-adv-328', lessonId: 'reported-speech', type: 'reorder', tier: 3, prompt: "Passif :", tokens: ['The', 'was', 'project', 'completed', 'ahead', 'of', 'schedule'], answer: 'The project was completed ahead of schedule', explanation: "Structure passive classique en business." },
  { id: 'gex-adv-329', lessonId: 'reported-speech', type: 'error', tier: 3, prompt: "All the informations have been archived.", errorWord: 'informations', answer: 'information', explanation: "'Information' est indénombrable et n'accepte pas de -s." },
  { id: 'gex-adv-330', lessonId: 'reported-speech', type: 'mcq', tier: 3, prompt: "He is rumored _____ the company soon.", options: ['to be leaving', 'leaving', 'leave', 'to leave'], answer: 'to be leaving', explanation: "Structure passive impersonnelle 'He is rumored to...'." },
  { id: 'gex-adv-331', lessonId: 'reported-speech', type: 'blank', tier: 3, prompt: "The application _____ (reject) due to incomplete data.", answer: 'was rejected', explanation: "Action passée subie." },
  { id: 'gex-adv-332', lessonId: 'reported-speech', type: 'mcq', tier: 3, prompt: "The terms of the contract _____ by both parties.", options: ['must be agreed upon', 'must be agree', 'must agree', 'must agreed'], answer: 'must be agreed upon', explanation: "Passif avec verbe à préposition (agree upon)." },
  { id: 'gex-adv-333', lessonId: 'reported-speech', type: 'transform', tier: 3, prompt: "Active: We will notify the winners. -> Passive: The winners _____.", answer: 'will be notified', explanation: "Futur passif." },
  { id: 'gex-adv-334', lessonId: 'reported-speech', type: 'mcq', tier: 3, prompt: "The stock prices _____ significantly since morning.", options: ['have been affected', 'were affect', 'affect', 'have affected'], answer: 'have been affected', explanation: "Lien passé-présent (Present Perfect) au passif." },
  { id: 'gex-adv-335', lessonId: 'reported-speech', type: 'blank', tier: 3, prompt: "I don't like _____ (disturb) while I'm working.", answer: 'being disturbed', explanation: "Gérondif passif." },
  { id: 'gex-adv-336', lessonId: 'reported-speech', type: 'mcq', tier: 3, prompt: "The annual report _____ for distribution.", options: ['is being prepared', 'is preparing', 'has preparing', 'was prepare'], answer: 'is being prepared', explanation: "Action en cours au passif." },
  { id: 'gex-adv-337', lessonId: 'reported-speech', type: 'error', tier: 3, prompt: "A solution will be find soon.", errorWord: 'find', answer: 'found', explanation: "Le participe passé de 'find' est 'found'." },
  { id: 'gex-adv-338', lessonId: 'reported-speech', type: 'reorder', tier: 3, prompt: "Causatif :", tokens: ['I', 'checked', 'had', 'the', 'figures', 'again'], answer: 'I had the figures checked again', explanation: "Structure causative 'have something done'." },
  { id: 'gex-adv-339', lessonId: 'reported-speech', type: 'mcq', tier: 3, prompt: "The feedback _____ into account for the next release.", options: ['will be taken', 'will take', 'is taking', 'was take'], answer: 'will be taken', explanation: "Passif futur avec expression 'take into account'." },
  { id: 'gex-adv-340', lessonId: 'reported-speech', type: 'blank', tier: 3, prompt: "The CEO is believed _____ (step down) next month.", answer: 'to be stepping down', explanation: "Infinitif continu passif." },

  // --- Vocabulary & Collocations (341-370) ---
  { id: 'gex-adv-341', lessonId: 'linking-words', type: 'mcq', tier: 3, prompt: "We need to reach a _____ by Friday.", options: ['consensus', 'consensual', 'consenting', 'consent'], answer: 'consensus', explanation: "Vocabulaire Business : atteindre un consensus." },
  { id: 'gex-adv-342', lessonId: 'linking-words', type: 'blank', tier: 3, prompt: "The project was over _____ (budget).", answer: 'budget', explanation: "Expression : 'over budget' (dépasser le budget)." },
  { id: 'gex-adv-343', lessonId: 'linking-words', type: 'mcq', tier: 3, prompt: "The company's _____ increased by 20% this year.", options: ['revenue', 'avenue', 'revenues', 'rev'], answer: 'revenue', explanation: "Vocabulaire Business : le chiffre d'affaires." },
  { id: 'gex-adv-344', lessonId: 'linking-words', type: 'error', tier: 3, prompt: "He made a very good advertisement campaign.", errorWord: 'made', answer: 'ran', explanation: "On utilise 'ran a campaign' ou 'launched a campaign' plutôt que 'made'." },
  { id: 'gex-adv-345', lessonId: 'linking-words', type: 'mcq', tier: 3, prompt: "The meeting has been _____ until 3 PM.", options: ['pushed back', 'pulled back', 'put off', 'put on'], answer: 'pushed back', explanation: "Phrasal verb Business : repousser à plus tard (dans la journée)." },
  { id: 'gex-adv-346', lessonId: 'linking-words', type: 'blank', tier: 3, prompt: "We must comply _____ (prep) the regulations.", answer: 'with', explanation: "Collocation : 'comply with'." },
  { id: 'gex-adv-347', lessonId: 'linking-words', type: 'mcq', tier: 3, prompt: "She has a lot of _____ in marketing.", options: ['expertise', 'expertises', 'experts', 'expert'], answer: 'expertise', explanation: "'Expertise' est indénombrable." },
  { id: 'gex-adv-348', lessonId: 'linking-words', type: 'reorder', tier: 3, prompt: "Vocab :", tokens: ['looking', 'We', 'are', 'forward', 'working', 'to', 'with', 'you'], answer: 'We are looking forward to working with you', explanation: "Formule de politesse standard (préposition 'to' + gérondif)." },
  { id: 'gex-adv-349', lessonId: 'linking-words', type: 'error', tier: 3, prompt: "I am writing for inform you about the delay.", errorWord: 'for inform', answer: 'to inform', explanation: "But exprimé par l'infinitif 'to inform'." },
  { id: 'gex-adv-350', lessonId: 'linking-words', type: 'mcq', tier: 3, prompt: "The _____ of the company is to double its size.", options: ['objective', 'objectivity', 'objection', 'object'], answer: 'objective', explanation: "Vocabulaire Business : l'objectif." },

  // --- Mixed Advanced Passive & Business 351-400 ---
  { id: 'gex-adv-351', lessonId: 'reported-speech', type: 'mcq', tier: 3, prompt: "His assets _____ by the government.", options: ['were frozen', 'was frozen', 'have frozen', 'frozen'], answer: 'were frozen', explanation: "Passif pluriel." },
  { id: 'gex-adv-352', lessonId: 'reported-speech', type: 'blank', tier: 3, prompt: "The system is _____ (upgrade) right now.", answer: 'being upgraded', explanation: "Passif continu présent." },
  { id: 'gex-adv-353', lessonId: 'reported-speech', type: 'mcq', tier: 3, prompt: "They were warned _____ the risks.", options: ['about', 'of', 'for', 'with'], answer: 'about', explanation: "Passif + préposition : 'warned about'." },
  { id: 'gex-adv-354', lessonId: 'reported-speech', type: 'transform', tier: 3, prompt: "Active: Someone is watching us. -> Passive: We _____.", answer: 'are being watched', explanation: "Transformation passive au présent continu." },
  { id: 'gex-adv-355', lessonId: 'reported-speech', type: 'error', tier: 3, prompt: "He was made do the work again.", errorWord: 'do', answer: 'to do', explanation: "Structure passive : 'be made to do'." },
  { id: 'gex-adv-356', lessonId: 'reported-speech', type: 'mcq', tier: 3, prompt: "The decision _____ yet.", options: ['has not been made', 'is not make', 'was not made', 'not been made'], answer: 'has not been made', explanation: "Négatif au Present Perfect passif." },
  { id: 'gex-adv-357', lessonId: 'reported-speech', type: 'blank', tier: 3, prompt: "The winner _____ (announce) tomorrow morning.", answer: 'will be announced', explanation: "Annonce d'un futur passif." },
  { id: 'gex-adv-358', lessonId: 'reported-speech', type: 'mcq', tier: 3, prompt: "Our office _____ every night.", options: ['is cleaned', 'cleans', 'is clean', 'was cleaning'], answer: 'is cleaned', explanation: "Présent simple passif (routine)." },
  { id: 'gex-adv-359', lessonId: 'reported-speech', type: 'reorder', tier: 3, prompt: "Passif :", tokens: ['The', 'must', 'be', 'signed', 'witnessed', 'and', 'contract'], answer: 'The contract must be signed and witnessed', explanation: "Passif avec deux verbes." },
  { id: 'gex-adv-360', lessonId: 'reported-speech', type: 'error', tier: 3, prompt: "The employees have being trained.", errorWord: 'being', answer: 'been', explanation: "Present Perfect passif : have + been + V3." },
  { id: 'gex-adv-361', lessonId: 'linking-words', type: 'mcq', tier: 3, prompt: "The proposal was accepted _____ its complexity.", options: ['in spite of', 'although', 'even though', 'whereas'], answer: 'in spite of', explanation: "Concession avec groupe nominal." },
  { id: 'gex-adv-362', lessonId: 'reported-speech', type: 'blank', tier: 3, prompt: "It is widely _____ (consider) that the market is unstable.", answer: 'considered', explanation: "Structure passive impersonnelle 'It is considered that...'." },
  { id: 'gex-adv-363', lessonId: 'linking-words', type: 'mcq', tier: 3, prompt: "We can't sign the deal _____ you change the terms.", options: ['unless', 'provided', 'if', 'as long as'], answer: 'unless', explanation: "Condition négative." },
  { id: 'gex-adv-364', lessonId: 'reported-speech', type: 'mcq', tier: 3, prompt: "The car _____ by the time we arrived.", options: ['had been sold', 'has been sold', 'was sold', 'had sold'], answer: 'had been sold', explanation: "Past Perfect passif (action antérieure à une autre action passée)." },
  { id: 'gex-adv-365', lessonId: 'reported-speech', type: 'blank', tier: 3, prompt: "I remember _____ (take) to the circus when I was a child.", answer: 'being taken', explanation: "Gérondif passif." },
  { id: 'gex-adv-366', lessonId: 'linking-words', type: 'mcq', tier: 3, prompt: "The company grew rapidly; _____, it opened three new branches.", options: ['consequently', 'however', 'nonetheless', 'whereas'], answer: 'consequently', explanation: "Expression de la conséquence." },
  { id: 'gex-adv-367', lessonId: 'reported-speech', type: 'error', tier: 3, prompt: "He is being sent to Paris for business.", errorWord: 'being', answer: 'being', explanation: "Phrase correcte : Présent continu passif." },
  { id: 'gex-adv-368', lessonId: 'reported-speech', type: 'reorder', tier: 3, prompt: "Order :", tokens: ['The', 'was', 'technician', 'hired', 'the', 'machine', 'repair', 'to'], answer: 'The technician was hired to repair the machine', explanation: "Structure passive avec but." },
  { id: 'gex-adv-369', lessonId: 'linking-words', type: 'mcq', tier: 3, prompt: "_____ the high demand, the product was sold out.", options: ['Due to', 'Because', 'Since', 'Moreover'], answer: 'Due to', explanation: "Cause nominale." },
  { id: 'gex-adv-370', lessonId: 'reported-speech', type: 'blank', tier: 3, prompt: "The file _____ (delete) by mistake yesterday.", answer: 'was deleted', explanation: "Passé simple passif." },
  { id: 'gex-adv-371', lessonId: 'reported-speech', type: 'mcq', tier: 3, prompt: "A new strategy _____ by the committee.", options: ['is being developed', 'is developing', 'develops', 'was develop'], answer: 'is being developed', explanation: "Action en cours au passif." },
  { id: 'gex-adv-372', lessonId: 'reported-speech', type: 'transform', tier: 3, prompt: "Active: They are repairing the roof. -> Passive: The roof _____.", answer: 'is being repaired', explanation: "Passif au présent continu." },
  { id: 'gex-adv-373', lessonId: 'reported-speech', type: 'error', tier: 3, prompt: "He was given a second chance by his boss.", errorWord: 'was given', answer: 'was given', explanation: "Phrase correcte : Passif avec objet indirect." },
  { id: 'gex-adv-374', lessonId: 'reported-speech', type: 'mcq', tier: 3, prompt: "The building _____ in 1920.", options: ['was built', 'is built', 'has been built', 'built'], answer: 'was built', explanation: "Passif passé précis." },
  { id: 'gex-adv-375', lessonId: 'reported-speech', type: 'blank', tier: 3, prompt: "The suspects _____ (arrest) last night.", answer: 'were arrested', explanation: "Passif pluriel au passé." },
  { id: 'gex-adv-376', lessonId: 'reported-speech', type: 'mcq', tier: 3, prompt: "All the rooms _____ before the guests arrive.", options: ['will have been cleaned', 'will be clean', 'will clean', 'are cleaned'], answer: 'will have been cleaned', explanation: "Futur Perfect passif (action finie avant une autre action future)." },
  { id: 'gex-adv-377', lessonId: 'reported-speech', type: 'error', tier: 3, prompt: "The mail has not been deliver yet.", errorWord: 'deliver', answer: 'delivered', explanation: "Le participe passé de 'deliver' est 'delivered'." },
  { id: 'gex-adv-378', lessonId: 'reported-speech', type: 'reorder', tier: 3, prompt: "Passif :", tokens: ['The', 'was', 'by', 'the', 'board', 'proposal', 'unanimously', 'approved'], answer: 'The proposal was unanimously approved by the board', explanation: "Passif avec adverbe." },
  { id: 'gex-adv-379', lessonId: 'reported-speech', type: 'mcq', tier: 3, prompt: "The software _____ every six months.", options: ['is updated', 'updates', 'is update', 'was updating'], answer: 'is updated', explanation: "Présent passif habituel." },
  { id: 'gex-adv-380', lessonId: 'reported-speech', type: 'blank', tier: 3, prompt: "I hate _____ (keep) waiting.", answer: 'being kept', explanation: "Gérondif passif avec 'keep'." },
  { id: 'gex-adv-381', lessonId: 'reported-speech', type: 'mcq', tier: 3, prompt: "The exhibition _____ by thousands of people.", options: ['was visited', 'visited', 'has visiting', 'is visit'], answer: 'was visited', explanation: "Passif passé." },
  { id: 'gex-adv-382', lessonId: 'reported-speech', type: 'transform', tier: 3, prompt: "Active: People speak English here. -> Passive: English _____ here.", answer: 'is spoken', explanation: "Présent simple passif." },
  { id: 'gex-adv-383', lessonId: 'reported-speech', type: 'error', tier: 3, prompt: "The report have been finished.", errorWord: 'have', answer: 'has', explanation: "Sujet singulier 'The report' nécessite l'auxiliaire 'has'." },
  { id: 'gex-adv-384', lessonId: 'reported-speech', type: 'mcq', tier: 3, prompt: "The problem _____ by the time the manager arrived.", options: ['had already been solved', 'was already solved', 'already solved', 'has been solved'], answer: 'had already been solved', explanation: "Past Perfect passif avec antériorité." },
  { id: 'gex-adv-385', lessonId: 'reported-speech', type: 'blank', tier: 3, prompt: "The letters _____ (send) this morning.", answer: 'were sent', explanation: "Passif pluriel au passé." },
  { id: 'gex-adv-386', lessonId: 'reported-speech', type: 'mcq', tier: 3, prompt: "Our products _____ worldwide.", options: ['are sold', 'sell', 'is sold', 'are sell'], answer: 'are sold', explanation: "Présent passif pluriel." },
  { id: 'gex-adv-387', lessonId: 'reported-speech', type: 'error', tier: 3, prompt: "He is rumored to has resigned.", errorWord: 'has', answer: 'have', explanation: "Après 'to', on utilise la base verbale 'have'." },
  { id: 'gex-adv-388', lessonId: 'reported-speech', type: 'reorder', tier: 3, prompt: "Order :", tokens: ['was', 'The', 'by', 'the', 'wind', 'roof', 'damaged'], answer: 'The roof was damaged by the wind', explanation: "Structure passive avec agent 'by'." },
  { id: 'gex-adv-389', lessonId: 'reported-speech', type: 'mcq', tier: 3, prompt: "The conference _____ in the main hall.", options: ['is being held', 'is holding', 'holds', 'was hold'], answer: 'is being held', explanation: "Passif continu présent." },
  { id: 'gex-adv-390', lessonId: 'reported-speech', type: 'blank', tier: 3, prompt: "The contract _____ (negotiate) by the lawyers.", answer: 'is being negotiated', explanation: "Action en cours au passif." },
  { id: 'gex-adv-391', lessonId: 'reported-speech', type: 'mcq', tier: 3, prompt: "The bridge _____ by the end of next year.", options: ['will have been built', 'will be built', 'will build', 'is built'], answer: 'will have been built', explanation: "Futur Perfect passif." },
  { id: 'gex-adv-392', lessonId: 'reported-speech', type: 'transform', tier: 3, prompt: "Active: We found the keys. -> Passive: The keys _____.", answer: 'were found', explanation: "Passif pluriel au passé." },
  { id: 'gex-adv-393', lessonId: 'reported-speech', type: 'error', tier: 3, prompt: "The solution was suggest by the team.", errorWord: 'suggest', answer: 'suggested', explanation: "Le participe passé de 'suggest' est 'suggested'." },
  { id: 'gex-adv-394', lessonId: 'reported-speech', type: 'mcq', tier: 3, prompt: "The law _____ by the parliament last week.", options: ['was passed', 'is passed', 'has been passed', 'passed'], answer: 'was passed', explanation: "Passif au passé simple." },
  { id: 'gex-adv-395', lessonId: 'reported-speech', type: 'blank', tier: 3, prompt: "The package _____ (deliver) to the wrong address.", answer: 'was delivered', explanation: "Passif passé simple." },
  { id: 'gex-adv-396', lessonId: 'reported-speech', type: 'mcq', tier: 3, prompt: "New measures _____ to reduce costs.", options: ['are being taken', 'is being taken', 'are taking', 'take'], answer: 'are being taken', explanation: "Passif continu pluriel." },
  { id: 'gex-adv-397', lessonId: 'reported-speech', type: 'error', tier: 3, prompt: "The project was finish on time.", errorWord: 'finish', answer: 'finished', explanation: "Le participe passé de 'finish' est 'finished'." },
  { id: 'gex-adv-398', lessonId: 'reported-speech', type: 'reorder', tier: 3, prompt: "Passif :", tokens: ['The', 'was', 'by', 'the', 'fire', 'destroyed', 'building'], answer: 'The building was destroyed by the fire', explanation: "Passif passé avec agent." },
  { id: 'gex-adv-399', lessonId: 'reported-speech', type: 'mcq', tier: 3, prompt: "The winner _____ a trophy.", options: ['was awarded', 'awarded', 'was award', 'is award'], answer: 'was awarded', explanation: "Passif avec verbe à deux objets." },
  { id: 'gex-adv-400', lessonId: 'reported-speech', type: 'blank', tier: 3, prompt: "The report _____ (send) by email yesterday.", answer: 'was sent', explanation: "Passif au passé simple." },

  // ========== ADVANCED TOEIC BLOCK 5 (401-500) : Phrasal Verbs & Relative Clauses ==========

  // --- Phrasal Verbs (Business Context) 401-450 ---
  { id: 'gex-adv-401', lessonId: 'phrasal-verbs', type: 'mcq', tier: 2, prompt: "We had to _____ the meeting because the manager was ill.", options: ['call off', 'call on', 'call in', 'call for'], answer: 'call off', explanation: "'Call off' signifie annuler." },
  { id: 'gex-adv-402', lessonId: 'phrasal-verbs', type: 'blank', tier: 2, prompt: "I look forward _____ (meet) you in person.", answer: 'to meeting', explanation: "Après 'look forward to', on utilise le gérondif (-ing)." },
  { id: 'gex-adv-403', lessonId: 'phrasal-verbs', type: 'mcq', tier: 2, prompt: "The legal team is _____ the contract right now.", options: ['drawing up', 'drawing in', 'drawing out', 'drawing off'], answer: 'drawing up', explanation: "'Draw up' signifie rédiger (un contrat, un plan)." },
  { id: 'gex-adv-404', lessonId: 'phrasal-verbs', type: 'blank', tier: 3, prompt: "The CEO decided to _____ (step down) after ten years.", answer: 'step down', explanation: "'Step down' signifie démissionner ou quitter son poste." },
  { id: 'gex-adv-405', lessonId: 'phrasal-verbs', type: 'mcq', tier: 2, prompt: "A larger firm is planning to _____ our company.", options: ['take over', 'take up', 'take in', 'take on'], answer: 'take over', explanation: "'Take over' signifie racheter ou prendre le contrôle." },
  { id: 'gex-adv-406', lessonId: 'phrasal-verbs', type: 'error', tier: 3, prompt: "We have ran out from printer ink.", errorWord: 'out from', answer: 'out of', explanation: "L'expression exacte est 'run out of' (manquer de)." },
  { id: 'gex-adv-407', lessonId: 'phrasal-verbs', type: 'mcq', tier: 3, prompt: "He _____ a brilliant idea during the brainstorming session.", options: ['came up with', 'came out with', 'came down with', 'came across'], answer: 'came up with', explanation: "'Come up with' signifie imaginer ou proposer une idée." },
  { id: 'gex-adv-408', lessonId: 'phrasal-verbs', type: 'blank', tier: 2, prompt: "We need to _____ (postpone) the launch until July.", answer: 'put off', explanation: "'Put off' est le phrasal verb pour 'postpone' (reporter)." },
  { id: 'gex-adv-409', lessonId: 'phrasal-verbs', type: 'reorder', tier: 2, prompt: "Ordre :", tokens: ['up', 'brought', 'she', 'issue', 'the', 'at', 'meeting', 'the'], answer: 'she brought up the issue at the meeting', explanation: "'Bring up' signifie mentionner ou soulever un sujet." },
  { id: 'gex-adv-410', lessonId: 'phrasal-verbs', type: 'mcq', tier: 2, prompt: "Don't _____! We are almost at a solution.", options: ['give up', 'give in', 'give out', 'give away'], answer: 'give up', explanation: "'Give up' signifie abandonner." },
  { id: 'gex-adv-411', lessonId: 'phrasal-verbs', type: 'mcq', tier: 3, prompt: "I'll _____ the matter and get back to you.", options: ['look into', 'look over', 'look after', 'look for'], answer: 'look into', explanation: "'Look into' signifie examiner ou enquêter." },
  { id: 'gex-adv-412', lessonId: 'phrasal-verbs', type: 'blank', tier: 3, prompt: "He _____ (succeed) because he works hard.", answer: 'gets ahead', explanation: "'Get ahead' signifie progresser ou réussir professionnellement." },
  { id: 'gex-adv-413', lessonId: 'phrasal-verbs', type: 'error', tier: 3, prompt: "The company had to lay down 50 workers.", errorWord: 'down', answer: 'off', explanation: "'Lay off' signifie licencier pour des raisons économiques." },
  { id: 'gex-adv-414', lessonId: 'phrasal-verbs', type: 'mcq', tier: 2, prompt: "Could you _____ the details once more?", options: ['go over', 'go through', 'go under', 'go off'], answer: 'go over', explanation: "'Go over' signifie revoir ou examiner en détail." },
  { id: 'gex-adv-415', lessonId: 'phrasal-verbs', type: 'blank', tier: 2, prompt: "The plane _____ (leave) on time.", answer: 'took off', explanation: "'Take off' signifie décoller." },
  { id: 'gex-adv-416', lessonId: 'phrasal-verbs', type: 'mcq', tier: 3, prompt: "The deal _____ because of a pricing dispute.", options: ['fell through', 'fell out', 'fell off', 'fell down'], answer: 'fell through', explanation: "'Fell through' signifie échouer (pour un projet ou un accord)." },
  { id: 'gex-adv-417', lessonId: 'phrasal-verbs', type: 'blank', tier: 2, prompt: "I need to _____ (finish) this report by 5 PM.", answer: 'get through', explanation: "'Get through' signifie terminer une tâche difficile." },
  { id: 'gex-adv-418', lessonId: 'phrasal-verbs', type: 'reorder', tier: 3, prompt: "Phrasal Verb :", tokens: ['out', 'the', 'turned', 'to', 'be', 'false', 'rumors'], answer: 'the rumors turned out to be false', explanation: "'Turn out' signifie s'avérer." },
  { id: 'gex-adv-419', lessonId: 'phrasal-verbs', type: 'mcq', tier: 3, prompt: "We will _____ a new product line next month.", options: ['roll out', 'roll in', 'roll on', 'roll over'], answer: 'roll out', explanation: "'Roll out' signifie lancer ou déployer un nouveau produit." },
  { id: 'gex-adv-420', lessonId: 'phrasal-verbs', type: 'error', tier: 3, prompt: "You should carry out with your plan.", errorWord: 'carry out', answer: 'carry on', explanation: "'Carry on' signifie continuer, alors que 'carry out' signifie exécuter." },
  { id: 'gex-adv-421', lessonId: 'phrasal-verbs', type: 'mcq', tier: 2, prompt: "I _____ an old friend at the airport.", options: ['ran into', 'ran out', 'ran over', 'ran off'], answer: 'ran into', explanation: "'Ran into' signifie rencontrer par hasard." },
  { id: 'gex-adv-422', lessonId: 'phrasal-verbs', type: 'blank', tier: 3, prompt: "The manager _____ (perform) his duties well.", answer: 'carried out', explanation: "'Carry out' signifie effectuer ou exécuter une tâche." },
  { id: 'gex-adv-423', lessonId: 'phrasal-verbs', type: 'mcq', tier: 3, prompt: "He is trying to _____ smoking.", options: ['cut down on', 'cut off', 'cut out', 'cut in'], answer: 'cut down on', explanation: "'Cut down on' signifie réduire sa consommation." },
  { id: 'gex-adv-424', lessonId: 'phrasal-verbs', type: 'blank', tier: 2, prompt: "Can you _____ (wait) for a moment?", answer: 'hold on', explanation: "'Hold on' signifie attendre (au téléphone ou en personne)." },
  { id: 'gex-adv-425', lessonId: 'phrasal-verbs', type: 'reorder', tier: 2, prompt: "Ordre :", tokens: ['up', 'showed', 'he', 'late', 'for', 'interview', 'the'], answer: 'he showed up late for the interview', explanation: "'Show up' signifie arriver ou se présenter." },
  { id: 'gex-adv-426', lessonId: 'phrasal-verbs', type: 'mcq', tier: 2, prompt: "I need to _____ the car before I buy it.", options: ['try out', 'try on', 'try in', 'try for'], answer: 'try out', explanation: "'Try out' signifie tester." },
  { id: 'gex-adv-427', lessonId: 'phrasal-verbs', type: 'mcq', tier: 3, prompt: "The two companies _____ a joint venture.", options: ['entered into', 'entered on', 'entered in', 'entered to'], answer: 'entered into', explanation: "Expression formelle : 'enter into an agreement/venture'." },
  { id: 'gex-adv-428', lessonId: 'phrasal-verbs', type: 'blank', tier: 2, prompt: "Don't forget to _____ (extinguish) the lights.", answer: 'put out', explanation: "'Put out' signifie éteindre (un feu, une lumière)." },
  { id: 'gex-adv-429', lessonId: 'phrasal-verbs', type: 'error', tier: 3, prompt: "I will call you back after I look up the number.", errorWord: 'look up', answer: 'look up', explanation: "Phrase correcte : 'look up' signifie chercher une information dans une liste." },
  { id: 'gex-adv-430', lessonId: 'phrasal-verbs', type: 'mcq', tier: 2, prompt: "She _____ her father; they look identical.", options: ['takes after', 'takes on', 'takes in', 'takes off'], answer: 'takes after', explanation: "'Take after' signifie ressembler à un parent." },
  { id: 'gex-adv-431', lessonId: 'phrasal-verbs', type: 'blank', tier: 3, prompt: "We have to _____ (tolerate) his behavior.", answer: 'put up with', explanation: "'Put up with' signifie supporter ou tolérer." },
  { id: 'gex-adv-432', lessonId: 'phrasal-verbs', type: 'mcq', tier: 2, prompt: "The car _____ on the highway.", options: ['broke down', 'broke up', 'broke in', 'broke off'], answer: 'broke down', explanation: "'Break down' signifie tomber en panne." },
  { id: 'gex-adv-433', lessonId: 'phrasal-verbs', type: 'reorder', tier: 3, prompt: "Phrasal Verb :", tokens: ['back', 'on', 'cut', 'we', 'must', 'spending'], answer: 'we must cut back on spending', explanation: "'Cut back on' signifie réduire les dépenses." },
  { id: 'gex-adv-434', lessonId: 'phrasal-verbs', type: 'mcq', tier: 3, prompt: "He _____ as a very competent professional.", options: ['comes across', 'comes along', 'comes over', 'comes through'], answer: 'comes across', explanation: "'Come across' signifie donner l'impression d'être." },
  { id: 'gex-adv-435', lessonId: 'phrasal-verbs', type: 'blank', tier: 2, prompt: "Please _____ (complete) this form.", answer: 'fill out', explanation: "'Fill out' (ou fill in) signifie remplir un formulaire." },
  { id: 'gex-adv-436', lessonId: 'phrasal-verbs', type: 'mcq', tier: 2, prompt: "I'll _____ you at the station.", options: ['pick up', 'pick out', 'pick in', 'pick off'], answer: 'pick up', explanation: "'Pick up' signifie aller chercher quelqu'un." },
  { id: 'gex-adv-437', lessonId: 'phrasal-verbs', type: 'error', tier: 3, prompt: "He decided to set up his own company.", errorWord: 'set up', answer: 'set up', explanation: "Phrase correcte : 'set up' signifie fonder ou créer." },
  { id: 'gex-adv-438', lessonId: 'phrasal-verbs', type: 'mcq', tier: 3, prompt: "The party was _____ until next week.", options: ['put off', 'put on', 'put out', 'put in'], answer: 'put off', explanation: "'Put off' signifie reporter." },
  { id: 'gex-adv-439', lessonId: 'phrasal-verbs', type: 'blank', tier: 2, prompt: "I need to _____ (discover) the truth.", answer: 'find out', explanation: "'Find out' signifie découvrir ou apprendre une information." },
  { id: 'gex-adv-440', lessonId: 'phrasal-verbs', type: 'mcq', tier: 2, prompt: "The meeting _____ for three hours.", options: ['went on', 'went off', 'went out', 'went in'], answer: 'went on', explanation: "'Go on' signifie durer ou continuer." },
  { id: 'gex-adv-441', lessonId: 'phrasal-verbs', type: 'reorder', tier: 2, prompt: "Ordre :", tokens: ['out', 'checked', 'they', 'of', 'hotel', 'the', 'early'], answer: 'they checked out of the hotel early', explanation: "'Check out of' signifie libérer une chambre." },
  { id: 'gex-adv-442', lessonId: 'phrasal-verbs', type: 'mcq', tier: 3, prompt: "He _____ the courage to ask for a raise.", options: ['worked up', 'worked out', 'worked over', 'worked off'], answer: 'worked up', explanation: "'Work up' signifie rassembler ou trouver (du courage, de l'appétit)." },
  { id: 'gex-adv-443', lessonId: 'phrasal-verbs', type: 'blank', tier: 3, prompt: "I _____ (encounter) this problem before.", answer: 'came across', explanation: "'Come across' signifie rencontrer ou trouver par hasard." },
  { id: 'gex-adv-444', lessonId: 'phrasal-verbs', type: 'mcq', tier: 2, prompt: "The bomb _____ at noon.", options: ['went off', 'went out', 'went on', 'went in'], answer: 'went off', explanation: "'Go off' signifie exploser ou sonner." },
  { id: 'gex-adv-445', lessonId: 'phrasal-verbs', type: 'error', tier: 3, prompt: "We need to point out the mistakes.", errorWord: 'point out', answer: 'point out', explanation: "Phrase correcte : 'point out' signifie signaler ou attirer l'attention." },
  { id: 'gex-adv-446', lessonId: 'phrasal-verbs', type: 'mcq', tier: 3, prompt: "She _____ the job offer because the salary was too low.", options: ['turned down', 'turned off', 'turned out', 'turned in'], answer: 'turned down', explanation: "'Turn down' signifie rejeter ou refuser." },
  { id: 'gex-adv-447', lessonId: 'phrasal-verbs', type: 'blank', tier: 2, prompt: "Please _____ (continue) with your story.", answer: 'go on', explanation: "'Go on' signifie continuer." },
  { id: 'gex-adv-448', lessonId: 'phrasal-verbs', type: 'mcq', tier: 2, prompt: "I'll _____ you later.", options: ['call back', 'call off', 'call out', 'call in'], answer: 'call back', explanation: "'Call back' signifie rappeler." },
  { id: 'gex-adv-449', lessonId: 'phrasal-verbs', type: 'reorder', tier: 3, prompt: "Phrasal Verb :", tokens: ['out', 'working', 'everything', 'is', 'well'], answer: 'everything is working out well', explanation: "'Work out' signifie se dérouler ou se résoudre." },
  { id: 'gex-adv-450', lessonId: 'phrasal-verbs', type: 'mcq', tier: 3, prompt: "The plane _____ into the ocean.", options: ['fell in', 'fell off', 'fell down', 'fell away'], answer: 'fell in', explanation: "Mouvement vers l'intérieur." },

  // --- Complex Relative Clauses 451-500 ---
  { id: 'gex-adv-451', lessonId: 'relative-pronouns', type: 'mcq', tier: 3, prompt: "The person _____ I am speaking is the CEO.", options: ['to whom', 'who', 'whose', 'which'], answer: 'to whom', explanation: "Après une préposition, on utilise 'whom' pour les personnes." },
  { id: 'gex-adv-452', lessonId: 'relative-pronouns', type: 'blank', tier: 3, prompt: "That is the building _____ my father works.", answer: 'where', explanation: "Relatif de lieu." },
  { id: 'gex-adv-453', lessonId: 'relative-pronouns', type: 'mcq', tier: 3, prompt: "The reason _____ she left is unknown.", options: ['why', 'which', 'what', 'where'], answer: 'why', explanation: "Relatif de cause." },
  { id: 'gex-adv-454', lessonId: 'relative-pronouns', type: 'blank', tier: 3, prompt: "The car, _____ (whose) owner is my neighbor, is new.", answer: 'whose', explanation: "Possession relative." },
  { id: 'gex-adv-455', lessonId: 'relative-pronouns', type: 'error', tier: 3, prompt: "The man which I saw was tall.", errorWord: 'which', answer: 'who', explanation: "'Which' ne s'utilise que pour les objets ou animaux." },
  { id: 'gex-adv-456', lessonId: 'relative-pronouns', type: 'mcq', tier: 3, prompt: "This is the time _____ we must act.", options: ['when', 'where', 'why', 'who'], answer: 'when', explanation: "Relatif temporel." },
  { id: 'gex-adv-457', lessonId: 'relative-pronouns', type: 'blank', tier: 3, prompt: "The town in _____ I was born is small.", answer: 'which', explanation: "Après une préposition, on utilise 'which' pour les lieux si on n'utilise pas 'where'." },
  { id: 'gex-adv-458', lessonId: 'relative-pronouns', type: 'reorder', tier: 3, prompt: "Relative :", tokens: ['the', 'man', 'is', 'This', 'whose', 'house', 'is', 'red'], answer: 'This is the man whose house is red', explanation: "Possession relative." },
  { id: 'gex-adv-459', lessonId: 'relative-pronouns', type: 'mcq', tier: 3, prompt: "The book _____ you gave me was excellent.", options: ['that', 'who', 'whom', 'whose'], answer: 'that', explanation: "Relatif objet pour une chose." },
  { id: 'gex-adv-460', lessonId: 'relative-pronouns', type: 'error', tier: 3, prompt: "I know a girl who her father is a doctor.", errorWord: 'who her', answer: 'whose', explanation: "On remplace 'who her' par le pronom de possession 'whose'." },
  { id: 'gex-adv-461', lessonId: 'relative-pronouns', type: 'mcq', tier: 3, prompt: "The hotel _____ we stayed was very clean.", options: ['where', 'which', 'that', 'who'], answer: 'where', explanation: "Lieu relatif." },
  { id: 'gex-adv-462', lessonId: 'relative-pronouns', type: 'blank', tier: 3, prompt: "The people _____ live in that house are friendly.", answer: 'who', explanation: "Relatif sujet pour des personnes." },
  { id: 'gex-adv-463', lessonId: 'relative-pronouns', type: 'mcq', tier: 3, prompt: "He is the writer _____ books are famous.", options: ['whose', 'whom', 'which', 'who'], answer: 'whose', explanation: "Possession." },
  { id: 'gex-adv-464', lessonId: 'relative-pronouns', type: 'blank', tier: 3, prompt: "I don't know the day _____ the meeting is.", answer: 'when', explanation: "Temps relatif." },
  { id: 'gex-adv-465', lessonId: 'relative-pronouns', type: 'reorder', tier: 3, prompt: "Ordre :", tokens: ['is', 'the', 'why', 'That', 'reason', 'I', 'late', 'am'], answer: 'That is the reason why I am late', explanation: "Cause relative." },
  { id: 'gex-adv-466', lessonId: 'relative-pronouns', type: 'mcq', tier: 3, prompt: "The girl to _____ I gave the flower is my sister.", options: ['whom', 'who', 'which', 'whose'], answer: 'whom', explanation: "Après préposition + personne." },
  { id: 'gex-adv-467', lessonId: 'relative-pronouns', type: 'blank', tier: 3, prompt: "The laptop _____ I bought is very fast.", answer: 'which', explanation: "Relatif objet pour chose." },
  { id: 'gex-adv-468', lessonId: 'relative-pronouns', type: 'error', tier: 3, prompt: "The boy who I met him is my cousin.", errorWord: 'who I met him', answer: 'who I met', explanation: "On ne répète pas le pronom objet 'him' après le relatif." },
  { id: 'gex-adv-469', lessonId: 'relative-pronouns', type: 'mcq', tier: 3, prompt: "The office _____ I work is in London.", options: ['where', 'which', 'that', 'who'], answer: 'where', explanation: "Lieu." },
  { id: 'gex-adv-470', lessonId: 'relative-pronouns', type: 'blank', tier: 3, prompt: "The car, _____ (which) was stolen, was found.", answer: 'which', explanation: "Relative non-définitive." },
  { id: 'gex-adv-471', lessonId: 'relative-pronouns', type: 'mcq', tier: 3, prompt: "He is the man _____ I admire.", options: ['whom', 'whose', 'which', 'what'], answer: 'whom', explanation: "Relatif objet pour personne." },
  { id: 'gex-adv-472', lessonId: 'relative-pronouns', type: 'blank', tier: 3, prompt: "The country _____ I visit every year is France.", answer: 'which', explanation: "Objet relatif (pays)." },
  { id: 'gex-adv-473', lessonId: 'relative-pronouns', type: 'reorder', tier: 3, prompt: "Relative :", tokens: ['with', 'the', 'whom', 'I', 'man', 'was', 'talking'], answer: 'the man with whom I was talking', explanation: "Préposition + whom." },
  { id: 'gex-adv-474', lessonId: 'relative-pronouns', type: 'mcq', tier: 3, prompt: "The house _____ roof is green is very old.", options: ['whose', 'which', 'that', 'who'], answer: 'whose', explanation: "Possession pour un objet." },
  { id: 'gex-adv-475', lessonId: 'relative-pronouns', type: 'error', tier: 3, prompt: "This is the reason because I am here.", errorWord: 'because', answer: 'why', explanation: "L'expression est 'reason why'." },
  { id: 'gex-adv-476', lessonId: 'relative-pronouns', type: 'mcq', tier: 3, prompt: "The city in _____ I live is beautiful.", options: ['which', 'where', 'that', 'who'], answer: 'which', explanation: "In which = where." },
  { id: 'gex-adv-477', lessonId: 'relative-pronouns', type: 'blank', tier: 3, prompt: "The woman _____ spoke to you is my boss.", answer: 'who', explanation: "Sujet relatif." },
  { id: 'gex-adv-478', lessonId: 'relative-pronouns', type: 'mcq', tier: 3, prompt: "I don't know the person _____ called.", options: ['who', 'which', 'whose', 'whom'], answer: 'who', explanation: "Sujet humain." },
  { id: 'gex-adv-479', lessonId: 'relative-pronouns', type: 'blank', tier: 3, prompt: "The book, _____ (which) I have read, is long.", answer: 'which', explanation: "Relative explicative." },
  { id: 'gex-adv-480', lessonId: 'relative-pronouns', type: 'reorder', tier: 3, prompt: "Ordre :", tokens: ['the', 'place', 'is', 'where', 'This', 'we', 'met'], answer: 'This is the place where we met', explanation: "Lieu relatif." },
  { id: 'gex-adv-481', lessonId: 'relative-pronouns', type: 'mcq', tier: 3, prompt: "The student _____ project won is happy.", options: ['whose', 'who', 'whom', 'which'], answer: 'whose', explanation: "Possession." },
  { id: 'gex-adv-482', lessonId: 'relative-pronouns', type: 'blank', tier: 3, prompt: "The moment _____ I saw her, I knew.", answer: 'when', explanation: "Temps." },
  { id: 'gex-adv-483', lessonId: 'relative-pronouns', type: 'error', tier: 3, prompt: "The car that its engine is broken is mine.", errorWord: 'that its', answer: 'whose', explanation: "On utilise 'whose' pour la possession." },
  { id: 'gex-adv-484', lessonId: 'relative-pronouns', type: 'mcq', tier: 3, prompt: "The man _____ you were looking for is here.", options: ['whom', 'whose', 'which', 'what'], answer: 'whom', explanation: "Objet humain (formel)." },
  { id: 'gex-adv-485', lessonId: 'relative-pronouns', type: 'blank', tier: 3, prompt: "The house _____ we bought is expensive.", answer: 'which', explanation: "Objet relatif (chose)." },
  { id: 'gex-adv-486', lessonId: 'relative-pronouns', type: 'mcq', tier: 3, prompt: "The time _____ the plane lands is 8 pm.", options: ['when', 'where', 'why', 'who'], answer: 'when', explanation: "Temps." },
  { id: 'gex-adv-487', lessonId: 'relative-pronouns', type: 'reorder', tier: 3, prompt: "Relative :", tokens: ['for', 'the', 'reason', 'I', 'which', 'am', 'here'], answer: 'the reason for which I am here', explanation: "Préposition + which (formel)." },
  { id: 'gex-adv-488', lessonId: 'relative-pronouns', type: 'mcq', tier: 3, prompt: "The person _____ I met yesterday was nice.", options: ['whom', 'who', 'which', 'whose'], answer: 'whom', explanation: "Objet humain." },
  { id: 'gex-adv-489', lessonId: 'relative-pronouns', type: 'blank', tier: 3, prompt: "The dog _____ (whose) name is Rex is mine.", answer: 'whose', explanation: "Possession." },
  { id: 'gex-adv-490', lessonId: 'relative-pronouns', type: 'error', tier: 3, prompt: "The city where I live in is big.", errorWord: 'where I live in', answer: 'which I live in', explanation: "Si on utilise 'in', on doit utiliser 'which' (ou simplement 'where' sans 'in')." },
  { id: 'gex-adv-491', lessonId: 'relative-pronouns', type: 'mcq', tier: 3, prompt: "The building _____ is tall is new.", options: ['which', 'who', 'whom', 'whose'], answer: 'which', explanation: "Sujet relatif (chose)." },
  { id: 'gex-adv-492', lessonId: 'relative-pronouns', type: 'blank', tier: 3, prompt: "The day _____ we arrived was rainy.", answer: 'when', explanation: "Temps." },
  { id: 'gex-adv-493', lessonId: 'relative-pronouns', type: 'mcq', tier: 3, prompt: "He is the boy _____ father is a doctor.", options: ['whose', 'who', 'whom', 'which'], answer: 'whose', explanation: "Possession." },
  { id: 'gex-adv-494', lessonId: 'relative-pronouns', type: 'blank', tier: 3, prompt: "The shop _____ I bought this is closed.", answer: 'where', explanation: "Lieu." },
  { id: 'gex-adv-495', lessonId: 'relative-pronouns', type: 'reorder', tier: 3, prompt: "Ordre :", tokens: ['is', 'the', 'car', 'which', 'This', 'is', 'fast'], answer: 'This is the car which is fast', explanation: "Sujet relatif." },
  { id: 'gex-adv-496', lessonId: 'relative-pronouns', type: 'mcq', tier: 3, prompt: "The lady to _____ you spoke is my aunt.", options: ['whom', 'who', 'which', 'whose'], answer: 'whom', explanation: "Préposition + personne." },
  { id: 'gex-adv-497', lessonId: 'relative-pronouns', type: 'blank', tier: 3, prompt: "The movie _____ we saw was great.", answer: 'which', explanation: "Objet relatif (chose)." },
  { id: 'gex-adv-498', lessonId: 'relative-pronouns', type: 'mcq', tier: 3, prompt: "I don't know the year _____ he was born.", options: ['when', 'where', 'why', 'who'], answer: 'when', explanation: "Temps." },
  { id: 'gex-adv-499', lessonId: 'relative-pronouns', type: 'error', tier: 3, prompt: "The house who is red is mine.", errorWord: 'who', answer: 'which', explanation: "Pas de 'who' pour les objets." },
  { id: 'gex-adv-500', lessonId: 'relative-pronouns', type: 'reorder', tier: 3, prompt: "Final :", tokens: ['is', 'the', 'man', 'who', 'This', 'knows', 'everything'], answer: 'This is the man who knows everything', explanation: "Sujet relatif humain." }
];

window.GRAMMAR_CATEGORIES = GRAMMAR_CATEGORIES;
window.LESSONS = LESSONS;
window.EXERCISES = EXERCISES;