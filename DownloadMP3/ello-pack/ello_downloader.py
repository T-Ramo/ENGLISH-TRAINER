#!/usr/bin/env python3
"""
ELLLO Downloader — B2+ audios + transcripts
============================================
Télécharge automatiquement les audios anglais B2/C1 d'ELLLO.org pour
usage personnel/éducatif uniquement.

Niveau dans ELLLO :
  Level 1-3 : A1-A2 (débutant)
  Level 4-5 : B1 (intermédiaire)
  Level 6-7 : B2 (intermédiaire avancé)        ← cible
  Mixer    : B2-C1 (locuteurs multi-accents)   ← cible
  Views    : B2-C1 (vues étendues sur un sujet) ← cible

USAGE
-----
    python3 ello_downloader.py
    python3 ello_downloader.py --section mixer --max 50
    python3 ello_downloader.py --section views --max 30
    python3 ello_downloader.py --section level7 --max 100

Installe d'abord les dépendances :
    pip install requests beautifulsoup4 tqdm

OUTPUT
------
./ello_b2/
    mixer/
        001/
            audio.mp3
            transcript.txt
            metadata.json
        002/
            ...
    views/
        ...
    level7/
        ...
    catalog.json          ← index global pour intégration English Trainer
"""

import argparse
import json
import os
import re
import time
from pathlib import Path
from urllib.parse import urljoin

import requests
from bs4 import BeautifulSoup
from tqdm import tqdm

# ============================================================
# CONFIG
# ============================================================

BASE_URL = "https://www.elllo.org"

# Pages d'index ELLLO par section (niveau B2+)
# Chaque section a un format de page différent ; on les gère un par un
SECTIONS = {
    "mixer":  "https://elllo.org/english/Mixer.htm",   # multi-speakers B2/C1
    "views":  "https://elllo.org/english/Views.htm",   # vues étendues B2/C1
    "level6": "https://elllo.org/english/Levels/L6.htm", # niveau 6 = B2
    "level7": "https://elllo.org/english/Levels/L7.htm", # niveau 7 = B2/C1
}

HEADERS = {
    "User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 "
                  "(KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
    "Accept-Language": "en-US,en;q=0.9",
}

# Respecter le serveur : pause entre 2 requêtes
DELAY_BETWEEN = 1.5  # secondes


# ============================================================
# UTILITAIRES
# ============================================================

def safe_filename(s: str) -> str:
    """Convertit une chaîne en nom de fichier sûr."""
    s = re.sub(r"[^\w\s-]", "", s).strip()
    s = re.sub(r"[-\s]+", "-", s)
    return s.lower()[:60]


def fetch(url: str, retries: int = 3) -> requests.Response:
    """GET avec retry et délai poli."""
    for attempt in range(retries):
        try:
            r = requests.get(url, headers=HEADERS, timeout=30)
            r.raise_for_status()
            time.sleep(DELAY_BETWEEN)
            return r
        except requests.RequestException as e:
            if attempt == retries - 1:
                raise
            print(f"  ⚠ retry {attempt+1}/{retries} for {url}: {e}")
            time.sleep(3)


def extract_lesson_links(index_url: str) -> list[str]:
    """Récupère la liste des URL de leçons depuis une page d'index ELLLO."""
    r = fetch(index_url)
    soup = BeautifulSoup(r.text, "html.parser")
    links = set()
    for a in soup.find_all("a", href=True):
        href = a["href"]
        # Les leçons ELLLO sont typiquement des pages comme T_1234.htm,
        # M_1234.htm (mixer), V_1234.htm (views), etc.
        if re.search(r"/[TMVL]_?\d+\.htm$", href) or re.search(r"\d{3,4}\.htm$", href):
            full = urljoin(index_url, href)
            links.add(full)
    return sorted(links)


def parse_lesson_page(lesson_url: str) -> dict | None:
    """
    Extrait d'une page leçon ELLLO :
      - titre
      - URL du MP3
      - transcript
      - speakers (si listables)
    Retourne None si extraction échoue.
    """
    try:
        r = fetch(lesson_url)
    except Exception as e:
        print(f"  ✗ skip {lesson_url}: {e}")
        return None

    soup = BeautifulSoup(r.text, "html.parser")

    # --- Titre ---
    title_tag = soup.find("h1") or soup.find("title")
    title = title_tag.get_text(strip=True) if title_tag else "untitled"
    title = re.sub(r"\s*\|\s*ELLLO.*$", "", title).strip()

    # --- MP3 URL ---
    # ELLLO embarque le MP3 via différents patterns. On cherche large.
    mp3_url = None
    # 1) Balise <audio> ou <source>
    audio = soup.find("audio")
    if audio:
        src = audio.get("src") or (audio.find("source") and audio.find("source").get("src"))
        if src:
            mp3_url = urljoin(lesson_url, src)
    # 2) Lien direct dans la page
    if not mp3_url:
        for a in soup.find_all("a", href=True):
            if a["href"].lower().endswith(".mp3"):
                mp3_url = urljoin(lesson_url, a["href"])
                break
    # 3) Pattern dans le HTML brut (parfois inline JS)
    if not mp3_url:
        m = re.search(r'["\']([^"\']+\.mp3)["\']', r.text)
        if m:
            mp3_url = urljoin(lesson_url, m.group(1))

    if not mp3_url:
        return None

    # --- Transcript ---
    # ELLLO met souvent le transcript dans un <div id="transcript"> ou
    # une section avec "Transcript" en titre. On essaye plusieurs sélecteurs.
    transcript = ""
    for selector in ["#transcript", ".transcript", "#trans", "div.script"]:
        node = soup.select_one(selector)
        if node:
            transcript = node.get_text("\n", strip=True)
            break
    # Fallback : on prend tout le texte central
    if not transcript:
        main = soup.find("main") or soup.find("article") or soup
        # On ne garde que les paragraphes (souvent les répliques)
        paras = main.find_all("p")
        transcript = "\n\n".join(p.get_text(strip=True) for p in paras if len(p.get_text(strip=True)) > 20)

    # --- Difficulté / topic si dispo ---
    topic = ""
    topic_tag = soup.find("meta", {"name": "description"})
    if topic_tag:
        topic = topic_tag.get("content", "").strip()

    return {
        "lesson_url": lesson_url,
        "title": title,
        "mp3_url": mp3_url,
        "transcript": transcript,
        "topic": topic,
    }


