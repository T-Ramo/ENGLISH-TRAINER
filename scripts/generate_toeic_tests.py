#!/usr/bin/env python3
"""
Generate 5 complete TOEIC Reading tests (Parts 5, 6, 7) using Mistral AI.

Usage:
    MISTRAL_API_KEY=... python3 scripts/generate_toeic_tests.py

Output: data/toeic-tests.js
"""

import json
import os
import re
import sys
import time

try:
    from mistralai.client.sdk import Mistral
except ImportError:
    print("Missing dependency: pip install mistralai")
    sys.exit(1)

CHECKPOINT_FILE = "scripts/.toeic_checkpoint.json"

# ── Test specifications ──────────────────────────────────────────────────────

TEST_SPECS = [
    {
        "id": "toeic-001", "title": "Test TOEIC #1",
        "p5": ["verb tenses, subject-verb agreement, passive voice",
               "prepositions, articles, determiners",
               "modals, conditionals, and hypothetical structures"],
        "p6": [("email",   "project status update from a project manager to a client"),
               ("notice",  "new remote work policy announcement"),
               ("memo",    "Q3 sales targets and performance review"),
               ("article", "trends in corporate digital transformation")],
        "p7s": [("email",   "job application for a marketing position",    100),
                ("notice",  "office renovation and temporary workspace changes", 95),
                ("ad",      "cloud-based HR software for mid-size companies", 100),
                ("memo",    "updated travel and expense reimbursement policy", 110),
                ("article", "the growing importance of employee wellbeing programmes", 115),
                ("report",  "customer satisfaction survey Q2 results",     120),
                ("email",   "supplier contract renewal negotiation",        100),
                ("notice",  "annual company conference registration deadline", 95),
                ("article", "how flexible working hours improve productivity", 115),
                ("memo",    "year-end inventory and asset disposal procedures", 110),
                ("report",  "department budget variance report",            120),
                ("ad",      "professional development leadership workshop", 100),
                ("email",   "response to a client complaint about delivery delay", 105),
                ("notice",  "mandatory fire safety training schedule",      90)],
        "p7d": [
            (("email",  "complaint about a delayed shipment"),  ("email",  "supplier's response and resolution offer")),
            (("notice", "new parking regulations at headquarters"), ("email", "employee query about the new policy")),
            (("ad",     "job posting for a senior project manager"), ("email", "follow-up email from a shortlisted applicant")),
            (("report", "annual employee engagement survey findings"), ("memo", "management's action plan in response")),
        ],
    },
    {
        "id": "toeic-002", "title": "Test TOEIC #2",
        "p5": ["gerunds, infinitives, and participial phrases",
               "relative clauses, pronouns, and reference words",
               "comparison structures, superlatives, and degree adverbs"],
        "p6": [("memo",    "introduction of a new performance review system"),
               ("email",   "invitation to an industry networking event"),
               ("article", "sustainability practices in modern supply chains"),
               ("notice",  "changes to the employee health insurance plan")],
        "p7s": [("email",   "request for budget approval for a new project",    100),
                ("ad",      "commercial office space for lease in city centre",  100),
                ("memo",    "new client onboarding procedures and checklist",    110),
                ("report",  "social media campaign performance analysis",        120),
                ("article", "why diversity and inclusion drives business growth", 115),
                ("email",   "declining a business proposal professionally",       100),
                ("notice",  "upcoming system maintenance and downtime window",    90),
                ("report",  "IT infrastructure security audit summary",          120),
                ("ad",      "corporate language training programme for staff",   100),
                ("memo",    "guidelines for cross-departmental collaboration",   110),
                ("article", "the rise of four-day work weeks in global firms",   115),
                ("email",   "coordinating a cross-border product launch",        105),
                ("notice",  "changes to visitor access and security badges",      90),
                ("report",  "new product defect rate and quality control data",  120)],
        "p7d": [
            (("memo",    "new expense reimbursement policy"),          ("email", "employee question about the policy change")),
            (("ad",      "senior data analyst vacancy"),               ("email", "recruiter's response to an applicant")),
            (("article", "remote work and its impact on office culture"), ("memo", "company's updated hybrid work guidelines")),
            (("report",  "Q3 financial performance overview"),         ("email", "CEO's message to shareholders")),
        ],
    },
    {
        "id": "toeic-003", "title": "Test TOEIC #3",
        "p5": ["conjunctions, connectors, and transition words",
               "word formation: nouns, adjectives, adverbs, verbs from the same root",
               "reported speech, indirect questions, and embedded clauses"],
        "p6": [("report",  "post-merger integration progress report"),
               ("memo",    "updated code of conduct and ethics policy"),
               ("email",   "proposal for a new customer loyalty programme"),
               ("article", "artificial intelligence tools in modern HR practices")],
        "p7s": [("email",   "informing a team of an organisational restructuring", 105),
                ("ad",      "executive search for a Chief Operations Officer",      100),
                ("memo",    "new vendor selection and approval process",            110),
                ("report",  "workplace health and safety incident analysis",        120),
                ("article", "how companies are reskilling staff for automation",    115),
                ("email",   "following up on an unanswered proposal",              100),
                ("notice",  "new clean desk and data security policy",              90),
                ("report",  "brand awareness and market perception survey",        120),
                ("ad",      "business travel management platform for corporates",  100),
                ("memo",    "new overtime and compensation guidelines",            110),
                ("article", "the psychology of effective negotiation at work",     115),
                ("email",   "escalating an unresolved supplier issue to management",105),
                ("notice",  "update on cross-border tax compliance requirements",   90),
                ("report",  "carbon footprint reduction programme progress",       120)],
        "p7d": [
            (("email",  "request to extend a project deadline"),       ("email", "manager's conditional approval with conditions")),
            (("notice", "office relocation announcement"),              ("email", "staff questions and facilities team response")),
            (("ad",     "B2B accounting software solution"),            ("email", "follow-up from a prospective client")),
            (("report", "customer churn analysis findings"),            ("memo",  "proposed retention strategy and next steps")),
        ],
    },
    {
        "id": "toeic-004", "title": "Test TOEIC #4",
        "p5": ["time expressions, frequency adverbs, and tense consistency",
               "quantifiers, partitives, and expressions of quantity",
               "parallel structure and correlative conjunctions"],
        "p6": [("email",   "negotiating revised contract terms with a key supplier"),
               ("notice",  "launch of the company's new wellness and fitness programme"),
               ("report",  "competitive landscape analysis for a new market entry"),
               ("memo",    "introduction of a new project management methodology")],
        "p7s": [("email",   "requesting a salary review from HR",               100),
                ("ad",      "co-working space targeting freelancers and start-ups", 100),
                ("memo",    "launch of an internal employee mentoring programme", 110),
                ("report",  "procurement spend analysis by category",           120),
                ("article", "building resilience in times of organisational change", 115),
                ("email",   "welcoming a new strategic business partner",       100),
                ("notice",  "mandatory anti-bribery and ethics certification",   90),
                ("report",  "diversity and inclusion metrics annual report",    120),
                ("ad",      "risk management consulting services for banks",    100),
                ("memo",    "guidelines for social media use and brand representation", 110),
                ("article", "why small businesses need a clear digital strategy", 115),
                ("email",   "requesting legal review before signing an agreement", 105),
                ("notice",  "scheduled upgrade of internal IT systems",          90),
                ("report",  "digital marketing campaign ROI analysis",          120)],
        "p7d": [
            (("email",  "complaint about billing error from a client"), ("email",  "finance team's apology and correction notice")),
            (("notice", "changes to maternity and paternity leave policy"), ("email", "HR manager clarifying the new entitlements")),
            (("ad",     "cloud storage solution for large enterprises"),    ("email", "IT manager's evaluation and recommendation")),
            (("report", "supply chain risk assessment findings"),           ("memo",  "contingency plan approved by senior management")),
        ],
    },
    {
        "id": "toeic-005", "title": "Test TOEIC #5",
        "p5": ["phrasal verbs in professional and business contexts",
               "formal register, hedging language, and business vocabulary",
               "complex and compound-complex sentence structures"],
        "p6": [("memo",    "announcement of new mandatory cybersecurity training"),
               ("article", "the impact of geopolitical risk on global supply chains"),
               ("email",   "informing a client of a change in account management"),
               ("report",  "post-event evaluation for the annual leadership summit")],
        "p7s": [("email",   "proposing a corporate partnership to a potential client", 105),
                ("ad",      "executive coaching programme for senior leaders",         100),
                ("memo",    "update on revised non-disclosure agreement requirements", 110),
                ("report",  "employee turnover and retention analysis",               120),
                ("article", "ESG reporting as a competitive advantage for listed firms", 115),
                ("email",   "communicating a product recall to affected customers",   105),
                ("notice",  "regulatory filing deadline reminder for compliance teams", 90),
                ("report",  "quarterly logistics and on-time delivery performance",   120),
                ("ad",      "IPO preparation and capital markets advisory service",   100),
                ("memo",    "post-merger cultural integration roadmap and timeline",  110),
                ("article", "the economics of platform monopolies and antitrust risk", 115),
                ("email",   "updating investors on a strategic acquisition decision", 105),
                ("notice",  "update on insider trading policy and blackout periods",   90),
                ("report",  "internal communication audit and recommendations",       120)],
        "p7d": [
            (("email",  "strategic partnership dissolution notice"),       ("email", "partner's response and transition proposal")),
            (("notice", "annual general meeting agenda and logistics"),    ("email", "shareholder question submitted in advance")),
            (("ad",     "M&A advisory firm targeting mid-market companies"),("email","CFO's enquiry about the advisory service")),
            (("report", "board governance effectiveness review findings"), ("memo",  "chair's proposed governance reforms")),
        ],
    },
]

