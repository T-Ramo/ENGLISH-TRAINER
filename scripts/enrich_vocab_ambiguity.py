#!/usr/bin/env python3
"""
Enrich vocab.js — disambiguation via Mistral API
-------------------------------------------------
Pour chaque groupe de mots ayant la même traduction française,
Mistral détermine :
  - hint   : contexte court en français à afficher pendant l'exercice
  - accept : liste de réponses anglaises toutes valides (synonymes exacts)

Usage :
    MISTRAL_API_KEY=xxx python3 scripts/enrich_vocab_ambiguity.py
    MISTRAL_API_KEY=xxx python3 scripts/enrich_vocab_ambiguity.py --dry-run
    MISTRAL_API_KEY=xxx python3 scripts/enrich_vocab_ambiguity.py --apply
"""

import json
import os
import re
import sys
import time
import argparse
from collections import defaultdict

try:
    from mistralai.client.sdk import Mistral
except ImportError:
    print("Missing dependency: pip install mistralai")
    sys.exit(1)

VOCAB_FILE = os.path.join(os.path.dirname(__file__), "..", "data", "vocab.js")
OUT_FILE   = os.path.join(os.path.dirname(__file__), "..", "data", "vocab_patch.json")

# ── Parse vocab.js ────────────────────────────────────────────────────────────

def load_vocab(path):
    """Extract the VOCAB array from the JS file using regex + json.loads."""
    text = open(path, encoding="utf-8").read()
    # Isoler le tableau VOCAB=[...]
    m = re.search(r'const VOCAB\s*=\s*(\[.*?\]);', text, re.DOTALL)
    if not m:
        raise ValueError("Cannot find VOCAB array in vocab.js")
    raw = m.group(1)
    # Convertir les clés JS sans guillemets en JSON valide
    raw = re.sub(r'(\n\s*)//[^\n]*', '', raw)            # strip // comments
    raw = re.sub(r',\s*\]', ']', raw)                     # trailing commas
    raw = re.sub(r',\s*\}', '}', raw)                     # trailing commas obj
    raw = re.sub(r'([{,]\s*)(\w+)(\s*:)', r'\1"\2"\3', raw)  # quote keys
    raw = raw.replace("'", '"')                            # single → double quotes
    try:
        return json.loads(raw)
    except json.JSONDecodeError as e:
        print(f"JSON parse error: {e}")
        # Fallback: eval via node
        return None


def load_vocab_node(path):
    """Fallback: use node to dump VOCAB as JSON."""
    import subprocess
    script = f"""
const fs = require('fs');
let code = fs.readFileSync('{path}', 'utf8');
code = code.replace(/window\\.[\\w]+ = [\\w]+;?/g, '');
eval(code.replace('const THEMES','var THEMES').replace('const VOCAB','var VOCAB'));
process.stdout.write(JSON.stringify(VOCAB));
"""
    result = subprocess.run(["node", "-e", script], capture_output=True, text=True)
    if result.returncode != 0:
        raise RuntimeError(result.stderr)
    return json.loads(result.stdout)


def find_ambiguous_groups(vocab):
    """Return dict: fr_translation → list of word dicts sharing it."""
    groups = defaultdict(list)
    for w in vocab:
        key = w["fr"].strip().lower()
        groups[key].append(w)
    return {k: v for k, v in groups.items() if len(v) > 1}


# ── Mistral call ──────────────────────────────────────────────────────────────

SYSTEM_PROMPT = """
You are a bilingual English-French lexicographer helping build a vocabulary learning app.
You will receive groups of English words that share the same French translation.
For each word in each group, you must decide:

1. hint (string, French, max 35 chars): A SHORT disambiguation context shown to learners.
   Use it when words are NOT perfect synonyms and context is needed to tell them apart.
   Keep it extremely concise: "(taille)", "(hauteur)", "(volume fort)", "(degré élevé)", etc.
   Set hint to null when no disambiguation is needed.

2. accept (array of strings or null): List ALL English words in the group that are
   genuinely interchangeable synonyms and should be accepted as correct for ANY of them.
   Include the word itself in the list.
   Set accept to null when the words are NOT interchangeable (they need distinct hints).

Rules:
- If words are TRUE synonyms (e.g. "great"/"super"), set accept=[all of them], hint=null.
- If words are CONTEXT-DEPENDENT (e.g. "big"/"large"/"tall"), set hint for each, accept=null.
- Some words may be partially interchangeable — use your judgment.
- Return ONLY valid JSON, no explanation.

Output format (array, one entry per word):
[
  {"id": "word-id", "hint": "string or null", "accept": ["en1","en2"] or null},
  ...
]
"""

