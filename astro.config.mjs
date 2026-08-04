import { defineConfig, fontProviders } from "astro/config";

import { satteri } from "@astrojs/markdown-satteri";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

const site = "https://www.angelodias.com.br";

const externalLinks = {
  name: "external-links",
  element: {
    filter: ["a"],
    visit(node, ctx) {
      const href = String(node.properties?.href ?? "");
      if (!/^https?:\/\//.test(href)) return;
      if (href.startsWith(site)) return;

      ctx.setProperty(node, "className", ["external-link"]);
      ctx.setProperty(node, "rel", ["noopener", "noreferrer"]);
      ctx.setProperty(node, "target", "_blank");
      ctx.appendChild(node, {
        type: "element",
        tagName: "span",
        properties: {},
        children: [{ type: "text", value: " ➹" }],
      });
    },
  },
};

// https://astro.build/config
export default defineConfig({
  integrations: [mdx(), sitemap()],
  site,
  markdown: {
    processor: satteri({ hastPlugins: [externalLinks] }),
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
