/* ============================================================
   CONJUGATION DATA
   ============================================================ */

// ---- 1) Verbes irréguliers (160 verbes) -------------------------

const IRREGULAR_VERBS = [
  // tier 1 — essentiels
  { id: 'be',          base: 'be',          past: 'was/were',  pp: 'been',          fr: 'être',               tier: 1 },
  { id: 'have',        base: 'have',        past: 'had',       pp: 'had',           fr: 'avoir',              tier: 1 },
  { id: 'do',          base: 'do',          past: 'did',       pp: 'done',          fr: 'faire',              tier: 1 },
  { id: 'say',         base: 'say',         past: 'said',      pp: 'said',          fr: 'dire',               tier: 1 },
  { id: 'go',          base: 'go',          past: 'went',      pp: 'gone',          fr: 'aller',              tier: 1 },
  { id: 'get',         base: 'get',         past: 'got',       pp: 'got/gotten',    fr: 'obtenir, devenir',   tier: 1 },
  { id: 'make',        base: 'make',        past: 'made',      pp: 'made',          fr: 'faire, fabriquer',   tier: 1 },
  { id: 'know',        base: 'know',        past: 'knew',      pp: 'known',         fr: 'savoir, connaître',  tier: 1 },
  { id: 'think',       base: 'think',       past: 'thought',   pp: 'thought',       fr: 'penser',             tier: 1 },
  { id: 'take',        base: 'take',        past: 'took',      pp: 'taken',         fr: 'prendre',            tier: 1 },
  { id: 'see',         base: 'see',         past: 'saw',       pp: 'seen',          fr: 'voir',               tier: 1 },
  { id: 'come',        base: 'come',        past: 'came',      pp: 'come',          fr: 'venir',              tier: 1 },
  { id: 'give',        base: 'give',        past: 'gave',      pp: 'given',         fr: 'donner',             tier: 1 },
  { id: 'find',        base: 'find',        past: 'found',     pp: 'found',         fr: 'trouver',            tier: 1 },
  { id: 'tell',        base: 'tell',        past: 'told',      pp: 'told',          fr: 'dire, raconter',     tier: 1 },
  { id: 'become',      base: 'become',      past: 'became',    pp: 'become',        fr: 'devenir',            tier: 1 },
  { id: 'leave',       base: 'leave',       past: 'left',      pp: 'left',          fr: 'partir, laisser',    tier: 1 },
  { id: 'feel',        base: 'feel',        past: 'felt',      pp: 'felt',          fr: 'ressentir, sentir',  tier: 1 },
  { id: 'bring',       base: 'bring',       past: 'brought',   pp: 'brought',       fr: 'apporter, amener',   tier: 1 },
  { id: 'begin',       base: 'begin',       past: 'began',     pp: 'begun',         fr: 'commencer',          tier: 1 },
  { id: 'keep',        base: 'keep',        past: 'kept',      pp: 'kept',          fr: 'garder, continuer',  tier: 1 },
  { id: 'hold',        base: 'hold',        past: 'held',      pp: 'held',          fr: 'tenir, contenir',    tier: 1 },
  { id: 'write',       base: 'write',       past: 'wrote',     pp: 'written',       fr: 'écrire',             tier: 1 },
  { id: 'stand',       base: 'stand',       past: 'stood',     pp: 'stood',         fr: 'se tenir debout',    tier: 1 },
  { id: 'hear',        base: 'hear',        past: 'heard',     pp: 'heard',         fr: 'entendre',           tier: 1 },
  { id: 'let',         base: 'let',         past: 'let',       pp: 'let',           fr: 'laisser, permettre', tier: 1 },
  { id: 'mean',        base: 'mean',        past: 'meant',     pp: 'meant',         fr: 'vouloir dire',       tier: 1 },
  { id: 'set',         base: 'set',         past: 'set',       pp: 'set',           fr: 'poser, régler',      tier: 1 },
  { id: 'meet',        base: 'meet',        past: 'met',       pp: 'met',           fr: 'rencontrer',         tier: 1 },
  { id: 'run',         base: 'run',         past: 'ran',       pp: 'run',           fr: 'courir',             tier: 1 },
  { id: 'pay',         base: 'pay',         past: 'paid',      pp: 'paid',          fr: 'payer',              tier: 1 },
  { id: 'sit',         base: 'sit',         past: 'sat',       pp: 'sat',           fr: 's\'asseoir',         tier: 1 },
  { id: 'speak',       base: 'speak',       past: 'spoke',     pp: 'spoken',        fr: 'parler',             tier: 1 },
  { id: 'lead',        base: 'lead',        past: 'led',       pp: 'led',           fr: 'mener, diriger',     tier: 1 },
  { id: 'read',        base: 'read',        past: 'read',      pp: 'read',          fr: 'lire',               tier: 1 },
  { id: 'grow',        base: 'grow',        past: 'grew',      pp: 'grown',         fr: 'grandir, pousser',   tier: 1 },
  { id: 'lose',        base: 'lose',        past: 'lost',      pp: 'lost',          fr: 'perdre',             tier: 1 },
  { id: 'fall',        base: 'fall',        past: 'fell',      pp: 'fallen',        fr: 'tomber',             tier: 1 },
  { id: 'send',        base: 'send',        past: 'sent',      pp: 'sent',          fr: 'envoyer',            tier: 1 },
  { id: 'build',       base: 'build',       past: 'built',     pp: 'built',         fr: 'construire',         tier: 1 },
  { id: 'understand',  base: 'understand',  past: 'understood',pp: 'understood',    fr: 'comprendre',         tier: 1 },
  { id: 'buy',         base: 'buy',         past: 'bought',    pp: 'bought',        fr: 'acheter',            tier: 1 },
  { id: 'break',       base: 'break',       past: 'broke',     pp: 'broken',        fr: 'casser, briser',     tier: 1 },
  { id: 'spend',       base: 'spend',       past: 'spent',     pp: 'spent',         fr: 'dépenser, passer',   tier: 1 },
  { id: 'cut',         base: 'cut',         past: 'cut',       pp: 'cut',           fr: 'couper',             tier: 1 },
  { id: 'rise',        base: 'rise',        past: 'rose',      pp: 'risen',         fr: 'se lever, monter',   tier: 1 },
  { id: 'drive',       base: 'drive',       past: 'drove',     pp: 'driven',        fr: 'conduire',           tier: 1 },
  { id: 'wear',        base: 'wear',        past: 'wore',      pp: 'worn',          fr: 'porter (vêtement)',   tier: 1 },
  { id: 'choose',      base: 'choose',      past: 'chose',     pp: 'chosen',        fr: 'choisir',            tier: 1 },
  { id: 'eat',         base: 'eat',         past: 'ate',       pp: 'eaten',         fr: 'manger',             tier: 1 },
  // tier 2 — courants
  { id: 'drink',       base: 'drink',       past: 'drank',     pp: 'drunk',         fr: 'boire',              tier: 2 },
  { id: 'sleep',       base: 'sleep',       past: 'slept',     pp: 'slept',         fr: 'dormir',             tier: 2 },
  { id: 'swim',        base: 'swim',        past: 'swam',      pp: 'swum',          fr: 'nager',              tier: 2 },
  { id: 'fly',         base: 'fly',         past: 'flew',      pp: 'flown',         fr: 'voler',              tier: 2 },
  { id: 'ride',        base: 'ride',        past: 'rode',      pp: 'ridden',        fr: 'monter, chevaucher', tier: 2 },
  { id: 'sing',        base: 'sing',        past: 'sang',      pp: 'sung',          fr: 'chanter',            tier: 2 },
  { id: 'ring',        base: 'ring',        past: 'rang',      pp: 'rung',          fr: 'sonner, appeler',    tier: 2 },
  { id: 'win',         base: 'win',         past: 'won',       pp: 'won',           fr: 'gagner',             tier: 2 },
  { id: 'throw',       base: 'throw',       past: 'threw',     pp: 'thrown',        fr: 'lancer, jeter',      tier: 2 },
  { id: 'catch',       base: 'catch',       past: 'caught',    pp: 'caught',        fr: 'attraper',           tier: 2 },
  { id: 'teach',       base: 'teach',       past: 'taught',    pp: 'taught',        fr: 'enseigner',          tier: 2 },
  { id: 'sell',        base: 'sell',        past: 'sold',      pp: 'sold',          fr: 'vendre',             tier: 2 },
  { id: 'fight',       base: 'fight',       past: 'fought',    pp: 'fought',        fr: 'se battre',          tier: 2 },
  { id: 'hide',        base: 'hide',        past: 'hid',       pp: 'hidden',        fr: 'cacher, se cacher',  tier: 2 },
  { id: 'lay',         base: 'lay',         past: 'laid',      pp: 'laid',          fr: 'poser à plat',       tier: 2 },
  { id: 'lie',         base: 'lie',         past: 'lay',       pp: 'lain',          fr: 'être allongé',       tier: 2 },
  { id: 'lend',        base: 'lend',        past: 'lent',      pp: 'lent',          fr: 'prêter',             tier: 2 },
  { id: 'hurt',        base: 'hurt',        past: 'hurt',      pp: 'hurt',          fr: 'blesser, faire mal', tier: 2 },
  { id: 'hit',         base: 'hit',         past: 'hit',       pp: 'hit',           fr: 'frapper, heurter',   tier: 2 },
  { id: 'hang',        base: 'hang',        past: 'hung',      pp: 'hung',          fr: 'accrocher, pendre',  tier: 2 },
  { id: 'dig',         base: 'dig',         past: 'dug',       pp: 'dug',           fr: 'creuser',            tier: 2 },
  { id: 'deal',        base: 'deal',        past: 'dealt',     pp: 'dealt',         fr: 'traiter, distribuer',tier: 2 },
  { id: 'blow',        base: 'blow',        past: 'blew',      pp: 'blown',         fr: 'souffler',           tier: 2 },
  { id: 'bite',        base: 'bite',        past: 'bit',       pp: 'bitten',        fr: 'mordre',             tier: 2 },
  { id: 'draw',        base: 'draw',        past: 'drew',      pp: 'drawn',         fr: 'dessiner, tirer',    tier: 2 },
  { id: 'forget',      base: 'forget',      past: 'forgot',    pp: 'forgotten',     fr: 'oublier',            tier: 2 },
  { id: 'forgive',     base: 'forgive',     past: 'forgave',   pp: 'forgiven',      fr: 'pardonner',          tier: 2 },
  { id: 'forbid',      base: 'forbid',      past: 'forbade',   pp: 'forbidden',     fr: 'interdire',          tier: 2 },
  { id: 'freeze',      base: 'freeze',      past: 'froze',     pp: 'frozen',        fr: 'geler, congeler',    tier: 2 },
  { id: 'give-up',     base: 'give up',     past: 'gave up',   pp: 'given up',      fr: 'abandonner',         tier: 2 },
  { id: 'put',         base: 'put',         past: 'put',       pp: 'put',           fr: 'mettre, poser',      tier: 2 },
  { id: 'shut',        base: 'shut',        past: 'shut',      pp: 'shut',          fr: 'fermer',             tier: 2 },
  { id: 'spread',      base: 'spread',      past: 'spread',    pp: 'spread',        fr: 'répandre, étaler',   tier: 2 },
  { id: 'cost',        base: 'cost',        past: 'cost',      pp: 'cost',          fr: 'coûter',             tier: 2 },
  { id: 'feed',        base: 'feed',        past: 'fed',       pp: 'fed',           fr: 'nourrir, alimenter', tier: 2 },
  { id: 'light',       base: 'light',       past: 'lit',       pp: 'lit',           fr: 'allumer, éclairer',  tier: 2 },
  { id: 'shoot',       base: 'shoot',       past: 'shot',      pp: 'shot',          fr: 'tirer, photographier',tier: 2 },
  { id: 'steal',       base: 'steal',       past: 'stole',     pp: 'stolen',        fr: 'voler, dérober',     tier: 2 },
  { id: 'stick',       base: 'stick',       past: 'stuck',     pp: 'stuck',         fr: 'coller, enfoncer',   tier: 2 },
  { id: 'strike',      base: 'strike',      past: 'struck',    pp: 'struck',        fr: 'frapper, faire grève',tier: 2 },
  { id: 'swear',       base: 'swear',       past: 'swore',     pp: 'sworn',         fr: 'jurer, prêter serment',tier: 2 },
  { id: 'sweep',       base: 'sweep',       past: 'swept',     pp: 'swept',         fr: 'balayer',            tier: 2 },
  { id: 'swing',       base: 'swing',       past: 'swung',     pp: 'swung',         fr: 'balancer, osciller', tier: 2 },
  { id: 'wake',        base: 'wake',        past: 'woke',      pp: 'woken',         fr: 'se réveiller',       tier: 2 },
  // tier 3 — enrichissement
  { id: 'bend',        base: 'bend',        past: 'bent',      pp: 'bent',          fr: 'plier, courber',     tier: 3 },
  { id: 'bind',        base: 'bind',        past: 'bound',     pp: 'bound',         fr: 'lier, relier',       tier: 3 },
  { id: 'bleed',       base: 'bleed',       past: 'bled',      pp: 'bled',          fr: 'saigner',            tier: 3 },
  { id: 'burst',       base: 'burst',       past: 'burst',     pp: 'burst',         fr: 'éclater, exploser',  tier: 3 },
  { id: 'cast',        base: 'cast',        past: 'cast',      pp: 'cast',          fr: 'lancer, distribuer', tier: 3 },
  { id: 'cling',       base: 'cling',       past: 'clung',     pp: 'clung',         fr: 's\'accrocher',       tier: 3 },
  { id: 'creep',       base: 'creep',       past: 'crept',     pp: 'crept',         fr: 'ramper, se faufiler',tier: 3 },
  { id: 'flee',        base: 'flee',        past: 'fled',      pp: 'fled',          fr: 'fuir, s\'enfuir',    tier: 3 },
  { id: 'grind',       base: 'grind',       past: 'ground',    pp: 'ground',        fr: 'moudre, broyer',     tier: 3 },
  { id: 'kneel',       base: 'kneel',       past: 'knelt',     pp: 'knelt',         fr: 's\'agenouiller',     tier: 3 },
  { id: 'lean',        base: 'lean',        past: 'leant/leaned', pp: 'leant/leaned', fr: 's\'appuyer, pencher',tier: 3 },
  { id: 'leap',        base: 'leap',        past: 'leapt/leaped', pp: 'leapt/leaped', fr: 'sauter, bondir',   tier: 3 },
  { id: 'shrink',      base: 'shrink',      past: 'shrank',    pp: 'shrunk',        fr: 'rétrécir',           tier: 3 },
  { id: 'sink',        base: 'sink',        past: 'sank',      pp: 'sunk',          fr: 'couler, s\'enfoncer',tier: 3 },
  { id: 'slay',        base: 'slay',        past: 'slew',      pp: 'slain',         fr: 'tuer, abattre',      tier: 3 },
  { id: 'slide',       base: 'slide',       past: 'slid',      pp: 'slid',          fr: 'glisser',            tier: 3 },
  { id: 'sow',         base: 'sow',         past: 'sowed',     pp: 'sown/sowed',    fr: 'semer',              tier: 3 },
  { id: 'spin',        base: 'spin',        past: 'spun',      pp: 'spun',          fr: 'filer, tourner',     tier: 3 },
  { id: 'spit',        base: 'spit',        past: 'spat',      pp: 'spat',          fr: 'cracher',            tier: 3 },
  { id: 'split',       base: 'split',       past: 'split',     pp: 'split',         fr: 'fendre, diviser',    tier: 3 },
  { id: 'spring',      base: 'spring',      past: 'sprang',    pp: 'sprung',        fr: 'jaillir, bondir',    tier: 3 },
  { id: 'sting',       base: 'sting',       past: 'stung',     pp: 'stung',         fr: 'piquer',             tier: 3 },
  { id: 'stink',       base: 'stink',       past: 'stank',     pp: 'stunk',         fr: 'puer, sentir mauvais',tier: 3 },
  { id: 'stride',      base: 'stride',      past: 'strode',    pp: 'stridden',      fr: 'enjamber, marcher',  tier: 3 },
  { id: 'strive',      base: 'strive',      past: 'strove',    pp: 'striven',       fr: 's\'efforcer',        tier: 3 },
  { id: 'sweat',       base: 'sweat',       past: 'sweat/sweated', pp: 'sweat/sweated', fr: 'transpirer',     tier: 3 },
  { id: 'tear',        base: 'tear',        past: 'tore',      pp: 'torn',          fr: 'déchirer',           tier: 3 },
  { id: 'tread',       base: 'tread',       past: 'trod',      pp: 'trodden',       fr: 'marcher sur',        tier: 3 },
  { id: 'weave',       base: 'weave',       past: 'wove',      pp: 'woven',         fr: 'tisser',             tier: 3 },
  { id: 'weep',        base: 'weep',        past: 'wept',      pp: 'wept',          fr: 'pleurer',            tier: 3 },
  { id: 'withdraw',    base: 'withdraw',    past: 'withdrew',  pp: 'withdrawn',     fr: 'retirer, se retirer',tier: 3 },
  { id: 'withstand',   base: 'withstand',   past: 'withstood', pp: 'withstood',     fr: 'résister, supporter',tier: 3 },
  { id: 'wring',       base: 'wring',       past: 'wrung',     pp: 'wrung',         fr: 'tordre, essorer',    tier: 3 },
  { id: 'arise',       base: 'arise',       past: 'arose',     pp: 'arisen',        fr: 'surgir, apparaître', tier: 3 },
  { id: 'bear',        base: 'bear',        past: 'bore',      pp: 'born/borne',    fr: 'porter, supporter',  tier: 3 },
  { id: 'beat',        base: 'beat',        past: 'beat',      pp: 'beaten',        fr: 'battre, vaincre',    tier: 3 },
  { id: 'forecast',    base: 'forecast',    past: 'forecast',  pp: 'forecast',      fr: 'prévoir, annoncer',  tier: 3 },
  { id: 'overcome',    base: 'overcome',    past: 'overcame',  pp: 'overcome',      fr: 'surmonter, vaincre', tier: 3 },
  { id: 'undertake',   base: 'undertake',   past: 'undertook', pp: 'undertaken',    fr: 'entreprendre',       tier: 3 },
  { id: 'upset',       base: 'upset',       past: 'upset',     pp: 'upset',         fr: 'contrarier, renverser',tier: 3 },
  { id: 'wind',        base: 'wind',        past: 'wound',     pp: 'wound',         fr: 'enrouler, remonter', tier: 3 },
];

