# CLAUDE.md

Guidance for Claude Code working on this repo.

---

## Project rule: AI does not write prose

**This is the most important rule.**

AI may write **code, configs, scripts, schemas, templates, infrastructure, design tokens**. AI must NOT write, edit, paraphrase, "improve," shorten, or summarize the user's **prose**:

- Blog post bodies in `src/content/blog/`
- Project descriptions in `src/content/projects/`
- Page copy in `src/content/pages/` (about, colophon, contact)
- Newsletter intros in `src/content/newsletters/` (Phase 2+)
- Frontmatter `title` and `description` fields when authored by the user

If a task seems to need AI-generated prose, leave a clearly marked `TODO: write copy here` placeholder and ask the user. Even small "improvements" need explicit approval.

**Migration from v2 is byte-for-byte for body text.** Frontmatter shape may change mechanically; body content does not.

---

## Stack

- **Astro 6** SSG, TypeScript **strict** mode
- **pnpm**, Node **22.12+**
- Content: Astro content collections (likely `src/content/`)
- MDX via `@astrojs/mdx`
- Sitemap via `@astrojs/sitemap`
- RSS via `@astrojs/rss`
- Hosting: GitHub Pages (deploy via Actions)

---

## Commands

```bash
pnpm dev               # dev server at localhost:4321
pnpm build             # production build → dist/
pnpm preview           # preview the production build
pnpm astro check       # TS + content schema check (CI gate)
pnpm astro add <name>  # add an integration
```

---

## Code style

- TypeScript **strict**. Fix types properly; do not use `any`.
- 2-space indentation (Astro default).
- Prefer Astro's built-ins over third-party (`<Image />`, content collections, etc.).
- Components: `.astro` for site components, MDX for content.
- Conventional commits (`feat:`, `fix:`, `chore:`, `docs:`, `ci:`, `refactor:`).
- No `Co-Authored-By` lines.

---

## Repo state during v3 development

- Default branch is **`v3`** (not `main`). All PRs target `v3`.
- `main` is locked via the `lock-main-during-v3-rewrite` ruleset until launch.
- v2 (Next.js) is preserved at tag `2.3.0`. To retrieve any v2 file: `git checkout 2.3.0 -- <path>`.
- Never commit directly to `v3` — feature branches and PRs only.

---

## Workflow

- Open feature branches (`feat/<short-name>`) off `v3`, push, open PR with base `v3`.
- The `claude-code-review.yml` workflow auto-reviews every PR.
- The `claude.yml` workflow responds to `@claude` mentions in issues / PR comments.
- Both workflows depend on `secrets.CLAUDE_CODE_OAUTH_TOKEN` (configured).

---

## Out of scope

- Comments
- i18n
- AI-generated or AI-edited prose, anywhere
