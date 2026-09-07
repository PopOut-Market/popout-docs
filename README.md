# popout-docs

Documentation site for PopOut Market, built with [Docusaurus 3](https://docusaurus.io/).

## Quick start

Requires Node.js 20+.

```bash
npm install
npm start
```

The dev server runs at <http://localhost:3000> and hot-reloads on save.

## Commands

| Command | What it does |
| --- | --- |
| `npm start` | Dev server with hot reload |
| `npm run build` | Build the static site into `build/` |
| `npm run serve` | Preview the production build locally |
| `npm run typecheck` | Type-check the config and any TypeScript in `src/` |
| `npm run clear` | Clear the Docusaurus build cache |

## Writing docs

Content lives in `docs/` as Markdown, one file per page. The sidebar is
generated from the folder structure, so adding a file is enough to get it into
the nav — see [Writing Docs](docs/getting-started/writing-docs.md) for
frontmatter fields and conventions.

The build fails on broken internal links, so a green build means the navigation
is intact.

## Deployment

Deployed on **Vercel** via its GitHub integration. Vercel's free tier serves
private repos, which is why it's used here instead of GitHub Pages (Pages needs
a paid plan for a private repo, and `PopOut-Market` is on the free plan).

### How it deploys

Once the repo is connected to a Vercel project:

- **Every push to `main`** triggers a production build and deploy.
- **Every pull request** gets its own preview deployment with a unique URL.

Vercel auto-detects Docusaurus. The build settings are also pinned explicitly in
[`vercel.json`](vercel.json): framework `docusaurus-2`, build `npm run build`,
output `build/`.

### One-time setup (connect the repo)

The build config lives in the repo, but linking the repo to Vercel is a one-time
step done in your Vercel account — pick either:

**Dashboard (simplest):**

1. <https://vercel.com/new> → **Import** the `PopOut-Market/popout-docs` repo
   (authorize Vercel for the org/repo if prompted).
2. Vercel detects Docusaurus and fills in the build settings from `vercel.json`.
   Leave the **Root Directory** at the repo root.
3. **Deploy.** Auto-deploy on push + PR previews are on by default afterward.

**Or the CLI** (run from `popout-docs/`):

```bash
npm i -g vercel
vercel login
vercel link       # create/link the Vercel project
vercel --prod     # first production deploy
```

After the first deploy, note the assigned `*.vercel.app` domain (or attach a
custom domain in **Project → Settings → Domains**) and set `url` in
`docusaurus.config.ts` to match, so canonical links and the sitemap are correct.
`baseUrl` is already `'/'` for root-domain serving.

### GitHub Pages (fallback, off)

`.github/workflows/deploy.yml` still contains the Pages build+publish steps but
is set to **manual-only** (`workflow_dispatch`) so it no longer runs on push. To
switch back to Pages, re-add the `push` trigger and set `url`/`baseUrl` back to
the project-path form. `.github/workflows/test-deploy.yml` (PR type-check +
build, no deploy) is unaffected and keeps working.
