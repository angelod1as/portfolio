import { Resvg } from "@resvg/resvg-js";
import type { APIRoute, GetStaticPaths } from "astro";
import { getCollection } from "astro:content";
import { readFileSync } from "node:fs";
import satori from "satori";

const fonts = new URL("../../../node_modules/@fontsource/", import.meta.url);

const display = readFileSync(
  new URL(
    "dm-serif-display/files/dm-serif-display-latin-400-normal.woff",
    fonts,
  ),
);
const text = readFileSync(
  new URL("lora/files/lora-latin-400-normal.woff", fonts),
);

const ACCENT = "#f2ca19";
const FG = "#0a0a0a";
const BG = "#ffffff";
const MUTED = "#525252";

const box = (style: Record<string, unknown>, ...children: unknown[]) => ({
  type: "div",
  props: { style: { display: "flex", ...style }, children },
});

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getCollection("blog", ({ data }) => !data.draft);

  return posts.map((post) => ({
    params: { slug: post.id },
    props: { title: post.data.title, description: post.data.description },
  }));
};

export const GET: APIRoute = async ({ props }) => {
  const { title, description } = props as {
    title: string;
    description: string;
  };

  const card = box(
    {
      width: 1200,
      height: 630,
      flexDirection: "column",
      justifyContent: "space-between",
      padding: 64,
      background: BG,
      color: FG,
      border: `12px solid ${FG}`,
      fontFamily: "Lora",
    },
    box(
      {},
      box(
        {
          padding: "6px 16px",
          background: ACCENT,
          color: FG,
          border: `4px solid ${FG}`,
          fontSize: 28,
          fontWeight: 700,
        },
        "BLOG",
      ),
    ),
    box(
      { flexDirection: "column" },
      box(
        { fontFamily: "DM Serif Display", fontSize: 82, lineHeight: 1.05 },
        title,
      ),
      box({ fontSize: 30, color: MUTED, marginTop: 24 }, description),
    ),
    box({ fontSize: 28, color: MUTED }, "angelodias.com.br"),
  );

  const svg = await satori(card, {
    width: 1200,
    height: 630,
    fonts: [
      { name: "DM Serif Display", data: display, weight: 400, style: "normal" },
      { name: "Lora", data: text, weight: 400, style: "normal" },
    ],
  });

  const png = new Resvg(svg, {
    fitTo: { mode: "width", value: 1200 },
  })
    .render()
    .asPng();

  return new Response(new Uint8Array(png), {
    headers: { "Content-Type": "image/png" },
  });
};