// ---- 2) Verbes réguliers courants (55 verbes) -------------------

const REGULAR_VERBS = [
  { id: 'work',     base: 'work',     fr: 'travailler' },
  { id: 'play',     base: 'play',     fr: 'jouer' },
  { id: 'study',    base: 'study',    fr: 'étudier' },
  { id: 'talk',     base: 'talk',     fr: 'parler, discuter' },
  { id: 'walk',     base: 'walk',     fr: 'marcher' },
  { id: 'watch',    base: 'watch',    fr: 'regarder' },
  { id: 'listen',   base: 'listen',   fr: 'écouter' },
  { id: 'open',     base: 'open',     fr: 'ouvrir' },
  { id: 'close',    base: 'close',    fr: 'fermer' },
  { id: 'start',    base: 'start',    fr: 'commencer, démarrer' },
  { id: 'stop',     base: 'stop',     fr: 'arrêter' },
  { id: 'finish',   base: 'finish',   fr: 'finir, terminer' },
  { id: 'wait',     base: 'wait',     fr: 'attendre' },
  { id: 'need',     base: 'need',     fr: 'avoir besoin de' },
  { id: 'want',     base: 'want',     fr: 'vouloir' },
  { id: 'help',     base: 'help',     fr: 'aider' },
  { id: 'call',     base: 'call',     fr: 'appeler' },
  { id: 'ask',      base: 'ask',      fr: 'demander' },
  { id: 'answer',   base: 'answer',   fr: 'répondre' },
  { id: 'use',      base: 'use',      fr: 'utiliser' },
  { id: 'try',      base: 'try',      fr: 'essayer' },
  { id: 'enjoy',    base: 'enjoy',    fr: 'apprécier, profiter de' },
  { id: 'move',     base: 'move',     fr: 'bouger, déménager' },
  { id: 'live',     base: 'live',     fr: 'vivre, habiter' },
  { id: 'love',     base: 'love',     fr: 'aimer' },
  { id: 'like',     base: 'like',     fr: 'aimer (bien)' },
  { id: 'hate',     base: 'hate',     fr: 'détester' },
  { id: 'visit',    base: 'visit',    fr: 'visiter, rendre visite à' },
  { id: 'travel',   base: 'travel',   fr: 'voyager' },
  { id: 'arrive',   base: 'arrive',   fr: 'arriver' },
  { id: 'return',   base: 'return',   fr: 'retourner, revenir' },
  { id: 'change',   base: 'change',   fr: 'changer' },
  { id: 'improve',  base: 'improve',  fr: 'améliorer, s\'améliorer' },
  { id: 'create',   base: 'create',   fr: 'créer' },
  { id: 'plan',     base: 'plan',     fr: 'planifier, avoir l\'intention' },
  { id: 'agree',    base: 'agree',    fr: 'être d\'accord' },
  { id: 'decide',   base: 'decide',   fr: 'décider' },
  { id: 'learn',    base: 'learn',    fr: 'apprendre' },
  { id: 'practice', base: 'practice', fr: 'pratiquer, s\'entraîner' },
  { id: 'prepare',  base: 'prepare',  fr: 'préparer' },
  { id: 'explain',  base: 'explain',  fr: 'expliquer' },
  { id: 'accept',   base: 'accept',   fr: 'accepter' },
  { id: 'refuse',   base: 'refuse',   fr: 'refuser' },
  { id: 'offer',    base: 'offer',    fr: 'offrir, proposer' },
  { id: 'expect',   base: 'expect',   fr: 'attendre (à), s\'attendre' },
  { id: 'believe',  base: 'believe',  fr: 'croire' },
  { id: 'remember', base: 'remember', fr: 'se souvenir' },
  { id: 'happen',   base: 'happen',   fr: 'se passer, arriver' },
  { id: 'appear',   base: 'appear',   fr: 'apparaître, sembler' },
  { id: 'include',  base: 'include',  fr: 'inclure, comprendre' },
  { id: 'continue', base: 'continue', fr: 'continuer' },
  { id: 'develop',  base: 'develop',  fr: 'développer' },
  { id: 'increase', base: 'increase', fr: 'augmenter' },
  { id: 'reduce',   base: 'reduce',   fr: 'réduire' },
  { id: 'complete', base: 'complete', fr: 'compléter, terminer' },
];

