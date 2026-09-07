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

Deployed on **Netlify** via its GitHub integration. Netlify's free plan supports
continuous deploy from **private organization** repos, which is why it's used
here instead of GitHub Pages (Pages needs a paid plan for a private repo) or
Vercel (its free Hobby plan won't deploy a private *org*-owned repo). The sibling
`Website/` project also deploys on Netlify.

### How it deploys

Once the repo is connected to a Netlify site:

- **Every push to `main`** triggers a production build and deploy.
- **Every pull request** gets its own deploy preview with a unique URL.

Netlify reads its build settings from [`netlify.toml`](netlify.toml): build
`npm run build`, publish `build/`, Node 20.

### One-time setup (connect the repo)

The build config lives in the repo, but linking the repo to Netlify is a one-time
step done in the Netlify account:

1. <https://app.netlify.com/start> → **Import from Git** → **GitHub**, and
   authorize Netlify for the `PopOut-Market` org / `popout-docs` repo if prompted.
2. Netlify reads `netlify.toml`, so the build command and publish dir are
   pre-filled. Leave the **base directory** at the repo root.
3. **Deploy.** Auto-deploy on push + deploy previews are on by default afterward.

**Or the CLI** (run from `popout-docs/`):

```bash
npm i -g netlify-cli
netlify login
netlify init      # create/link the Netlify site
netlify deploy --prod
```

After the first deploy, note the assigned `*.netlify.app` domain (or attach a
custom domain in **Site configuration → Domain management**) and set `url` in
`docusaurus.config.ts` to match, so canonical links and the sitemap are correct.
`baseUrl` is already `'/'` for root-domain serving.

> A [`vercel.json`](vercel.json) is also kept in the repo. It's unused while the
> site is on Netlify, but lets the project deploy on Vercel too if the org ever
> moves to a Vercel Pro plan.

### GitHub Pages (fallback, off)

`.github/workflows/deploy.yml` still contains the Pages build+publish steps but
is set to **manual-only** (`workflow_dispatch`) so it no longer runs on push. To
switch back to Pages, re-add the `push` trigger and set `url`/`baseUrl` back to
the project-path form. `.github/workflows/test-deploy.yml` (PR type-check +
build, no deploy) is unaffected and keeps working.
