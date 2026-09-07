/**
 * Registers the ELK layout engine with Mermaid.
 *
 * Mermaid's default layout engine is dagre, which places nodes by rank and
 * makes no attempt to minimise edge crossings between them. On a diagram with
 * one hub node fanning out to many others — which is the shape of most of the
 * architecture diagrams here — dagre spreads the graph sideways and routes
 * edges across each other.
 *
 * ELK (the Eclipse Layout Kernel) does proper crossing minimisation and
 * orthogonal edge routing, so the same graph reads as tidy columns instead.
 * Opt a diagram into it with an init directive on the first line:
 *
 *     %%{init: {"layout": "elk"}}%%
 *     flowchart TB
 *       ...
 *
 * ELK is not bundled with Mermaid; it ships as a separate layout loader that
 * has to be registered on the Mermaid singleton before any diagram renders.
 * `@docusaurus/theme-mermaid` exposes no hook for that, so this runs as a
 * Docusaurus client module (registered in `docusaurus.config.ts` under
 * `clientModules`), which executes at app bootstrap — before the first
 * `<Mermaid>` component mounts.
 *
 * Sequence diagrams ignore the setting: they have a fixed layout of their own.
 */
import mermaid from 'mermaid';
import elkLayouts from '@mermaid-js/layout-elk';

if (typeof window !== 'undefined') {
  mermaid.registerLayoutLoaders(elkLayouts);
}
