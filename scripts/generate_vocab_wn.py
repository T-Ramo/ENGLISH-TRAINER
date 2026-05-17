from pathlib import Path
import re
from collections import Counter
from deep_translator import GoogleTranslator
from wordfreq import zipf_frequency
from nltk.corpus import wordnet as wn

PREPOSITIONS = {'in','on','at','by','for','from','to','with','about','against','between','among','during','through','over','under','above','below','across','behind','beyond','near','around','inside','outside','within','without','toward','towards','until','since','throughout','amid','amidst','onto','off','per','as','than','via','past','along','beside'}
CONJUNCTIONS = {'and','or','but','so','because','although','though','if','when','while','whereas','unless','once','after','before','since','until','provided','that','nor','yet','either','neither'}
DETERMINERS = {'a','an','the','this','that','these','those','my','your','his','her','its','our','their','some','any','no','all','both','each','every','another','such','own'}
PRONOUNS = {'i','you','he','she','it','we','they','me','him','her','us','them','who','whom','what','which','whose','someone','somebody','something','anyone','anybody','anything','everyone','everybody','everything','nobody','nothing','myself','yourself','himself','herself','itself','ourselves','themselves','yours','ours','mine','his','hers','their','our'}
ADV_WORDS = {'not','never','always','often','usually','sometimes','already','yet','still','just','really','very','too','quite','almost','rather','instead','however','therefore','meanwhile','soon','today','tomorrow','yesterday','ago','here','there','anymore','anywhere','anyhow','anyway','else','elsewhere','together','apart','around','forward','back','well','better','almost','probably','surely','really','nearly','enough','even','perhaps','maybe','actually','literally','especially','ever'}
KNOWN_ADJS = {'good','bad','big','small','young','old','happy','sad','beautiful','new','great','hard','easy','important','possible','likely','real','certain','different','final','first','last','right','wrong','whole','public','private','special','social','political','personal','common','international','national','local','simple','complex','dark','light','long','short','early','late','weak','strong','full','empty','hot','cold','clean','dirty','fast','slow','free','safe','serious','modern','traditional','active','similar','nervous','calm','healthy','sick','rich','poor','famous','quiet','noisy','legal','illegal','fresh','patient','angry','nice','difficult','interesting','expensive','cheap','comfortable','uncomfortable','powerful','dangerous','useful','useless'}
KNOWN_NOUNS = {'baby','family','court','home','course','idea','life','world','children','person','people','place','work','day','man','woman','child','time','year','way','week','government','company','problem','system','program','question','fact','business','information','room','story','water','money','policy','market','service','order','food','car','city','job','school','state','health','law','love','music','art','country','friend','game','movie','history','example','study','religion','research','community','nature','science','change','experience','project','technology','office','travel','blood','body','hand','eye','head','door','house','room','bed','chair','table','window','food','drink'}
FRENCH_NOUN_PREFIXES = ('un ', 'une ', 'le ', 'la ', 'les ', 'des ', 'du ', "de l'", 'au ', 'aux ')


def normalize_fr(fr: str) -> str:
    fr = fr.strip()
    fr = fr.replace('’', "'").replace('‘', "'")
    fr = re.sub(r'\s*,\s*', ', ', fr)
    fr = re.sub(r'\s+', ' ', fr)
    return fr.lower()


def starts_french_noun(fr: str) -> bool:
    return any(fr.startswith(prefix) for prefix in FRENCH_NOUN_PREFIXES) or bool(re.search(r'(tion|ment|ence|ance|ité|isme|age|ure|tude|ade|aire|eur|eau|ette|ie|ion|ique|oire|ude|ée)$', fr))


def is_french_verb(fr: str) -> bool:
    return bool(re.search(r'^(se |s\'|s’)?[a-zàâäéèêëîïôöùûüç ]+(er|ir|re)$', fr))


def is_french_adj(fr: str) -> bool:
    return bool(re.search(r'(ique|eux|euse|if|ive|ant|ent|aire|ien|ais|aise|ible|able|iste)$', fr))


