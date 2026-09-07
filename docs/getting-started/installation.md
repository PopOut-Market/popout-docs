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

## Type-check

```bash
npm run typecheck
```

Validates `docusaurus.config.ts`, `sidebars.ts`, and any TypeScript under `src/`.