# ── Prompts ──────────────────────────────────────────────────────────────────

PART5_PROMPT = """You are an expert TOEIC test writer. Generate exactly 10 TOEIC Part 5 "Incomplete Sentences" questions.

⚠️ ALL sentences and options MUST be in ENGLISH ONLY. Only the "explanation" field in French.

Grammar/vocabulary focus: {theme}

Rules:
- Each question: one complete business English sentence with _____ for the blank
- 4 options (A, B, C, D), exactly one correct
- Plausible distractors (word-form variations, near-synonyms, related structures)
- Professional/corporate context throughout
- Difficulty: TOEIC 600–900 level
- explanation: French, 1-2 sentences citing the grammar rule

Return ONLY this JSON array (no markdown):
[
  {{
    "sentence": "The annual report _____ by the board before the shareholder meeting.",
    "options": ["A. was reviewed", "B. reviewing", "C. reviews", "D. to review"],
    "correct": "A",
    "explanation": "Le passif 'was reviewed' est correct car le sujet 'report' subit l'action."
  }}
]
Generate exactly 10 items."""

PART6_PROMPT = """You are an expert TOEIC test writer. Generate one TOEIC Part 6 "Text Completion" exercise.

⚠️ ALL text in the body and ALL options MUST be in ENGLISH ONLY. Only "explanation" fields in French.

Document type: {genre}
Topic: {topic}

Write a {genre} of ~150 words containing exactly 4 blanks marked as [1], [2], [3], [4] in the text.
Each blank must require:
- Mix of: correct word form, appropriate connector, preposition, or vocabulary-in-context
- 4 options (A, B, C, D), one correct
- Explanation in French (1-2 sentences)

Return ONLY this JSON (no markdown):
{{
  "intro": "Questions refer to the following {genre}.",
  "body": "...full text with [1], [2], [3], [4] as blank markers...",
  "blanks": [
    {{"options": ["A. ...", "B. ...", "C. ...", "D. ..."], "correct": "A", "explanation": "..."}},
    {{"options": ["A. ...", "B. ...", "C. ...", "D. ..."], "correct": "B", "explanation": "..."}},
    {{"options": ["A. ...", "B. ...", "C. ...", "D. ..."], "correct": "C", "explanation": "..."}},
    {{"options": ["A. ...", "B. ...", "C. ...", "D. ..."], "correct": "D", "explanation": "..."}}
  ]
}}"""