def detect_pos(en: str, fr: str) -> str:
    e = en.lower()
    fr = fr.lower()
    if e in DETERMINERS:
        return 'det'
    if e in PRONOUNS:
        return 'pron'
    if e in CONJUNCTIONS:
        return 'conj'
    if e in PREPOSITIONS:
        return 'prep'
    if e in ADV_WORDS or (e.endswith('ly') and wn.synsets(e, pos=wn.ADV)):
        return 'adv'
    if starts_french_noun(fr):
        return 'n'
    if e in KNOWN_ADJS:
        return 'adj'
    if e in KNOWN_NOUNS:
        return 'n'
    noun_syn = wn.synsets(e, pos=wn.NOUN)
    verb_syn = wn.synsets(e, pos=wn.VERB)
    adj_syn = wn.synsets(e, pos=wn.ADJ) + wn.synsets(e, pos=wn.ADJ_SAT)
    if verb_syn and not noun_syn:
        return 'v'
    if noun_syn and not verb_syn:
        return 'n'
    if adj_syn and not noun_syn and not verb_syn:
        return 'adj'
    if noun_syn and verb_syn:
        if starts_french_noun(fr):
            return 'n'
        if is_french_adj(fr):
            return 'adj'
        # bias noun for gerund-like forms
        if en.endswith('ing') and len(noun_syn) >= len(verb_syn):
            return 'n'
        return 'v' if len(verb_syn) >= len(noun_syn) else 'n'
    if verb_syn:
        return 'v'
    if noun_syn:
        return 'n'
    if adj_syn:
        return 'adj'
    return 'n'


def theme_for(en: str, pos: str, fr: str) -> str:
    e = en.lower()
    if pos in {'det', 'pron', 'prep', 'conj'}:
        return 'connectors'
    if pos == 'v':
        if any(k in e for k in ['travel', 'fly', 'drive', 'ride', 'arrive', 'depart', 'land', 'leave', 'book', 'pack', 'stay', 'visit', 'return', 'go', 'journey', 'road', 'trip', 'route']):
            return 'travel'
        if any(k in e for k in ['work', 'manage', 'lead', 'hire', 'fire', 'train', 'sell', 'buy', 'pay', 'earn', 'meet', 'report', 'plan', 'organize', 'develop', 'market', 'offer', 'receive', 'deliver', 'support', 'teach', 'study', 'build', 'create', 'design', 'produce', 'serve', 'order', 'cook', 'bake', 'boil', 'fry', 'taste']):
            return 'work'
        if any(k in e for k in ['heal', 'treat', 'diagnose', 'care', 'cure', 'operate', 'prescribe', 'nurse', 'injure', 'pain', 'doctor', 'hospital', 'clinic', 'medic', 'health']):
            return 'body'
        if any(k in e for k in ['eat', 'drink', 'cook', 'taste', 'serve', 'order', 'bake', 'boil', 'fry']):
            return 'food'
        if any(k in e for k in ['feel', 'love', 'hate', 'fear', 'worry', 'believe', 'hope', 'want', 'need', 'miss', 'enjoy', 'cry', 'laugh', 'smile']):
            return 'feelings'
        return 'verbs'
    if pos == 'adj':
        if e in {'happy', 'sad', 'angry', 'afraid', 'scared', 'proud', 'jealous', 'anxious', 'worried', 'nervous', 'surprised'}:
            return 'feelings'
        return 'basic'
    if pos == 'adv':
        if e in {'today', 'tomorrow', 'yesterday', 'soon', 'now', 'later', 'still', 'already', 'yet', 'always', 'often', 'usually', 'sometimes', 'never'}:
            return 'time'
        if any(k in e for k in ['here', 'there', 'away', 'back', 'forward', 'outside', 'inside']):
            return 'travel'
        return 'basic'
    if pos == 'n':
        if e in {'man', 'woman', 'child', 'boy', 'girl', 'mother', 'father', 'parent', 'baby', 'friend', 'family', 'husband', 'wife', 'son', 'daughter', 'brother', 'sister', 'teacher', 'student', 'doctor', 'nurse', 'boss', 'manager', 'employee', 'worker', 'client', 'customer', 'actor', 'author', 'artist', 'pilot', 'soldier', 'police', 'officer', 'singer', 'writer', 'athlete', 'guest', 'driver', 'owner', 'player', 'leader', 'president', 'secretary'}:
            return 'people'
        if e in {'head', 'heart', 'hand', 'eye', 'mouth', 'foot', 'leg', 'arm', 'back', 'neck', 'ear', 'nose', 'tooth', 'skin', 'hair', 'blood', 'bone', 'brain', 'disease', 'hospital', 'medicine', 'patient', 'pain', 'surgery', 'clinic', 'health', 'illness', 'virus', 'vaccine', 'abortion'}:
            return 'body'
        if e in {'food', 'drink', 'water', 'bread', 'meat', 'fish', 'coffee', 'tea', 'milk', 'fruit', 'vegetable', 'rice', 'soup', 'chocolate', 'wine', 'beer', 'sugar', 'salt', 'dinner', 'lunch', 'breakfast', 'restaurant', 'apple', 'banana', 'pizza', 'cake', 'egg', 'cheese', 'butter', 'sauce', 'meal', 'recipe'}:
            return 'food'
        if e in {'house', 'home', 'room', 'bed', 'chair', 'table', 'door', 'window', 'kitchen', 'bathroom', 'bedroom', 'floor', 'ceiling', 'wall', 'roof', 'furniture', 'clothes', 'shirt', 'pants', 'shoe', 'cup', 'plate'}:
            return 'home'
        if e in {'city', 'country', 'road', 'street', 'train', 'plane', 'airport', 'station', 'hotel', 'travel', 'trip', 'journey', 'ticket', 'map', 'car', 'bus', 'boat', 'ship', 'flight', 'border'}:
            return 'travel'
        if e in {'year', 'month', 'week', 'day', 'hour', 'minute', 'second', 'morning', 'afternoon', 'evening', 'night'}:
            return 'time'
        if e in {'joy', 'love', 'hate', 'fear', 'anger', 'stress', 'hope', 'dream', 'friendship'}:
            return 'feelings'
        if e in {'tree', 'flower', 'animal', 'rain', 'snow', 'wind', 'mountain', 'river', 'sea', 'ocean', 'forest', 'weather', 'sun', 'moon', 'earth', 'cloud', 'grass', 'bird', 'dog', 'cat', 'fish', 'plant', 'rock', 'lake', 'beach', 'garden', 'field'}:
            return 'nature'
        if e in {'computer', 'data', 'system', 'technology', 'software', 'hardware', 'internet', 'network', 'phone', 'mobile', 'email', 'device', 'robot', 'machine', 'camera', 'code', 'app'}:
            return 'tech'
        return 'abstract'
    return 'abstract'