// ---- 3) Définition des temps (18 temps) -------------------------

const TENSES = {
  'simple-present': {
    id: 'simple-present', label: 'Simple Present', labelFr: 'Présent simple',
    category: 'simple', order: 1,
    formation: {
      affirmative:   'I/you/we/they + base · he/she/it + base + s/es',
      negative:      'do not (don\'t) / does not (doesn\'t) + base',
      interrogative: 'Do / Does + subject + base?',
    },
    usage: [
      'Vérités générales et faits scientifiques',
      'Habitudes et routines',
      'Horaires et programmes officiels',
      'États permanents',
    ],
    markers: ['always','often','usually','sometimes','rarely','never','every day','every week'],
    examples: [
      { en: 'The sun rises in the east.',  fr: 'Le soleil se lève à l\'est.' },
      { en: 'She works at a hospital.',    fr: 'Elle travaille dans un hôpital.' },
      { en: 'I don\'t drink coffee.',      fr: 'Je ne bois pas de café.' },
    ],
    pitfalls: [
      '3e pers. sing. : ne PAS oublier le -s (he work → he works)',
      'Exceptions : study→studies, go→goes, have→has, be→is, do→does',
    ],
  },

  'simple-past': {
    id: 'simple-past', label: 'Simple Past', labelFr: 'Passé simple',
    category: 'simple', order: 2,
    formation: {
      affirmative:   'Réguliers : base + -ed · Irréguliers : 2e forme',
      negative:      'did not (didn\'t) + base',
      interrogative: 'Did + subject + base?',
    },
    usage: [
      'Action terminée à un moment précis du passé',
      'Récit et narration d\'événements passés',
      'Habitude passée (souvent avec always/often)',
    ],
    markers: ['yesterday','ago','last week','last year','in 2010','when','at that time'],
    examples: [
      { en: 'She went to Paris last summer.',       fr: 'Elle est allée à Paris l\'été dernier.' },
      { en: 'I didn\'t understand the question.',   fr: 'Je n\'ai pas compris la question.' },
      { en: 'Did you see the match yesterday?',     fr: 'Tu as vu le match hier ?' },
    ],
    pitfalls: [
      'Au négatif/interrogatif, did remet le verbe à la base : did he went ✗ → did he go ✓',
      'Be : was (I/he/she/it) vs were (you/we/they)',
    ],
  },

  'simple-future': {
    id: 'simple-future', label: 'Simple Future', labelFr: 'Futur simple (will)',
    category: 'simple', order: 3,
    formation: {
      affirmative:   'will + base verb',
      negative:      'will not (won\'t) + base',
      interrogative: 'Will + subject + base?',
    },
    usage: [
      'Prédiction basée sur une opinion ou une croyance',
      'Décision spontanée prise au moment de parler',
      'Promesse, offre, refus',
      'Vérité future inévitable',
    ],
    markers: ['tomorrow','soon','in the future','I think','probably','maybe','I promise'],
    examples: [
      { en: 'I think it will rain tomorrow.',  fr: 'Je pense qu\'il pleuvra demain.' },
      { en: 'I\'ll help you with that.',       fr: 'Je vais t\'aider avec ça.' },
      { en: 'She won\'t be late.',             fr: 'Elle ne sera pas en retard.' },
    ],
    pitfalls: [
      'will ≠ be going to : will = spontané / be going to = intention déjà formée',
      'Pas de "to" entre will et le verbe : will to go ✗ → will go ✓',
    ],
  },

  'present-continuous': {
    id: 'present-continuous', label: 'Present Continuous', labelFr: 'Présent continu',
    category: 'continuous', order: 4,
    formation: {
      affirmative:   'am / is / are + verb-ing',
      negative:      'am not / is not (isn\'t) / are not (aren\'t) + verb-ing',
      interrogative: 'Am/Is/Are + subject + verb-ing?',
    },
    usage: [
      'Action en cours au moment où l\'on parle',
      'Situation temporaire (opposée à une habitude)',
      'Plan ou arrangement futur déjà décidé',
      'Tendance ou changement en cours',
    ],
    markers: ['now','right now','at the moment','currently','these days','this week','today'],
    examples: [
      { en: 'She is studying for her exam right now.',   fr: 'Elle étudie pour son examen en ce moment.' },
      { en: 'We are meeting them tomorrow evening.',     fr: 'On les retrouve demain soir.' },
      { en: 'Prices are rising every month.',            fr: 'Les prix augmentent chaque mois.' },
    ],
    pitfalls: [
      'Verbes d\'état (know, like, want, believe, prefer) ne s\'utilisent pas au continu',
      'Orthographe -ing : run→running, write→writing, study→studying',
    ],
  },

  'past-continuous': {
    id: 'past-continuous', label: 'Past Continuous', labelFr: 'Passé continu',
    category: 'continuous', order: 5,
    formation: {
      affirmative:   'was / were + verb-ing',
      negative:      'was not (wasn\'t) / were not (weren\'t) + verb-ing',
      interrogative: 'Was/Were + subject + verb-ing?',
    },
    usage: [
      'Action en cours à un moment précis du passé',
      'Action interrompue par une autre (when + simple past)',
      'Deux actions simultanées dans le passé',
      'Atmosphère / contexte d\'une scène passée',
    ],
    markers: ['while','when','at that moment','at 8 o\'clock yesterday','all day long'],
    examples: [
      { en: 'I was reading when she called.',      fr: 'Je lisais quand elle a appelé.' },
      { en: 'They were working all night.',        fr: 'Ils travaillaient toute la nuit.' },
      { en: 'Was it raining when you left?',       fr: 'Il pleuvait quand tu es parti ?' },
    ],
    pitfalls: [
      'was (I/he/she/it) vs were (you/we/they)',
      'Ne pas confondre l\'action de fond (past continuous) et l\'interruption (simple past)',
    ],
  },

  'future-continuous': {
    id: 'future-continuous', label: 'Future Continuous', labelFr: 'Futur continu',
    category: 'continuous', order: 6,
    formation: {
      affirmative:   'will be + verb-ing',
      negative:      'will not (won\'t) be + verb-ing',
      interrogative: 'Will + subject + be + verb-ing?',
    },
    usage: [
      'Action en cours à un moment précis dans le futur',
      'Action future dans le cours normal des choses (sans effort particulier)',
      'Question polie sur les projets de quelqu\'un',
    ],
    markers: ['at this time tomorrow','next week at 3pm','in two hours'],
    examples: [
      { en: 'At 8 pm I will be having dinner.',      fr: 'À 20h je serai en train de dîner.' },
      { en: 'Will you be using the car tonight?',    fr: 'Tu utiliseras la voiture ce soir ?' },
      { en: 'She will be sleeping when we arrive.',  fr: 'Elle dormira quand on arrivera.' },
    ],
    pitfalls: [
      'Construit avec will be (pas juste will) suivi du gérondif',
    ],
  },

  'present-perfect': {
    id: 'present-perfect', label: 'Present Perfect', labelFr: 'Passé composé (lien présent)',
    category: 'perfect', order: 7,
    formation: {
      affirmative:   'have / has + past participle (V3)',
      negative:      'have not (haven\'t) / has not (hasn\'t) + V3',
      interrogative: 'Have/Has + subject + V3?',
    },
    usage: [
      'Expérience de vie (ever/never)',
      'Action récente aux effets présents (just, already, yet)',
      'Durée qui court jusqu\'à maintenant (for, since)',
      'Changement ou résultat récent',
    ],
    markers: ['just','already','yet','ever','never','since','for','recently','so far','up to now'],
    examples: [
      { en: 'I have just finished my homework.',     fr: 'Je viens de finir mes devoirs.' },
      { en: 'She has lived here for ten years.',     fr: 'Elle habite ici depuis dix ans.' },
      { en: 'Have you ever visited Japan?',          fr: 'As-tu déjà visité le Japon ?' },
    ],
    pitfalls: [
      'for = durée (for 3 years) vs since = point de départ (since Monday)',
      'Ne pas confondre avec simple past : "I saw him yesterday" (passé précis) ≠ "I have seen him" (lien au présent)',
    ],
  },

  'past-perfect': {
    id: 'past-perfect', label: 'Past Perfect', labelFr: 'Plus-que-parfait',
    category: 'perfect', order: 8,
    formation: {
      affirmative:   'had + past participle (V3)',
      negative:      'had not (hadn\'t) + V3',
      interrogative: 'Had + subject + V3?',
    },
    usage: [
      'Action antérieure à une autre action passée',
      'Conditions dans les 3e conditionnel',
      'Discours indirect (reported speech)',
    ],
    markers: ['before','after','already','by the time','when','never','just'],
    examples: [
      { en: 'She had left before I arrived.',          fr: 'Elle était partie avant que j\'arrive.' },
      { en: 'Had you ever seen that film before?',     fr: 'Avais-tu déjà vu ce film auparavant ?' },
      { en: 'I hadn\'t eaten anything all day.',       fr: 'Je n\'avais rien mangé de la journée.' },
    ],
    pitfalls: [
      'had est invariable : il n\'existe pas de "has had" pour le past perfect',
      'Ne pas sur-utiliser : s\'il n\'y a qu\'un seul passé, simple past suffit',
    ],
  },

  'future-perfect': {
    id: 'future-perfect', label: 'Future Perfect', labelFr: 'Futur antérieur',
    category: 'perfect', order: 9,
    formation: {
      affirmative:   'will have + past participle (V3)',
      negative:      'will not have (won\'t have) + V3',
      interrogative: 'Will + subject + have + V3?',
    },
    usage: [
      'Action qui sera achevée avant un moment précis dans le futur',
    ],
    markers: ['by tomorrow','by next week','by the time','before','by 2030'],
    examples: [
      { en: 'By next year, I will have graduated.',   fr: 'D\'ici l\'an prochain, j\'aurai été diplômé.' },
      { en: 'She will have finished by then.',         fr: 'Elle aura terminé d\'ici là.' },
      { en: 'Will they have arrived by 8 pm?',         fr: 'Seront-ils arrivés avant 20h ?' },
    ],
    pitfalls: [
      'Structure : will + have + V3 (trois éléments)',
    ],
  },

  'present-perfect-continuous': {
    id: 'present-perfect-continuous', label: 'Present Perfect Continuous', labelFr: 'Passé composé continu',
    category: 'perfect-continuous', order: 10,
    formation: {
      affirmative:   'have / has + been + verb-ing',
      negative:      'have not / has not + been + verb-ing',
      interrogative: 'Have/Has + subject + been + verb-ing?',
    },
    usage: [
      'Activité qui a duré jusqu\'à maintenant (emphase sur la durée)',
      'Action récemment terminée dont on voit les effets',
    ],
    markers: ['for','since','all day','lately','recently','how long'],
    examples: [
      { en: 'I have been waiting for an hour.',        fr: 'J\'attends depuis une heure.' },
      { en: 'She has been working all morning.',       fr: 'Elle travaille depuis ce matin.' },
      { en: 'How long have you been learning English?',fr: 'Depuis combien de temps tu apprends l\'anglais ?' },
    ],
    pitfalls: [
      'have been + V-ing (pas have been + V3)',
      'Verbes d\'état (know, believe…) n\'ont pas de forme continue',
    ],
  },

  'past-perfect-continuous': {
    id: 'past-perfect-continuous', label: 'Past Perfect Continuous', labelFr: 'Plus-que-parfait continu',
    category: 'perfect-continuous', order: 11,
    formation: {
      affirmative:   'had been + verb-ing',
      negative:      'had not (hadn\'t) been + verb-ing',
      interrogative: 'Had + subject + been + verb-ing?',
    },
    usage: [
      'Durée d\'une activité antérieure à un moment passé',
      'Cause d\'un état passé',
    ],
    markers: ['for','since','all day','before','when'],
    examples: [
      { en: 'She had been crying when I found her.',  fr: 'Elle pleurait depuis un moment quand je l\'ai trouvée.' },
      { en: 'I had been working for six hours.',      fr: 'Je travaillais depuis six heures.' },
    ],
    pitfalls: [
      'Structure : had + been + V-ing (invariable : pas de "has been" ici)',
    ],
  },

  'passive-present': {
    id: 'passive-present', label: 'Passive Voice (Present)', labelFr: 'Voix passive (présent)',
    category: 'passive', order: 12,
    formation: {
      affirmative:   'am / is / are + past participle (V3)',
      negative:      'am not / isn\'t / aren\'t + V3',
      interrogative: 'Am/Is/Are + subject + V3?',
    },
    usage: [
      'L\'agent (celui qui fait l\'action) est inconnu, peu important ou évident',
      'Pour mettre l\'accent sur l\'action ou le résultat plutôt que l\'agent',
      'Registres formels, scientifiques, journalistiques',
    ],
    markers: ['by','is made','is produced','is built'],
    examples: [
      { en: 'The windows are cleaned every week.',        fr: 'Les fenêtres sont nettoyées chaque semaine.' },
      { en: 'English is spoken all over the world.',      fr: 'L\'anglais est parlé partout dans le monde.' },
      { en: 'The report isn\'t finished yet.',            fr: 'Le rapport n\'est pas encore terminé.' },
    ],
    pitfalls: [
      'Transformer : S + V + O → O + be + V3 + (by + S)',
      'L\'agent est introduit par "by" quand on veut le mentionner',
    ],
  },

  'passive-past': {
    id: 'passive-past', label: 'Passive Voice (Past)', labelFr: 'Voix passive (passé)',
    category: 'passive', order: 13,
    formation: {
      affirmative:   'was / were + past participle (V3)',
      negative:      'was not / were not + V3',
      interrogative: 'Was/Were + subject + V3?',
    },
    usage: [
      'Action passive dans le passé',
    ],
    markers: ['was built','was written','were found','was discovered'],
    examples: [
      { en: 'The Eiffel Tower was built in 1889.',   fr: 'La Tour Eiffel a été construite en 1889.' },
      { en: 'The suspects were arrested yesterday.', fr: 'Les suspects ont été arrêtés hier.' },
    ],
    pitfalls: [
      'was (singulier) vs were (pluriel)',
    ],
  },

  'used-to': {
    id: 'used-to', label: 'Used to / Would', labelFr: 'Habitudes passées',
    category: 'special', order: 14,
    formation: {
      affirmative:   'used to + base · would + base (pour les actions, pas les états)',
      negative:      'didn\'t use to + base · wouldn\'t + base',
      interrogative: 'Did + subject + use to + base?',
    },
    usage: [
      'Habitude passée qui n\'existe plus',
      '"used to" : états ET actions passées',
      '"would" : actions répétées passées uniquement (pas les états)',
    ],
    markers: ['in the past','when I was young','as a child','back then'],
    examples: [
      { en: 'I used to play football every weekend.',   fr: 'Je jouais au football chaque week-end (avant).' },
      { en: 'She didn\'t use to like vegetables.',      fr: 'Elle n\'aimait pas les légumes (avant).' },
      { en: 'He would walk to school every day.',       fr: 'Il allait à l\'école à pied chaque jour (habitude).' },
    ],
    pitfalls: [
      '"used to" peut exprimer des états : "I used to live in Paris" ✓ mais "I would live in Paris" ✗',
      'Ne pas confondre avec "be used to + V-ing" (être habitué à)',
    ],
  },
};

