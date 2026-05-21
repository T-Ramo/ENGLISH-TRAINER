#!/usr/bin/env python3
"""
Generate 300 TOEIC Part 7 style reading texts with QCM questions using Mistral AI.

Usage:
    MISTRAL_API_KEY=... python3 scripts/generate_reading_texts.py

Output: data/comprehension-reading.js
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

CHECKPOINT_FILE = "scripts/.reading_checkpoint.json"

# 200 texts distributed across levels and genres
TEXTS_SPEC = [
    # (level, genre, topic)
    # ---- B1 (60 texts) ----
    (1, "email",   "request for a day off"),
    (1, "email",   "confirming a meeting"),
    (1, "email",   "complaint about a delayed order"),
    (1, "email",   "job application follow-up"),
    (1, "email",   "invitation to a company event"),
    (1, "email",   "requesting IT support"),
    (1, "email",   "thanking a colleague for help"),
    (1, "email",   "asking about office hours"),
    (1, "email",   "informing about schedule change"),
    (1, "email",   "welcoming a new employee"),
    (1, "notice",  "office closure for maintenance"),
    (1, "notice",  "new parking regulations"),
    (1, "notice",  "fire drill announcement"),
    (1, "notice",  "cafeteria menu change"),
    (1, "notice",  "lost and found item"),
    (1, "notice",  "elevator out of service"),
    (1, "notice",  "new office supplies ordering process"),
    (1, "notice",  "recycling policy reminder"),
    (1, "notice",  "visitor badge requirement"),
    (1, "notice",  "holiday schedule"),
    (1, "ad",      "job posting for a receptionist"),
    (1, "ad",      "apartment for rent near office"),
    (1, "ad",      "office furniture sale"),
    (1, "ad",      "professional training course"),
    (1, "ad",      "car sharing service for commuters"),
    (1, "ad",      "health insurance plan for employees"),
    (1, "ad",      "business lunch catering service"),
    (1, "ad",      "laptop repair shop"),
    (1, "ad",      "language classes for professionals"),
    (1, "ad",      "gym membership discount for staff"),
    (1, "memo",    "reminder about expense reports"),
    (1, "memo",    "new dress code policy"),
    (1, "memo",    "updated work from home guidelines"),
    (1, "memo",    "reminder to update contact info"),
    (1, "memo",    "introduction of new time tracking software"),
    (1, "memo",    "team lunch on Friday"),
    (1, "memo",    "reminder about annual leave balance"),
    (1, "memo",    "new coffee machine instructions"),
    (1, "memo",    "reminder about data backup"),
    (1, "memo",    "end of year performance review schedule"),
    (1, "article", "tips for a productive morning routine"),
    (1, "article", "benefits of standing desks"),
    (1, "article", "how to write a professional email"),
    (1, "article", "simple ways to reduce stress at work"),
    (1, "article", "the importance of taking breaks"),
    (1, "article", "how to organize your workspace"),
    (1, "article", "basic networking tips for beginners"),
    (1, "article", "how to give a good presentation"),
    (1, "article", "tips for working with international colleagues"),
    (1, "article", "why punctuality matters in business"),
    (1, "report",  "monthly sales summary"),
    (1, "report",  "customer satisfaction survey results"),
    (1, "report",  "employee attendance record"),
    (1, "report",  "quarterly inventory count"),
    (1, "report",  "office supply usage report"),
    (1, "report",  "website traffic monthly overview"),
    (1, "report",  "weekly team productivity report"),
    (1, "report",  "training attendance log"),
    (1, "report",  "IT helpdesk ticket summary"),
    (1, "report",  "new hire onboarding checklist status"),
    # ---- B2 (90 texts) ----
    (2, "email",   "negotiating contract renewal terms"),
    (2, "email",   "addressing a client complaint"),
    (2, "email",   "proposing a partnership"),
    (2, "email",   "follow-up after a job interview"),
    (2, "email",   "requesting budget approval for a project"),
    (2, "email",   "declining a business proposal politely"),
    (2, "email",   "updating a client on project delays"),
    (2, "email",   "coordinating a cross-department initiative"),
    (2, "email",   "requesting an extension on a deadline"),
    (2, "email",   "announcing a product launch"),
    (2, "email",   "feedback on a delivered service"),
    (2, "email",   "escalating an unresolved issue to management"),
    (2, "email",   "inviting a speaker to a company conference"),
    (2, "email",   "informing team of organizational restructuring"),
    (2, "email",   "requesting a reference letter"),
    (2, "notice",  "upcoming system maintenance window"),
    (2, "notice",  "revision of the remote work policy"),
    (2, "notice",  "mandatory cybersecurity training"),
    (2, "notice",  "new expense reimbursement procedure"),
    (2, "notice",  "office relocation announcement"),
    (2, "notice",  "updated data privacy policy"),
    (2, "notice",  "launch of employee wellness program"),
    (2, "notice",  "changes to health insurance coverage"),
    (2, "notice",  "new performance evaluation criteria"),
    (2, "notice",  "suspension of the company shuttle service"),
    (2, "ad",      "senior marketing manager position"),
    (2, "ad",      "SaaS project management software"),
    (2, "ad",      "executive coaching program"),
    (2, "ad",      "corporate travel management service"),
    (2, "ad",      "B2B accounting software solution"),
    (2, "ad",      "industry conference registration"),
    (2, "ad",      "commercial real estate for lease"),
    (2, "ad",      "cloud storage solution for businesses"),
    (2, "ad",      "corporate legal advisory service"),
    (2, "ad",      "sustainability consulting firm"),
    (2, "memo",    "new client onboarding procedure"),
    (2, "memo",    "Q3 targets and KPIs"),
    (2, "memo",    "cross-departmental collaboration guidelines"),
    (2, "memo",    "updated travel reimbursement policy"),
    (2, "memo",    "introduction of OKR framework"),
    (2, "memo",    "new confidentiality agreement requirements"),
    (2, "memo",    "mandatory diversity and inclusion training"),
    (2, "memo",    "revised overtime compensation policy"),
    (2, "memo",    "new vendor approval process"),
    (2, "memo",    "company car policy update"),
    (2, "article", "how remote work is reshaping corporate culture"),
    (2, "article", "the rise of four-day work weeks"),
    (2, "article", "managing multigenerational teams"),
    (2, "article", "the impact of AI on recruitment"),
    (2, "article", "why employee retention matters more than hiring"),
    (2, "article", "the business case for workplace diversity"),
    (2, "article", "effective strategies for conflict resolution"),
    (2, "article", "how to build a personal brand professionally"),
    (2, "article", "the role of emotional intelligence in leadership"),
    (2, "article", "sustainable business practices that save money"),
    (2, "article", "how to manage a remote team effectively"),
    (2, "article", "the importance of upskilling in a changing market"),
    (2, "article", "why small businesses need a digital strategy"),
    (2, "article", "the psychology of negotiation"),
    (2, "article", "how supply chain disruptions affect businesses"),
    (2, "report",  "annual employee engagement survey findings"),
    (2, "report",  "Q2 financial performance overview"),
    (2, "report",  "market entry feasibility study summary"),
    (2, "report",  "competitor analysis for product launch"),
    (2, "report",  "post-event evaluation report"),
    (2, "report",  "customer churn analysis"),
    (2, "report",  "IT infrastructure audit summary"),
    (2, "report",  "supply chain risk assessment"),
    (2, "report",  "brand awareness survey results"),
    (2, "report",  "department budget variance report"),
    (2, "report",  "product defect rate analysis"),
    (2, "report",  "social media performance report"),
    (2, "report",  "workplace injury and safety report"),
    (2, "report",  "carbon footprint reduction progress"),
    (2, "report",  "new market segment revenue contribution"),
    # ---- C1 (50 texts) ----
    (3, "email",   "strategic partnership dissolution"),
    (3, "email",   "whistleblowing policy clarification to board"),
    (3, "email",   "crisis communication to stakeholders"),
    (3, "email",   "negotiating merger terms with legal counsel"),
    (3, "email",   "addressing regulatory compliance failure"),
    (3, "email",   "executive briefing on acquisition opportunity"),
    (3, "email",   "responding to negative press coverage"),
    (3, "email",   "proposing a corporate governance reform"),
    (3, "email",   "communicating layoffs to affected staff"),
    (3, "email",   "investor relations update on quarterly losses"),
    (3, "article", "the geopolitical risks of global supply chains"),
    (3, "article", "ESG reporting as a competitive advantage"),
    (3, "article", "the future of work in a post-automation economy"),
    (3, "article", "regulatory challenges in the fintech sector"),
    (3, "article", "how central bank policy affects SME financing"),
    (3, "article", "the ethics of algorithmic hiring decisions"),
    (3, "article", "circular economy models in manufacturing"),
    (3, "article", "talent acquisition in a candidate-driven market"),
    (3, "article", "the role of corporate governance in ESG investing"),
    (3, "article", "navigating cross-cultural negotiations"),
    (3, "article", "the implications of GDPR for global businesses"),
    (3, "article", "digital transformation in traditional industries"),
    (3, "article", "the economics of platform monopolies"),
    (3, "article", "reskilling the workforce for the green transition"),
    (3, "article", "the boardroom gender gap and shareholder value"),
    (3, "report",  "board of directors governance effectiveness review"),
    (3, "report",  "five-year strategic plan progress assessment"),
    (3, "report",  "environmental impact assessment for new facility"),
    (3, "report",  "due diligence report for corporate acquisition"),
    (3, "report",  "regulatory compliance audit findings"),
    (3, "report",  "independent remuneration committee report"),
    (3, "report",  "systemic risk exposure in financial portfolio"),
    (3, "report",  "intellectual property valuation report"),
    (3, "report",  "crisis management post-mortem analysis"),
    (3, "report",  "executive succession planning review"),
    (3, "memo",    "board resolution on dividend policy revision"),
    (3, "memo",    "internal audit committee findings"),
    (3, "memo",    "strategic divestiture rationale"),
    (3, "memo",    "legal exposure summary for pending litigation"),
    (3, "memo",    "restructuring plan for underperforming division"),
    (3, "notice",  "regulatory filing deadline reminder for compliance officers"),
    (3, "notice",  "mandatory anti-bribery certification renewal"),
    (3, "notice",  "changes to insider trading policy"),
    (3, "notice",  "update on cross-border tax compliance requirements"),
    (3, "notice",  "notification of external audit commencement"),
    (3, "ad",      "chief financial officer executive search"),
    (3, "ad",      "M&A advisory services for mid-market companies"),
    (3, "ad",      "risk management consulting for financial institutions"),
    (3, "ad",      "IPO preparation advisory service"),
    (3, "ad",      "corporate restructuring legal services"),
    # ---- B1 extra +30 (total 90) ----
    (1, "email",   "requesting feedback on a presentation"),
    (1, "email",   "reporting a broken piece of equipment"),
    (1, "email",   "asking for directions to the office"),
    (1, "email",   "confirming attendance at a training session"),
    (1, "email",   "apologizing for missing a meeting"),
    (1, "notice",  "new security badge procedure"),
    (1, "notice",  "updated kitchen cleaning rota"),
    (1, "notice",  "reminder to submit timesheets"),
    (1, "notice",  "temporary road closure near office"),
    (1, "notice",  "charity fundraising event at work"),
    (1, "ad",      "part-time office assistant vacancy"),
    (1, "ad",      "end-of-year office party venue"),
    (1, "ad",      "discounted public transport passes"),
    (1, "ad",      "ergonomic chair for home office"),
    (1, "ad",      "local restaurant delivery for lunch"),
    (1, "memo",    "reminder to clean personal desk area"),
    (1, "memo",    "update on staff car park allocation"),
    (1, "memo",    "introduction of a new meeting room booking system"),
    (1, "memo",    "reminder about confidential document handling"),
    (1, "memo",    "announcement of a team-building activity"),
    (1, "article", "how to make a good first impression at work"),
    (1, "article", "the benefits of having a mentor"),
    (1, "article", "tips for managing your inbox"),
    (1, "article", "how to say no politely at work"),
    (1, "article", "why learning a new skill is good for your career"),
    (1, "report",  "monthly absenteeism summary"),
    (1, "report",  "canteen food satisfaction survey"),
    (1, "report",  "team meeting attendance record"),
    (1, "report",  "monthly printer and copier usage log"),
    (1, "report",  "end-of-quarter stationery stock report"),
    # ---- B2 extra +45 (total 135) ----
    (2, "email",   "requesting a salary review meeting"),
    (2, "email",   "congratulating a colleague on a promotion"),
    (2, "email",   "handling a misunderstanding with a supplier"),
    (2, "email",   "requesting approval for a new hire"),
    (2, "email",   "notifying a client of staff changes"),
    (2, "email",   "sharing quarterly performance results with the team"),
    (2, "email",   "arranging a client site visit"),
    (2, "email",   "following up on an unpaid invoice"),
    (2, "email",   "welcoming a new business partner"),
    (2, "email",   "requesting legal review of a contract"),
    (2, "notice",  "introduction of a hybrid work schedule"),
    (2, "notice",  "new employee referral program"),
    (2, "notice",  "annual general meeting announcement"),
    (2, "notice",  "changes to the maternity and paternity leave policy"),
    (2, "notice",  "new sustainability targets for the department"),
    (2, "ad",      "data analyst position in a tech company"),
    (2, "ad",      "business English course for professionals"),
    (2, "ad",      "shared office co-working space"),
    (2, "ad",      "HR software for mid-sized companies"),
    (2, "ad",      "leadership development workshop"),
    (2, "memo",    "new escalation procedure for customer complaints"),
    (2, "memo",    "updated non-disclosure agreement policy"),
    (2, "memo",    "launch of internal mentoring program"),
    (2, "memo",    "new guidelines for social media use at work"),
    (2, "memo",    "reminder about year-end tax documentation"),
    (2, "article", "the growing importance of data literacy in business"),
    (2, "article", "how to lead effective virtual meetings"),
    (2, "article", "the benefits of cross-functional teams"),
    (2, "article", "why customer experience drives revenue growth"),
    (2, "article", "how to handle workplace conflicts professionally"),
    (2, "article", "the impact of inflation on small business operations"),
    (2, "article", "building resilience in the face of organisational change"),
    (2, "article", "how to give constructive performance feedback"),
    (2, "article", "the pros and cons of open-plan offices"),
    (2, "article", "how businesses are adapting to climate regulations"),
    (2, "report",  "year-end training effectiveness evaluation"),
    (2, "report",  "remote work productivity analysis"),
    (2, "report",  "customer onboarding process audit"),
    (2, "report",  "employee benefits utilisation survey"),
    (2, "report",  "monthly sales pipeline status report"),
    (2, "report",  "procurement spend analysis by category"),
    (2, "report",  "diversity and inclusion metrics report"),
    (2, "report",  "digital marketing campaign performance"),
    (2, "report",  "quarterly customer support resolution report"),
    (2, "report",  "new product pilot feedback summary"),
    # ---- B2 extra batch 2 +15 (total 135) ----
    (2, "email",   "requesting a product demonstration from a vendor"),
    (2, "email",   "notifying staff of a new health and safety policy"),
    (2, "email",   "proposing a cost-cutting initiative"),
    (2, "email",   "confirming terms of a service level agreement"),
    (2, "email",   "apologising for a billing error to a client"),
    (2, "article", "how companies are using data to improve employee wellbeing"),
    (2, "article", "the rise of subscription-based business models"),
    (2, "article", "why transparency builds stronger client relationships"),
    (2, "article", "how to create a culture of continuous learning"),
    (2, "article", "the business impact of poor internal communication"),
    (2, "report",  "annual corporate social responsibility summary"),
    (2, "report",  "new product line market research findings"),
    (2, "report",  "employee turnover and retention analysis"),
    (2, "report",  "quarterly logistics and delivery performance report"),
    (2, "report",  "internal communication audit report"),
    # ---- C1 extra +25 (total 75) ----
    (3, "email",   "advising the board on reputational risk"),
    (3, "email",   "coordinating a cross-border regulatory response"),
    (3, "email",   "negotiating executive remuneration with a headhunter"),
    (3, "email",   "escalating a data breach to the Data Protection Officer"),
    (3, "email",   "communicating a hostile takeover bid to employees"),
    (3, "article", "the systemic risks of algorithmic trading"),
    (3, "article", "how sovereign wealth funds are reshaping global markets"),
    (3, "article", "the legal implications of generative AI in the workplace"),
    (3, "article", "carbon credit markets and corporate decarbonisation"),
    (3, "article", "the strategic logic of share buyback programmes"),
    (3, "article", "antitrust enforcement in the digital economy"),
    (3, "article", "the role of non-executive directors in corporate oversight"),
    (3, "article", "private equity's influence on healthcare delivery"),
    (3, "article", "how geopolitical fragmentation is redrawing trade routes"),
    (3, "article", "the accountability gap in AI governance frameworks"),
    (3, "report",  "independent remuneration policy benchmarking report"),
    (3, "report",  "cross-border M&A regulatory impact assessment"),
    (3, "report",  "ESG materiality assessment for annual disclosure"),
    (3, "report",  "internal whistleblowing programme effectiveness review"),
    (3, "report",  "supply chain human rights due diligence audit"),
    (3, "memo",    "legal risk assessment for proposed market entry"),
    (3, "memo",    "board communication protocol during a crisis"),
    (3, "memo",    "post-merger cultural integration roadmap"),
    (3, "notice",  "update on sanctions compliance obligations"),
    (3, "notice",  "mandatory ESG disclosure training for senior managers"),
]

PROMPT_TEMPLATE = """You are an expert TOEIC test writer. Create one reading comprehension exercise.

