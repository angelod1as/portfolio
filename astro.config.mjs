// @ts-check
import { defineConfig } from 'astro/config';

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // TODO: at launch, replace site with 'https://angelodias.com' and remove `base`.
  // Until then we deploy to GitHub Pages at https://angelod1as.github.io/portfolio/
  site: 'https://angelod1as.github.io',
  base: '/portfolio',
  integrations: [
    mdx(),
    sitemap(),
  ],
});
