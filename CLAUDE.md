# CLAUDE.md

Guidance for Claude Code working in this repository.

@AGENTS.md

## What this is

Angelo's personal site, rebuilt from scratch on branch `v4`. Astro 7, MDX, pnpm,
Node ≥ 20. No UI framework.

Read before doing anything:

- `docs/PROJECT.md` — the north star, the phases, and the binding non-goals
- `.specify/memory/constitution.md` — rules that may not be broken
- `.os/autonomy.yaml` — what always halts and asks

## Commands

```bash
pnpm dev                  # local dev server
pnpm build                # static build — also validates all content frontmatter
pnpm check                # astro check (types + diagnostics)
pnpm format               # prettier --write
pnpm format:check         # prettier --check
bash scripts/gate.sh full # the only definition of done
```

## Content

Content lives in `content/`, outside `src/`, loaded by glob loaders declared in
`src/content.config.ts`. Frontmatter is validated by zod at build time — a malformed
entry fails `pnpm build`, which is how the gate catches bad content.

Lanes are **formats** (Essays, Notes, Work, Library, Now). Subjects are **tags**. Adding
a lane is a decision and halts.

Every entry declares `lang: 'en' | 'pt'` and has one address whatever its language. Lane
indexes have language variants (`/essays/en`, `/notes/pt`) so a list can be narrowed
without JavaScript — those are views, not per-entry routes. An entry never gets a
per-language route.

**Never edit Angelo's prose.** Moving files, fixing paths, adding required frontmatter
fields — fine. Changing his words — halt. Prettier is configured with
`proseWrap: 'preserve'` so markdown is normalized structurally but sentences and line
breaks are left exactly as written.

## Style

- **v1 is plain HTML.** Semantic elements, block-level layout, no colours, no fonts, no
  components. Any styling beyond that halts and asks. Design is a later phase.
- **Code style:** no semicolons, single quotes, trailing commas, 80 columns (Prettier).
- Colours from the previous site, for whenever design starts: highlight `#f2ca19`,
  red `#F95B2B`.

## Git

- **DO NOT CO-AUTHOR**: never add `Co-Authored-By` lines to commit messages.
- `main` is the previous Next.js site and is still live on Vercel. Do not touch it, do
  not merge into it, do not deploy from it.
- Work happens in the `v4` worktree at `../v4`. The `astro/` and `v3/` worktrees are
  earlier attempts — leave them alone.
