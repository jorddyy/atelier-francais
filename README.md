# L’atelier français

Private source repository for a French B1− study notebook. The live site is (private site). This repository does not automatically publish to that address.

## Run locally

No dependencies or build step. From the repository root:

```sh
python3 -m http.server 8000 --directory dist
```

Open http://localhost:8000. Serve `dist` as the web root so the app manifest paths work. Node.js is only needed for optional syntax checks:

```sh
node --check dist/content.js
node --check dist/exam-content.js
node --check dist/app.js
```

## Project documentation

See `AGENTS.md` for project structure and development instructions, and `CONTENT_AUDIT.md` for the previous content check. The complete application, icons and styling are in `dist/`. The audit records the previous review, not an independent guarantee of correctness. Original course PDFs and Word documents are not included in this source export; supply the lesson archive separately for a fresh source comparison.

GitHub is the source of truth for this update. Import and publish the same source to Sites after committing; neither platform automatically synchronises with the other. Hosting credentials and platform configuration are not needed to review or run it. GitHub Pages is not enabled. Changes here must be deliberately imported and published to update the existing site.


Buildless static revision website. Hosting directory: `dist`.

## Extend

- `dist/content.js`: topic modules, source references, lesson tags, questions and verb data.
- `dist/exam-content.js`: exam preparation: `oralGuide`, `oralTopics`, `writingGuide`, `extraQuestions`, `recits` and `lectures` (shapes in `AGENTS.md`). Optional at runtime; app.js tests each global with `typeof`.
- `dist/app.js`: navigation, search, exercises and conjugation rendering.
- `dist/style.css`: responsive layouts and print styles.
- Preserve module IDs to keep bookmarks working. Add lesson references to existing topics when extending them.
- New modules have `id`, `n`, `title`, `subtitle`, `lessons`, `tag`, `color`, `intro`, `sections`, `en`, `source`, `q`.
- Questions are [prompt, accepted answers separated by |, explanation]. Write ___ where the answer goes: it becomes an inline blank; prompts without ___ get an answer line below. Add a fourth item, an array of options containing the answer, to make a choice question. Only use constrained prompts whose answers can be checked reliably. Do not grade open writing by exact matching.
- The current lesson filter covers 1–16 and a separate Compléments option; increase its range when adding later lessons. Update coverage labels and exam scope only with source evidence.
- `participleGroups` lists past participles by final sound (é, u, i, autres), as in the Cours 1 reminder. A third item `1` marks forms met in later stories and homework.
- Verb array: infinitive, six comma-separated present forms, past participle, optional auxiliary (defaults to avoir). The generator handles the current 27 verbs; review new spelling exceptions explicitly before extending it.
- No external libraries, analytics or third-party network requests. Fonts (Fraunces, Source Sans 3, SIL OFL) are self-hosted in `dist/fonts/`. No local proficiency scores or saved exercise responses. Google Sheets remains the sole assessed progress record.
- Listening excluded by user request.

## Sources reviewed

Current coverage uses `FrenchB1m_lesson1-16.zip`, reviewed on 15 November 2026. `SOURCE_MANIFEST.json` records all 65 file paths and SHA-256 hashes, including renamed folders and the duplicated homework 7. The original review below used `FrenchB1m_lesson1-8.zip`. Read textual grammar and communication handouts, present verb PDF, exam document and the embedded EN and past-participle images. Image-only narrative exercises were not reproduced. All exercises on the site are newly authored. Supplemental agreement and pronoun-order rules are explicitly labelled.

See `CONTENT_AUDIT.md` for the source-by-source content check and scope decisions. Its latest section (15 November 2026) covers the full archive comparison and lessons 15–16; earlier sections cover lessons 9–14 and the future-tense supplement; the 21 October section records the original review of lessons 1–8.

## QA

JavaScript syntax checks; desktop preview; phone layouts at 390 and 360 CSS pixels using browser iframes; lesson filtering; verb page with all seven forms, including manger imparfait and irregular subjunctive, conditional and future stems; exercise validation; mobile navigation; search; narrow-table overflow check.

## Handbook design and Android install

The design is a French school notebook (cahier Seyès): warm paper, ink-blue text, a red margin line, Seyès ruling behind page titles and highlighter on key forms in examples. The home page is a table of contents with dotted leaders and fiche numbers. Conjugation examples appear inside the relevant chapters, not on the homepage. The lesson filter keeps the original group numbers stable. `icons/rooster.svg` is the original vector logo; `icons/flag.svg` remains the favicon. PNG app icons are rendered from the rooster and tricolour emblem, with a separate maskable safe-zone variant.

`manifest.webmanifest` declares identity, scope, start URL, standalone display and PNG icons. The HTML requests the manifest with credentials because hosting remains private. Installation is through the browser menu (in Firefox Android: ⋮ → Installer); the page has no install button or instructions. No service worker or offline cache is added. Network and existing hosting authentication are still required. Do not claim Android installation was device-tested from a desktop preview.

