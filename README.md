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
node --check dist/app.js
```

## Project documentation

See `AGENTS.md` for project structure and development instructions, and `CONTENT_AUDIT.md` for the previous content check. The complete application, icons and styling are in `dist/`. The audit records the previous review, not an independent guarantee of correctness. Original course PDFs and Word documents are not included in this source export; supply the lesson archive separately for a fresh source comparison.

This is an export of the audited ChatGPT Site source at commit `3b69ac0c42b339b25adb5e5f6f2a9313672b6753`. Hosting credentials and platform configuration are not needed to review or run it. GitHub Pages is not enabled. Changes here must be deliberately imported and published to update the existing site.


Buildless static revision website. Hosting directory: `dist`.

## Extend

- `dist/content.js`: topic modules, source references, lesson tags, questions and verb data.
- `dist/app.js`: navigation, search, exercises and conjugation rendering.
- `dist/style.css`: responsive layouts and print styles.
- Preserve module IDs to keep bookmarks working. Add lesson references to existing topics when extending them.
- New modules have `id`, `n`, `title`, `subtitle`, `lessons`, `tag`, `color`, `intro`, `sections`, `en`, `source`, `q`.
- Questions are [prompt, accepted answers separated by |, explanation]. Only use constrained prompts whose answers can be checked reliably. Do not grade open writing by exact matching.
- The current lesson filter covers 1–8; increase its range when adding later lessons. Update coverage labels and exam scope only with source evidence.
- Verb array: infinitive, six comma-separated present forms, past participle, optional auxiliary (defaults to avoir). The generator handles the current 27 verbs; review new spelling exceptions explicitly before extending it.
- No external libraries, fonts, analytics or runtime network requests. No local proficiency scores or saved exercise responses. Google Sheets remains the sole assessed progress record.
- Listening excluded by user request.

## Sources reviewed

Uploaded `french_course_syllabus_v1.md` (17 October 2026) and `FrenchB1m_lesson1-8.zip`. Read textual grammar and communication handouts, present verb PDF, exam document and the embedded EN and past-participle images. Image-only narrative exercises were not reproduced. All exercises on the site are newly authored. Supplemental agreement and pronoun-order rules are explicitly labelled.

See `CONTENT_AUDIT.md` for the source-by-source content check and scope decisions (21 October 2026).

## QA

JavaScript syntax checks; desktop preview; phone layouts at 390 and 360 CSS pixels using browser iframes; lesson filtering; verb/tense selection including manger imparfait; exercise validation; mobile navigation; search; narrow-table overflow check.

## Handbook design and Android install

The landing view follows the selected course-notebook design: warm ivory, burgundy chapter numbers, fine gold rules and grouped topic links. Conjugation examples appear inside the relevant chapters, not on the homepage. The lesson filter keeps the original group numbers stable. `icons/rooster.svg` is the original vector logo; `icons/flag.svg` remains the favicon. PNG app icons are rendered from the rooster and tricolour emblem, with a separate maskable safe-zone variant.

`manifest.webmanifest` declares identity, scope, start URL, standalone display and PNG icons. The HTML requests the manifest with credentials because hosting remains private. Firefox Android installation is through the browser menu; the in-page link provides instructions, not a fake browser install prompt. No service worker or offline cache is added. Network and existing hosting authentication are still required. Do not claim Android installation was device-tested from a desktop preview.
