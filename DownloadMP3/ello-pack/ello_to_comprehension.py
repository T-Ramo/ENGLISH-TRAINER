#!/usr/bin/env python3
"""
ELLLO catalog → English Trainer COMPREHENSION_DATA
===================================================

Convertit le catalog.json produit par ello_downloader.py en un fichier JS
prêt à coller dans `data/comprehension.js`.

⚠ Limitation : la GÉNÉRATION DES QUESTIONS QCM ne peut pas être faite par ce
script (il faudrait un LLM pour ça). Le script produit donc le squelette
des supports avec leur transcript et un placeholder pour les questions.

→ 2 options ensuite pour générer les questions :
   1. Coller chaque transcript dans Claude/Copilot avec ce prompt :
      "Génère 3 questions QCM TOEIC-style sur ce dialogue, format : {prompt, options[4], correctAnswer, explanation}"
   2. Utiliser un script avec l'API OpenAI/Anthropic (voir generate_questions.py)

USAGE
-----
    python3 ello_to_comprehension.py ello_b2/catalog.json --out data/comprehension-ello.js
"""

import argparse
import json
import re
from pathlib import Path


def estimate_tier(transcript: str, section: str) -> int:
    """Estime le tier (1/2/3) selon section et longueur."""
    word_count = len(transcript.split())
    if section in ("views", "level7"):
        return 3 if word_count > 300 else 2
    if section == "mixer":
        return 2
    return 2  # default B2


def parse_transcript_to_segments(transcript: str) -> list[dict]:
    """
    Découpe un transcript en segments [speaker, text].
    ELLLO marque souvent les speakers par "Speaker:" ou "Tim:" en début de ligne.
    """
    segments = []
    lines = [l.strip() for l in transcript.split("\n") if l.strip()]

    # Détection d'un marqueur "Name:" en début de ligne
    speaker_re = re.compile(r"^([A-Z][a-zA-Z]{1,15})\s*:\s*(.+)$")
    current_speaker = None
    current_text = []

    for line in lines:
        m = speaker_re.match(line)
        if m:
            # Flush du segment précédent
            if current_speaker and current_text:
                segments.append({
                    "speaker": current_speaker,
                    "text": " ".join(current_text).strip()
                })
            current_speaker = m.group(1)
            current_text = [m.group(2)]
        else:
            if current_speaker:
                current_text.append(line)
            else:
                # Pas de speaker détecté : on traite comme monologue
                segments.append({"speaker": "Speaker", "text": line})

    if current_speaker and current_text:
        segments.append({
            "speaker": current_speaker,
            "text": " ".join(current_text).strip()
        })

    return segments


def speakers_from_segments(segments: list[dict]) -> list[dict]:
    """Construit la liste des speakers uniques (max 4)."""
    seen = {}
    voices = ["female", "male", "female", "male"]
    accents = ["en-US", "en-US", "en-GB", "en-AU"]
    for seg in segments:
        name = seg["speaker"]
        if name not in seen:
            i = len(seen)
            seen[name] = {
                "id": chr(ord("A") + i),
                "label": name,
                "voice": voices[i % 4],
                "accent": accents[i % 4],
            }
    return list(seen.values())


def normalize_segments_with_speakers(segments, speakers):
    """Remplace les noms par les IDs A/B/C/D."""
    name_to_id = {s["label"]: s["id"] for s in speakers}
    return [
        {"speaker": name_to_id.get(seg["speaker"], "A"), "text": seg["text"]}
        for seg in segments
    ]


def build_support(meta: dict, transcripts_root: Path) -> dict:
    """Construit un objet support au format COMPREHENSION_DATA."""
    transcript_path = transcripts_root / meta["local_transcript"]
    transcript = transcript_path.read_text(encoding="utf-8") if transcript_path.exists() else ""

    segments = parse_transcript_to_segments(transcript)
    speakers = speakers_from_segments(segments)
    transcript_list = normalize_segments_with_speakers(segments, speakers)

    is_monologue = len(speakers) == 1
    fmt = "monologue" if is_monologue else ("long-dialogue" if len(transcript_list) > 8 else "dialogue")

    word_count = len(transcript.split())
    duration_estimate = max(20, word_count // 2)  # ~2 mots/sec

    return {
        "id": meta["id"],
        "type": "listening",
        "format": fmt,
        "tier": estimate_tier(transcript, meta["section"]),
        "title": meta["title"],
        "context": meta.get("topic", "")[:120],
        "duration_estimate": duration_estimate,
        "audioUrl": "./audio/" + meta["local_mp3"],  # chemin pour ton repo
        "source": meta.get("source_url"),
        "speakers": speakers,
        "transcript": transcript_list,
        "showTranscriptAfter": True,
        "questions": [
            {
                "id": "q1",
                "prompt": "TODO — generate question 1",
                "options": ["Option A", "Option B", "Option C", "Option D"],
                "correctAnswer": "Option A",
                "explanation": "TODO — explanation",
                "points": 10,
            }
        ]  # placeholder, à remplir avec un LLM
    }


def main():
    p = argparse.ArgumentParser()
    p.add_argument("catalog", help="Chemin vers catalog.json produit par ello_downloader.py")
    p.add_argument("--out", default="data/comprehension-ello.js")
    args = p.parse_args()

    catalog_path = Path(args.catalog).resolve()
    transcripts_root = catalog_path.parent

    catalog = json.loads(catalog_path.read_text(encoding="utf-8"))
    print(f"📚 {len(catalog)} supports à convertir")

    supports = []
    for meta in catalog:
        try:
            supports.append(build_support(meta, transcripts_root))
        except Exception as e:
            print(f"  ✗ {meta['id']} : {e}")

    # Génère le fichier JS
    out_path = Path(args.out)
    out_path.parent.mkdir(parents=True, exist_ok=True)

    js = "/* AUTO-GENERATED from ELLLO.org catalog */\n"
    js += "/* Questions QCM à compléter manuellement ou via LLM */\n\n"
    js += "const COMPREHENSION_DATA_ELLO = " + json.dumps(supports, indent=2, ensure_ascii=False) + ";\n\n"
    js += "if (typeof window !== 'undefined') window.COMPREHENSION_DATA_ELLO = COMPREHENSION_DATA_ELLO;\n"

    out_path.write_text(js, encoding="utf-8")
    print(f"✓ Écrit : {out_path}")
    print(f"\nProchaine étape : générer les questions QCM pour chaque support.")
    print(f"   Option 1 : à la main via Claude/Copilot")
    print(f"   Option 2 : via API (voir script generate_questions.py)")


if __name__ == "__main__":
    main()
