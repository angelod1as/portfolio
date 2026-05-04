import { defineConfig, fontProviders } from "astro/config";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  integrations: [mdx()],
  site: "https://www.angelodias.com.br",
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