import { defineConfig, fontProviders } from "astro/config";

import { satteri } from "@astrojs/markdown-satteri";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { externalLinks } from "./astro-plugins/external-links";
import { figures } from "./astro-plugins/figures";

const site = "https://www.angelodias.com.br";

// https://astro.build/config
export default defineConfig({
  integrations: [mdx(), sitemap()],
  site,
  markdown: {
    processor: satteri({ hastPlugins: [externalLinks(site), figures] }),
  },
  image: {
    layout: "constrained",
    objectFit: "cover",
    responsiveStyles: true,
  },
  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: "DM Serif Display",
      cssVariable: "--font-display",
    },
    {
      provider: fontProviders.fontsource(),
      name: "Lora",
      cssVariable: "--font-text",
    },
  ],
});
