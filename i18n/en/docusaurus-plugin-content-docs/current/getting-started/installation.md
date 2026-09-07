---
sidebar_position: 1
title: Installation
---

# Running the docs locally

## Prerequisites

- **Node.js 20 or newer** (`node -v`). Docusaurus 3 will not build on older releases.
- **npm 10 or newer**, which ships with Node 20+.

## Setup

Clone the repository and install dependencies:

```bash
git clone https://github.com/PopOut-Market/popout-docs.git
cd popout-docs
npm install
```

## Start the dev server

```bash
npm start
```

This serves the site at [http://localhost:3000](http://localhost:3000) and hot-reloads on save. Most
edits appear without a refresh; changes to `docusaurus.config.ts` require
restarting the server.

## Build the production site

```bash
npm run build
npm run serve
```

`npm run build` writes static files to `build/` and is what CI runs on every
pull request. It fails on broken internal links (`onBrokenLinks: 'throw'`), so a
green build means the navigation is intact. `npm run serve` previews that build
locally.

:::warning[The build cache can serve stale output]

`npm run build` in this repo has been observed reusing a previous result instead
of picking up edits you just saved — reporting broken links that are not broken,
or omitting a section you just added.

If the build output disagrees with the source, clear the cache and rebuild:

```bash
npx docusaurus clear && npm run build
```

`npx docusaurus clear` removes `build/`, `.docusaurus/`, and
`node_modules/.cache/`.

:::

## Type-check

```bash
npm run typecheck
```

Validates `docusaurus.config.ts`, `sidebars.ts`, and any TypeScript under `src/`.

## Working on the English translation

**Korean is the default locale.** Docusaurus reads the default locale from
`docs/`, not from `i18n/`, so the Korean source lives in `docs/` and the English
translation lives under `i18n/en/docusaurus-plugin-content-docs/current/`,
mirroring it exactly. Korean is served at the site root, English under `/en/`.

```bash
npm start                     # dev server, Korean (default)
npm start -- --locale en      # dev server, English
npm run build                 # builds both locales
```

Navbar and footer strings are not Markdown. The Korean ones sit directly in
`docusaurus.config.ts` because that is the default locale; their English
counterparts live in `i18n/en/docusaurus-theme-classic/`, and sidebar category
labels in `i18n/en/docusaurus-plugin-content-docs/current.json`. After adding
something on the Korean side, regenerate the translation scaffolding:

```bash
npm run write-translations -- --locale en
```

That only adds new keys; it never overwrites messages you have already
translated.

:::caution[Changing a config label changes its translation key]

Navbar and footer translation keys are **derived from the Korean string in the
config** — `item.label.문서`, for instance. Editing a label in
`docusaurus.config.ts` therefore orphans the existing English translation. After
renaming one, re-run `write-translations` and delete the stale key left behind
in `i18n/en/`.

:::

:::note[Relative links resolve within a locale]

A relative link like `./foo.md` needs its target to exist **in the same locale
tree**. Add a Korean page without its English counterpart and the English build
fails on the link pointing at it. Add pages to both languages together.

:::