def download_mp3(url: str, dest: Path) -> bool:
    """Télécharge un MP3 en streaming."""
    try:
        r = requests.get(url, headers=HEADERS, timeout=60, stream=True)
        r.raise_for_status()
        with open(dest, "wb") as f:
            for chunk in r.iter_content(chunk_size=8192):
                if chunk:
                    f.write(chunk)
        return True
    except Exception as e:
        print(f"  ✗ download failed: {e}")
        if dest.exists():
            dest.unlink()
        return False


# ============================================================
# MAIN
# ============================================================

def process_section(section: str, max_lessons: int, output_root: Path) -> list[dict]:
    """Traite une section complète : index → leçons → MP3 + transcripts."""
    if section not in SECTIONS:
        raise ValueError(f"Section inconnue : {section}. Options : {list(SECTIONS)}")

    print(f"\n{'='*60}")
    print(f"  SECTION : {section}")
    print(f"{'='*60}")

    index_url = SECTIONS[section]
    print(f"  → Index : {index_url}")

    section_dir = output_root / section
    section_dir.mkdir(parents=True, exist_ok=True)

    print("  → Récupération de la liste des leçons…")
    lesson_urls = extract_lesson_links(index_url)
    print(f"  → {len(lesson_urls)} leçons trouvées")

    if max_lessons:
        lesson_urls = lesson_urls[:max_lessons]
        print(f"  → Limité aux {len(lesson_urls)} premières")

    results = []
    for i, url in enumerate(tqdm(lesson_urls, desc=f"  {section}"), start=1):
        data = parse_lesson_page(url)
        if not data:
            continue

        lesson_id = f"{section}-{i:03d}"
        lesson_dir = section_dir / f"{i:03d}-{safe_filename(data['title'])}"
        lesson_dir.mkdir(parents=True, exist_ok=True)

        mp3_path = lesson_dir / "audio.mp3"
        if not mp3_path.exists():
            ok = download_mp3(data["mp3_url"], mp3_path)
            if not ok:
                continue

        (lesson_dir / "transcript.txt").write_text(
            data["transcript"], encoding="utf-8"
        )

        meta = {
            "id": lesson_id,
            "section": section,
            "title": data["title"],
            "topic": data["topic"],
            "source_url": data["lesson_url"],
            "mp3_url": data["mp3_url"],
            "local_mp3": str(mp3_path.relative_to(output_root)),
            "local_transcript": str((lesson_dir / "transcript.txt").relative_to(output_root)),
            "transcript_length_chars": len(data["transcript"]),
        }
        (lesson_dir / "metadata.json").write_text(
            json.dumps(meta, indent=2, ensure_ascii=False), encoding="utf-8"
        )
        results.append(meta)

    print(f"  ✓ {len(results)} leçons téléchargées dans {section_dir}")
    return results


def main():
    parser = argparse.ArgumentParser(description="Téléchargeur ELLLO B2+")
    parser.add_argument("--section", choices=list(SECTIONS) + ["all"], default="all",
                        help="Section à télécharger (défaut : all)")
    parser.add_argument("--max", type=int, default=0,
                        help="Max leçons par section (0 = pas de limite)")
    parser.add_argument("--out", default="./ello_b2",
                        help="Dossier de sortie (défaut : ./ello_b2)")
    args = parser.parse_args()

    output_root = Path(args.out).resolve()
    output_root.mkdir(parents=True, exist_ok=True)
    print(f"📂 Sortie : {output_root}")

    sections_to_do = list(SECTIONS) if args.section == "all" else [args.section]
    catalog = []

    for section in sections_to_do:
        try:
            results = process_section(section, args.max, output_root)
            catalog.extend(results)
        except Exception as e:
            print(f"  ✗ Erreur sur {section} : {e}")

    # Catalogue global pour intégration English Trainer
    catalog_path = output_root / "catalog.json"
    catalog_path.write_text(
        json.dumps(catalog, indent=2, ensure_ascii=False), encoding="utf-8"
    )
    print(f"\n✓ Catalogue : {catalog_path}")
    print(f"✓ Total : {len(catalog)} leçons téléchargées")
    print(f"\nProchaine étape : convertir ce catalogue au format COMPREHENSION_DATA")
    print(f"  python3 ello_to_comprehension.py {catalog_path}")


if __name__ == "__main__":
    main()
