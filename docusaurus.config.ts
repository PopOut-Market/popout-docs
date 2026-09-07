import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const organizationName = 'PopOut-Market';
const projectName = 'popout-docs';

const config: Config = {
  title: 'PopOut Docs',
  tagline: 'PopOut Market 서비스 문서',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Production URL and the /<baseUrl>/ pathname the site is served under.
  // Deployed on Netlify, which serves at the domain root, so baseUrl is '/'.
  // Set `url` to the site's live domain (the *.netlify.app domain Netlify
  // assigns, or a custom domain once attached). It affects absolute links,
  // canonical URLs, and the sitemap; get it wrong and the site still renders,
  // but those absolute references point at the wrong host.
  url: 'https://keen-wisp-0f5ad6.netlify.app',
  baseUrl: '/',
  trailingSlash: false,

  // Used for the "Edit this page" links and the GitHub navbar item, which point
  // at the source repo regardless of where the site is hosted.
  organizationName,
  projectName,

  onBrokenLinks: 'throw',

  // Render ```mermaid fenced blocks as diagrams. Architecture diagrams are
  // authored as code so they diff in review like any other source.
  markdown: {
    mermaid: true,
  },
  themes: [
    '@docusaurus/theme-mermaid',

    // Offline search. The index is built from the rendered HTML during
    // `docusaurus build` and shipped as a static JSON file, so search works on
    // Netlify's CDN with no Algolia account, no crawler, and no runtime
    // backend. `docusaurus start` does NOT index — the dev server has no build
    // output to scan — so the search bar only returns results against a
    // production build (`npm run build && npm run serve`).
    [
      '@easyops-cn/docusaurus-search-local',
      {
        // One index per locale: Docusaurus builds ko and en separately, and
        // each build writes its own search-index.json next to its HTML. Both
        // stemmers are loaded because either index may hold both scripts —
        // Korean docs quote English identifiers, and vice versa.
        language: ['ko', 'en'],

        // Docs-only site (routeBasePath '/'), so the docs live at the root and
        // there is no blog or standalone page to index.
        docsRouteBasePath: '/',
        indexBlog: false,
        indexPages: false,

        // Fingerprint the index filename. Without it a reader's browser can
        // serve a cached index from a previous deploy and silently miss pages
        // that were added since.
        hashed: true,

        // Show the full doc path under each hit and highlight the query on the
        // page you land on — both matter here because section titles repeat
        // across the product and engineering trees.
        explicitSearchResultPath: true,
        highlightSearchTermsOnTargetPage: true,
        searchResultLimits: 10,
        searchResultContextMaxLength: 80,
      },
    ],
  ],

  // Registers Mermaid's ELK layout engine, which diagrams opt into with an
  // `%%{init: {"layout": "elk"}}%%` directive. See src/mermaid-elk.ts.
  clientModules: ['./src/mermaid-elk.ts'],

  // Korean is the default locale and is served at the site root; English at
  // /en/. Docusaurus reads the DEFAULT locale from `docs/`, not from `i18n/`,
  // so `docs/` holds the Korean source and the English translation lives under
  // i18n/en/docusaurus-plugin-content-docs/current/, mirroring it exactly.
  // Every page must exist in both: relative .md links resolve inside one
  // locale tree, so a missing counterpart fails that locale's build.
  i18n: {
    defaultLocale: 'ko',
    locales: ['ko', 'en'],
    localeConfigs: {
      // Labels are endonyms: each stays in its own script so a reader who
      // cannot read the current language still recognises their option. Same
      // rule the app itself follows for its language menu.
      ko: {label: '한국어'},
      en: {label: 'English'},
    },
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Docs-only mode: serve the docs at the site root instead of /docs.
          routeBasePath: '/',
          editUrl: `https://github.com/${organizationName}/${projectName}/tree/main/`,
        },
        // Docs-only site: no blog, no standalone React pages.
        blog: false,
        pages: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    // Mermaid renders with the built-in theme matching the reader's colour
    // mode, so backgrounds, edges, and label text stay legible in both.
    // Brand accents are applied per-diagram with `classDef` (see
    // src/css/custom.css for the shared palette those classDefs use), because
    // themeVariables are global and cannot vary by colour mode.
    mermaid: {
      theme: {light: 'neutral', dark: 'dark'},
      options: {
        fontFamily:
          "system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
        flowchart: {curve: 'basis', nodeSpacing: 40, rankSpacing: 55},
        sequence: {actorMargin: 40, boxMargin: 8, mirrorActors: false},
      },
    },
    navbar: {
      title: 'PopOut Docs',
      logo: {
        alt: 'PopOut Docs 로고',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docsSidebar',
          position: 'left',
          label: '문서',
        },
        {
          // Placed explicitly so the search box sits left of the language and
          // GitHub items; without this item the theme appends it last.
          type: 'search',
          position: 'right',
        },
        {
          // The language switcher. Docusaurus renders it as a dropdown listing
          // every locale in i18n.locales, labelled by its localeConfigs label.
          type: 'localeDropdown',
          position: 'right',
        },
        {
          href: `https://github.com/${organizationName}/${projectName}`,
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: '문서',
          items: [
            {
              label: '소개',
              to: '/',
            },
            {
              label: '시작하기',
              to: '/getting-started/installation',
            },
          ],
        },
        {
          title: '더 보기',
          items: [
            {
              label: 'GitHub',
              href: `https://github.com/${organizationName}/${projectName}`,
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} PopOut Market. Docusaurus로 제작되었습니다.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