def load_rows(path: Path):
    lines = path.read_text(encoding='utf-8').splitlines()
    rows = []
    for line in lines:
        if not line.strip().startswith('|'):
            continue
        if re.match(r'\|\s*-+\s*\|', line):
            continue
        parts = [p.strip() for p in line.strip().strip('|').split('|')]
        if len(parts) >= 1 and parts[0] and parts[0] != '---':
            if len(parts) == 1:
                parts.append('')
            rows.append((parts[0].strip(), parts[1].strip()))
    return rows


def translate_blanks(rows):
    translator = GoogleTranslator(source='en', target='fr')
    blanks = [en.lower() for en, fr in rows if not fr.strip()]
    translations = []
    for i in range(0, len(blanks), 50):
        translations.extend(translator.translate_batch(blanks[i:i+50]))
    return dict(zip(blanks, [t.lower() for t in translations]))


def make_vocab(rows, trans_map):
    entries = []
    counts = Counter()
    for en, fr in rows:
        fr_norm = normalize_fr(fr) if fr.strip() else normalize_fr(trans_map[en.lower()])
        pos = detect_pos(en.lower(), fr_norm)
        tier = 1 if zipf_frequency(en.lower(), 'en') >= 5.2 else 2 if zipf_frequency(en.lower(), 'en') >= 4.6 else 3
        theme = theme_for(en.lower(), pos, fr_norm)
        base = re.sub(r"[^a-z0-9-]", '', en.lower().replace("'", '').replace(' ', '-').replace('/', '-'))
        counts[base] += 1
        entries.append({'en': en.lower(), 'fr': fr_norm, 'pos': pos, 'tier': tier, 'theme': theme, 'base': base})
    for item in entries:
        item['id'] = item['base'] if counts[item['base']] == 1 else f"{item['base']}-{item['pos']}"
    entries.sort(key=lambda x: (x['tier'], ['basic','people','body','food','home','work','travel','time','feelings','nature','tech','abstract','verbs','connectors'].index(x['theme']), x['en']))
    return entries


def write_js(entries, path: Path):
    lines = ['const VOCAB = [']
    for item in entries:
        lines.append(f"  {{ id: '{item['id']}', en: '{item['en']}', fr: '{item['fr']}', pos: '{item['pos']}', tier: {item['tier']}, theme: '{item['theme']}' }},")
    lines.append('];')
    path.write_text('\n'.join(lines) + '\n', encoding='utf-8')


if __name__ == '__main__':
    source = Path('vocab-list.md')
    rows = load_rows(source)
    trans_map = translate_blanks(rows)
    entries = make_vocab(rows, trans_map)
    write_js(entries, Path('data/vocab.wn3.js'))
    print('wrote', len(entries), 'entries')
