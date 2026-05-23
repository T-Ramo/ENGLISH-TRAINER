const GRAMMAR_CATEGORIES = {
  tenses:      { label: 'Temps & aspects verbaux', order: 1, color: 'moss' },
  determiners: { label: 'Articles & déterminants',  order: 2, color: 'amber' },
  pronouns:    { label: 'Pronoms',                   order: 3, color: 'moss' },
  adjectives:  { label: 'Adjectifs & comparaison',   order: 4, color: 'burgundy' },
  prepositions:{ label: 'Prépositions',              order: 5, color: 'ink' },
  verbal:      { label: 'Structures verbales',       order: 6, color: 'amber-deep' },
  connectors:  { label: 'Connecteurs & syntaxe',     order: 7, color: 'moss-deep' },
  nouns:       { label: 'Noms & déterminants',       order: 8, color: 'rose' },
};

// Difficulté : 1 (B1), 2 (B1+/B2), 3 (B2/Avancé TOEIC)
const LESSONS = [

  // ══════════════════════════════════════════════
  //  TEMPS & ASPECTS VERBAUX
  // ══════════════════════════════════════════════
  {
    id: 'present-tenses',
    category: 'tenses',
    tier: 1,
    label: 'Present Simple & Continuous',
    summary: 'Distinguer le présent d\'habitude (simple) du présent en cours (continuous).',
    rules: [
      {
        title: 'Present Simple — formation',
        content: 'Sujet + base verbale (+ -s à la 3e pers. sing.). Négatif : don\'t / doesn\'t + base. Question : Do/Does + sujet + base. Ex : She works every day. / Does he speak English?'
      },
      {
        title: 'Present Simple — usages',
        content: '① Habitudes, routines : I go to the gym on Mondays. ② Vérités générales : Water boils at 100°C. ③ États permanents : She lives in Paris. ④ Horaires fixes : The train leaves at 9 am. ⑤ Commentaires sportifs / narration historique : He shoots and scores!'
      },
      {
        title: 'Present Continuous — formation',
        content: 'Sujet + am/is/are + V-ing. Négatif : am/is/are + not + V-ing. Question : Am/Is/Are + sujet + V-ing? Ex : They are working on a new project.'
      },
      {
        title: 'Present Continuous — usages',
        content: '① Action en cours maintenant : She is reading a report. ② Situation temporaire : I\'m staying at a hotel this week. ③ Changement progressif : Prices are rising. ④ Futur planifié : We are meeting the client tomorrow. ⑤ Habitude agaçante (always) : He is always interrupting me!'
      },
      {
        title: 'Verbes non-continus (stative verbs)',
        content: 'Certains verbes expriment un état et n\'ont pas de forme continue : believe, belong, contain, depend, hate, know, like, love, mean, need, own, prefer, realize, remember, seem, understand, want. ❌ I am knowing the answer. ✅ I know the answer. Exceptions : think/see peuvent avoir les deux formes avec sens différent.'
      }
    ],
    examples: [
      { en: 'She usually takes the bus, but today she is driving.', fr: 'Elle prend habituellement le bus, mais aujourd\'hui elle conduit.' },
      { en: 'The company is currently expanding into Asia.', fr: 'L\'entreprise est actuellement en train de s\'étendre en Asie.' },
      { en: 'Water freezes at 0°C.', fr: 'L\'eau gèle à 0°C.' },
      { en: 'I am thinking of changing jobs.', fr: 'Je pense à changer de travail (processus de réflexion).' }
    ],
    pitfalls: [
      'Ne jamais utiliser le continuous avec les stative verbs : ❌ I am knowing → ✅ I know.',
      '"Always" avec le continuous = habitude agaçante : He is always losing his keys (irritation).',
      'Le présent simple peut exprimer le futur pour les horaires : The meeting starts at 10.'
    ]
  },

  {
    id: 'past-tenses',
    category: 'tenses',
    tier: 1,
    label: 'Past Simple, Continuous & Perfect',
    summary: 'Les trois temps du passé et leurs usages respectifs.',
    rules: [
      {
        title: 'Past Simple — formation & usage',
        content: 'Verbes réguliers : + -ed (worked, finished). Irréguliers à mémoriser (go→went, buy→bought, write→wrote). Usage : ① Action terminée à un moment précis du passé : He left at 8 pm. ② Série d\'actions passées : She opened the door, walked in and sat down. ③ Habitude passée révolue : I played football when I was young.'
      },
      {
        title: 'Past Continuous — formation & usage',
        content: 'Was/Were + V-ing. Usage : ① Action en cours à un moment du passé : At 9 pm, I was watching TV. ② Action interrompue par une autre : I was cooking when the phone rang. ③ Deux actions parallèles : While she was reading, he was cooking. ④ Contexte/atmosphère d\'un récit : It was raining and people were rushing home.'
      },
      {
        title: 'Past Perfect — formation & usage',
        content: 'Had + V3 (participe passé). Usage : action ANTÉRIEURE à une autre action passée (la ligne du temps : plus-que-parfait → passé simple). ① She had already eaten when he arrived. ② After he had finished the report, he sent it. Clés : already, just, by the time, after, before, when (avec antériorité).'
      },
      {
        title: 'Past Simple vs Past Perfect',
        content: 'Quand deux actions passées sont mentionnées, utiliser le Past Perfect pour la PREMIÈRE (plus ancienne). Ex : When I arrived at the station, the train had already left. (Le départ = avant l\'arrivée.) Mais si la chronologie est déjà claire (after/before), le Past Simple suffit : After he finished, he left.'
      },
      {
        title: 'Used to / Would — habitudes passées',
        content: '"Used to + base verbale" décrit une habitude ou un état passé révolu : I used to smoke. He used to be shy. "Would + base verbale" décrit uniquement des actions répétées passées (pas des états) : Every summer, we would go to the coast. ❌ I would be shy. (état → used to uniquement).'
      }
    ],
    examples: [
      { en: 'I was talking to a client when the alarm went off.', fr: 'Je parlais à un client quand l\'alarme s\'est déclenchée.' },
      { en: 'By the time she arrived, we had already made a decision.', fr: 'Quand elle est arrivée, nous avions déjà pris une décision.' },
      { en: 'He used to work in finance before joining us.', fr: 'Il travaillait dans la finance avant de nous rejoindre.' },
      { en: 'She hadn\'t seen the report before the meeting started.', fr: 'Elle n\'avait pas vu le rapport avant que la réunion commence.' }
    ],
    pitfalls: [
      '"Used to" est uniquement au passé — il n\'y a pas de forme présente : ❌ I use to go → ✅ I go.',
      'Past Perfect ne s\'utilise que quand il y a une référence à une action passée antérieure — pas automatiquement avec "before/after".',
      'Conflit courant : "When I came home, he left" (séquence) vs "When I came home, he had left" (il était déjà parti avant).'
    ]
  },

  {
    id: 'present-perfect',
    category: 'tenses',
    tier: 2,
    label: 'Present Perfect',
    summary: 'Le temps qui relie passé et présent — différence clé avec le Past Simple.',
    rules: [
      {
        title: 'Formation',
        content: 'Have/Has + V3 (participe passé). Négatif : haven\'t/hasn\'t + V3. Question : Have/Has + sujet + V3? Ex : She has finished the report. / Have you ever been to London?'
      },
      {
        title: 'Usages principaux',
        content: '① Expérience de vie (sans date précise) : I have visited Japan twice. ② Résultat présent d\'une action passée : He has broken his leg (il a encore la jambe cassée). ③ Action récente pertinente maintenant : The CEO has just resigned. ④ Situation qui a commencé dans le passé et continue : She has worked here for 10 years / since 2015.'
      },
      {
        title: 'Marqueurs temporels clés',
        content: 'FOR + durée : I have worked here for 3 years. SINCE + point de départ : since 2020, since Monday, since I was a child. JUST / ALREADY / YET : She has just left. He has already eaten. Have you done it yet? EVER / NEVER : Have you ever tried sushi? I have never been to Australia.'
      },
      {
        title: 'Present Perfect vs Past Simple',
        content: 'PAST SIMPLE = action à un moment précis et révolu. PRESENT PERFECT = lien avec le présent, pas de date précise. Ex : I saw him YESTERDAY (past simple — moment précis). / I have seen him (present perfect — expérience, sans date). ⚠️ Avec "when", "ago", "last year", "in 2018" → toujours Past Simple.'
      },
      {
        title: 'Present Perfect Continuous',
        content: 'Have/has + been + V-ing. Insiste sur la DURÉE et le processus en cours ou récemment terminé : I have been working all day (je suis fatigué). She has been waiting for an hour. Comparer : I have written 3 emails (résultat) vs I have been writing emails (activité prolongée).'
      }
    ],
    examples: [
      { en: 'I have lived in London since 2019.', fr: 'J\'habite à Londres depuis 2019 (et j\'y suis encore).' },
      { en: 'She has just submitted the proposal.', fr: 'Elle vient de soumettre la proposition.' },
      { en: 'Have you ever worked abroad?', fr: 'As-tu déjà travaillé à l\'étranger ?' },
      { en: 'The company has been growing steadily for the past decade.', fr: 'L\'entreprise croît régulièrement depuis dix ans.' }
    ],
    pitfalls: [
      'Avec "yesterday, last week, in 2020" → TOUJOURS Past Simple : ❌ I have seen him yesterday → ✅ I saw him yesterday.',
      '"For" vs "Since" : FOR + durée (for 3 years), SINCE + point de départ (since 2020). Ne pas confondre.',
      '"Already" se place entre have et V3 : She has already left. "Yet" va en fin de phrase (négatif/question) : Has he arrived yet?'
    ]
  },

  {
    id: 'future-tenses',
    category: 'tenses',
    tier: 2,
    label: 'Future Forms',
    summary: 'Will, be going to, Present Continuous et Present Simple pour le futur.',
    rules: [
      {
        title: 'Will — décision spontanée & prédiction',
        content: 'Usage : ① Décision prise au moment où on parle : "The phone is ringing." "I\'ll get it!" ② Prédiction basée sur opinion/croyance (sans preuve visible) : I think it will rain next week. ③ Promesses, offres, refus : I will help you. ④ Faits futurs certains : She will be 30 next year.'
      },
      {
        title: 'Be going to — intention & preuve visible',
        content: 'Usage : ① Intention décidée à l\'avance : We are going to launch a new product in Q3. ② Prédiction basée sur preuve visible : Look at those clouds — it is going to rain. Clé : "going to" implique qu\'une décision est déjà prise ou qu\'un signe est visible.'
      },
      {
        title: 'Present Continuous — futur planifié',
        content: 'Pour des arrangements futurs concrets, avec date/heure/lieu précis : I am meeting the CEO tomorrow at 3 pm. We are flying to New York on Friday. La différence avec "going to" : le présent continu implique un arrangement concret (rendez-vous pris), "going to" une simple intention.'
      },
      {
        title: 'Present Simple — futur d\'horaire',
        content: 'Pour des programmes fixes, horaires officiels : The conference starts at 9 am. The train leaves at 7:30. My flight arrives on Monday. Limité aux transports, événements prévus officiellement.'
      },
      {
        title: 'Future Continuous & Perfect',
        content: 'FUTURE CONTINUOUS (will be + V-ing) : action en cours à un moment futur précis : At 10 tomorrow I will be presenting to the board. FUTURE PERFECT (will have + V3) : action terminée avant un moment futur : By Friday, we will have sent all the invoices.'
      }
    ],
    examples: [
      { en: 'A: I can\'t open this file. B: I\'ll help you.', fr: 'Décision spontanée au moment de parler.' },
      { en: 'We\'re going to rebrand the company next year.', fr: 'Intention déjà décidée.' },
      { en: 'I\'m having lunch with the investors on Thursday.', fr: 'Arrangement concret planifié.' },
      { en: 'By the time you arrive, I will have finished the report.', fr: 'Le rapport sera terminé avant votre arrivée.' }
    ],
    pitfalls: [
      '"Going to" ≠ "will" : avec une preuve visible → going to ; décision spontanée → will.',
      'Ne pas utiliser "will" pour un plan déjà établi : ❌ I will meet him tomorrow (si rendez-vous pris) → ✅ I\'m meeting him tomorrow.',
      '"By + futur" → Future Perfect : By 2030, renewable energy will have replaced most fossil fuels.'
    ]
  },

  {
    id: 'passive-voice',
    category: 'tenses',
    tier: 2,
    label: 'Passive Voice',
    summary: 'Mettre l\'accent sur l\'action ou l\'objet plutôt que sur le sujet.',
    rules: [
      {
        title: 'Formation générale',
        content: 'BE (conjugué au temps voulu) + V3 (participe passé). Le complément d\'agent est introduit par "by" (facultatif). Tableau : Present simple : is/are made. Past simple : was/were made. Present perfect : has/have been made. Future : will be made. Modal : must be done / should be completed.'
      },
      {
        title: 'Quand utiliser le passif',
        content: '① L\'agent est inconnu : My car was stolen last night. ② L\'agent est évident ou sans importance : The report has been submitted. ③ Pour mettre l\'accent sur le résultat : Three people were injured. ④ Style formel/académique/business : All expenses must be approved by the CFO. ⑤ Pour varier la structure.'
      },
      {
        title: 'Passif avec modaux',
        content: 'Modal + be + V3 (présent/futur) : The contract must be signed before Friday. This issue should be addressed immediately. Modal + have been + V3 (passé) : The report should have been sent yesterday. The problem could have been avoided.'
      },
      {
        title: 'Passif impersonnel — Say/Think/Know/Believe',
        content: 'Structure : It is said that + proposition. Ou : Sujet + is said to be/have + V3. Ex : "It is believed that the merger will succeed." = "The merger is believed to succeed." "It is known that he resigned." = "He is known to have resigned." Très fréquent dans la presse et les rapports.'
      },
      {
        title: 'Passif + gérondif et causatif',
        content: 'Passif + gérondif : He hates being told what to do. She resents being ignored. Causatif "have/get sth done" : We had the office renovated. I need to get my car fixed. (Faire faire par quelqu\'un d\'autre.) Au passé : She had her hair cut yesterday.'
      }
    ],
    examples: [
      { en: 'The new policy will be implemented next month.', fr: 'La nouvelle politique sera mise en place le mois prochain.' },
      { en: 'Three employees have been promoted this quarter.', fr: 'Trois employés ont été promus ce trimestre.' },
      { en: 'The meeting should have been rescheduled earlier.', fr: 'La réunion aurait dû être reprogrammée plus tôt.' },
      { en: 'It is expected that sales will double by Q4.', fr: 'On s\'attend à ce que les ventes doublent d\'ici le T4.' }
    ],
    pitfalls: [
      'Le passif NE S\'UTILISE PAS avec les verbes intransitifs (arrive, come, die, happen) — ils n\'ont pas d\'objet.',
      '❌ "I was explained the procedure" → ✅ "The procedure was explained to me" (explain ne s\'utilise pas avec pronom sujet au passif).',
      'Ne pas oublier "been" dans les temps composés : ❌ The report has submitted → ✅ has been submitted.'
    ]
  },

  {
    id: 'conditionals',
    category: 'tenses',
    tier: 2,
    label: 'Conditionals (0→3 + Mixed)',
    summary: 'Les quatre types de conditionnels et les conditionnels mixtes.',
    rules: [
      {
        title: 'Conditionnel 0 — Vérités générales',
        content: 'If + présent simple, présent simple. Pour des faits toujours vrais, des lois scientifiques, des procédures. Ex : If you heat ice, it melts. If the system crashes, reboot the server. On peut remplacer "if" par "when" sans changer le sens.'
      },
      {
        title: 'Conditionnel 1 — Futur réel / probable',
        content: 'If + présent simple, will + base verbale. Pour des situations futures réalistes, des conséquences probables. Ex : If we miss the deadline, the client will cancel the contract. Variantes : If + présent simple, can/may/might/must/should + base. "Unless" remplace "if not" : Unless you hurry, we\'ll be late.'
      },
      {
        title: 'Conditionnel 2 — Hypothèse présente / irréelle',
        content: 'If + prétérit, would + base verbale. Pour des situations imaginaires ou improbables dans le présent/futur. Ex : If I were the CEO, I would cut costs. (Je ne suis pas PDG.) If we had more budget, we could hire more staff. Note : "If I were" (pas "was") est grammaticalement correct au conditionnel 2, surtout en anglais formel.'
      },
      {
        title: 'Conditionnel 3 — Regret passé / irréel',
        content: 'If + past perfect, would have + V3. Pour des situations passées qui ne se sont pas réalisées — regrets, reproches. Ex : If she had prepared better, she would have got the job. If I had known about the meeting, I would have attended. Contraction : I\'d have = I would have.'
      },
      {
        title: 'Conditionnel mixte',
        content: 'Regret passé + conséquence présente : If + past perfect, would + base. Ex : If I had studied medicine (past), I would be a doctor now. Ou : situation présente + résultat passé : If I were more organized (présent), I would have met the deadline (passé). Inversion formelle : Had I known (= If I had known). Were it not for him (= If it weren\'t for him). Should you need help (= If you should need).'
      }
    ],
    examples: [
      { en: 'If revenues fall below target, we will review the budget.', fr: 'Si les revenus sont en dessous de la cible, nous réviserons le budget. (Cond. 1)' },
      { en: 'If I were you, I would accept the offer.', fr: 'À ta place, j\'accepterais l\'offre. (Cond. 2)' },
      { en: 'If she had checked the data, she wouldn\'t have made that error.', fr: 'Si elle avait vérifié les données, elle n\'aurait pas commis cette erreur. (Cond. 3)' },
      { en: 'Had I been informed earlier, I could have helped.', fr: 'Si j\'avais été informé plus tôt, j\'aurais pu aider. (Inversion formelle)' }
    ],
    pitfalls: [
      '❌ "If I would know" → ✅ "If I knew" — on n\'utilise JAMAIS "would" dans la proposition en "if".',
      'Cond. 2 formel : "If I were" (pas "was") : "If I were you / If he were here".',
      '"Unless" = "if not" : Unless you call her = If you don\'t call her. Ne pas écrire "unless you don\'t" (double négation).'
    ]
  },

  // ══════════════════════════════════════════════
  //  ARTICLES & DÉTERMINANTS
  // ══════════════════════════════════════════════
  {
    id: 'articles-a-an-the',
    category: 'determiners',
    tier: 1,
    label: 'A / An / The / Ø',
    summary: 'Maîtriser les quatre articles : indéfini, défini et zéro.',
    rules: [
      {
        title: 'A vs An — selon le SON, pas l\'orthographe',
        content: 'A + son consonantique initial : a car, a university (/j/), a one-way street (/w/), a European country (/j/). An + son vocalique initial : an apple, an hour (h muet), an MBA (/em/), an honest man (h muet), an unusual idea. La règle est phonétique : "an MP" car on prononce /em-pi/, "a member of parliament" car on prononce /m/.'
      },
      {
        title: 'A/An — usages de l\'article indéfini',
        content: '① Première mention d\'un élément non spécifique : I saw a man outside. ② Catégorie / profession : She is a lawyer. He is an engineer. ③ Sens générique d\'un seul représentant de la catégorie : A dog is man\'s best friend. ④ Quantité "un(e)" : I need a pen. Give me a minute. ⑤ Après "such", "quite", "what" : What a great idea! Such a pity. Quite a challenge.'
      },
      {
        title: 'The — article défini',
        content: '① Élément déjà mentionné ou identifiable : I bought a book. The book is great. ② Unique en son genre : the sun, the moon, the internet, the environment. ③ Superlatifs : the fastest, the most important. ④ Instruments de musique : She plays the piano. ⑤ Groupes nationaux, fleuves, chaînes de montagnes, océans : the French, the Thames, the Alps, the Pacific. ⑥ Noms composés de pays : the United States, the UAE, the Netherlands. ⑦ Ordinal : the first, the second.'
      },
      {
        title: 'Article zéro Ø — pas d\'article',
        content: '① Noms indénombrables au sens général : Water is essential. Knowledge is power. Advice is valuable. ② Noms pluriels au sens général : Dogs are loyal animals. ③ Langues : She speaks French. ④ Sports et jeux : He plays football / chess. ⑤ Repas : We had lunch. Have breakfast first. ⑥ La plupart des pays, villes, rues : France, London, Oxford Street. ⑦ Transport idiomatique : by car, by train, on foot. ⑧ Titres suivis d\'un nom propre : President Biden, Doctor Smith, Professor Jones.'
      },
      {
        title: 'Pièges articles + TOEIC',
        content: '① "School/prison/hospital/church/bed" : sans article quand on va pour leur fonction : go to school (étudier), be in hospital (soigner) vs "The school is old" (bâtiment). ② "In the morning/afternoon/evening" mais "at night". ③ "On the radio/phone" mais "on TV" (sans "the"). ④ Articles avec maladies : have a cold / a headache, mais have cancer / pneumonia (sans article).'
      }
    ],
    examples: [
      { en: 'She is an honest woman with a unique perspective.', fr: '"An" (h muet) + "a" (son /j/ dans unique).' },
      { en: 'The president of the company gave a speech.', fr: '"The" car identifiable + "a" car première mention.' },
      { en: 'He went to university in London, not the one in Oxford.', fr: 'Zéro article (fonction) vs "the one" (référent spécifique).' },
      { en: 'Knowledge is power, but a good education opens doors.', fr: 'Zéro article (général) vs "a" (instance).' }
    ],
    pitfalls: [
      '"A/an" devant un sigle se détermine par la prononciation de la 1ère lettre : an FBI agent (/ef/), a NASA mission (/en/).',
      'Pas d\'article devant les langues, sports, repas : ❌ I love the football → ✅ I love football.',
      '"The" est obligatoire devant les superlatifs : ❌ She is best student → ✅ She is the best student.'
    ]
  },

  {
    id: 'some-any-no',
    category: 'determiners',
    tier: 1,
    label: 'Some / Any / No + composés',
    summary: 'Quantifieurs de base + composés (something, anyone, nobody…).',
    rules: [
      {
        title: 'Some — affirmatif + offres polies',
        content: '① Phrases affirmatives : I have some questions. There is some milk in the fridge. ② Offres : Would you like some coffee? Can I get you some help? ③ Demandes polies : Could I have some information? ④ "Some" + singulier = "un certain" : Some manager left without signing. (quelqu\'un — indéterminé)'
      },
      {
        title: 'Any — questions, négatif, libre choix',
        content: '① Questions : Do you have any experience? Is there any news? ② Phrases négatives : I don\'t have any money. There isn\'t any time left. ③ Sens "n\'importe lequel" (affirmatif) : Any employee can apply — this means ALL employees can. You can call any time.'
      },
      {
        title: 'No — remplace "not any"',
        content: '"No" + nom = not any + nom, mais avec un verbe affirmatif. ① There is no milk = There isn\'t any milk. ② I have no experience in finance. ③ No problem! No way! (expressions fixes). ⚠️ Avec "no", le verbe est AFFIRMATIF. Avec "any", le verbe est NÉGATIF : He has no idea / He doesn\'t have any idea.'
      },
      {
        title: 'Composés : something/anything/nothing…',
        content: 'Some- : something, someone, somebody, somewhere → affirmatif, offres. Any- : anything, anyone, anybody, anywhere → questions, négatif, libre choix. No- : nothing, nobody, no one, nowhere → négatif avec verbe affirmatif. Every- : everything, everyone, everybody, everywhere → totalité. Ex : Is there anything I can do? There is nothing I can do. Someone is waiting for you.'
      },
      {
        title: 'Some/Any + of',
        content: '"Some of" et "any of" sont suivis d\'un nom avec déterminant (the, my, these…). Some of the students passed. Any of my colleagues could help. None of them agreed. ≠ Some students passed (général, sans "of").'
      }
    ],
    examples: [
      { en: 'Would you like some tea? I have some left.', fr: 'Offre polie + affirmatif.' },
      { en: 'I don\'t have any doubt about the decision.', fr: 'Négatif avec "any".' },
      { en: 'There is no budget for this project.', fr: 'Équivalent de "there isn\'t any budget".' },
      { en: 'Anyone can join the meeting — it\'s open to all.', fr: '"Any" = n\'importe qui.' }
    ],
    pitfalls: [
      '❌ "I have any questions" dans une phrase affirmative → ✅ "I have some questions".',
      '"No one" s\'écrit en deux mots ; "nobody" en un seul — les deux sont corrects.',
      'Après "hardly, scarcely, barely", utiliser "any" et non "some" : I hardly have any time.'
    ]
  },

  {
    id: 'much-many',
    category: 'determiners',
    tier: 1,
    label: 'Quantifieurs : Much / Many / Few / Little',
    summary: 'Exprimer la quantité selon que le nom est dénombrable ou non.',
    rules: [
      {
        title: 'Noms dénombrables vs indénombrables',
        content: 'DÉNOMBRABLES (ont un pluriel) : books, employees, ideas, meetings. → Many, few, a few, several, a number of. INDÉNOMBRABLES (pas de pluriel) : information, advice, furniture, luggage, news, equipment, progress, research, knowledge, traffic, work. → Much, little, a little, a great deal of. Pièges courants : ❌ informations, advices, furnitures → ces formes n\'existent pas.'
      },
      {
        title: 'Many vs Much',
        content: 'MANY + nom dénombrable pluriel : How many employees? Too many meetings. Many colleagues agreed. MUCH + nom indénombrable : How much time? Too much stress. Much attention has been paid. En pratique, "much" est surtout utilisé dans les questions et les négatifs ; à l\'affirmatif, on préfère "a lot of / a great deal of".'
      },
      {
        title: 'A lot of / Lots of / Plenty of',
        content: 'Ces trois expressions s\'utilisent avec les DEUX types de noms. A lot of time / a lot of people. Lots of work / lots of ideas. Plenty of space / plenty of options (= plus que suffisant). Registre : "lots of" est plus informel que "a lot of". Dans un rapport professionnel : "a great deal of time", "a large number of clients".'
      },
      {
        title: 'Few vs A few / Little vs A little',
        content: 'FEW (sans article) = presque aucun, insuffisant, sens négatif : Few employees responded to the survey (= presque personne). LITTLE (sans article) = presque pas, sens négatif : Little progress has been made. A FEW = quelques, assez pour : A few candidates were selected (= il y en avait quand même). A LITTLE = un peu, suffisant : We have a little time left — enough to finish.'
      },
      {
        title: 'Noms collectifs et pièges courants',
        content: 'TOUJOURS SINGULIERS (indénombrables) : news (the news IS good), advice, information, research, evidence, furniture, luggage, equipment, progress, staff, traffic. TOUJOURS PLURIELS : people (= les gens), police, cattle, scissors, trousers, glasses. NOMS COLLECTIFS (peuvent être sing. ou plur. en UK) : team, government, company → The team are/is ready.'
      }
    ],
    examples: [
      { en: 'We don\'t have much time left, but a few ideas are promising.', fr: 'Much + indénombrable / a few + dénombrable.' },
      { en: 'The news is bad — little progress has been made.', fr: '"News" = singulier ; "little" = presque aucun.' },
      { en: 'A great deal of effort has gone into this project.', fr: 'Registre formel pour "beaucoup de" + indénombrable.' },
      { en: 'Few candidates met all the criteria.', fr: 'Presque aucun — sens négatif sans article.' }
    ],
    pitfalls: [
      '❌ "Many informations / many advices" → ✅ "much information / some advice" (indénombrables).',
      '"The news ARE" → ❌ toujours "The news IS" (singulier en anglais).',
      '"Few" ≠ "a few" : "Few people came" (quasi-personne) ≠ "A few people came" (quelques-uns sont venus).'
    ]
  },

  // ══════════════════════════════════════════════
  //  PRONOMS
  // ══════════════════════════════════════════════
  {
    id: 'personal-pronouns',
    category: 'pronouns',
    tier: 1,
    label: 'Personal Pronouns',
    summary: 'Pronoms sujets, objets, possessifs adjectifs et possessifs pronoms.',
    rules: [
      {
        title: 'Tableau complet des pronoms',
        content: 'Sujet → Objet → Possessif adj. → Possessif pronom → Réfléchi. I → me → my → mine → myself. You → you → your → yours → yourself. He → him → his → his → himself. She → her → her → hers → herself. It → it → its → — → itself. We → us → our → ours → ourselves. You → you → your → yours → yourselves. They → them → their → theirs → themselves.'
      },
      {
        title: 'Pronoms sujets vs pronoms objets',
        content: 'SUJET (avant le verbe) : I, you, he, she, it, we, they. Ex : She wrote the report. OBJET (après le verbe ou après une préposition) : me, you, him, her, it, us, them. Ex : Give it to me. He called her. Between you and me. ⚠️ Après "than" et "as" en comparaison formelle : She is taller than I (am). / He is as tall as she (is). En informel : She is taller than me.'
      },
      {
        title: 'Pronoms possessifs adjectifs (déterminants)',
        content: 'My, your, his, her, its, our, their. S\'utilisent devant un nom : my report, her idea, their budget, its value. ⚠️ IT\'S (contraction de it is) ≠ ITS (possessif). Ex : It\'s a good plan. / Its main advantage is...'
      },
      {
        title: 'Pronoms possessifs (standalones)',
        content: 'Mine, yours, his, hers, ours, theirs. Remplacent un nom déjà mentionné : This is my report. / Yours is on the desk. Is this pen yours or mine? The mistake was theirs, not ours. ⚠️ Jamais d\'article devant : ❌ the mine → ✅ mine.'
      },
      {
        title: 'It vs They pour organisations / pays',
        content: '"It" pour les organisations, entreprises, pays quand on les traite comme des entités abstraites : The company has increased its prices. France has signed the agreement. "They" si on pense aux personnes composant l\'organisation (usage britannique courant) : The company said they would not comment. Les deux sont acceptés selon le registre.'
      }
    ],
    examples: [
      { en: 'He gave her the report, but she didn\'t read it.', fr: 'Pronoms sujets + objet + objet.' },
      { en: 'This project is mine, not theirs.', fr: 'Pronoms possessifs standalone.' },
      { en: 'The company has revised its policy.', fr: '"Its" possessif (≠ "it\'s" = it is).' },
      { en: 'Between you and me, the plan won\'t work.', fr: 'Après préposition → pronom objet "me".' }
    ],
    pitfalls: [
      '❌ "Its great" (possessif) ≠ ✅ "It\'s great" (it is). Très fréquent comme faute.',
      'Après "between, for, to, with, from" → pronom OBJET : ❌ between you and I → ✅ between you and me.',
      '❌ "A friend of my" → ✅ "A friend of mine" (double possessif = of + pronom possessif).'
    ]
  },

  {
    id: 'reflexive-pronouns',
    category: 'pronouns',
    tier: 2,
    label: 'Reflexive Pronouns',
    summary: 'Myself, yourself… pour l\'action réfléchie, l\'emphase et les expressions idiomatiques.',
    rules: [
      {
        title: 'Formation',
        content: 'Myself, yourself, himself, herself, itself, ourselves, yourselves, themselves. Formés avec "self" (sing.) ou "selves" (plur.). ⚠️ Il n\'existe pas de "hisself" ou "theirselves" — ces formes sont incorrectes.'
      },
      {
        title: 'Usage 1 — Action réfléchie (sujet = objet)',
        content: 'Quand le sujet et l\'objet sont la même personne. He cut himself while cooking. She blamed herself for the mistake. The system will update itself automatically. ⚠️ Avec certains verbes, le pronom réfléchi est généralement omis en anglais (contrairement au français) : get up, feel, concentrate, relax, shave, wash, dress : He shaves every morning (pas "himself" obligatoire en anglais standard).'
      },
      {
        title: 'Usage 2 — Emphase (intensifier)',
        content: 'Placé directement après le sujet ou en fin de phrase pour insister. She wrote the report herself (= personne d\'autre). I myself heard the conversation. The CEO himself attended the meeting. They built the application themselves. Sens : "en personne" ou "sans aide".'
      },
      {
        title: 'Usage 3 — By + pronom réfléchi = seul/sans aide',
        content: '"By + réfléchi" = alone, without help. She completed the project by herself. He lives by himself. They managed everything by themselves. ≈ on one\'s own : She completed it on her own.'
      },
      {
        title: 'Expressions idiomatiques avec réfléchis',
        content: 'Help yourself (servez-vous). Behave yourself! (tiens-toi bien). Enjoy yourself! (amuse-toi). Make yourself at home. Teach yourself (apprendre seul). Pull yourself together (ressaisis-toi). Come to oneself (reprendre ses esprits). By/for oneself (seul, de soi-même). Suit yourself (comme tu veux).'
      }
    ],
    examples: [
      { en: 'She trained herself in Python over six months.', fr: 'Action réfléchie — elle s\'est formée seule.' },
      { en: 'The director himself reviewed our proposal.', fr: 'Emphase — "en personne".' },
      { en: 'I\'d rather do it myself than hire a consultant.', fr: '"By myself" = sans aide.' },
      { en: 'Help yourself to the food after the meeting.', fr: 'Expression idiomatique fixe.' }
    ],
    pitfalls: [
      '❌ "Theirselves, hisself" — ces formes n\'existent pas. Utiliser "themselves, himself".',
      'Ne pas utiliser le réfléchi pour renforcer le sens possessif : ❌ "myself car" → ✅ "my own car".',
      '"Myself" ne remplace pas "I" ou "me" par souci de politesse : ❌ "Contact myself" → ✅ "Contact me".'
    ]
  },

  {
    id: 'relative-pronouns',
    category: 'pronouns',
    tier: 2,
    label: 'Relative Pronouns & Clauses',
    summary: 'Who, which, that, whose, whom, where — relatives définitives et explicatives.',
    rules: [
      {
        title: 'Who, Whom, Whose — pour les personnes',
        content: 'WHO = pronom sujet (remplace un sujet humain) : The candidate who applied yesterday is qualified. WHOM = pronom objet (après une préposition ou comme objet direct, registre formel) : The manager whom you met is leaving. / The person to whom I spoke... WHOSE = possession pour personnes et objets : The employee whose contract was renewed is delighted. The company whose profits tripled is going public.'
      },
      {
        title: 'Which — pour les objets, animaux, idées',
        content: 'WHICH remplace un nom non-humain. Sujet : The report which was submitted yesterday... Objet : The laptop which I bought last week... Idée / proposition entière : He was late, which surprised everyone. (Référent = toute la proposition précédente.) ⚠️ Ne jamais utiliser "which" pour une personne.'
      },
      {
        title: 'That — polyvalent (restrictive uniquement)',
        content: 'THAT peut remplacer who ou which dans les relatives DÉFINITIVES (sans virgules) : The man that called / The report that I wrote. Mais JAMAIS "that" dans une relative EXPLICATIVE (entre virgules) : ❌ London, that is the capital of England, ... → ✅ London, which is the capital. "That" peut être omis quand il est objet de la relative : The report (that) I wrote is ready.'
      },
      {
        title: 'Where, When, Why — pour lieux, temps, raisons',
        content: 'WHERE : The office where we work is downtown. WHEN : The year when she joined was 2018. WHY : That is the reason why I refused. "When" et "why" peuvent être omis : The day (when) I arrived... / The reason (why) I left...'
      },
      {
        title: 'Relative définitive vs explicative (restrictive vs non-restrictive)',
        content: 'DÉFINITIVE (sans virgules) : identifie précisément le nom — essentielle au sens. The employee who was late was fired. (pas toutes les employés, seulement celui qui était en retard) EXPLICATIVE (avec virgules) : ajoute une information optionnelle sur un nom déjà identifié. Mr. Smith, who was late, was fired. (Mr Smith est déjà identifié — la relative est un commentaire.) ⚠️ Jamais "that" dans une relative explicative. Pas d\'omission du pronom possible.'
      }
    ],
    examples: [
      { en: 'The manager whose team exceeded targets received a bonus.', fr: '"Whose" exprime la possession.' },
      { en: 'The proposal that we discussed needs revision.', fr: '"That" dans une relative définitive.' },
      { en: 'Our CFO, who has 20 years of experience, will lead the talks.', fr: 'Relative explicative (virgules) — information additionnelle.' },
      { en: 'This is the issue to which the board has not yet responded.', fr: '"Which" après préposition — registre formel.' }
    ],
    pitfalls: [
      '❌ "The company which employees are unhappy" → ✅ "whose employees" (possession).',
      '"That" ne peut jamais suivre une virgule : ❌ "London, that is..." → ✅ "London, which is...".',
      'Après une préposition, uniquement "whom" (personnes) ou "which" (objets) : the person to whom / the issue to which.'
    ]
  },

  // ══════════════════════════════════════════════
  //  ADJECTIFS & COMPARAISON
  // ══════════════════════════════════════════════
  {
    id: 'comparatives',
    category: 'adjectives',
    tier: 1,
    label: 'Comparatives',
    summary: 'Comparer deux éléments : supériorité, infériorité, égalité et double comparative.',
    rules: [
      {
        title: 'Comparatif de supériorité — formation',
        content: 'Adjectifs courts (1 syllabe) → + -er + than : tall→taller, fast→faster, cheap→cheaper. Adjectifs 2 syllabes en -y → -ier + than : happy→happier, easy→easier, heavy→heavier. Adjectifs longs (2+ syllabes) → more + adj + than : more expensive, more efficient, more comfortable. Doublage de la consonne finale : big→bigger, hot→hotter, thin→thinner.'
      },
      {
        title: 'Comparatifs irréguliers',
        content: 'Good → better. Bad → worse. Far → farther (distance physique) / further (fig. + distance). Little → less. Much/many → more. Old → older / elder (pour les membres d\'une famille : my elder brother). Late → later (temps) / latter (le dernier de deux éléments mentionnés).'
      },
      {
        title: 'Comparatif d\'égalité — as... as',
        content: 'As + adjectif/adverbe + as. Positif : She is as experienced as her colleague. Négatif : This model is not as efficient as the previous one. Avec des noms : He earns as much money as I do. Expressions fixes : as soon as possible (ASAP), as long as, as well as, as far as I know.'
      },
      {
        title: 'Modificateurs de comparatifs',
        content: 'Pour nuancer la différence : much / far / considerably / significantly + comparatif : This method is much faster. The new version is far more reliable. Sales are considerably higher than last year. Légère différence : a little / slightly / a bit : This option is a little more expensive. ⚠️ Jamais "very" devant un comparatif : ❌ very faster → ✅ much faster.'
      },
      {
        title: 'Double comparative',
        content: 'The + comparatif, the + comparatif : exprime une proportion. The more you practice, the better you get. The sooner we start, the earlier we finish. The harder the challenge, the greater the reward. The more sophisticated the system, the more difficult it is to operate.'
      }
    ],
    examples: [
      { en: 'Our new software is considerably more efficient than the old one.', fr: 'Modificateur + comparatif long.' },
      { en: 'She is not as experienced as her predecessor, but she is much more dynamic.', fr: 'Égalité négative + supériorité.' },
      { en: 'The more clients we have, the better our margins will be.', fr: 'Double comparative.' },
      { en: 'Sales this quarter were far worse than expected.', fr: 'Comparatif irrégulier + modificateur.' }
    ],
    pitfalls: [
      '❌ "More faster, more better" → ✅ "faster, better" (pas de double comparatif).',
      '❌ "Very faster" → ✅ "much faster" / "far faster" (pas "very" devant un comparatif).',
      '"Further" (supplémentaire, additionnel) vs "farther" (distance) : no further questions / farther from home.'
    ]
  },

  {
    id: 'superlatives',
    category: 'adjectives',
    tier: 1,
    label: 'Superlatives',
    summary: 'Exprimer le degré extrême. Formation, irréguliers et structures idiomatiques.',
    rules: [
      {
        title: 'Formation du superlatif',
        content: 'Adjectifs courts (1 syllabe) → the + adj-est : the tallest, the fastest, the cheapest. Adjectifs 2 syllabes en -y → the + -iest : the happiest, the easiest. Adjectifs longs (2+ syllabes) → the most/least + adj : the most expensive, the least efficient. Doublage : the biggest, the hottest. "The" est OBLIGATOIRE devant un superlatif.'
      },
      {
        title: 'Superlatifs irréguliers',
        content: 'Good → the best. Bad → the worst. Far → the farthest / the furthest. Little → the least. Much/many → the most. Old → the oldest / the eldest (famille).'
      },
      {
        title: 'Superlatif + Present Perfect (ever)',
        content: 'Le superlatif est fréquemment suivi du présent perfect avec "ever" pour exprimer une expérience unique : It is the best book I have ever read. This is the worst quarter we have ever had. She is the most talented person I have ever worked with.'
      },
      {
        title: 'Superlatif + of / in',
        content: 'OF + groupe/ensemble : He is the most experienced of all the candidates. / the best of the three options. IN + lieu/période : the tallest building in the world / the most profitable quarter in our history. ⚠️ "Of" pour un groupe dénombrable, "in" pour un lieu, une organisation, une période.'
      },
      {
        title: 'Structures avec superlatif',
        content: 'By far the + superlatif : This is by far the best solution. One of the + superlatif + nom pluriel : She is one of the most respected managers in the industry. The + superlatif + possible : Please respond as soon as possible. / We need the most cost-effective option possible.'
      }
    ],
    examples: [
      { en: 'This is by far the most challenging project we have undertaken.', fr: '"By far" renforce le superlatif.' },
      { en: 'He is one of the most influential CEOs of his generation.', fr: '"One of the" + superlatif + pluriel.' },
      { en: 'That was the worst financial quarter in the company\'s history.', fr: '"In" + organisation/période.' },
      { en: 'It\'s the best deal I\'ve ever been offered.', fr: 'Superlatif + present perfect + ever.' }
    ],
    pitfalls: [
      '❌ "She is best student" → ✅ "She is the best student" — "the" obligatoire.',
      '❌ "Most fastest" → ✅ "the fastest" — pas de double superlatif.',
      '"One of the best" → le nom qui suit est TOUJOURS pluriel : one of the best solutions (pas "solution").'
    ]
  },

  {
    id: 'adjective-order',
    category: 'adjectives',
    tier: 2,
    label: 'Adjective Order (OSASCOMP)',
    summary: 'L\'ordre obligatoire des adjectifs multiples devant un nom.',
    rules: [
      {
        title: 'L\'ordre OSASCOMP',
        content: '① Opinion (beautiful, horrible, useful, expensive) ② Size / Taille (big, small, large, tall) ③ Age / Âge (old, new, young, ancient) ④ Shape / Forme (round, square, triangular) ⑤ Colour / Couleur (red, dark, light) ⑥ Origin / Origine (French, American, Japanese) ⑦ Material / Matière (leather, wooden, cotton, metal) ⑧ Purpose / Fonction (racing car, writing desk). Moyen mnémotechnique : "A SCARY OLD PHOTO CAN MAKE YOU DREAM" — Attitude, Size, Age, Shape, Colour, Origin, Material, Purpose.'
      },
      {
        title: 'Application pratique',
        content: 'En pratique, on accumule rarement plus de 2-3 adjectifs devant un nom. Exemples : a beautiful (opinion) large (size) old (age) brown (colour) table. An expensive (opinion) Italian (origin) leather (material) bag. A new (age) solar (material/purpose) energy (purpose) project. La règle s\'applique même si on n\'utilise que 2 adjectifs : a small old table ✅ / ❌ an old small table.'
      },
      {
        title: 'Adjectifs de couleur et d\'origine combinés',
        content: 'Couleur avant origine : a dark blue Japanese car. Deux couleurs : a black and white photograph. Nuances de couleur : a light grey suit / a deep navy background. Origin (nationalité) précède toujours material et purpose : a French leather wallet ✅ / ❌ a leather French wallet.'
      },
      {
        title: 'Adjectifs composés (compound adjectives)',
        content: 'Formés de deux éléments liés par un trait d\'union. Adj + V-ing : a time-consuming process, a thought-provoking question. Adj + V3 : a well-known company, a highly-skilled engineer. Nombre + nom : a five-year plan, a three-day conference. ⚠️ Avec trait d\'union avant le nom : a well-known fact. Sans trait d\'union après be : The fact is well known.'
      }
    ],
    examples: [
      { en: 'She wore a stunning (opinion) long (size) black (colour) Italian (origin) silk (material) dress.', fr: 'Ordre complet : opinion → taille → couleur → origine → matière.' },
      { en: 'We need a cost-effective (compound) long-term (compound) strategy.', fr: 'Adjectifs composés — ici l\'ordre est plus flexible.' },
      { en: 'They launched a new (age) solar-powered (material/purpose) vehicle.', fr: 'Âge avant matière/fonction.' },
      { en: 'It was an honest (opinion) small (size) family (purpose) business.', fr: 'Opinion → taille → fonction.' }
    ],
    pitfalls: [
      'L\'ordre n\'est pas facultatif : ❌ "a black big old table" → ✅ "a big old black table".',
      'Pas de virgule entre les adjectifs qui suivent OSASCOMP ; virgule possible entre deux adjectifs d\'opinion : a wonderful, inspiring speech.',
      '"A well-known" (avant nom) → "well known" (après be) : without hyphen after a verb.'
    ]
  },

  {
    id: 'too-enough',
    category: 'adjectives',
    tier: 2,
    label: 'Too / Enough',
    summary: 'Exprimer l\'excès (too) et la suffisance (enough) avec adjectifs, adverbes et noms.',
    rules: [
      {
        title: 'Too — excès négatif',
        content: 'TOO + adjectif/adverbe : The price is too high. He spoke too quickly. Structure avec infinitif (conséquence) : too + adj + to + inf : It\'s too expensive to buy. She\'s too tired to continue. Avec "for + objet" : It\'s too complicated for me to understand. The task is too heavy for one person to carry.'
      },
      {
        title: 'Too much / Too many',
        content: 'TOO MUCH + indénombrable (quantité excessive) : too much stress, too much noise, too much information. TOO MANY + dénombrable pluriel : too many meetings, too many errors, too many candidates. Aussi : adverbe : He works too much. / You talk too much.'
      },
      {
        title: 'Enough — suffisance',
        content: 'ENOUGH se place APRÈS l\'adjectif ou l\'adverbe : The room is big enough. She speaks quickly enough. ENOUGH se place AVANT le nom : We have enough time. There is enough room for everyone. ⚠️ Erreur classique : ❌ "enough big" → ✅ "big enough".'
      },
      {
        title: 'Enough + infinitif (résultat)',
        content: 'adj + enough + to + inf : Is the candidate experienced enough to lead the team? She was confident enough to present to the board. Avec "for + objet" : The salary is not high enough for me to accept. Is the office large enough for the whole team?'
      },
      {
        title: 'Not enough vs Too little / Too few',
        content: 'NOT ENOUGH + nom : There isn\'t enough time. We don\'t have enough resources. TOO LITTLE + indénombrable : too little time, too little effort. TOO FEW + dénombrable : too few employees, too few options. Contraste : not enough money ≈ too little money. not enough staff ≈ too few staff members.'
      }
    ],
    examples: [
      { en: 'The deadline is too tight for us to complete the project properly.', fr: '"Too tight" + for + objet + to + infinitif.' },
      { en: 'There are too many stakeholders and not enough time to consult them all.', fr: '"Too many" + dénombrable / "not enough" + indénombrable.' },
      { en: 'Is the budget large enough to cover all the expenses?', fr: '"Enough" après l\'adjectif.' },
      { en: 'We have too little data to draw any conclusion.', fr: '"Too little" + indénombrable.' }
    ],
    pitfalls: [
      '❌ "enough big" → ✅ "big enough" — "enough" se place APRÈS l\'adjectif.',
      '"Too" ≠ "very" : "too" implique un problème/excès ; "very" est neutre. "It\'s very hot" (constat) ≠ "It\'s too hot to work" (conséquence négative).',
      '❌ "too much employees" → ✅ "too many employees" (dénombrable).'
    ]
  },

  // ══════════════════════════════════════════════
  //  PRÉPOSITIONS
  // ══════════════════════════════════════════════
  {
    id: 'prepositions-time',
    category: 'prepositions',
    tier: 1,
    label: 'Prépositions de temps',
    summary: 'At / On / In + For / Since / By / Until / During pour le temps.',
    rules: [
      {
        title: 'AT — moments précis',
        content: 'AT + heure : at 9 am, at noon, at midnight, at 3:30 pm. AT + moments spéciaux : at the weekend (UK) / on the weekend (US), at night, at Christmas, at Easter, at lunchtime, at the moment, at the same time, at that point. Expressions fixes : at first, at last, at once, at the latest.'
      },
      {
        title: 'ON — jours et dates',
        content: 'ON + jour de la semaine : on Monday, on Fridays (habitude). ON + date précise : on July 4th, on 15 March. ON + fête avec date précise : on Christmas Day, on New Year\'s Eve. ON + anniversaire : on my birthday. ON + jour + partie du jour : on Monday morning, on Sunday afternoon.'
      },
      {
        title: 'IN — périodes longues',
        content: 'IN + mois : in January, in November. IN + année : in 2023, in the 1990s. IN + saison : in summer, in the winter. IN + siècle/époque : in the 21st century, in the Middle Ages. IN + partie du jour : in the morning, in the afternoon, in the evening (mais AT night). IN + délai futur : I\'ll be back in 10 minutes. The project will end in three months.'
      },
      {
        title: 'FOR / SINCE / DURING',
        content: 'FOR + durée (combien de temps) : for 3 years, for two weeks, for a long time. Utilisé avec present perfect, past simple, futur. SINCE + point de départ précis : since 2019, since Monday, since the meeting. Toujours avec le present perfect. DURING + période nommée : during the meeting, during my stay, during the 1970s. ≠ For : "during" ne peut pas être suivi d\'une durée chiffrée : ❌ during 3 hours → ✅ for 3 hours.'
      },
      {
        title: 'BY / UNTIL (TILL) / FROM…TO',
        content: 'BY = au plus tard (limite) : Please submit the report by Friday. BY + futur = avant : I will have finished by 5 pm. UNTIL/TILL = jusqu\'à (continuité jusqu\'à un point) : I worked until midnight. The shop is open till 8. BY ≠ UNTIL : "By 5 pm" (fini avant 5h) vs "Until 5 pm" (continue jusqu\'à 5h). FROM…TO/UNTIL : The conference runs from Monday to Wednesday. Open from 9 to 6.'
      }
    ],
    examples: [
      { en: 'The deadline is at noon on Friday — please submit by then.', fr: '"At" (heure) + "on" (jour) + "by" (limite).' },
      { en: 'She has been working on this since January.', fr: '"Since" + point de départ → present perfect.' },
      { en: 'The project ran from March to September.', fr: '"From...to" pour une période délimitée.' },
      { en: 'We will have a decision by the end of the week.', fr: '"By" = au plus tard à ce moment.' }
    ],
    pitfalls: [
      '"Since" exige le present perfect ou past perfect : ❌ "I work here since 2019" → ✅ "I have worked here since 2019".',
      '"During 3 hours" est incorrect → ✅ "for 3 hours". "During" précède un événement/période nommée.',
      '"By" (avant) ≠ "until" (jusqu\'à) : "Finish by Friday" (avant vendredi) ≠ "Work until Friday" (jusqu\'à vendredi inclus).'
    ]
  },

  {
    id: 'prepositions-place',
    category: 'prepositions',
    tier: 1,
    label: 'Prépositions de lieu',
    summary: 'In / On / At + prépositions de position, direction et expressions fixes.',
    rules: [
      {
        title: 'IN — espace fermé, volume',
        content: 'IN + espace délimité, volume, contenant : in the box, in the room, in my pocket, in a bottle. IN + lieux géographiques larges : in Paris, in France, in the north, in the mountains, in the street (UK). IN + groupes/organisations : She works in marketing. He is in the finance team. IN + médias/livres : I read it in the newspaper. It\'s in the report.'
      },
      {
        title: 'ON — surface, alignement linéaire',
        content: 'ON + surface (contact) : on the table, on the wall, on the floor, on a shelf. ON + étages : on the third floor, on the ground floor. ON + côtés : on the left, on the right. ON + transport (avec siège) : on the bus, on the train, on the plane, on the ship. ON + médias : on TV, on the radio, on the phone, on the internet. ON + rue (US) : on Fifth Avenue.'
      },
      {
        title: 'AT — point précis, adresse',
        content: 'AT + adresse complète : at 10 Downing Street, at this address. AT + lieux fonctionnels (fonction, pas bâtiment) : at school (pour étudier), at work, at home, at the office, at the station, at the airport. AT + événements : at a conference, at a party, at a concert. AT + position : at the top, at the bottom, at the end of the corridor.'
      },
      {
        title: 'Prépositions de position',
        content: 'Above/over = au-dessus de (over = contact possible ou traversée). Below/under = en dessous de (under = contact possible, below = plus général). Next to/beside = à côté de. Behind = derrière. In front of = devant. Between = entre (deux éléments). Among/amongst = parmi (trois ou plus). Opposite = en face de. Near/close to = près de.'
      },
      {
        title: 'Prépositions de mouvement (direction)',
        content: 'To = vers (destination) : go to work, travel to London. Into = vers l\'intérieur (mouvement entrant) : walk into the room. Out of = vers l\'extérieur : walk out of the building. Onto = sur (mouvement vers surface) : step onto the stage. From = depuis (point de départ) : fly from Paris. Through = à travers : drive through the tunnel. Along = le long de : walk along the river. Across = de l\'autre côté : walk across the bridge.'
      }
    ],
    examples: [
      { en: 'The files are in the drawer, on the left shelf in the archive room.', fr: 'IN (contenant) + ON (surface) + IN (espace).' },
      { en: 'She\'s at the airport — she just landed and is at baggage claim.', fr: '"At" pour un lieu fonctionnel.' },
      { en: 'The announcement was made on TV and published in the newspaper.', fr: '"On" pour médias audiovisuels / "in" pour print.' },
      { en: 'He walked into the boardroom and sat opposite the chairman.', fr: 'Mouvement (into) + position (opposite).' }
    ],
    pitfalls: [
      '"In the street" (UK) vs "on the street" (US) — les deux sont corrects selon le registre.',
      '"AT school / AT work / AT home" = fonction (pas le bâtiment). "The school" = le bâtiment : ❌ "at the home" → ✅ "at home".',
      '"On a bus/train" (transport en commun) vs "in a car/taxi" (véhicule privé). Get in/into a car ; get on/onto a bus.'
    ]
  },

  // ══════════════════════════════════════════════
  //  STRUCTURES VERBALES
  // ══════════════════════════════════════════════
  {
    id: 'gerund-infinitive',
    category: 'verbal',
    tier: 2,
    label: 'Gerund vs Infinitive',
    summary: 'Quand utiliser -ing ou to + base verbale, y compris les verbes à double sens.',
    rules: [
      {
        title: 'Verbes + gérondif (-ing) uniquement',
        content: 'Enjoy, avoid, suggest, mind, risk, deny, consider, finish, keep, miss, practise, involve, delay, postpone, recommend, resent, resist, appreciate, can\'t help, can\'t stand, give up, look forward to, object to, be used to, succeed in, insist on, feel like, it\'s no use, it\'s worth. Ex : She denied stealing the documents. I look forward to hearing from you. They suggested postponing the meeting.'
      },
      {
        title: 'Verbes + infinitif (to + base) uniquement',
        content: 'Want, need, decide, hope, plan, refuse, manage, fail, agree, promise, offer, seem, appear, tend, expect, claim, afford, aim, arrange, choose, dare, deserve, determine, intend, learn, prepare, pretend, struggle, swear, threaten, wish, would like. Ex : He refused to sign the contract. She managed to finish on time. We can\'t afford to miss this opportunity.'
      },
      {
        title: 'Verbes à double sens — sens DIFFÉRENTS',
        content: 'REMEMBER : + ing = se souvenir d\'une action passée (I remember locking the door). + to = ne pas oublier de faire qqch (Remember to lock the door!). FORGET : + ing = se souvenir (avec regret) d\'une action passée (I\'ll never forget meeting her). + to = oublier de faire (I forgot to call him). STOP : + ing = cesser une activité (Stop talking!). + to = s\'arrêter pour faire qqch (He stopped to check his phone). TRY : + ing = expérimenter une méthode (Try adding more salt). + to = faire un effort (I tried to solve the problem). REGRET : + ing = regretter ce qu\'on a fait (I regret saying that). + to = regretter d\'annoncer (We regret to inform you...).'
      },
      {
        title: 'Après les prépositions — toujours gérondif',
        content: 'Après TOUTE préposition, utiliser le gérondif. after doing, before leaving, by calling, without asking, instead of working, in addition to presenting, look forward to meeting. ⚠️ "TO" peut être une préposition : used to doing (habitué à), look forward to hearing (attendre avec impatience), object to being (s\'opposer à). Ici "to" ≠ marqueur d\'infinitif → gérondif obligatoire.'
      },
      {
        title: 'Make, let, have, get — structures causatives',
        content: 'MAKE + objet + BASE (force) : He made me rewrite the report. MAKE au passif + to : I was made to rewrite the report. LET + objet + BASE (permission) : The manager let her leave early. HAVE + objet + V3 (service fait par qqn) : We had the office cleaned. We had the report translated. GET + objet + V3 (résultat) : Get the contract signed. I got my car fixed. GET + objet + to-inf (persuasion) : She got him to sign the agreement.'
      }
    ],
    examples: [
      { en: 'I remember sending the invoice, but I forgot to attach the receipt.', fr: 'Remember + ing (passé) vs forget + to (futur/intention).' },
      { en: 'The company decided to outsource, thereby avoiding the cost of hiring.', fr: '"Decided to" + "avoiding" (après préposition).' },
      { en: 'She had her presentation reviewed by a coach before the board meeting.', fr: 'Causatif "have sth done".' },
      { en: 'It is worth taking the time to understand the market before launching.', fr: '"Worth" + gérondif.' }
    ],
    pitfalls: [
      '"Look forward to meeting" (pas "to meet") — "to" est ici une préposition.',
      '"Stop to smoke" (s\'arrêter pour fumer) ≠ "stop smoking" (arrêter de fumer). Erreur fréquente.',
      'Au passif, "make" prend "to" : He made me do it → I was made to do it.'
    ]
  },

  {
    id: 'reported-speech',
    category: 'verbal',
    tier: 3,
    label: 'Reported Speech',
    summary: 'Discours indirect : backshift, transformations de pronoms, questions et impératifs.',
    rules: [
      {
        title: 'Backshift — concordance des temps',
        content: 'Quand le verbe introducteur est au passé (said, told, asked), les temps reculent dans le temps. Present simple → Past simple : "I work here" → He said he worked there. Present continuous → Past continuous : "I am working" → She said she was working. Past simple → Past perfect : "I left" → He said he had left. Present perfect → Past perfect : "I have finished" → She said she had finished. Will → Would. Can → Could. May → Might. Must → Had to / Must (obligation immuable). Shall → Would. "Would, could, might, should, ought to" restent inchangés.'
      },
      {
        title: 'Pas de backshift — exceptions',
        content: 'On ne fait PAS de backshift si : ① La situation est toujours vraie : He said the Earth orbits the Sun. ② Le verbe introducteur est au présent/futur : She says she is coming. ③ On cite en temps réel : He just told me he is arriving. ④ Avec "that" explicite et clarté contextuelle : The manager explained that the system works differently.'
      },
      {
        title: 'Transformations de pronoms et expressions de temps',
        content: 'Pronoms : I → he/she. We → they. My → his/her. Our → their. You → I/he/she (selon contexte). Expressions de temps/lieu : now → then. today → that day. yesterday → the day before / the previous day. tomorrow → the next day / the following day. last week → the previous week. next year → the following year. here → there. this → that. these → those. ago → before / previously.'
      },
      {
        title: 'Questions indirectes',
        content: 'ORDRE SUJET-VERBE (pas d\'inversion comme dans la question directe). WH- questions : He asked me where I worked. (pas : where did I work) She wondered what the project involved. YES/NO questions : introduce with "if" or "whether" : They asked if we had any questions. I wanted to know whether she had received the email. ⚠️ Pas d\'auxiliaire "do/does/did" dans les questions indirectes : ❌ He asked me where did I live → ✅ where I lived.'
      },
      {
        title: 'Impératifs, verbes introducteurs variés',
        content: 'IMPÉRATIFS rapportés → tell/ask/order + objet + to-infinitive : "Come here!" → He told me to come. "Don\'t touch it!" → She warned me not to touch it. AUTRES VERBES INTRODUCTEURS plus précis : suggest + -ing / that clause : She suggested (that) we postpone the meeting. advise/recommend + -ing ou + objet + to-inf : He advised postponing / advised us to postpone. offer + to-inf : She offered to help. promise + to-inf : He promised to call. admit + -ing : He admitted making an error. deny + -ing : She denied leaking the information.'
      }
    ],
    examples: [
      { en: '"We will launch next quarter." → The CEO announced that they would launch the following quarter.', fr: 'Will→would + today/next→following.' },
      { en: '"Where did you go to university?" → She asked him where he had gone to university.', fr: 'Question indirecte : pas d\'inversion + backshift.' },
      { en: '"Don\'t share this report." → He instructed us not to share the report.', fr: 'Impératif négatif rapporté.' },
      { en: '"I have already signed the contract." → She said she had already signed the contract.', fr: 'Present perfect → Past perfect.' }
    ],
    pitfalls: [
      'Questions indirectes : pas d\'inversion ni d\'auxiliaire do/did : ❌ "He asked what did I think" → ✅ "He asked what I thought".',
      '"Say" vs "tell" : say (+ proposition sans objet) / tell (+ objet indirect) : He said he was tired. / He told me he was tired. ❌ "He said me".',
      'Pas toujours de backshift pour les vérités permanentes : "She said water boils at 100°C" (pas de backshift).'
    ]
  },

  {
    id: 'question-tags',
    category: 'verbal',
    tier: 2,
    label: 'Question Tags',
    summary: 'Construire et utiliser les question tags, y compris les cas irréguliers.',
    rules: [
      {
        title: 'Principe général',
        content: 'Un question tag est une mini-question ajoutée en fin de phrase pour demander confirmation ou chercher l\'accord. RÈGLE : si la phrase principale est AFFIRMATIVE → tag NÉGATIF. Si la phrase est NÉGATIVE → tag AFFIRMATIF. Le tag reprend L\'AUXILIAIRE de la phrase principale. She is ready, isn\'t she? / He isn\'t coming, is he? They have finished, haven\'t they? You will attend, won\'t you?'
      },
      {
        title: 'Présent et passé simples (do/does/did)',
        content: 'Sans auxiliaire dans la phrase principale, on utilise do/does/did. She works here, doesn\'t she? They finished on time, didn\'t they? You speak French, don\'t you? He called you, didn\'t he? ⚠️ 3ème personne singulier présent → "doesn\'t" : She likes it, doesn\'t she? (pas "don\'t")'
      },
      {
        title: 'Cas particuliers',
        content: '"I am" → tag : aren\'t I? (irrégulier) : I am right, aren\'t I? "Let\'s" → shall we? : Let\'s start, shall we? Impératif positif → will you? ou would you? (invitation/ordre poli) : Open the window, will you? Impératif négatif → will you? : Don\'t be late, will you? "Have" (verbe plein, possession) → use do/does : You have a car, don\'t you? "Have" (auxiliaire) → use have : She has been promoted, hasn\'t she?'
      },
      {
        title: 'Pronoms dans les tags',
        content: 'Le pronom du tag doit correspondre au sujet. Nobody/No one → they : Nobody called, did they? Somebody/Someone → they : Someone left a message, didn\'t they? Everything → it : Everything is ready, isn\'t it? Nothing → it : Nothing is wrong, is it? "There is/are" → there : There is a problem, isn\'t there?'
      },
      {
        title: 'Intonation et sens',
        content: 'L\'intonation change le sens du tag : INTONATION DESCENDANTE (↘) : on est quasi-certain et on cherche confirmation : It\'s a great deal, isn\'t it ↘ (je suis sûr, demande d\'accord). INTONATION MONTANTE (↗) : on est incertain et on pose une vraie question : You\'ve seen the report, haven\'t you ↗ (je ne suis pas sûr).'
      }
    ],
    examples: [
      { en: 'The merger was announced yesterday, wasn\'t it?', fr: 'Was → wasn\'t + pronom it.' },
      { en: 'Nobody has raised any objections, have they?', fr: '"Nobody" → pronom "they" au tag affirmatif.' },
      { en: 'Let\'s review the figures, shall we?', fr: '"Let\'s" → tag "shall we".' },
      { en: 'I am the only one who noticed, aren\'t I?', fr: '"I am" → tag irrégulier "aren\'t I".' }
    ],
    pitfalls: [
      '"I am late, aren\'t I?" est correct (pas "amn\'t I" — forme non standard).',
      '"She has a car, doesn\'t she?" ("have" verbe plein) vs "She has arrived, hasn\'t she?" ("have" auxiliaire).',
      '"Needn\'t" → tag affirmatif "need they?" : He needn\'t attend, need he?'
    ]
  },

  {
    id: 'modals-deduction',
    category: 'verbal',
    tier: 3,
    label: 'Modals — Déduction, Probabilité & Regret',
    summary: 'Must / Can\'t / Might / Should + have + V3 pour analyser des situations passées et présentes.',
    rules: [
      {
        title: 'Déduction présente — certitude et probabilité',
        content: 'MUST BE : déduction logique forte (quasi-certitude positive) : He must be tired — he has been working for 12 hours. The light is on; she must be home. CAN\'T BE : impossibilité logique (quasi-certitude négative) : He can\'t be the thief — he was with me all evening. She can\'t be over 30; she looks so young. MIGHT/MAY/COULD BE : possibilité ou incertitude : He might be in a meeting. It could be a technical issue. There may be a delay.'
      },
      {
        title: 'Déduction passée — modal + have + V3',
        content: 'MUST HAVE + V3 : certitude positive sur le passé : She must have forgotten the meeting — she\'s never late otherwise. CAN\'T HAVE + V3 : impossibilité logique dans le passé : He can\'t have sent the email; he was travelling all day. MIGHT/MAY/COULD HAVE + V3 : possibilité passée : They might have taken the wrong file. She could have left already.'
      },
      {
        title: 'Obligation passée non remplie — Should / Ought to',
        content: 'SHOULD HAVE + V3 : regret, conseil rétroactif, reproche : You should have arrived earlier. I should have checked the data. She shouldn\'t have said that. OUGHT TO HAVE + V3 : même sens, légèrement plus formel : He ought to have informed us. NEEDN\'T HAVE + V3 : action effectuée mais inutile : I needn\'t have prepared so many slides — the meeting was cancelled. (J\'ai préparé, mais c\'était inutile.) ≠ DIDN\'T NEED TO : la personne ne savait pas que c\'était inutile et n\'a pas agi : I didn\'t need to prepare slides, so I didn\'t.'
      },
      {
        title: 'Would rather / Had better',
        content: 'WOULD RATHER + base verbale : préférence personnelle : I would rather work from home. I\'d rather not attend the launch party. WOULD RATHER + sujet + prétérit : préférence concernant les actions d\'autrui (présent/futur) : I\'d rather you didn\'t smoke in here. She\'d rather we postponed the meeting. HAD BETTER + base verbale : conseil pressant (conséquence négative implicite) : You had better submit this before 5 pm or you\'ll miss the deadline. We\'d better not tell him — he\'ll overreact.'
      },
      {
        title: 'Used to / Be used to / Get used to',
        content: 'USED TO + base verbale : habitude passée révolue (état ou action) : I used to work night shifts. She used to be very shy. (Plus le cas maintenant.) BE USED TO + gérondif : être habitué à (état actuel) : He is used to dealing with difficult clients. I\'m not used to working remotely. GET USED TO + gérondif : s\'habituer à (processus) : It takes time to get used to the new software. She\'s getting used to commuting.'
      }
    ],
    examples: [
      { en: 'She must have left already — her coat is gone.', fr: 'Déduction passée basée sur une preuve (certitude).' },
      { en: 'He can\'t have written this report; he joined the team yesterday.', fr: 'Impossibilité logique passée.' },
      { en: 'I should have prepared more questions for the interview.', fr: 'Regret — conseil rétroactif.' },
      { en: 'You\'d better send the invoice today, or we\'ll lose the contract.', fr: '"Had better" — conseil pressant avec conséquence.' }
    ],
    pitfalls: [
      'Après un modal : TOUJOURS base verbale sans "to" ni conjugaison : ❌ "He must has left" → ✅ "He must have left".',
      '"Needn\'t have done" (fait mais inutile) ≠ "didn\'t need to do" (pas fait car inutile).',
      '"Used to swim" (habitude passée) ≠ "be used to swimming" (habitué à) ≠ "get used to swimming" (s\'habituer à).'
    ]
  },

  {
    id: 'phrasal-verbs',
    category: 'verbal',
    tier: 2,
    label: 'Phrasal Verbs (Business)',
    summary: 'Les phrasal verbs essentiels en contexte professionnel — séparables et inséparables.',
    rules: [
      {
        title: 'Séparables vs inséparables',
        content: 'SÉPARABLES : l\'objet peut se placer entre le verbe et la particule, ou après. Si l\'objet est un pronom, il SE PLACE obligatoirement entre les deux : call off the meeting / call the meeting off ✅. call it off ✅ / ❌ call off it. INSÉPARABLES : le verbe et la particule ne peuvent jamais être séparés : look into the issue ✅ / ❌ look the issue into. deal with the problem ✅ / ❌ deal the problem with.'
      },
      {
        title: 'Phrasal verbs — réunions & projets',
        content: 'Bring up = soulever (un sujet) : She brought up the budget issue. Bring forward = avancer (une date) : Can we bring the meeting forward? Put off / Postpone = reporter : We had to put off the launch. Put back = reporter à plus tard : The deadline has been put back to next month. Call off / Cancel : The conference was called off. Set up = organiser, créer : We need to set up a meeting. Draw up = rédiger (un plan, contrat) : Draw up a proposal.'
      },
      {
        title: 'Phrasal verbs — gestion & ressources humaines',
        content: 'Take on = embaucher / prendre en charge : We are taking on new staff. / She took on extra responsibilities. Let go (of) = licencier / lâcher : Three employees were let go. Lay off = licencier (économique) : 50 workers were laid off. Hand in / Submit = remettre : Please hand in your report by Friday. Fill in / out = remplir (formulaire) : Fill in this form. Take over = reprendre le contrôle de / racheter : The company was taken over by a competitor. Step down = démissionner : The CEO stepped down.'
      },
      {
        title: 'Phrasal verbs — communication & négociation',
        content: 'Get through (to) = joindre au téléphone : I can\'t get through to the client. Follow up (on) = faire un suivi : I\'ll follow up on that email. Come up with = proposer, trouver : She came up with a great solution. Look into = examiner, enquêter : We are looking into the complaint. Back up = soutenir, sauvegarder : Do you have data to back up your claim? Run through = passer en revue : Let me run through the key points. Go over = revoir, examiner : We need to go over the figures again.'
      },
      {
        title: 'Phrasal verbs — finance & croissance',
        content: 'Cut back on = réduire : We need to cut back on expenses. Come in under budget = rester sous le budget : The project came in under budget. Write off = passer en pertes, amortir : The loss was written off. Add up = s\'additionner, s\'agencer : The figures don\'t add up. Pick up = se redresser, s\'améliorer : Sales are picking up. Fall through = échouer, tomber à l\'eau : The deal fell through. Break even = rentrer dans ses frais : We expect to break even by Q3.'
      }
    ],
    examples: [
      { en: 'She brought up the issue of overtime pay, and we decided to look into it.', fr: '"Bring up" (soulever) + "look into" (examiner) — séparable puis inséparable.' },
      { en: 'The merger fell through because they couldn\'t come up with a fair offer.', fr: '"Fall through" (échouer) + "come up with" (proposer).' },
      { en: 'We need to cut back on travel costs and hand in all receipts by Friday.', fr: '"Cut back on" (réduire) + "hand in" (remettre).' },
      { en: 'Call it off — the venue has cancelled on us.', fr: 'Pronom obligatoirement entre les deux éléments.' }
    ],
    pitfalls: [
      'Pronom entre verbe et particule : ❌ "call off it" → ✅ "call it off".',
      '"Look forward to" + gérondif : "to" est une PRÉPOSITION ici : ❌ "look forward to meet" → ✅ "look forward to meeting".',
      '"Make up" peut signifier inventer (make up a story), compenser (make up for lost time) ou se réconcilier (they made up) — le contexte est essentiel.'
    ]
  },

  // ══════════════════════════════════════════════
  //  CONNECTEURS & SYNTAXE
  // ══════════════════════════════════════════════
  {
    id: 'linking-words',
    category: 'connectors',
    tier: 2,
    label: 'Linking Words & Connectors',
    summary: 'Connecteurs d\'addition, contraste, cause, conséquence, condition et but.',
    rules: [
      {
        title: 'Addition',
        content: 'COORDONNANTS : and, both…and, not only…but also. ADVERBIAUX (+ virgule ou point-virgule) : moreover, furthermore, in addition, besides, on top of that, what is more. PRÉPOSITIONS : in addition to + nom/gérondif. Registre formel (TOEIC/business) : moreover, furthermore, additionally. Ex : The project was completed on time; moreover, it came in under budget. In addition to the salary, benefits include health insurance.'
      },
      {
        title: 'Contraste et concession',
        content: 'COORDONNANTS : but, yet. SUBORDONNANTS (+ proposition) : although, even though, while, whereas, even if, much as. PRÉPOSITIONS (+ nom/gérondif) : despite, in spite of, notwithstanding. ADVERBIAUX : however, nevertheless, nonetheless, on the other hand, conversely, albeit. ⚠️ Structures : "Despite the cost, it was approved." / "Although it was costly, it was approved." ❌ "Despite it was costly" → "Despite the fact that it was costly".'
      },
      {
        title: 'Cause et explication',
        content: 'SUBORDONNANTS : because (cause directe), since/as (cause connue, moins emphatique), given that, seeing that. PRÉPOSITIONS : because of, due to, owing to, as a result of, on account of (+ nom). ADVERBIAUX : therefore, consequently, as a result, accordingly, hence, thus (conséquence). Ex : Due to the delay, we lost the contract. The project succeeded because the team was well-coordinated. The deadline was missed; consequently, a penalty was applied.'
      },
      {
        title: 'Condition',
        content: 'If, unless (= if not), provided (that), providing (that), as long as, on condition that, given that, should (inversion formelle), in case (précaution). "In case" ≠ "if" : "I\'ll bring an umbrella in case it rains" (précaution préventive) ≠ "If it rains, I\'ll stay home" (condition). "Unless" = if not : Unless we act now, we will miss the opportunity (= If we don\'t act now).'
      },
      {
        title: 'But, résultat et autres connecteurs utiles',
        content: 'BUT : "lest" (de peur que, formel), "so that / in order that" (but/intention). OPPOSITION PARALLÈLE : whereas, while (tandis que). SÉQUENCE : firstly, secondly, then, next, finally, subsequently, afterwards. ILLUSTRATION : for example, for instance, such as, namely, that is (i.e.). RÉSUMÉ : in conclusion, to sum up, in short, overall, all in all. Éviter les répétitions : "furthermore / additionally / what is more" plutôt que "also, also, also".'
      }
    ],
    examples: [
      { en: 'Despite the economic downturn, the company managed to increase its market share.', fr: '"Despite" + groupe nominal.' },
      { en: 'The proposal was rejected; however, several elements were retained.', fr: '"However" = connecteur adverbial de contraste (virgule + point-virgule).' },
      { en: 'Owing to unforeseen delays, the launch has been postponed until further notice.', fr: '"Owing to" (formel) + groupe nominal.' },
      { en: 'Unless both parties agree to the terms, the contract will not be signed.', fr: '"Unless" = "if not".' }
    ],
    pitfalls: [
      '❌ "Despite he was tired" → ✅ "Despite being tired" ou "Despite the fact that he was tired" — "despite" ne précède pas directement un sujet+verbe.',
      '❌ "Although... but" — ne pas combiner les deux : "Although it was expensive, we bought it" (pas "but" en plus).',
      '"However" est un adverbe, pas une conjonction : séparer les propositions par un point-virgule ou un point : "It failed; however, we learned a lot." ❌ "It failed, however we learned a lot."'
    ]
  },

  {
    id: 'word-order',
    category: 'connectors',
    tier: 3,
    label: 'Word Order, Inversion & Subjunctive',
    summary: 'Structure canonique, inversion emphatique, conditionnels inversés et subjonctif.',
    rules: [
      {
        title: 'Structure de base SVOA',
        content: 'L\'ordre canonique de l\'anglais est Sujet + Verbe + Objet + Adverbe/Circonstant. She (S) submitted (V) the report (O) on Monday (A). Les adverbes de fréquence (always, never, often, usually, sometimes) se placent : ① AVANT le verbe principal : She always arrives on time. ② APRÈS be : He is never late. ③ ENTRE l\'auxiliaire et le verbe principal : I have never seen this before. Les adverbes de manière, lieu, temps : ordre préféré = manière → lieu → temps : She worked efficiently at the office yesterday.'
      },
      {
        title: 'Inversion après adverbes négatifs / restrictifs',
        content: 'Quand ces adverbes ou expressions sont placés EN DÉBUT DE PHRASE pour l\'emphase, l\'ordre sujet-auxiliaire s\'inverse (comme dans une question). Never, rarely, seldom, hardly, scarcely, barely, little (dans le sens "guère"), no sooner, not only, not until, at no time, under no circumstances, in no way, on no account. Structure : adverbe + auxiliaire + sujet + verbe. Never have I seen such dedication. Rarely does he miss a deadline. Not until the results were confirmed did they celebrate. Under no circumstances should you share this information.'
      },
      {
        title: 'Inversion dans les conditionnels formels',
        content: 'En anglais formel et écrit, on peut omettre "if" et inverser le sujet et l\'auxiliaire. Conditionnel 1 : "If you should need help" → Should you need help, please contact us. Conditionnel 2 : "If it were not for his support" → Were it not for his support, we would have failed. Conditionnel 3 : "If I had known" → Had I known about the delay, I would have warned you. Ces structures sont très fréquentes dans les e-mails professionnels, rapports et le TOEIC.'
      },
      {
        title: 'Structures corrélatives (No sooner… than / Hardly… when)',
        content: 'No sooner had + sujet + V3 + than : No sooner had she arrived than the meeting started. Hardly/Scarcely/Barely had + sujet + V3 + when : Hardly had the project launched when the first problem arose. Scarcely had we signed the contract when the deal changed. ⚠️ Inversion obligatoire dans la 1ère proposition.'
      },
      {
        title: 'Subjonctif (Subjunctive mood)',
        content: 'Le subjonctif utilise la BASE VERBALE (forme infinitive sans "to") à toutes les personnes, y compris la 3ème singulier. AFTER VERBS of recommendation/necessity : suggest, recommend, propose, insist, demand, require, ask, order, command, urge. It is essential/important/vital/necessary/advisable + that... The committee recommended that the CEO resign. It is essential that every employee be aware of the rules. I suggest that she take a different approach. ⚠️ La forme négative : It is vital that he not share this (sans "doesn\'t").'
      }
    ],
    examples: [
      { en: 'Not only did he lose the contract, but he also damaged the company\'s reputation.', fr: '"Not only" en tête → inversion obligatoire.' },
      { en: 'Had I received the brief earlier, I could have prepared a stronger proposal.', fr: 'Inversion du conditionnel 3 (= If I had received).' },
      { en: 'The board insisted that the report be submitted before the shareholders\' meeting.', fr: 'Subjonctif après "insist that" — "be" à toutes les personnes.' },
      { en: 'Scarcely had the quarterly results been published when the stock price dropped.', fr: '"Scarcely… when" avec inversion.' }
    ],
    pitfalls: [
      '❌ "Not only he lost the contract" → ✅ "Not only did he lose" — inversion auxiliaire + sujet obligatoire.',
      'Subjonctif : ❌ "It is essential that he is/was present" → ✅ "that he be present" (base verbale).',
      'Inversion conditionnelle : ❌ "Would I have known" → ✅ "Had I known" (past perfect, pas would).'
    ]
  },

  // ══════════════════════════════════════════════
  //  NOMS & DÉTERMINANTS
  // ══════════════════════════════════════════════
  {
    id: 'plural-nouns',
    category: 'nouns',
    tier: 1,
    label: 'Plural Nouns',
    summary: 'Pluriels réguliers, irréguliers, invariables et noms toujours pluriels ou singuliers.',
    rules: [
      {
        title: 'Pluriels réguliers',
        content: 'Règle générale : + s (books, reports, ideas). Mots en -ch, -sh, -x, -z, -s : + es (watches, dishes, boxes, buzzes, buses). Mots en consonne + y : y → ies (company→companies, strategy→strategies, factory→factories). Voyelle + y : + s uniquement (days, boys, keys, plays). Mots en -f/-fe : → ves (leaf→leaves, knife→knives, half→halves, shelf→shelves). Exceptions : beliefs, roofs, cliffs, chiefs (+ s seulement).'
      },
      {
        title: 'Pluriels irréguliers à mémoriser',
        content: 'Changement de voyelle : man→men, woman→women, foot→feet, tooth→teeth, goose→geese, mouse→mice, louse→lice. Terminaison -en : child→children, ox→oxen. Forme identique : sheep, fish, deer, species, series, means, aircraft, spacecraft. Mots d\'origine latine/grecque : criterion→criteria, phenomenon→phenomena, datum→data, medium→media, bacterium→bacteria, analysis→analyses, basis→bases, hypothesis→hypotheses, index→indices/indexes.'
      },
      {
        title: 'Noms toujours pluriels (sans singulier)',
        content: 'Vêtements/objets en deux parties : trousers, jeans, shorts, tights, scissors, glasses (lunettes), tweezers, pliers, headphones. Autres : belongings, surroundings, premises (locaux), earnings, savings, goods, stairs, remains, outskirts. Avec "a pair of" pour les quantifier : a pair of scissors / two pairs of trousers.'
      },
      {
        title: 'Noms indénombrables (toujours singuliers)',
        content: 'JAMAIS de pluriel, JAMAIS d\'article "a/an" : advice, information, news, knowledge, furniture, luggage, baggage, equipment, machinery, traffic, weather, research, evidence, data (souvent traité comme sing. en usage moderne), progress, work (travail général), damage, harm. Avec "a piece of / an item of / a bit of" pour singulariser : a piece of advice, an item of furniture. ⚠️ "The news is good" (singulier). "The staff are..." ou "The staff is..." (collectif, les deux possibles).'
      },
      {
        title: 'Noms collectifs',
        content: 'En anglais américain, toujours singulier. En anglais britannique, singulier ou pluriel selon qu\'on pense à l\'entité (sing.) ou aux personnes (plur.). Noms concernés : team, staff, committee, government, board, company, family, police, jury, audience, crowd. Ex (UK) : The team are working hard. / The team is well-organised. (US) : The team is working hard. ⚠️ "Police" en anglais est TOUJOURS pluriel : The police are investigating (jamais "polices").'
      }
    ],
    examples: [
      { en: 'The criteria for selection have been revised by the committee.', fr: '"Criteria" (pluriel de criterion) + verbe pluriel.' },
      { en: 'Could you give me some advice? I need a piece of information.', fr: 'Indénombrables : "some advice" / "a piece of information" (pas de pluriel).' },
      { en: 'She packed two pairs of trousers and some shorts for the trip.', fr: '"A pair of trousers" pour les pluralia tantum.' },
      { en: 'The media are divided on the issue.', fr: '"Media" = pluriel de "medium" → verbe pluriel.' }
    ],
    pitfalls: [
      '❌ "informations, advices, furnitures, researches" — ces formes n\'existent pas en anglais.',
      '❌ "The police is investigating" → ✅ "The police are" (toujours pluriel).',
      '"Data" est le pluriel de "datum" : en usage académique → "Data are" ; en usage courant → "Data is" est accepté.'
    ]
  },

  {
    id: 'possessive-s',
    category: 'nouns',
    tier: 1,
    label: 'Possessive \'s & Of',
    summary: 'Exprimer la possession : \'s, s\', of, et le double possessif.',
    rules: [
      {
        title: 'Nom singulier + \'s',
        content: 'Pour tout nom singulier, on ajoute \'s : Tom\'s report. The client\'s signature. The company\'s strategy. The CEO\'s decision. Même pour les noms se terminant en -s : James\'s office (ou James\' — les deux sont acceptés). Dickens\'s novels / Dickens\' novels. En pratique, les deux formes sont correctes pour les noms se terminant en -s.'
      },
      {
        title: 'Nom pluriel régulier (finissant en -s) → apostrophe seule',
        content: 'Pour les pluriels qui se terminent en -s, on ajoute uniquement l\'apostrophe après le s : The employees\' contracts were reviewed. The clients\' expectations are high. The managers\' offices are on the top floor. ⚠️ boys\' (plusieurs garçons) ≠ boy\'s (un garçon).'
      },
      {
        title: 'Nom pluriel irrégulier (ne finissant pas en -s) → \'s',
        content: 'Les pluriels irréguliers qui ne se terminent pas en -s reprennent \'s : The children\'s toys. The men\'s locker room. The women\'s conference. The people\'s choice. Ces formes fonctionnent exactement comme un singulier.'
      },
      {
        title: 'Possessif avec "of" — pour les objets inanimés longs',
        content: 'Pour les groupes nominaux longs ou les objets inanimés, on préfère "of" : the roof of the building (pas "the building\'s roof" — moins naturel). The results of the survey. The aim of the project. However, le \'s reste possible et courant pour les organisations : The company\'s results. The government\'s policy. The bank\'s interest rates.'
      },
      {
        title: 'Double possessif (of + possessive pronoun)',
        content: 'Structure : a/an/this/some + nom + of + possessif pronom ou nom + \'s. A colleague of mine. A friend of Tom\'s. That report of hers. This idea of John\'s. Sens : parmi plusieurs collègues, c\'est un collègue qui m\'appartient au sens relationnel. ≠ My colleague (implique une seule personne). Expressions : "a friend of the family\'s" (litt.), "a favourite of the manager\'s".'
      }
    ],
    examples: [
      { en: 'The board\'s decision was influenced by the shareholders\' concerns.', fr: '"Board\'s" (singulier) + "shareholders\'" (pluriel régulier).' },
      { en: 'The children\'s education fund has been increased significantly.', fr: '"Children\'s" (pluriel irrégulier → \'s).' },
      { en: 'A former colleague of mine recommended this approach.', fr: 'Double possessif : "of mine".' },
      { en: 'The results of the annual survey have been published.', fr: '"Of" pour groupe nominal long/inanimé.' }
    ],
    pitfalls: [
      '❌ "The childrens\' toys" → ✅ "The children\'s toys" (pluriel irrégulier → \'s, pas s\').',
      '"It\'s" = it is/has. "Its" = possessif de "it". Ces deux formes sont très souvent confondues.',
      '❌ "a friend of me" → ✅ "a friend of mine" (double possessif : pronom possessif, pas objet).'
    ]
  }
];