// ---- 4) Modaux (12 modaux) --------------------------------------

const MODALS = [
  {
    id: 'can', base: 'can', past: 'could', fr: 'pouvoir (capacité)',
    meanings: ['capacité présente', 'permission informelle', 'possibilité'],
    structure: 'can + base verb (invariable, pas de "to")',
    examples: [
      { en: 'I can swim.',            fr: 'Je sais nager.' },
      { en: 'Can I borrow your pen?', fr: 'Je peux emprunter ton stylo ?' },
      { en: 'It can be very cold.',   fr: 'Il peut faire très froid.' },
    ],
    notes: 'Négation : cannot / can\'t. Passé : could. Futur : will be able to.',
  },
  {
    id: 'could', base: 'could', past: null, fr: 'pouvoir (passé / conditionnel)',
    meanings: ['capacité passée', 'possibilité au conditionnel', 'demande polie'],
    structure: 'could + base verb',
    examples: [
      { en: 'She could run fast when she was young.', fr: 'Elle courait vite quand elle était jeune.' },
      { en: 'Could you help me, please?',             fr: 'Pourriez-vous m\'aider, s\'il vous plaît ?' },
      { en: 'It could rain tomorrow.',                fr: 'Il pourrait pleuvoir demain.' },
    ],
    notes: 'could est aussi le passé de can ET un conditionnel de politesse.',
  },
  {
    id: 'may', base: 'may', past: 'might', fr: 'pouvoir (permission formelle / probabilité)',
    meanings: ['permission formelle', 'probabilité (50%)'],
    structure: 'may + base verb',
    examples: [
      { en: 'May I come in?',            fr: 'Puis-je entrer ?' },
      { en: 'It may snow tonight.',      fr: 'Il se peut qu\'il neige ce soir.' },
      { en: 'She may be right.',         fr: 'Elle a peut-être raison.' },
    ],
    notes: 'Plus formel que can pour la permission. Probabilité ~50%.',
  },
  {
    id: 'might', base: 'might', past: null, fr: 'pouvoir (probabilité faible)',
    meanings: ['probabilité faible (~30%)', 'possibilité dans le conditionnel'],
    structure: 'might + base verb',
    examples: [
      { en: 'I might go to the party.',     fr: 'Je pourrais aller à la fête (incertain).' },
      { en: 'It might not work.',           fr: 'Ça pourrait ne pas fonctionner.' },
    ],
    notes: 'might exprime une probabilité plus faible que may.',
  },
  {
    id: 'must', base: 'must', past: 'had to', fr: 'devoir (obligation / déduction)',
    meanings: ['obligation forte interne', 'déduction logique (must be)'],
    structure: 'must + base verb',
    examples: [
      { en: 'You must wear a seatbelt.',  fr: 'Tu dois porter une ceinture.' },
      { en: 'She must be tired.',         fr: 'Elle doit être fatiguée (déduction).' },
      { en: 'You mustn\'t smoke here.',   fr: 'Tu ne dois pas fumer ici.' },
    ],
    notes: 'must vs have to : obligation interne vs externe. Passé : had to.',
  },
  {
    id: 'have-to', base: 'have to', past: 'had to', fr: 'devoir (obligation externe)',
    meanings: ['obligation externe (règles, circonstances)'],
    structure: 'have to / has to + base verb',
    examples: [
      { en: 'I have to work on Saturdays.',    fr: 'Je dois travailler le samedi (c\'est mon horaire).' },
      { en: 'She has to wear a uniform.',      fr: 'Elle doit porter un uniforme (règle).' },
      { en: 'You don\'t have to come.',        fr: 'Tu n\'es pas obligé de venir.' },
    ],
    notes: 'Contrairement à mustn\'t (interdiction), don\'t have to = absence d\'obligation.',
  },
  {
    id: 'should', base: 'should', past: null, fr: 'devoir (conseil / recommandation)',
    meanings: ['conseil', 'recommandation', 'attente logique'],
    structure: 'should + base verb',
    examples: [
      { en: 'You should see a doctor.',       fr: 'Tu devrais voir un médecin.' },
      { en: 'She shouldn\'t work so hard.',   fr: 'Elle ne devrait pas travailler autant.' },
      { en: 'The train should arrive soon.',  fr: 'Le train devrait arriver bientôt.' },
    ],
    notes: 'Moins fort que must. Pour un regret passé : should have + V3.',
  },
  {
    id: 'would', base: 'would', past: null, fr: 'conditionnel / politesse / habitude passée',
    meanings: ['conditionnel (résultat)', 'demande très polie', 'habitude passée'],
    structure: 'would + base verb',
    examples: [
      { en: 'I would travel more if I had time.',  fr: 'Je voyagerais plus si j\'avais le temps.' },
      { en: 'Would you like some tea?',            fr: 'Voulez-vous du thé ?' },
      { en: 'He would walk to school every day.',  fr: 'Il allait à l\'école à pied chaque jour.' },
    ],
    notes: 'Utilisé aussi pour les habitudes passées (avec une nuance narrative).',
  },
  {
    id: 'shall', base: 'shall', past: null, fr: 'suggestion / offre (1e personne)',
    meanings: ['suggestion (Shall I/we…?)', 'futur formel (I/we)'],
    structure: 'shall + base verb',
    examples: [
      { en: 'Shall I open the window?',  fr: 'Je veux bien ouvrir la fenêtre ?' },
      { en: 'Shall we go?',              fr: 'On y va ?' },
    ],
    notes: 'Principalement utilisé avec I et we pour des suggestions ou offres.',
  },
  {
    id: 'ought-to', base: 'ought to', past: null, fr: 'devoir (obligation morale)',
    meanings: ['obligation morale', 'attente'],
    structure: 'ought to + base verb',
    examples: [
      { en: 'You ought to apologize.',      fr: 'Tu devrais t\'excuser (moralement).' },
      { en: 'She ought to be there by now.',fr: 'Elle devrait y être maintenant.' },
    ],
    notes: 'Similaire à should mais légèrement plus formel. Contient "to" (contrairement aux autres modaux).',
  },
  {
    id: 'need-to', base: 'need to', past: 'needed to', fr: 'avoir besoin de (nécessité)',
    meanings: ['nécessité', 'besoin'],
    structure: 'need to + base verb (verbe plein, pas modal)',
    examples: [
      { en: 'I need to finish this report.',    fr: 'J\'ai besoin de finir ce rapport.' },
      { en: 'You don\'t need to shout.',        fr: 'Tu n\'as pas besoin de crier.' },
      { en: 'Does she need to come?',           fr: 'Est-ce qu\'elle doit venir ?' },
    ],
    notes: 'En tant que verbe plein, utilise do/does pour la négation et l\'interrogation.',
  },
  {
    id: 'used-to-modal', base: 'be used to', past: null, fr: 'être habitué à',
    meanings: ['être habitué à (état actuel)'],
    structure: 'be used to + verb-ing / noun',
    examples: [
      { en: 'I\'m used to waking up early.',    fr: 'Je suis habitué à me lever tôt.' },
      { en: 'She isn\'t used to the cold.',     fr: 'Elle n\'est pas habituée au froid.' },
    ],
    notes: 'À ne pas confondre avec "used to + base" (habitude passée révolue).',
  },
];

