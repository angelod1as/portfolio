import type { APIRoute, GetStaticPaths } from "astro";
import { getCollection } from "astro:content";
import { ACCENT, BG, box, FG, MUTED, renderCard } from "../../utils/og";

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

  return renderCard(
    box(
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
    ),
  );
};
