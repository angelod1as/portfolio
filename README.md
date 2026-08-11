# Angelo Dias's portfolio

The [website](https://www.angelodias.com.br) is self explanatory.

Third build of it. It was Gatsby, then Next.js, now [Astro](https://astro.build).
Static, no frontend framework, deployed to GitHub Pages.

## Running it

Node is pinned in `.nvmrc`. PNPM only — not npm, not bun.

```sh
pnpm install
pnpm dev
```

| Command             | What it does                                     |
| :------------------ | :----------------------------------------------- |
| `pnpm dev`          | Dev server on `localhost:4321`. Drafts visible.  |
| `pnpm build`        | Static build to `dist/`, including social cards. |
| `pnpm preview`      | Serve `dist/` as it will be deployed.            |
| `pnpm test`         | Unit tests (vitest).                             |
| `pnpm astro check`  | Types, across `.astro` files too.                |
| `pnpm format:write` | Prettier.                                        |

## How it is put together

Content is MDX in `content/`, loaded as Astro collections and validated by
zod schemas in `src/content.config.ts`. A typo in a date or a missing
description fails the build instead of the page.

- `content/blog/YYYY/MM/` — folders are for authoring only; the URL is flat.
- `content/projects/<slug>/` — flat, with images beside the entry.
- `content/recommendations/` — one file each.
- `src/fragments/` — page copy that has no URL and belongs to one page.

Markdown runs through [satteri](https://www.npmjs.com/package/satteri) with two
plugins in `astro-plugins/`: one marks external links, the other turns lone
images into captioned figures.

Social cards are drawn at build time with satori and resvg — one per post and
per project. Nothing runs at request time.

Components split by what they know: `src/components/ui/` takes primitives,
`src/components/content/` takes collection entries, `embeds/` and `mdx/` are
rendered inside content.

## Writing

Add a file under `content/blog/YYYY/MM/<slug>/index.md`, or a bare
`<slug>.mdx` when it carries no images. Frontmatter is enforced by the
schema; `draft: true` keeps a post out of the build while leaving it visible
in `pnpm dev`.

## Claude

Claude is used here to learn, not to write. The rules are in `CLAUDE.md`.

## Like what you see?

I'm open for hire. Hit me on [oiangelodias\[at\]gmail.com](mailto:oiangelodias@gmail.com).