PART7_SINGLE_PROMPT = """You are an expert TOEIC test writer. Generate one TOEIC Part 7 single-passage reading comprehension exercise.

⚠️ ALL text and ALL questions/options MUST be in ENGLISH ONLY. Only "explanation" fields in French.

Document type: {genre}
Topic: {topic}
Length: ~{words} words

Generate exactly 3 TOEIC-style questions:
- Question 1: main idea or purpose
- Question 2: specific detail stated in the text
- Question 3: inference, implication, or vocabulary in context

Return ONLY this JSON (no markdown):
{{
  "intro": "Questions refer to the following {genre}.",
  "body": "full document text in English",
  "questions": [
    {{"prompt": "What is the main purpose of this {genre}?", "options": ["A. ...", "B. ...", "C. ...", "D. ..."], "correct": "A", "explanation": "..."}},
    {{"prompt": "According to the {genre}, ...", "options": ["A. ...", "B. ...", "C. ...", "D. ..."], "correct": "B", "explanation": "..."}},
    {{"prompt": "What is implied/suggested about ...?", "options": ["A. ...", "B. ...", "C. ...", "D. ..."], "correct": "C", "explanation": "..."}}
  ]
}}"""

PART7_DOUBLE_PROMPT = """You are an expert TOEIC test writer. Generate one TOEIC Part 7 double-passage exercise with two related documents.

⚠️ ALL text and ALL questions/options MUST be in ENGLISH ONLY. Only "explanation" fields in French.

Document 1: {genre1} — {topic1}
Document 2: {genre2} — {topic2} (must be related to / responding to Document 1)

Generate exactly 3 questions. At least one question must require reading BOTH documents (cross-reference).
Question types: main idea, specific detail, cross-reference, inference.

Return ONLY this JSON (no markdown):
{{
  "intro": "Questions refer to the following {genre1} and {genre2}.",
  "passages": [
    "full text of document 1 in English (~100 words)",
    "full text of document 2 in English (~100 words)"
  ],
  "questions": [
    {{"prompt": "...", "options": ["A. ...", "B. ...", "C. ...", "D. ..."], "correct": "A", "explanation": "..."}},
    {{"prompt": "...", "options": ["A. ...", "B. ...", "C. ...", "D. ..."], "correct": "B", "explanation": "..."}},
    {{"prompt": "...", "options": ["A. ...", "B. ...", "C. ...", "D. ..."], "correct": "C", "explanation": "..."}}
  ]
}}"""