// ---- 5) Conditionnels (4 types) ---------------------------------

const CONDITIONALS = [
  {
    id: 'cond-0', label: 'Zero Conditional', labelFr: 'Conditionnel zéro', order: 0,
    formula: 'If + simple present, simple present',
    usage: 'Vérités générales, lois scientifiques, faits universels',
    markers: ['if','when','always','generally'],
    examples: [
      { en: 'If you heat water to 100°C, it boils.', fr: 'Si tu chauffes l\'eau à 100°C, elle bout.' },
      { en: 'If it rains, the ground gets wet.',     fr: 'Quand il pleut, le sol se mouille.' },
    ],
    pitfalls: ['Les deux verbes sont au simple present (pas de will)'],
    exercise: {
      ifClause: { tense: 'simple-present', label: 'Simple Present' },
      mainClause: { tense: 'simple-present', label: 'Simple Present' },
    },
  },
  {
    id: 'cond-1', label: 'First Conditional', labelFr: 'Premier conditionnel', order: 1,
    formula: 'If + simple present, will + base',
    usage: 'Situation réelle ou probable dans le futur',
    markers: ['if','unless','as long as','provided that'],
    examples: [
      { en: 'If it rains tomorrow, we will stay home.',   fr: 'S\'il pleut demain, on restera à la maison.' },
      { en: 'If you study hard, you will pass the exam.', fr: 'Si tu travailles dur, tu réussiras l\'examen.' },
    ],
    pitfalls: ['La if-clause prend le present (pas will) : "If it will rain" ✗'],
    exercise: {
      ifClause: { tense: 'simple-present', label: 'Simple Present' },
      mainClause: { tense: 'simple-future', label: 'will + base' },
    },
  },
  {
    id: 'cond-2', label: 'Second Conditional', labelFr: 'Deuxième conditionnel', order: 2,
    formula: 'If + simple past, would + base',
    usage: 'Hypothèse irréelle dans le présent ou futur, conseil poli',
    markers: ['if','if I were you','would'],
    examples: [
      { en: 'If I had more time, I would travel more.', fr: 'Si j\'avais plus de temps, je voyagerais davantage.' },
      { en: 'If I were you, I would accept the offer.', fr: 'À ta place, j\'accepterais l\'offre.' },
    ],
    pitfalls: ['"If I was" vs "If I were" : were est préféré à la 1e personne en anglais soutenu'],
    exercise: {
      ifClause: { tense: 'simple-past', label: 'Simple Past' },
      mainClause: { tense: 'would-base', label: 'would + base' },
    },
  },
  {
    id: 'cond-3', label: 'Third Conditional', labelFr: 'Troisième conditionnel', order: 3,
    formula: 'If + past perfect, would have + V3',
    usage: 'Hypothèse irréelle dans le passé, regret',
    markers: ['if','had','would have'],
    examples: [
      { en: 'If I had studied harder, I would have passed.', fr: 'Si j\'avais plus étudié, j\'aurais réussi.' },
      { en: 'She would have called if she had known.',       fr: 'Elle aurait appelé si elle avait su.' },
    ],
    pitfalls: [
      'Structure : If + had + V3, would + have + V3 (deux formes passées)',
      '"Would of" est une faute : toujours "would have"',
    ],
    exercise: {
      ifClause: { tense: 'past-perfect', label: 'Past Perfect' },
      mainClause: { tense: 'would-have-pp', label: 'would have + V3' },
    },
  },
];

