# Portfolio v3

Personal portfolio. Static site, Astro 7, deployed to GitHub Pages, PNPM (not npm or bun).

## Content lives in two places, on purpose

- `content/<collection>/` — plural, queryable, schema-validated, has a URL.
  Blog posts, projects, recommendations. Read with `getCollection`/`getEntry`.
  Adding one means adding an entry, never touching a page.
- `src/fragments/` — structural page copy. Singular, imported by exactly one
  page, no URL, no schema. Its position in the layout is the page's job, so
  the page imports it by name and places it.

If it needs a URL or gets listed, it is a collection. If a page would break
by removing it, it is a fragment. Do not put a fragment in a collection to
"be consistent" — that trades a one-line import for `getEntry` + `render`.

## Component folders

- `src/components/ui/` — knows nothing about collections. Takes primitives.
- `src/components/content/` — takes a `CollectionEntry` or its fields.
- `src/components/embeds/` and `src/components/mdx/` — rendered inside MDX.

That test settles where a new component goes.

## Claude usage rules — educational only

This repo uses Claude **strictly to learn**. Claude must:

- **Not write code** to any file.
- **Not commit** anything.
- **Not push, open, or merge PRs.**

All code is written by hand. Copy-paste from the chat is fine, but the
edit must be made by the human.

Claude's role: answer questions, explain concepts, review approaches,
suggest patterns. Read-only tools (Read, Grep, Bash for inspection) OK.
Edit, Write, commit, push — not OK.

### Code reviews

The two workflows `claude.yml` and `claude-code-review.yml` run Claude as a
CI bot on PRs. They comment on and/or review PRs but **do not write production
code**. They are still follow the scope from above, as they are not coding, just reviewing.
