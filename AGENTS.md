# Project guide

## Run
This is a static HTML/CSS/JavaScript website with no dependencies and no build step.
From the repository root:
```sh
python3 -m http.server 8000 --directory dist
```
Open http://localhost:8000. dist can be served at the web root or under a subpath (e.g. GitHub Pages); the manifest uses relative paths.

## Files
- dist/index.html: page shell, navigation and search.
- dist/content.js: lesson modules, questions, verb forms and source references.
- dist/exam-content.js: exam-preparation data (oral guide and topics, writing guide, extra transformation questions). Loaded between content.js and app.js; app.js checks each global with typeof so the site still runs without it.
- dist/app.js: routing, content rendering, conjugation generation and answer checking.
- dist/style.css: responsive notebook design and print styles.
- dist/manifest.webmanifest and dist/icons/: install metadata, rooster logo and flag favicon.
- dist/sw.js: service worker for offline use (see Offline below).
- CONTENT_AUDIT.md: previous source comparison and coverage decisions.

## Checks
```sh
node --check dist/content.js
node --check dist/exam-content.js
node --check dist/app.js
```
For relevant changes, check the affected page in a browser at phone and laptop widths. For conjugation changes, verify irregular stems, auxiliaries, reflexive forms and agreements. For exercise changes, check that prompts have unambiguous accepted answers. No test framework is installed.

## Extending content
Preserve module IDs and links. Module fields and question format are documented in README.md. Add source references and lesson tags, and update the lesson filter and coverage labels when extending beyond lessons 1–19. Original lesson documents are not in this repository; the audit is not a substitute for them.

## Product context
Grammar and conjugations are primary, with compact supporting vocabulary. Listening exercises are excluded. Keep phone/laptop usability and the warm notebook design, rooster and flag branding. Exercise attempts are not saved; the separate Google Sheet (deliberately not linked from the site) is the assessed progress record. The manifest supports installation from the browser menu, and dist/sw.js makes the installed site work offline.

## Hosting
The public site is https://jorddyy.github.io/atelier-francais/, deployed from dist/ by .github/workflows/pages.yml on every push to main that touches dist/. An earlier private copy is hosted separately; its address is not recorded here and it is not updated automatically.
The repository is public. Keep personal details out of the site, commits and these notes: no tracker link, exam room or group code, real names or work email. Commits use the GitHub noreply address set in this repository's git config. Do not commit credentials or tokens.

## Offline
`dist/sw.js` precaches every file in its `FILES` list on the first visit and then serves them cache-first; any navigation gets the cached `index.html` (all routes are hash routes). When you add, rename or remove a file in dist/ that the page loads, update `FILES`, or that file will be missing offline (a missing file also makes the whole install fail, so the cache never fills). The deploy workflow replaces `__VERSION__` with the commit SHA, so each deploy creates a new cache and deletes the old one. Phones get the new version on their first online visit after a deploy, and it shows the next time the site opens. app.js does not register the worker on localhost or 127.0.0.1, so local edits are never served from the cache. Once the cache is ready, the footer shows "✓ Disponible hors ligne".

## Historical curriculum update, 3 November 2026

At that update, scope was Cours 1–14, based on FrenchB1m_lesson1-14.tar. This update added five modules (15 in total) and two verb forms (six in total: present, imperfect, passé composé, plus-que-parfait, present subjunctive and present conditional). The future-tense supplement below brings the current totals to 16 modules and seven verb forms. New modules in this update are subjonctif, opinions, conditionnel, reproches and doubles. Listening stays excluded. Refer to the latest CONTENT_AUDIT.md section for source corrections and limits.

## Future-tense supplement, 3 November 2026

16 modules, 27 verbs and seven verb forms. Module `futur` has no lesson number and appears under Compléments. Cours 12 includes the future of aimer as a comparison for conditional formation, but no standalone future unit was supplied. The supplement covers futur proche/simple and does not expand futur antérieur. Verified persisted course update: 56 files, 14 lessons, 40 existing tracker topics and 13 evidence rows; new supplementary topic 41 is unassessed.

