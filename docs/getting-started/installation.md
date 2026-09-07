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

## Working on the Korean translation

Korean pages live under `i18n/ko/docusaurus-plugin-content-docs/current/`,
mirroring the structure of `docs/`. To run the site in Korean:

```bash
npm start -- --locale ko      # dev server, Korean
npm run build                 # builds both locales
```

Navbar and footer strings are not Markdown — they live in JSON under
`i18n/ko/docusaurus-theme-classic/`, and sidebar category labels in
`i18n/ko/docusaurus-plugin-content-docs/current.json`. After adding something on
the English side, regenerate the translation scaffolding:

```bash
npm run write-translations -- --locale ko
```

That only adds new keys; it never overwrites messages you have already
translated.

:::note[Relative links resolve within a locale]

A relative link like `./foo.md` needs its target to exist **in the same locale
tree**. Add an English page without its Korean counterpart and the Korean build
fails on the link pointing at it. Add pages to both languages together.

:::
