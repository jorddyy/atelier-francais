# Project guide

## Run
This is a static HTML/CSS/JavaScript website with no dependencies and no build step.
From the repository root:
```sh
python3 -m http.server 8000 --directory dist
```
Open http://localhost:8000. Serve dist as the web root; the web app manifest uses root-relative paths.

## Files
- dist/index.html: page shell, navigation, search and install dialog.
- dist/content.js: lesson modules, questions, verb forms and source references.
- dist/app.js: routing, content rendering, conjugation generation and answer checking.
- dist/style.css: responsive notebook design (Seyès ruling, red margin, highlighter) and print styles.
- dist/fonts/: self-hosted Fraunces and Source Sans 3 with their OFL licences.
- dist/manifest.webmanifest and dist/icons/: install metadata, rooster logo and flag favicon.
- CONTENT_AUDIT.md: previous source comparison and coverage decisions.

## Checks
```sh
node --check dist/content.js
node --check dist/app.js
```
For relevant changes, check the affected page in a browser at phone and laptop widths. For conjugation changes, verify irregular stems, auxiliaries, reflexive forms and agreements. For exercise changes, check that prompts have unambiguous accepted answers. No test framework is installed.

## Extending content
Preserve module IDs and links. Module fields and question format are documented in README.md. Add source references and lesson tags, and update the lesson filter and coverage labels when extending beyond lessons 1–8. Original lesson documents are not in this repository; the audit is not a substitute for them.

## Product context
Grammar and conjugations are primary, with compact supporting vocabulary. Listening exercises are excluded. Keep phone/laptop usability and the warm notebook design, rooster and flag branding. Avoid uppercase micro-labels and copy that comments on the site itself. Exercise attempts are not saved; the linked Google Sheet is the separate assessed progress record. The manifest supports installation guidance, but no offline cache is implemented.

## Hosting
An earlier private copy is hosted separately; its address is not recorded here.
This GitHub repository does not automatically deploy to it. Running locally needs no ChatGPT credentials. Publication is a separate operation. Do not commit credentials or tokens.