## Curriculum update, 15 November 2026 (current totals: see Cours 17–19 below)

20 modules, lessons 1–16, 27 verbs and seven verb forms. New IDs: `relatifs`, `relief`, `demonstratifs`, `adverbes` (`generations` was added then folded into the exam pages, see below). Existing IDs and the separate `futur` supplement are preserved. Source comparison found 41 files unchanged in place, 14 identical files under renamed lesson folders, one revised DOCX with no substantive exam change, and nine added paths (including two identical copies of homework 7). No existing material moved to another lesson number. The two relative-pronoun handouts are different and both were reviewed, including their embedded images.

`SOURCE_MANIFEST.json` is the current file/lesson map. Do not treat historical counts below/above as current totals. Original documents, lyrics, student lists and listening/video answers are not included in the repository. New exercises are independently authored. The live Google Sheet remains the separate progress record; this website update does not assess the learner or change tracker evidence.

## Exam preparation, 15 November 2026

Routes: `#oral` and `#oral/<topicId>` (Préparer l’oral), `#ecrire` (Préparer la rédaction), `#quiz` (Quiz mélangé), next to the existing `#test`. The sidebar has an "Examen" group above the fiches; the home page shows chapter 04 "Préparer l’examen" when the filter is "Tout le carnet". Search covers these pages and the oral topics.

Data shapes in `dist/exam-content.js`:
- `oralGuide = {steps:[[title, html]], connectors:[[category,[phrase]]], grid:[[criterion, points, tipHtml]], prep:[html]}`
- `oralTopics = [{id, title, document, pour:[..], contre:[..], vocab:[[fr,en]], amorce, questions:[..]}]`; ids are deep links, keep them stable.
- `writingGuide = {types:[{id, title, consigne, plan:[[part, html]], formules:[[label,[phrase]]], modele}], checklist:[[label, exampleHtml]], sujets:[{type, consigne}]}`
- `extraQuestions = {moduleId:[[prompt, 'answer|alternative', explanation]]}`: whole-sentence transformations shown under "Transforme" on the fiche and drawn by the quiz. "Voir la réponse" shows the first answer only, so put the most natural answer first. Checking ignores case, a final full stop and spaces before ? ! ; :, but not accents or other punctuation.

All question checking goes through `bindQuestions` in app.js. Nothing is saved (the theme choice is the one exception, see Dark theme below): no localStorage, timers, checklists, drafts and quiz scores live only in the page (the quiz resumes within a session). Timers are cleared on every route change. Listening stays excluded.


## Generations fiche folded into exam pages, 15 November 2026

The `generations` module (former fiche 21) was the only theme-based fiche. Its vocabulary and the handout's generation dates now live in the `generations` and `cohabitation` oral topics, its writing tasks in the writing subjects, and its subjunctive question in `subjonctif`. `#generations` redirects to `#oral/generations`. The notebook has 20 modules; cours 16 is still covered by `adverbes`.

## Récits and compact phone header, 15 November 2026

- `recits = [{id, title, intro, items:[[promptWith___AndInfinitive, 'answer|alternative', explanation]]}]` in `dist/exam-content.js` (optional, checked with `typeof`). Items are read in order as one story (passé composé / imparfait / plus-que-parfait). They appear only on the fiche `choisir`, in the "Récits à compléter" block (`#choisir/recits` deep-links to it; `#<fiche>/<sectionId>` scrolls to any id on a fiche), and in the quiz filter "Récits au passé": stories in random order, items in order, story title, intro and the story so far shown above each item, count = total items. They are never part of the 20-question mixed draws. Search finds them under "récit".
- Phone header (≤760 px): one 57 px row with brand, search icon (`#search-toggle`) and Sommaire. The icon opens the search field over the row (`body.search-open`); `#search-close`, Escape, choosing a result or any route change close it. `--topbar-h` defaults to 57px for the mobile menu, and `html{scroll-padding-top:68px}` keeps scrolled sections below the sticky bar. Laptop layout unchanged (search always visible).

## Reading practice, 15 November 2026

