import { defineConfig, fontProviders } from "astro/config";

import mdx from "@astrojs/mdx";
import rehypeExternalLinks from "rehype-external-links";

const site = "https://www.angelodias.com.br";

// https://astro.build/config
export default defineConfig({
  integrations: [mdx()],
  site,
  markdown: {
    rehypePlugins: [
      [
        rehypeExternalLinks,
        {
          target: "_blank",
          rel: ["noopener", "noreferrer"],
          test: (node) => !String(node.properties?.href ?? "").startsWith(site),
          properties: { class: "external-link" },
          content: { type: "text", value: " ➹" },
        },
      ],
    ],
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
