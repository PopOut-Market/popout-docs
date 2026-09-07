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

**Not yet enabled.** The workflows below are committed and ready, but no
deployment is currently wired up.

### Why it isn't live

GitHub Pages requires a paid plan (Pro, Team, or Enterprise Cloud) to serve a
**private** repository. `popout-docs` is private and the `PopOut-Market`
organization is on the **free** plan, so Pages cannot be enabled here — the
setting fails in the UI and via the API alike.

To turn it on, pick one:

| Option | Effect |
| --- | --- |
| Make the repo public | Pages works on the free plan; the workflows below run as-is. Docs become world-readable. |
| Upgrade the org to Team | Keeps the repo private and allows a private-visibility Pages site. |
| Use Cloudflare Pages / Vercel / Netlify | Free tiers support private repos. Set `baseUrl` to `'/'` and configure the build in the provider's dashboard (`npm run build`, output `build/`). |

Once Pages is available, set **Settings → Pages → Source** to **GitHub Actions**
(or run `gh api -X POST repos/PopOut-Market/popout-docs/pages -f build_type=workflow`).

### The workflows

- `.github/workflows/deploy.yml` — on push to `main`, builds the site and
  publishes it to GitHub Pages. Inert until Pages is enabled.
- `.github/workflows/test-deploy.yml` — on pull requests, type-checks and builds
  without deploying. **This one works today** and needs no Pages setup.

The site is configured for `https://popout-market.github.io/popout-docs/`. For a
custom domain, set `url` to the domain and `baseUrl` to `'/'` in
`docusaurus.config.ts`.
