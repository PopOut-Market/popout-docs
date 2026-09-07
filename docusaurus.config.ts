import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const organizationName = 'PopOut-Market';
const projectName = 'popout-docs';

const config: Config = {
  title: 'PopOut Docs',
  tagline: 'Documentation for PopOut Market',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Production URL and the /<baseUrl>/ pathname the site is served under.
  // Deployed on Vercel, which serves at the domain root, so baseUrl is '/'.
  // Set `url` to the site's live domain (the *.vercel.app domain Vercel assigns,
  // or a custom domain once attached). It affects absolute links, canonical
  // URLs, and the sitemap; get it wrong and the site still renders, but those
  // absolute references point at the wrong host.
  url: 'https://popout-docs.vercel.app',
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
  themes: ['@docusaurus/theme-mermaid'],

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang.
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
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
        alt: 'PopOut Docs Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docsSidebar',
          position: 'left',
          label: 'Docs',
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
          title: 'Docs',
          items: [
            {
              label: 'Introduction',
              to: '/',
            },
            {
              label: 'Getting Started',
              to: '/getting-started/installation',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: `https://github.com/${organizationName}/${projectName}`,
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} PopOut Market. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