const EXERCISES = [
  // ========== ARTICLES (20 Complex Exercises) ==========
  { id: 'gex-art-01', lessonId: 'articles-a-an-the', type: 'blank', tier: 2, prompt: 'She is studying _____ history of _____ United Kingdom.', answer: 'the / the', explanation: 'Spécifique ("histoire de") et pays composé ("UK").' },
  { id: 'gex-art-02', lessonId: 'articles-a-an-the', type: 'mcq', tier: 3, prompt: '_____ happiness is more important than _____ money.', options: ['The / the', 'A / —', '— / —', '— / the'], answer: '— / —', explanation: 'Concepts abstraits généraux : pas d\'article.' },
  { id: 'gex-art-03', lessonId: 'articles-a-an-the', type: 'error', tier: 2, prompt: 'She is an unique opportunity for the team.', errorWord: 'an', answer: 'a', explanation: '"Unique" commence par le son /j/ (consonne) — on dit "a unique", pas "an unique".' },
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
  { id: 'gex-adv-017', lessonId: 'modals-deduction', type: 'mcq', tier: 3, prompt: 'You _____ have seen him; he was in London at the time.', options: ["can't", "mustn't", "shouldn't", "wouldn't"], answer: "can't", explanation: "'Can't have + V3' exprime une impossibilité logique dans le passé." },
  { id: 'gex-adv-018', lessonId: 'modals-deduction', type: 'blank', tier: 3, prompt: 'I _____ have studied harder for the exam (regret).', answer: 'should', explanation: "'Should have + V3' exprime un regret ou un conseil passé non suivi." },

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
  { id: 'gex-adv-049', lessonId: 'articles-a-an-the', type: 'error', tier: 2, prompt: 'She applied for a internship at the company.', errorWord: 'a', answer: 'an', explanation: "On utilise 'an' devant les mots qui commencent par un son vocalique. 'Internship' commence par le son /ɪ/." },
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
  { id: 'gex-adv-118', lessonId: 'modals-deduction', type: 'mcq', tier: 3, prompt: 'The document is missing. Someone _____ have taken it by mistake.', options: ['must', 'can', 'should', 'would'], answer: 'must', explanation: "Déduction logique forte au passé : 'must have + V3'." },
  { id: 'gex-adv-119', lessonId: 'modals-deduction', type: 'mcq', tier: 3, prompt: 'You _____ have told me you were coming; I would have prepared dinner.', options: ['might', 'must', 'can', 'will'], answer: 'might', explanation: "'Might have + V3' exprime un reproche ou une possibilité passée non réalisée." },

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
  { id: 'gex-adv-150', lessonId: 'personal-pronouns', type: 'mcq', tier: 3, prompt: 'Between you and _____, this deal is risky.', options: ['me', 'I', 'my', 'mine'], answer: 'me', explanation: "Après une préposition (between), on utilise le pronom objet 'me', jamais le sujet 'I'." },
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
  { id: 'gex-adv-316', lessonId: 'much-many', type: 'error', tier: 3, prompt: "There were much complaints from the staff.", errorWord: 'much', answer: 'many', explanation: "On utilise 'many' avec les noms dénombrables pluriels. 'Complaints' est dénombrable, donc 'many complaints'." },

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
  { id: 'gex-adv-367', lessonId: 'reported-speech', type: 'error', tier: 3, prompt: "She said me that she would be late for the meeting.", errorWord: 'said', answer: 'told', explanation: "Avec un destinataire, on utilise 'tell' + objet (told me). 'Say' ne prend pas d'objet personne direct." },
  { id: 'gex-adv-368', lessonId: 'reported-speech', type: 'reorder', tier: 3, prompt: "Order :", tokens: ['The', 'was', 'technician', 'hired', 'the', 'machine', 'repair', 'to'], answer: 'The technician was hired to repair the machine', explanation: "Structure passive avec but." },
  { id: 'gex-adv-369', lessonId: 'linking-words', type: 'mcq', tier: 3, prompt: "_____ the high demand, the product was sold out.", options: ['Due to', 'Because', 'Since', 'Moreover'], answer: 'Due to', explanation: "Cause nominale." },
  { id: 'gex-adv-370', lessonId: 'reported-speech', type: 'blank', tier: 3, prompt: "The file _____ (delete) by mistake yesterday.", answer: 'was deleted', explanation: "Passé simple passif." },
  { id: 'gex-adv-371', lessonId: 'reported-speech', type: 'mcq', tier: 3, prompt: "A new strategy _____ by the committee.", options: ['is being developed', 'is developing', 'develops', 'was develop'], answer: 'is being developed', explanation: "Action en cours au passif." },
  { id: 'gex-adv-372', lessonId: 'reported-speech', type: 'transform', tier: 3, prompt: "Active: They are repairing the roof. -> Passive: The roof _____.", answer: 'is being repaired', explanation: "Passif au présent continu." },
  { id: 'gex-adv-373', lessonId: 'reported-speech', type: 'error', tier: 3, prompt: "He told that the project was completed on time.", errorWord: 'told', answer: 'said', explanation: "'Tell' exige un objet (told someone). Sans destinataire explicite, on utilise 'say' : 'He said that...'" },
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
  { id: 'gex-adv-429', lessonId: 'phrasal-verbs', type: 'error', tier: 3, prompt: "I need to take care for my little brother today.", errorWord: 'for', answer: 'of', explanation: "Le phrasal verb est 'take care of' (s'occuper de). 'For' n'est pas la bonne préposition ici." },
  { id: 'gex-adv-430', lessonId: 'phrasal-verbs', type: 'mcq', tier: 2, prompt: "She _____ her father; they look identical.", options: ['takes after', 'takes on', 'takes in', 'takes off'], answer: 'takes after', explanation: "'Take after' signifie ressembler à un parent." },
  { id: 'gex-adv-431', lessonId: 'phrasal-verbs', type: 'blank', tier: 3, prompt: "We have to _____ (tolerate) his behavior.", answer: 'put up with', explanation: "'Put up with' signifie supporter ou tolérer." },
  { id: 'gex-adv-432', lessonId: 'phrasal-verbs', type: 'mcq', tier: 2, prompt: "The car _____ on the highway.", options: ['broke down', 'broke up', 'broke in', 'broke off'], answer: 'broke down', explanation: "'Break down' signifie tomber en panne." },
  { id: 'gex-adv-433', lessonId: 'phrasal-verbs', type: 'reorder', tier: 3, prompt: "Phrasal Verb :", tokens: ['back', 'on', 'cut', 'we', 'must', 'spending'], answer: 'we must cut back on spending', explanation: "'Cut back on' signifie réduire les dépenses." },
  { id: 'gex-adv-434', lessonId: 'phrasal-verbs', type: 'mcq', tier: 3, prompt: "He _____ as a very competent professional.", options: ['comes across', 'comes along', 'comes over', 'comes through'], answer: 'comes across', explanation: "'Come across' signifie donner l'impression d'être." },
  { id: 'gex-adv-435', lessonId: 'phrasal-verbs', type: 'blank', tier: 2, prompt: "Please _____ (complete) this form.", answer: 'fill out', explanation: "'Fill out' (ou fill in) signifie remplir un formulaire." },
  { id: 'gex-adv-436', lessonId: 'phrasal-verbs', type: 'mcq', tier: 2, prompt: "I'll _____ you at the station.", options: ['pick up', 'pick out', 'pick in', 'pick off'], answer: 'pick up', explanation: "'Pick up' signifie aller chercher quelqu'un." },
  { id: 'gex-adv-437', lessonId: 'phrasal-verbs', type: 'error', tier: 3, prompt: "Can you please fill on this form before signing?", errorWord: 'on', answer: 'in', explanation: "'Fill in' signifie compléter un formulaire. 'Fill on' n'est pas un phrasal verb anglais." },
  { id: 'gex-adv-438', lessonId: 'phrasal-verbs', type: 'mcq', tier: 3, prompt: "The party was _____ until next week.", options: ['put off', 'put on', 'put out', 'put in'], answer: 'put off', explanation: "'Put off' signifie reporter." },
  { id: 'gex-adv-439', lessonId: 'phrasal-verbs', type: 'blank', tier: 2, prompt: "I need to _____ (discover) the truth.", answer: 'find out', explanation: "'Find out' signifie découvrir ou apprendre une information." },
  { id: 'gex-adv-440', lessonId: 'phrasal-verbs', type: 'mcq', tier: 2, prompt: "The meeting _____ for three hours.", options: ['went on', 'went off', 'went out', 'went in'], answer: 'went on', explanation: "'Go on' signifie durer ou continuer." },
  { id: 'gex-adv-441', lessonId: 'phrasal-verbs', type: 'reorder', tier: 2, prompt: "Ordre :", tokens: ['out', 'checked', 'they', 'of', 'hotel', 'the', 'early'], answer: 'they checked out of the hotel early', explanation: "'Check out of' signifie libérer une chambre." },
  { id: 'gex-adv-442', lessonId: 'phrasal-verbs', type: 'mcq', tier: 3, prompt: "He _____ the courage to ask for a raise.", options: ['worked up', 'worked out', 'worked over', 'worked off'], answer: 'worked up', explanation: "'Work up' signifie rassembler ou trouver (du courage, de l'appétit)." },
  { id: 'gex-adv-443', lessonId: 'phrasal-verbs', type: 'blank', tier: 3, prompt: "I _____ (encounter) this problem before.", answer: 'came across', explanation: "'Come across' signifie rencontrer ou trouver par hasard." },
  { id: 'gex-adv-444', lessonId: 'phrasal-verbs', type: 'mcq', tier: 2, prompt: "The bomb _____ at noon.", options: ['went off', 'went out', 'went on', 'went in'], answer: 'went off', explanation: "'Go off' signifie exploser ou sonner." },
  { id: 'gex-adv-445', lessonId: 'phrasal-verbs', type: 'error', tier: 3, prompt: "We decided to call of the meeting due to bad weather.", errorWord: 'of', answer: 'off', explanation: "'Call off' signifie annuler un événement. 'Call of' n'est pas correct — la particule est 'off'." },
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