// ---- 6) Templates de phrases pour le mode Conjugate -------------

const SENTENCE_TEMPLATES = {
  'simple-present': [
    { tpl: '{S} {V} every day.',            persons: ['I','He','She','They','We'] },
    { tpl: '{S} usually {V} at the weekend.',persons: ['He','She','They','We'] },
    { tpl: '{S} {V} English very well.',    persons: ['She','He','They'] },
    { tpl: '{S} never {V} on Sundays.',     persons: ['I','He','She'] },
    { tpl: '{S} always {V} before breakfast.',persons: ['She','I','We'] },
  ],
  'simple-past': [
    { tpl: '{S} {V} home yesterday.',           persons: ['I','She','They'] },
    { tpl: 'Last week, {S} {V} a new car.',     persons: ['I','He'] },
    { tpl: '{S} {V} to the office this morning.',persons: ['She','We','I'] },
    { tpl: '{S} {V} dinner at 7 pm.',           persons: ['He','They','We'] },
    { tpl: 'Yesterday, {S} {V} the report.',    persons: ['I','She','He'] },
  ],
  'simple-future': [
    { tpl: '{S} {V} the report tomorrow.',       persons: ['I','She','He','They'] },
    { tpl: 'I think {S} {V} on time.',           persons: ['she','he','they'] },
    { tpl: '{S} probably {V} next week.',        persons: ['I','We','She'] },
    { tpl: '{S} {V} you as soon as possible.',   persons: ['I','He','She','We'] },
  ],
  'present-continuous': [
    { tpl: '{S} {V} right now.',                 persons: ['I','He','She','They'] },
    { tpl: '{S} {V} for the exam at the moment.',persons: ['She','I','We'] },
    { tpl: '{S} {V} a book this week.',          persons: ['He','I','She'] },
    { tpl: 'Look! {S} {V} over there.',          persons: ['He','She','They'] },
  ],
  'past-continuous': [
    { tpl: '{S} {V} when I called.',             persons: ['She','He','They'] },
    { tpl: 'At 9 pm, {S} {V} dinner.',           persons: ['I','We','She'] },
    { tpl: '{S} {V} all day long.',              persons: ['I','He','They'] },
    { tpl: 'While {S} {V}, the phone rang.',     persons: ['I','she','he'] },
  ],
  'future-continuous': [
    { tpl: 'At this time tomorrow, {S} {V}.',        persons: ['I','She','He','We'] },
    { tpl: '{S} {V} at 8 pm tonight.',               persons: ['I','She','They'] },
    { tpl: '{S} {V} when you arrive.',               persons: ['He','She','We'] },
  ],
  'present-perfect': [
    { tpl: '{S} just {V}.',                          persons: ['He','She','I','They'] },
    { tpl: '{S} already {V} the report.',            persons: ['I','She','He'] },
    { tpl: '{S} {V} three times this week.',         persons: ['I','She','He'] },
    { tpl: '{S} never {V} sushi.',                   persons: ['I','She','He','They'] },
  ],
  'past-perfect': [
    { tpl: '{S} {V} before I arrived.',              persons: ['She','He','They'] },
    { tpl: 'By the time we left, {S} {V}.',          persons: ['she','he','they'] },
    { tpl: '{S} never {V} that city before.',        persons: ['I','She','He'] },
  ],
  'future-perfect': [
    { tpl: 'By next year, {S} {V}.',                 persons: ['I','She','He','They'] },
    { tpl: '{S} {V} by the time you arrive.',        persons: ['I','We','She'] },
    { tpl: 'By Friday, {S} {V} the project.',        persons: ['I','She','He'] },
  ],
  'present-perfect-continuous': [
    { tpl: '{S} {V} for two hours.',                 persons: ['I','She','He','They'] },
    { tpl: '{S} {V} since this morning.',            persons: ['I','She','We'] },
    { tpl: '{S} {V} all day.',                       persons: ['She','I','They'] },
  ],
  'past-perfect-continuous': [
    { tpl: '{S} {V} for three hours when it stopped.', persons: ['She','I','They'] },
    { tpl: 'Before the break, {S} {V} all morning.',   persons: ['We','I','He'] },
  ],
  'passive-present': [
    { tpl: 'The letters {V} every morning.',           persons: ['The letters'] },
    { tpl: 'English {V} all over the world.',          persons: ['English'] },
    { tpl: 'The report {V} by the team.',              persons: ['The report'] },
  ],
  'passive-past': [
    { tpl: 'The building {V} in 1990.',                persons: ['The building'] },
    { tpl: 'The suspects {V} last night.',             persons: ['The suspects'] },
    { tpl: 'The letter {V} to the wrong address.',     persons: ['The letter'] },
  ],
};

