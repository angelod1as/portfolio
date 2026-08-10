import type { APIRoute } from "astro";
import {
  ACCENT,
  BG,
  box,
  FG,
  MUTED,
  OG_HEIGHT,
  OG_WIDTH,
  renderCard,
} from "../utils/og";

// The card for every page that isn't a post or a project — home, lists, more.
// Without it those pages fall back to a text-only preview.
export const GET: APIRoute = async () =>
  renderCard(
    box(
      {
        width: OG_WIDTH,
        height: OG_HEIGHT,
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
          "ANGELO DIAS",
        ),
      ),
      box(
        { flexDirection: "column" },
        box(
          { fontFamily: "DM Serif Display", fontSize: 82, lineHeight: 1.05 },
          "I am angelo and I do stuff",
        ),
        box(
          { fontSize: 30, color: MUTED, marginTop: 24 },
          "Developer, writer and designer",
        ),
      ),
      box({ fontSize: 28, color: MUTED }, "angelodias.com.br"),
    ),
  );
