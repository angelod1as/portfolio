import type { APIRoute, GetStaticPaths } from "astro";
import { getCollection } from "astro:content";
import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import sharp from "sharp";
import {
  ACCENT,
  BG,
  box,
  FG,
  MUTED,
  OG_HEIGHT,
  OG_WIDTH,
  renderCard,
} from "../../utils/og";

const BORDER = 12;
const THUMB_WIDTH = 420;
const THUMB_HEIGHT = OG_HEIGHT - BORDER * 2;
const INNER_WIDTH = OG_WIDTH - BORDER * 2;

// `thumb.src` is ImageMetadata, which carries no filesystem path — so read the
// relative path back out of the entry's own frontmatter.
const readThumb = async (filePath: string) => {
  const frontmatter = readFileSync(filePath, "utf8").split("---")[1] ?? "";
  const relative = frontmatter.match(/^\s+src:\s*(\S+)/m)?.[1];
  if (!relative) return null;

  // Thumbs are webp, which resvg silently drops — convert to png first.
  const png = await sharp(join(dirname(filePath), relative))
    .resize(THUMB_WIDTH, THUMB_HEIGHT, { fit: "cover" })
    .png()
    .toBuffer();

  return `data:image/png;base64,${png.toString("base64")}`;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const projects = await getCollection("projects");

  return projects.map((project) => ({
    params: { slug: project.id },
    props: {
      title: project.data.title,
      description: project.data.description,
      filePath: project.filePath,
    },
  }));
};

export const GET: APIRoute = async ({ props }) => {
  const { title, description, filePath } = props as {
    title: string;
    description: string;
    filePath?: string;
  };

  const thumb = filePath ? await readThumb(filePath) : null;

  return renderCard(
    box(
      {
        width: OG_WIDTH,
        height: OG_HEIGHT,
        background: BG,
        color: FG,
        border: `${BORDER}px solid ${FG}`,
        fontFamily: "Lora",
      },
      box(
        {
          // Explicit width, not flexGrow — satori lets a growing column claim
          // the full row and shove the image off the canvas.
          width: thumb ? INNER_WIDTH - THUMB_WIDTH : INNER_WIDTH,
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 64,
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
            "PROJECT",
          ),
        ),
        box(
          { flexDirection: "column" },
          box(
            { fontFamily: "DM Serif Display", fontSize: 64, lineHeight: 1.05 },
            title,
          ),
          box({ fontSize: 26, color: MUTED, marginTop: 20 }, description),
        ),
        box({ fontSize: 26, color: MUTED }, "angelodias.com.br"),
      ),
      thumb && {
        type: "img",
        props: {
          src: thumb,
          width: THUMB_WIDTH,
          height: THUMB_HEIGHT,
          // Without this the image shrinks to a sliver when the description
          // is long enough to widen the text column.
          style: { objectFit: "cover", flexShrink: 0 },
        },
      },
    ),
  );
};