// ---- 7) Phrases pour le mode Recognition (QCM) ------------------

const RECOGNITION_SENTENCES = [
  { en: 'She has been working since 8 a.m.', tense: 'present-perfect-continuous' },
  { en: 'They were playing football when it started raining.', tense: 'past-continuous' },
  { en: 'I will have finished by then.', tense: 'future-perfect' },
  { en: 'He goes to the gym every Monday.', tense: 'simple-present' },
  { en: 'We had already eaten when you called.', tense: 'past-perfect' },
  { en: 'She is writing a report right now.', tense: 'present-continuous' },
  { en: 'They went to Paris last year.', tense: 'simple-past' },
  { en: 'I will call you tomorrow.', tense: 'simple-future' },
  { en: 'He has visited Japan three times.', tense: 'present-perfect' },
  { en: 'At 9 pm, we will be watching the match.', tense: 'future-continuous' },
  { en: 'The report was written by the manager.', tense: 'passive-past' },
  { en: 'Homework is checked every day.', tense: 'passive-present' },
  { en: 'She had been crying for hours when we arrived.', tense: 'past-perfect-continuous' },
  { en: 'I used to play tennis when I was young.', tense: 'used-to' },
  { en: 'He had left before the meeting started.', tense: 'past-perfect' },
  { en: 'They have just arrived.', tense: 'present-perfect' },
  { en: 'It was raining all day yesterday.', tense: 'past-continuous' },
  { en: 'By next month, I will have saved enough money.', tense: 'future-perfect' },
  { en: 'She studies medicine at university.', tense: 'simple-present' },
  { en: 'He has been learning French for two years.', tense: 'present-perfect-continuous' },
];