## Historical curriculum update, 3 November 2026

At that update, scope was Cours 1–14, based on FrenchB1m_lesson1-14.tar. This update added five modules (15 in total) and two verb forms (six in total: present, imperfect, passé composé, plus-que-parfait, present subjunctive and present conditional). The future-tense supplement below brings the current totals to 16 modules and seven verb forms. New modules in this update are subjonctif, opinions, conditionnel, reproches and doubles. Listening stays excluded. Refer to the latest CONTENT_AUDIT.md section for source corrections and limits.

## Future-tense supplement, 3 November 2026

16 modules, 27 verbs and seven verb forms. Module `futur` has no lesson number and appears under Compléments. Cours 12 includes the future of aimer as a comparison for conditional formation, but no standalone future unit was supplied. The supplement covers futur proche/simple and does not expand futur antérieur. Verified persisted course update: 56 files, 14 lessons, 40 existing tracker topics and 13 evidence rows; new supplementary topic 41 is unassessed.

## Current curriculum, 15 November 2026

20 modules (after folding `generations` into the exam pages), lessons 1–16, 27 verbs and seven verb forms. New IDs: `relatifs`, `relief`, `demonstratifs`, `adverbes`. Existing IDs and the separate `futur` supplement are preserved. Source comparison found 41 files unchanged in place, 14 identical files under renamed lesson folders, one revised DOCX with no substantive exam change, and nine added paths (including two identical copies of homework 7). No existing material moved to another lesson number. The two relative-pronoun handouts are different and both were reviewed, including their embedded images.

`SOURCE_MANIFEST.json` is the current file/lesson map. Do not treat historical counts below/above as current totals. Original documents, lyrics, student lists and listening/video answers are not included in the repository. New exercises are independently authored. The live Google Sheet remains the separate progress record; this website update does not assess the learner or change tracker evidence.

## Exam preparation, 15 November 2026

The exam is half oral, so the notebook now has an "Examen" group (sidebar, and chapter 04 on the home page): Repères pour le test (`#test`), Préparer l’oral (`#oral`, topics at `#oral/<id>`), Préparer la rédaction (`#ecrire`) and Quiz mélangé (`#quiz`).

- Oral: monologue skeleton, connector bank, the marking grid as a self-check list with points, preparation tips, a random topic whose arguments, vocabulary, opening sentence and examiner questions open on demand, and 7:00 / 3:00 timers.
- Writing: the two task types as tabs (consigne, plan, formulas, model answer in a closed `<details>`), a proofreading checklist, a random subject, a draft area with a 120–150 word counter. Drafts are neither saved nor graded.
- Fiches with `extraQuestions` show a "Transforme" block after "À toi !".
- The quiz draws 20 questions from all fiches (optionally by group or lesson range), one at a time, with the source fiche linked; it ends with the score and the fiches to revisit.

Still no saved state and no listening exercises. QA for this update: syntax checks; headless Chromium at 360, 390 and 1280 px for the home, oral (topic drawn, aids open, timer finished), writing, quiz (mid-quiz and result), a fiche with Transforme, `#test`, the mobile menu, search, lesson filter and print media; no horizontal overflow found. Not tested on a physical phone.

## Récits and phone header, 15 November 2026

- `recits` (in `exam-content.js`, shape in `AGENTS.md`): four short stories with 6–7 blanks each, shown as continuous texts under "Récits à compléter" on the fiche Choisir le bon passé (`#choisir/recits`) and as the quiz mode "Récits au passé" (stories shuffled, sentences in order, all items counted).
- On phones the top bar is a single 57 px row; the search opens from a magnifier icon and closes with ×, Escape or navigation.

QA: syntax checks; headless Chromium (CDP) at 360, 390 and 1280 px for the closed/open phone header, a search from it, the mobile menu, the récits block and deep link, the récits quiz to its result, and the existing routes; no horizontal overflow or console errors. Not tested on a physical phone.

## Reading practice, 15 November 2026

- Préparer la lecture (`#lire`, one text at `#lire/<id>`): six short texts from `lectures` in `exam-content.js` (article, courriel, annonce, témoignage), a closed "Aide : vocabulaire", five multiple-choice questions per text with explanations, and a score per text (first answer counts). The text stays beside the questions on laptops; phones get a "Revoir le texte ↑" link. Text and questions print without controls.
- Quiz fixes: on phones the récits mode keeps the blank in view (compact header, story so far folded to its last sentence, card scrolled into view on each question); the récits result links to `#choisir/recits`. Shorter search placeholder; "Transforme" anchor gets the section scroll margin.

QA: syntax checks; headless Chromium (CDP) at 360×640, 390×844 and 1280×800: list and text views answered to the score, both quiz modes run to the end with the answer field fully visible on every question load, search, print to PDF, existing routes; no horizontal overflow or console errors. Not tested on a physical phone or with a real keyboard.