def call_mistral(client, groups_batch, dry_run=False):
    """Send a batch of ambiguous groups to Mistral and return parsed JSON."""
    if dry_run:
        # Return dummy data for testing
        result = []
        for words in groups_batch:
            for w in words:
                result.append({"id": w["id"], "hint": None, "accept": None})
        return result

    prompt_data = []
    for words in groups_batch:
        prompt_data.append({
            "fr": words[0]["fr"],
            "words": [{"id": w["id"], "en": w["en"], "pos": w.get("pos",""), "example": w.get("example","")} for w in words]
        })

    user_msg = json.dumps(prompt_data, ensure_ascii=False, indent=2)

    response = client.chat.complete(
        model="mistral-small-latest",
        messages=[
            {"role": "system", "content": SYSTEM_PROMPT},
            {"role": "user",   "content": user_msg}
        ],
        temperature=0.1,
        max_tokens=2000,
    )

    raw = response.choices[0].message.content.strip()
    # Extract JSON array from response
    m = re.search(r'\[.*\]', raw, re.DOTALL)
    if not m:
        raise ValueError(f"No JSON array found in response:\n{raw}")
    return json.loads(m.group(0))


# ── Apply patch to vocab.js ───────────────────────────────────────────────────

def apply_patch(vocab_path, patch):
    """Inject hint and accept fields into vocab.js source."""
    text = open(vocab_path, encoding="utf-8").read()
    applied = 0

    for entry in patch:
        wid   = entry["id"]
        hint  = entry.get("hint")
        accept = entry.get("accept")

        if not hint and not accept:
            continue

        # Find the object for this id and inject fields
        # Pattern: { id: "wid", ... }  — we add after the `fr:` field
        pattern = rf'(\{{ id: "{re.escape(wid)}",[^\}}]+?\}})'

        def replacer(m):
            obj = m.group(1)
            # Don't add if already present
            if '"hint"' in obj or 'hint:' in obj:
                return obj
            additions = ""
            if hint:
                additions += f', hint: "{hint}"'
            if accept:
                accept_str = json.dumps(accept, ensure_ascii=False)
                additions += f', accept: {accept_str}'
            # Insert before the closing }
            return obj[:-1] + additions + "}"

        new_text, count = re.subn(pattern, replacer, text, flags=re.DOTALL)
        if count:
            text = new_text
            applied += 1

    open(vocab_path, "w", encoding="utf-8").write(text)
    print(f"  Applied {applied} patches to {vocab_path}")


# ── Main ──────────────────────────────────────────────────────────────────────

def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--dry-run", action="store_true", help="Don't call the API, just test the pipeline")
    parser.add_argument("--apply",   action="store_true", help="Apply the patch to vocab.js after generating it")
    parser.add_argument("--batch-size", type=int, default=15, help="Groups per API call (default 15)")
    parser.add_argument("--limit",   type=int, default=0, help="Limit number of groups (for testing)")
    args = parser.parse_args()

    api_key = os.environ.get("MISTRAL_API_KEY")
    if not api_key and not args.dry_run:
        print("Error: MISTRAL_API_KEY not set.")
        print("Run: MISTRAL_API_KEY=your_key python3 scripts/enrich_vocab_ambiguity.py")
        sys.exit(1)

    # Load vocab
    print("Loading vocab.js …")
    vocab = load_vocab_node(VOCAB_FILE)
    print(f"  {len(vocab)} words loaded.")

    # Find ambiguous groups
    groups = find_ambiguous_groups(vocab)
    group_list = list(groups.values())
    if args.limit:
        group_list = group_list[:args.limit]
    print(f"  {len(group_list)} ambiguous French translation groups found.")

    # Init Mistral client
    client = None
    if not args.dry_run:
        client = Mistral(api_key=api_key)

    # Process in batches
    all_patches = []
    batch_size  = args.batch_size
    total_batches = (len(group_list) + batch_size - 1) // batch_size

    for i in range(0, len(group_list), batch_size):
        batch_num = i // batch_size + 1
        batch = group_list[i:i+batch_size]
        words_in_batch = sum(len(g) for g in batch)
        print(f"  Batch {batch_num}/{total_batches} — {len(batch)} groups, {words_in_batch} words …", end=" ", flush=True)

        try:
            result = call_mistral(client, batch, dry_run=args.dry_run)
            all_patches.extend(result)
            print(f"OK ({len(result)} entries)")
        except Exception as e:
            print(f"ERROR: {e}")
            # Save progress so far and continue
            continue

        if not args.dry_run:
            time.sleep(0.5)  # rate limit courtesy

    # Save patch file
    print(f"\nSaving patch → {OUT_FILE}")
    with open(OUT_FILE, "w", encoding="utf-8") as f:
        json.dump(all_patches, f, ensure_ascii=False, indent=2)

    # Stats
    hints_count   = sum(1 for p in all_patches if p.get("hint"))
    accepts_count = sum(1 for p in all_patches if p.get("accept"))
    print(f"  {hints_count} words get a hint")
    print(f"  {accepts_count} words get an accept list (synonyms)")
    print(f"  {len(all_patches) - hints_count - accepts_count} words unchanged")

    if args.apply:
        print(f"\nApplying patch to vocab.js …")
        apply_patch(VOCAB_FILE, all_patches)
        print("Done. Review the changes with: git diff data/vocab.js")
    else:
        print(f"\nPatch saved to {OUT_FILE}.")
        print("Review it, then run with --apply to inject into vocab.js.")
        print("Or apply manually: python3 scripts/enrich_vocab_ambiguity.py --apply")


if __name__ == "__main__":
    main()
