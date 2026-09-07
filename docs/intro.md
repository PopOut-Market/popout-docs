---
slug: /
sidebar_position: 1
title: Introduction
---

# PopOut Docs

Welcome to the documentation for PopOut Market.

This site is built with [Docusaurus](https://docusaurus.io/). Every page is a
Markdown file under `docs/` in the
[popout-docs repository](https://github.com/PopOut-Market/popout-docs) — edit a
file, open a pull request, and the site redeploys when it merges to `main`.

## Where to start

- **[Getting Started](./getting-started/installation.md)** — run the docs site
  locally and make your first change.
- **[Writing Docs](./getting-started/writing-docs.md)** — file layout,
  frontmatter, and how pages get into the sidebar.

## Conventions

| Thing | Rule |
| --- | --- |
| File location | One Markdown file per page, under `docs/` |
| URL | Mirrors the path: `docs/getting-started/installation.md` → `/getting-started/installation` |
| Sidebar order | The `sidebar_position` frontmatter field, ascending |
| Category label | The `_category_.json` file inside the folder |
