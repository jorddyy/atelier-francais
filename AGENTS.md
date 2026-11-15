# Project guide

## Run
This is a static HTML/CSS/JavaScript website with no dependencies and no build step.
From the repository root:
```sh
python3 -m http.server 8000 --directory dist
```
Open http://localhost:8000. Serve dist as the web root; the web app manifest uses root-relative paths.

## Files
- dist/index.html: page shell, navigation and search.
- dist/content.js: lesson modules, questions, verb forms and source references.
- dist/exam-content.js: exam-preparation data (oral guide and topics, writing guide, extra transformation questions). Loaded between content.js and app.js; app.js checks each global with typeof so the site still runs without it.
- dist/app.js: routing, content rendering, conjugation generation and answer checking.
- dist/style.css: responsive notebook design and print styles.
- dist/manifest.webmanifest and dist/icons/: install metadata, rooster logo and flag favicon.
- CONTENT_AUDIT.md: previous source comparison and coverage decisions.

## Checks
```sh
node --check dist/content.js
node --check dist/exam-content.js
node --check dist/app.js
```
For relevant changes, check the affected page in a browser at phone and laptop widths. For conjugation changes, verify irregular stems, auxiliaries, reflexive forms and agreements. For exercise changes, check that prompts have unambiguous accepted answers. No test framework is installed.

## Extending content
Preserve module IDs and links. Module fields and question format are documented in README.md. Add source references and lesson tags, and update the lesson filter and coverage labels when extending beyond lessons 1–16. Original lesson documents are not in this repository; the audit is not a substitute for them.

## Product context
Grammar and conjugations are primary, with compact supporting vocabulary. Listening exercises are excluded. Keep phone/laptop usability and the warm notebook design, rooster and flag branding. Exercise attempts are not saved; the linked Google Sheet is the separate assessed progress record. The manifest supports installation from the browser menu, but no offline cache is implemented.

## Hosting
An earlier private copy is hosted separately; its address is not recorded here.
This GitHub repository does not automatically deploy to it. Running locally needs no ChatGPT credentials. Publication is a separate operation. Do not commit credentials or tokens.

## Historical curriculum update, 3 November 2026

At that update, scope was Cours 1–14, based on FrenchB1m_lesson1-14.tar. This update added five modules (15 in total) and two verb forms (six in total: present, imperfect, passé composé, plus-que-parfait, present subjunctive and present conditional). The future-tense supplement below brings the current totals to 16 modules and seven verb forms. New modules in this update are subjonctif, opinions, conditionnel, reproches and doubles. Listening stays excluded. Refer to the latest CONTENT_AUDIT.md section for source corrections and limits.

## Future-tense supplement, 3 November 2026

16 modules, 27 verbs and seven verb forms. Module `futur` has no lesson number and appears under Compléments. Cours 12 includes the future of aimer as a comparison for conditional formation, but no standalone future unit was supplied. The supplement covers futur proche/simple and does not expand futur antérieur. Verified persisted course update: 56 files, 14 lessons, 40 existing tracker topics and 13 evidence rows; new supplementary topic 41 is unassessed.

## Current curriculum, 15 November 2026

21 modules, lessons 1–16, 27 verbs and seven verb forms. New IDs: `relatifs`, `relief`, `demonstratifs`, `adverbes`, `generations`. Existing IDs and the separate `futur` supplement are preserved. Source comparison found 41 files unchanged in place, 14 identical files under renamed lesson folders, one revised DOCX with no substantive exam change, and nine added paths (including two identical copies of homework 7). No existing material moved to another lesson number. The two relative-pronoun handouts are different and both were reviewed, including their embedded images.

`SOURCE_MANIFEST.json` is the current file/lesson map. Do not treat historical counts below/above as current totals. Original documents, lyrics, student lists and listening/video answers are not included in the repository. New exercises are independently authored. The live Google Sheet remains the separate progress record; this website update does not assess the learner or change tracker evidence.

## Exam preparation, 15 November 2026

Routes: `#oral` and `#oral/<topicId>` (Préparer l’oral), `#ecrire` (Préparer la rédaction), `#quiz` (Quiz mélangé), next to the existing `#test`. The sidebar has an "Examen" group above the fiches; the home page shows chapter 04 "Préparer l’examen" when the filter is "Tout le carnet". Search covers these pages and the oral topics.

Data shapes in `dist/exam-content.js`:
- `oralGuide = {steps:[[title, html]], connectors:[[category,[phrase]]], grid:[[criterion, points, tipHtml]], prep:[html]}`
- `oralTopics = [{id, title, document, pour:[..], contre:[..], vocab:[[fr,en]], amorce, questions:[..]}]`; ids are deep links, keep them stable.
- `writingGuide = {types:[{id, title, consigne, plan:[[part, html]], formules:[[label,[phrase]]], modele}], checklist:[[label, exampleHtml]], sujets:[{type, consigne}]}`
- `extraQuestions = {moduleId:[[prompt, 'answer|alternative', explanation]]}`: whole-sentence transformations shown under "Transforme" on the fiche and drawn by the quiz. "Voir la réponse" shows the first answer only, so put the most natural answer first. Checking ignores case, a final full stop and spaces before ? ! ; :, but not accents or other punctuation.

All question checking goes through `bindQuestions` in app.js. Nothing is saved: no localStorage, timers, checklists, drafts and quiz scores live only in the page (the quiz resumes within a session). Timers are cleared on every route change. Listening stays excluded.


## Generations fiche folded into exam pages, 15 November 2026

The `generations` module (former fiche 21) was the only theme-based fiche. Its vocabulary and the handout's generation dates now live in the `generations` and `cohabitation` oral topics, its writing tasks in the writing subjects, and its subjunctive question in `subjonctif`. `#generations` redirects to `#oral/generations`. The notebook has 20 modules; cours 16 is still covered by `adverbes`.

## Récits and compact phone header, 15 November 2026

- `recits = [{id, title, intro, items:[[promptWith___AndInfinitive, 'answer|alternative', explanation]]}]` in `dist/exam-content.js` (optional, checked with `typeof`). Items are read in order as one story (passé composé / imparfait / plus-que-parfait). They appear only on the fiche `choisir`, in the "Récits à compléter" block (`#choisir/recits` deep-links to it; `#<fiche>/<sectionId>` scrolls to any id on a fiche), and in the quiz filter "Récits au passé": stories in random order, items in order, story title, intro and the story so far shown above each item, count = total items. They are never part of the 20-question mixed draws. Search finds them under "récit".
- Phone header (≤760 px): one 57 px row with brand, search icon (`#search-toggle`) and Sommaire. The icon opens the search field over the row (`body.search-open`); `#search-close`, Escape, choosing a result or any route change close it. `--topbar-h` defaults to 57px for the mobile menu, and `html{scroll-padding-top:68px}` keeps scrolled sections below the sticky bar. Laptop layout unchanged (search always visible).