- Route `#lire` (Préparer la lecture): list of texts and "Tirer un texte"; `#lire/<id>` shows one text (unknown ids fall back to `#lire`). Order of exam pages everywhere: test, oral, rédaction, lecture, quiz. Search finds the page and each text by title.
- `lectures = [{id, title, type:'article'|'courriel'|'annonce'|'témoignage', texte:'<p>…</p>', lexique:[[fr,en]], questions:[[prompt, answer, explanation, [3 options]]]}]` in `dist/exam-content.js` (optional, checked with `typeof`). Ids are deep links. The answer must be one of the options, spelled identically.
- Questions use `questionHTML`/`bindQuestions`; the first choice locks the question, marks the right option and shows the explanation; the score (x / 5) appears when all are answered. Nothing saved. Laptop (≥1200 px): text in a sticky column beside the questions; narrower: text above, "Revoir le texte ↑" link.
- Quiz on phones: during a run the header and tools shrink, the récit shows only its last sentence (intro and earlier sentences in a `<details>`), and each new question scrolls the card into view without focusing the input.

## Cours 17–19, 17 November 2026

Current totals: 23 modules (`n` "01"–"23"), lessons 1–19, 27 verbs, eight verb forms, 14 oral topics, five récits, six reading texts. Source: `FrenchB1m_lesson1-19` (75 files; the 65 files of the 1–16 archive are byte-identical at the same paths; 10 added for cours 17–19), see `SOURCE_MANIFEST.json`.

- New modules: `cause` (21, lessons [17]), `connecteurs` (22, [17, 19]), `futurant` (23, [18]). Groups in app.js: `futurant` after `futur` in 01; `cause`, `connecteurs` after `opinions` in 03. Each has `extraQuestions`.
- Lesson 18 added to `opinions`; lesson 19 to `pc`, `choisir`, `reperes`, `relatifs`, `demonstratifs`. These additions live in the "Lessons 17–19" block at the end of `dist/content.js` as `modules.find(...).lessons.push / sections.push / q.push / source +=` statements (same pattern as the 3 November patch lines). Do not fold them into the original literals without re-running the data check; appended questions keep existing indices stable.
- Conventions: material that appears only in the cours 19 bilan (QCM) and not in a teaching handout is labelled "à reconnaître" and kept inside collapsed `<details>`. Oral topic documents start with a citable source and date (« Un article paru sur le site du … le … 2026 : « … » ») and must name fictional outlets, never real newspapers or sites. New `participleGroups` entries from cours 19 use the third item `1`.
- Conjugation: tense key `futurant` in `conjugated()` reuses `conditional([aux], true)` for the auxiliary and the plus-que-parfait agreement rows. Quiz filter `l17-19` (keys `lA-B` are parsed as inclusive lesson ranges).
- Oral timing: B1- EXAMEN.docx says 7 min preparation and a 5–6 min turn (monologue + interaction) inside a 15 min appointment; the cours 18 handout says 6–7 min preparation and a monologue of about 3 min. The pages show both; the timer stays at 7:00.

## Dark theme, 22 November 2026

`html[data-theme]` is `light` or `dark`. An inline script in index.html's `<head>` sets it before the stylesheet loads (saved choice from `localStorage.theme`, else the system `prefers-color-scheme`), so there is no flash of light. The sun/moon button `#theme-toggle` in the top bar switches it and saves the choice; app.js also follows system changes while nothing is saved and updates `meta[name=theme-color]`. The dark palette is dimmed warm paper (`--paper:#2d2a25`), deliberately not black. It lives in `@media screen{:root[data-theme=dark]{…}}` at the top of style.css, so printing always uses the light palette. In dark mode body text is weight 430, highlighter bands (`--marker`) are turned off and highlighted words use `--mark-ink` (amber) instead, and the logo switches from `.logo-light` (icons/rooster.svg) to `.logo-dark` (icons/rooster-dark.svg, cream body); both images are in the page so the swap needs no script. Every colour in style.css outside `:root` and print goes through a token; when adding a colour, add a token with both a light and a dark value.
