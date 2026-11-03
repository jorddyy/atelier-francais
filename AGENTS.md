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
- dist/app.js: routing, content rendering, conjugation generation and answer checking.
- dist/style.css: responsive notebook design and print styles.
- dist/manifest.webmanifest and dist/icons/: install metadata, rooster logo and flag favicon.
- CONTENT_AUDIT.md: previous source comparison and coverage decisions.

## Checks
```sh
node --check dist/content.js
node --check dist/app.js
```
For relevant changes, check the affected page in a browser at phone and laptop widths. For conjugation changes, verify irregular stems, auxiliaries, reflexive forms and agreements. For exercise changes, check that prompts have unambiguous accepted answers. No test framework is installed.

## Extending content
Preserve module IDs and links. Module fields and question format are documented in README.md. Add source references and lesson tags, and update the lesson filter and coverage labels when extending beyond lessons 1–14. Original lesson documents are not in this repository; the audit is not a substitute for them.

## Product context
Grammar and conjugations are primary, with compact supporting vocabulary. Listening exercises are excluded. Keep phone/laptop usability and the warm notebook design, rooster and flag branding. Exercise attempts are not saved; the linked Google Sheet is the separate assessed progress record. The manifest supports installation from the browser menu, but no offline cache is implemented.

## Hosting
An earlier private copy is hosted separately; its address is not recorded here.
This GitHub repository does not automatically deploy to it. Running locally needs no ChatGPT credentials. Publication is a separate operation. Do not commit credentials or tokens.

## Curriculum update, 3 November 2026

Current scope is Cours 1–14, based on FrenchB1m_lesson1-14.tar. This update added five modules (15 in total) and two verb forms (six in total: present, imperfect, passé composé, plus-que-parfait, present subjunctive and present conditional). The future-tense supplement below brings the current totals to 16 modules and seven verb forms. New modules in this update are subjonctif, opinions, conditionnel, reproches and doubles. Listening stays excluded. Refer to the latest CONTENT_AUDIT.md section for source corrections and limits.

## Future-tense supplement, 3 November 2026

16 modules, 27 verbs and seven verb forms. Module `futur` has no lesson number and appears under Compléments. Cours 12 includes the future of aimer as a comparison for conditional formation, but no standalone future unit was supplied. The supplement covers futur proche/simple and does not expand futur antérieur. Verified persisted course update: 56 files, 14 lessons, 40 existing tracker topics and 13 evidence rows; new supplementary topic 41 is unassessed.