# ── Helpers ──────────────────────────────────────────────────────────────────

def load_checkpoint():
    if os.path.exists(CHECKPOINT_FILE):
        with open(CHECKPOINT_FILE) as f:
            return json.load(f)
    return {}


def save_checkpoint(cp):
    os.makedirs(os.path.dirname(CHECKPOINT_FILE), exist_ok=True)
    with open(CHECKPOINT_FILE, "w") as f:
        json.dump(cp, f, indent=2, ensure_ascii=False)


def call_mistral(client, prompt):
    response = client.chat.complete(
        model="mistral-small-latest",
        messages=[{"role": "user", "content": prompt}]
    )
    raw = response.choices[0].message.content.strip()
    raw = re.sub(r'^```json\s*', '', raw)
    raw = re.sub(r'^```\s*', '', raw)
    raw = re.sub(r'\s*```$', '', raw)
    match = re.search(r'[\[{].*[\]}]', raw, re.DOTALL)
    if not match:
        raise ValueError(f"No JSON found: {raw[:200]}")
    return json.loads(match.group())


def build_test(spec, cp, client):
    tid = spec["id"]
    test = {"id": tid, "title": spec["title"], "part5": [], "part6": [], "part7": []}

    # ── Part 5 (30 questions = 3 × 10) ──────────────────────────────────────
    q_num = 101
    for bi, theme in enumerate(spec["p5"]):
        ck = f"{tid}:p5:{bi}"
        if ck in cp:
            batch = cp[ck]
        else:
            print(f"    P5 batch {bi+1}/3 — {theme[:50]}")
            batch = call_mistral(client, PART5_PROMPT.format(theme=theme))
            cp[ck] = batch
            save_checkpoint(cp)
            time.sleep(4)

        for qi, q in enumerate(batch[:10]):
            q["id"] = f"{tid}-p5-{q_num:03d}"
            q["num"] = q_num
            test["part5"].append(q)
            q_num += 1

    # ── Part 6 (16 questions = 4 passages × 4 blanks) ───────────────────────
    q_num = 131
    for pi, (genre, topic) in enumerate(spec["p6"]):
        ck = f"{tid}:p6:{pi}"
        if ck in cp:
            passage = cp[ck]
        else:
            print(f"    P6 passage {pi+1}/4 — {genre}: {topic[:45]}")
            passage = call_mistral(client, PART6_PROMPT.format(genre=genre, topic=topic))
            cp[ck] = passage
            save_checkpoint(cp)
            time.sleep(4)

        nums = list(range(q_num, q_num + 4))
        passage["id"] = f"{tid}-p6-{pi+1:02d}"
        passage["nums"] = nums
        passage["intro"] = passage.get("intro", f"Questions {nums[0]}-{nums[-1]} refer to the following {genre}.")
        for bi, blank in enumerate(passage.get("blanks", [])[:4]):
            blank["id"] = f"{tid}-p6-{q_num:03d}"
            blank["num"] = q_num
            q_num += 1
        test["part6"].append(passage)

    # ── Part 7 single passages (42 questions = 14 × 3) ──────────────────────
    q_num = 147
    for si, (genre, topic, words) in enumerate(spec["p7s"]):
        ck = f"{tid}:p7s:{si}"
        if ck in cp:
            exercise = cp[ck]
        else:
            print(f"    P7 single {si+1}/14 — {genre}: {topic[:45]}")
            exercise = call_mistral(client, PART7_SINGLE_PROMPT.format(
                genre=genre, topic=topic, words=words))
            cp[ck] = exercise
            save_checkpoint(cp)
            time.sleep(4)

        nums = list(range(q_num, q_num + 3))
        exercise["id"] = f"{tid}-p7s-{si+1:02d}"
        exercise["type"] = "single"
        exercise["intro"] = exercise.get("intro", f"Questions {nums[0]}-{nums[-1]} refer to the following {genre}.")
        exercise["nums"] = nums
        for qi, q in enumerate(exercise.get("questions", [])[:3]):
            q["id"] = f"{tid}-p7-{q_num:03d}"
            q["num"] = q_num
            q_num += 1
        test["part7"].append(exercise)

    # ── Part 7 double passages (12 questions = 4 × 3) ───────────────────────
    for di, ((genre1, topic1), (genre2, topic2)) in enumerate(spec["p7d"]):
        ck = f"{tid}:p7d:{di}"
        if ck in cp:
            exercise = cp[ck]
        else:
            print(f"    P7 double {di+1}/4 — {genre1}+{genre2}")
            exercise = call_mistral(client, PART7_DOUBLE_PROMPT.format(
                genre1=genre1, topic1=topic1, genre2=genre2, topic2=topic2))
            cp[ck] = exercise
            save_checkpoint(cp)
            time.sleep(4)

        nums = list(range(q_num, q_num + 3))
        exercise["id"] = f"{tid}-p7d-{di+1:02d}"
        exercise["type"] = "double"
        exercise["intro"] = exercise.get("intro", f"Questions {nums[0]}-{nums[-1]} refer to the following {genre1} and {genre2}.")
        exercise["nums"] = nums
        for qi, q in enumerate(exercise.get("questions", [])[:3]):
            q["id"] = f"{tid}-p7-{q_num:03d}"
            q["num"] = q_num
            q_num += 1
        test["part7"].append(exercise)

    return test