⚠️ CRITICAL LANGUAGE RULE: The "body" field and ALL questions/options MUST be written in ENGLISH ONLY. Do NOT write French in the body or questions. Only the "explanation" fields should be in French.

Specifications:
- Level: {level_label}
- Document type: {genre}
- Topic: {topic}
- Length: {word_count} words (strict)
- Style: authentic {genre} format with proper layout (To:/From:/Subject: for emails, bold headers for articles, etc.)
- Language: professional English throughout — body, title, questions, and options must ALL be in English
- {questions_count} multiple-choice questions (A, B, C, D) — TOEIC Part 7 style
- Question types: 1 main idea, 1 specific detail, {extra_q}
- Explanations ONLY in French (1-2 sentences)

Return ONLY this JSON (no markdown, no extra text):
{{
  "title": "short descriptive title in English",
  "body": "the full document text in ENGLISH (use \\n for line breaks)",
  "questions": [
    {{
      "id": "q1",
      "prompt": "Question in English?",
      "options": ["A. English option", "B. English option", "C. English option", "D. English option"],
      "correct": "A",
      "explanation": "Explication en français uniquement."
    }}
  ]
}}"""


LEVEL_LABELS = {1: "B1", 2: "B2", 3: "C1"}
WORD_COUNTS  = {1: 80,  2: 140, 3: 200}
Q_COUNTS     = {1: 2,   2: 3,   3: 3}
EXTRA_Q      = {1: "",  2: "1 inference/intention", 3: "1 inference about author's purpose or implication"}


def load_checkpoint():
    if os.path.exists(CHECKPOINT_FILE):
        with open(CHECKPOINT_FILE) as f:
            return json.load(f)
    return {}


def save_checkpoint(cp):
    os.makedirs(os.path.dirname(CHECKPOINT_FILE), exist_ok=True)
    with open(CHECKPOINT_FILE, "w") as f:
        json.dump(cp, f, indent=2, ensure_ascii=False)


def call_mistral(client, level, genre, topic):
    prompt = PROMPT_TEMPLATE.format(
        level_label=LEVEL_LABELS[level],
        genre=genre,
        topic=topic,
        word_count=WORD_COUNTS[level],
        questions_count=Q_COUNTS[level],
        extra_q=EXTRA_Q[level],
    )
    response = client.chat.complete(
        model="mistral-small-latest",
        messages=[{"role": "user", "content": prompt}]
    )
    raw = response.choices[0].message.content.strip()
    raw = re.sub(r'^```json\s*', '', raw)
    raw = re.sub(r'^```\s*', '', raw)
    raw = re.sub(r'\s*```$', '', raw)
    match = re.search(r'\{.*\}', raw, re.DOTALL)
    if not match:
        raise ValueError(f"No JSON object found: {raw[:200]}")
    return json.loads(match.group())


def build_js(entries):
    lines = [
        "/* AUTO-GENERATED by scripts/generate_reading_texts.py (Mistral AI) */",
        "/* Re-run the script to update. Do not edit manually. */",
        "",
        "const COMPREHENSION_READING = [",
    ]
    for e in entries:
        lines.append("  " + json.dumps(e, ensure_ascii=False) + ",")
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
    checkpoint = load_checkpoint()
    results = []
    processed = 0
    skipped = 0
    errors = 0

    print(f"Generating {len(TEXTS_SPEC)} reading texts...")

    for i, (level, genre, topic) in enumerate(TEXTS_SPEC):
        eid = f"read-{i+1:03d}"

        if eid in checkpoint:
            results.append(checkpoint[eid])
            skipped += 1
            continue

        print(f"  [{i+1}/{len(TEXTS_SPEC)}] {LEVEL_LABELS[level]} · {genre} · {topic[:45]}")

        try:
            data = call_mistral(client, level, genre, topic)
            # Tag questions with proper ids
            for qi, q in enumerate(data.get("questions", [])):
                q["id"] = f"{eid}-q{qi+1}"

            record = {
                "id": eid,
                "type": "reading",
                "level": level,
                "genre": genre,
                "title": data.get("title", topic),
                "body": data.get("body", ""),
                "questions": data.get("questions", []),
            }
            results.append(record)
            checkpoint[eid] = record
            save_checkpoint(checkpoint)
            processed += 1
        except Exception as exc:
            print(f"    ERROR: {exc}")
            errors += 1

        # Gemini free tier: 15 RPM → 4s delay
        time.sleep(4)

    js = build_js(results)
    out = "data/comprehension-reading.js"
    with open(out, "w", encoding="utf-8") as f:
        f.write(js)

    print(f"\nDone. {processed} generated, {skipped} from cache, {errors} errors.")
    print(f"Output: {out} ({len(results)} texts)")


if __name__ == "__main__":
    main()