// ---- 8) Templates pour le mode Transformation -------------------

const TRANSFORMATION_EXERCISES = {
  'affirmative-to-negative': [
    { en: 'She works every day.', answer: 'She doesn\'t work every day.', tense: 'simple-present' },
    { en: 'They went to the party.', answer: 'They didn\'t go to the party.', tense: 'simple-past' },
    { en: 'He will come tomorrow.', answer: 'He won\'t come tomorrow.', tense: 'simple-future' },
    { en: 'She has finished her homework.', answer: 'She hasn\'t finished her homework.', tense: 'present-perfect' },
    { en: 'I was sleeping.', answer: 'I wasn\'t sleeping.', tense: 'past-continuous' },
  ],
  'active-to-passive': [
    { en: 'The chef cooks the meal every day.', answer: 'The meal is cooked every day (by the chef).', tense: 'passive-present' },
    { en: 'They built this bridge in 1950.', answer: 'This bridge was built in 1950.', tense: 'passive-past' },
    { en: 'Someone stole my wallet.', answer: 'My wallet was stolen.', tense: 'passive-past' },
    { en: 'The company produces thousands of cars.', answer: 'Thousands of cars are produced by the company.', tense: 'passive-present' },
  ],
};

// ---- 9) Exercices conditionnels (mode 5) ------------------------

const CONDITIONAL_EXERCISES = [
  {
    type: 'cond-0', label: 'Zero Conditional',
    ifClause: 'If you _____ (heat) ice,',
    mainClause: 'it _____ (melt).',
    ifAnswer: 'heat', mainAnswer: 'melts',
    fr: 'Si tu chauffes la glace, elle fond.',
  },
  {
    type: 'cond-1', label: 'First Conditional',
    ifClause: 'If it _____ (rain) tomorrow,',
    mainClause: 'we _____ (stay) home.',
    ifAnswer: 'rains', mainAnswer: 'will stay',
    fr: 'S\'il pleut demain, on restera à la maison.',
  },
  {
    type: 'cond-1', label: 'First Conditional',
    ifClause: 'If she _____ (study) hard,',
    mainClause: 'she _____ (pass) the exam.',
    ifAnswer: 'studies', mainAnswer: 'will pass',
    fr: 'Si elle travaille dur, elle réussira l\'examen.',
  },
  {
    type: 'cond-2', label: 'Second Conditional',
    ifClause: 'If I _____ (have) more money,',
    mainClause: 'I _____ (buy) a bigger house.',
    ifAnswer: 'had', mainAnswer: 'would buy',
    fr: 'Si j\'avais plus d\'argent, j\'achèterais une plus grande maison.',
  },
  {
    type: 'cond-2', label: 'Second Conditional',
    ifClause: 'If I _____ (be) you,',
    mainClause: 'I _____ (accept) the job.',
    ifAnswer: 'were', mainAnswer: 'would accept',
    fr: 'À ta place, j\'accepterais le travail.',
  },
  {
    type: 'cond-3', label: 'Third Conditional',
    ifClause: 'If she _____ (study) harder,',
    mainClause: 'she _____ (pass) the exam.',
    ifAnswer: 'had studied', mainAnswer: 'would have passed',
    fr: 'Si elle avait plus travaillé, elle aurait réussi.',
  },
  {
    type: 'cond-3', label: 'Third Conditional',
    ifClause: 'If they _____ (leave) earlier,',
    mainClause: 'they _____ (catch) the train.',
    ifAnswer: 'had left', mainAnswer: 'would have caught',
    fr: 'S\'ils étaient partis plus tôt, ils auraient eu le train.',
  },
  {
    type: 'cond-0', label: 'Zero Conditional',
    ifClause: 'If you _____ (mix) blue and yellow,',
    mainClause: 'you _____ (get) green.',
    ifAnswer: 'mix', mainAnswer: 'get',
    fr: 'Si tu mélanges bleu et jaune, tu obtiens du vert.',
  },
  {
    type: 'cond-1', label: 'First Conditional',
    ifClause: 'If you _____ (not hurry),',
    mainClause: 'we _____ (miss) the bus.',
    ifAnswer: 'don\'t hurry', mainAnswer: 'will miss',
    fr: 'Si tu ne te dépêches pas, on va rater le bus.',
  },
  {
    type: 'cond-2', label: 'Second Conditional',
    ifClause: 'If he _____ (speak) Spanish,',
    mainClause: 'he _____ (get) the job.',
    ifAnswer: 'spoke', mainAnswer: 'would get',
    fr: 'S\'il parlait espagnol, il aurait le travail.',
  },
];

// ---- Exports globaux --------------------------------------------

window.IRREGULAR_VERBS   = IRREGULAR_VERBS;
window.REGULAR_VERBS     = REGULAR_VERBS;
window.TENSES            = TENSES;
window.MODALS            = MODALS;
window.CONDITIONALS      = CONDITIONALS;
window.SENTENCE_TEMPLATES= SENTENCE_TEMPLATES;
window.RECOGNITION_SENTENCES = RECOGNITION_SENTENCES;
window.TRANSFORMATION_EXERCISES = TRANSFORMATION_EXERCISES;
window.CONDITIONAL_EXERCISES = CONDITIONAL_EXERCISES;
