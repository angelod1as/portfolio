import type { APIRoute } from "astro";

// An endpoint rather than a file in public/ so the sitemap URL follows `site`
// in astro.config.mjs instead of drifting from it.
export const GET: APIRoute = ({ site }) => {
  const sitemap = new URL("sitemap-index.xml", site).href;

  return new Response(`User-agent: *\nAllow: /\n\nSitemap: ${sitemap}\n`, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};
