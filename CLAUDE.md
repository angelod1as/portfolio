# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

> **Branch `v4`.** This branch is the Astro rewrite. The Next.js documentation below
> describes `main` (still live on Vercel) and is kept for porting reference only — it does
> not describe this branch. For what `v4` is, read `docs/PROJECT.md` and
> `.specify/memory/constitution.md`. Current commands: `pnpm dev`, `pnpm build`,
> `pnpm check`, `bash scripts/gate.sh full`.

## Commands (main / Next.js — historical)

```bash
npm run dev          # Local dev server
npm run build        # Production build
npm run lint         # ESLint + TypeScript type-check (tsc --noEmit)
npm test             # Jest tests
npm run post         # Scaffold a new blog post (interactive CLI)
npm run project      # Scaffold a new project entry (interactive CLI)
```

## Architecture

Next.js 15 portfolio site using **static generation** (getStaticProps/getStaticPaths) with MDX-based content. Deployed on Vercel.

### Content Pipeline

MDX files in `/content/{blog,projects,pages}/` → parsed with `gray-matter` (frontmatter) → serialized with `next-mdx-remote` + rehype plugins → rendered as static pages.

- `src/lib/common/fetchAllPages.ts` — lists all content of a type, extracts metadata
- `src/lib/common/fetchSinglePage.ts` — fetches one page, serializes MDX with rehype-highlight, rehype-slug, rehype-autolink-headings

### Key Directories

- `src/pages/` — Next.js pages with SSG; includes API routes for OG image generation (`/api/og`) and RSS (`/api/substack`)
- `src/components/pages/` — page-specific components (Home, Blog, Projects)
- `src/components/common/` — shared components (MDX renderer, Footer, Form)
- `src/components/templates/` — layout wrappers (Providers, Template)
- `src/helpers/` — utility functions (date formatting, reading time calc)
- `src/types/types.ts` — shared TypeScript types
- `content/` — MDX content organized by type and date

### Routing

| Route | Source |
|-------|--------|
| `/` | Home page |
| `/blog` | Blog listing with filtering/search |
| `/blog/[slug]` | Individual blog post |
| `/projects` | Project listing |
| `/projects/[slug]` | Individual project |
| `/[slug]` | Catch-all for static pages from `content/pages/` |

### Path Aliases (tsconfig)

`#types/*`, `#pages/*`, `#components/*`, `#test/*`, `#lib/*`, `#content/*` — all map into `src/` subdirectories.

## Git Commits

- **DO NOT CO-AUTHOR**: Never add `Co-Authored-By` lines to commit messages.

## Style & Conventions

- **Styling**: Tailwind CSS + SASS (`src/styles/globals.sass`). Custom colors: highlight (#f2ca19), red (#F95B2B). Dark mode via class strategy.
- **Code style**: No semicolons, single quotes, trailing commas, 80-char width (Prettier). Unused imports are warnings. No console.log (warn/error allowed).
- **OG images**: Generated dynamically via `@vercel/og` at `/api/og` (Edge runtime).
- **UI primitives**: Radix UI (accordion, toggle-group).
