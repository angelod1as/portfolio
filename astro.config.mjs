// @ts-check
import { defineConfig } from 'astro/config';

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // TODO: replace placeholder with production domain (angelodias.com) before launch
  site: 'https://example.com',
  integrations: [
    mdx(),
    sitemap(),
  ],
});
