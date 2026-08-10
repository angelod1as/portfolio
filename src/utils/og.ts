import { Resvg } from "@resvg/resvg-js";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import satori from "satori";

// Read straight from the packages: satori parses woff, and Astro's own font
// pipeline only emits woff2, which it can't read. Resolved from cwd rather
// than import.meta.url — this module gets bundled into dist/, so a path
// relative to the source file points at the wrong place at build time.
const fontsDir = join(process.cwd(), "node_modules", "@fontsource");

const display = readFileSync(
  join(
    fontsDir,
    "dm-serif-display/files/dm-serif-display-latin-400-normal.woff",
  ),
);
const text = readFileSync(
  join(fontsDir, "lora/files/lora-latin-400-normal.woff"),
);

export const OG_WIDTH = 1200;
export const OG_HEIGHT = 630;

// Mirrors the light-theme tokens in global.css.
export const ACCENT = "#f2ca19";
export const FG = "#0a0a0a";
export const BG = "#ffffff";
export const MUTED = "#525252";

// Satori lays out with flexbox only — `display: block` isn't implemented, and
// any div without an explicit display throws. Baking it in makes that
// impossible to forget.
export const box = (
  style: Record<string, unknown>,
  ...children: unknown[]
) => ({
  type: "div",
  props: { style: { display: "flex", ...style }, children },
});

export const renderCard = async (card: unknown) => {
  const svg = await satori(card, {
    width: OG_WIDTH,
    height: OG_HEIGHT,
    fonts: [
      { name: "DM Serif Display", data: display, weight: 400, style: "normal" },
      { name: "Lora", data: text, weight: 400, style: "normal" },
    ],
  });

  const png = new Resvg(svg, {
    fitTo: { mode: "width", value: OG_WIDTH },
  })
    .render()
    .asPng();

  return new Response(new Uint8Array(png), {
    headers: { "Content-Type": "image/png" },
  });
};