def build_js(tests):
    lines = [
        "/* AUTO-GENERATED by scripts/generate_toeic_tests.py (Mistral AI) */",
        "/* Re-run the script to update. Do not edit manually. */",
        "",
        "const TOEIC_TESTS = [",
    ]
    for t in tests:
        lines.append("  " + json.dumps(t, ensure_ascii=False) + ",")
    lines.append("];")
    return "\n".join(lines) + "\n"


def main():
    script_dir = os.path.dirname(os.path.abspath(__file__))
    project_root = os.path.dirname(script_dir)
    os.chdir(project_root)

    api_key = os.environ.get("MISTRAL_API_KEY")
    if not api_key:
        print("Error: MISTRAL_API_KEY not set.")
        sys.exit(1)

    client = Mistral(api_key=api_key)
    cp = load_checkpoint()
    tests = []

    print(f"Generating {len(TEST_SPECS)} TOEIC Reading tests (100 questions each)...")
    for i, spec in enumerate(TEST_SPECS):
        print(f"\n[{i+1}/{len(TEST_SPECS)}] {spec['title']}")
        test = build_test(spec, cp, client)
        tests.append(test)

    js = build_js(tests)
    out = "data/toeic-tests.js"
    with open(out, "w", encoding="utf-8") as f:
        f.write(js)

    total_q = sum(
        len(t["part5"]) + sum(len(p["blanks"]) for p in t["part6"]) +
        sum(len(e["questions"]) for e in t["part7"])
        for t in tests
    )
    print(f"\nDone. {len(tests)} tests generated, {total_q} total questions.")
    print(f"Output: {out}")


if __name__ == "__main__":
    main()
