# Portfolio v3

Personal site of Angelo Dias — writing-first, statically generated, low-maintenance.

This is the third major version of [angelodias.com](https://angelodias.com), a complete rebuild on Astro. v2 (Next.js) is preserved at tag `2.3.0`. At launch, v3 replaces v2 at the same domain.

---

## Project rule: AI does not write prose

This codebase is built with AI assistance. **The user's writing is not.** AI may write code, configs, scripts, schemas, templates, and infrastructure. AI must not write, edit, paraphrase, "improve," shorten, or summarize prose anywhere on the site:

- Blog post bodies
- Project descriptions
- Page copy (about, colophon, contact)
- Newsletter intros (Phase 2+)
- User-authored frontmatter `title` and `description`

If a task seems to need AI-generated prose, leave a `TODO: write copy here` placeholder and ask. See [`CLAUDE.md`](./CLAUDE.md) for the full version.

---

## Quick start

```bash
pnpm install        # install dependencies
pnpm dev            # local dev server at http://localhost:4321
pnpm build          # production build → dist/
pnpm preview        # preview the production build
pnpm astro check    # type + content schema check (CI gate)
```

Requires **Node 22.12+** and **pnpm**.

---

## Stack

| | |
|---|---|
| **Astro 6** | SSG with content collections, MDX, TypeScript strict mode |
| **pnpm** | Package manager |
| **GitHub Pages** | Hosting (deploys via GitHub Actions) |
| **`@astrojs/mdx`** | MDX content support |
| **`@astrojs/sitemap`** | Sitemap generation |
| **`@astrojs/rss`** | RSS feed |
| **Pagefind** | Client-side search (planned) |
| **GoatCounter** | Privacy-friendly analytics (planned) |
| **Shiki** | Syntax highlighting (Astro built-in) |
| **Satori** | Build-time OG image generation (planned) |

---

## Phases

| Phase | Status | Scope |
|---|---|---|
| **0 — Setup** | in progress | Tag v2 as `2.3.0`, scaffold Astro on `v3` branch, lock `main`. |
| **1 — Site** | next | Blog + portfolio + homepage + about/colophon/contact, deployed to GH Pages. |
| **2 — Newsletter** | future | Resend hosted audiences, weekly Sunday digest, subscribe forms. |
| **3 — Notes** | future | Microblog notes, both on-site and appended to weekly newsletter. |
| **4+** | future | Polish, possible Listmonk migration, etc. |

---

## Visual direction

- **Anchor**: [shaunbent.co.uk](https://www.shaunbent.co.uk/) two-column sensibility.
- **Homepage**: 3-column on wide screens (identity / latest writing / now & links), stacks on mobile and tablet.
- **Theme**: dark + light, system-preference default, persisted toggle.
- **Palette**: high-contrast (sans display + serif body). Specific accent color and fonts are an open Phase 1 design decision.
- **Language**: English only.
- **A11y**: WCAG AA target.

---

## Content model

### URLs

```
/blog/2024/post-slug
/projects/2023/project-slug
/tag/<tag-slug>
/category/<category-slug>
```

### Frontmatter (blog)

```yaml
title: Post title
description: Short summary
publishedAt: 2024-11-03   # missing or future = excluded from build
tags: [astro, writing]
toc: true                 # optional; auto when ≥3 H2s
ogImage: ./hero.png       # optional; falls back to generated
```

### Frontmatter (projects)

```yaml
title: Project title
description: Short summary
publishedAt: 2023-06-12
categories: [code, design]
type: professional        # personal | professional | client
hero: { src: ./hero.png, alt: ... }
live: https://...         # optional
```

### Drafts

A post or project with **no `publishedAt`**, or with `publishedAt` in the future, is excluded from the build. Removing the date from a published post effectively re-drafts it on next push.

### Taxonomy

- **Blog** uses flat **tags**.
- **Projects** use ~5 **categories** (consolidated from v2's 12). Multi-category supported.
- Tags and categories are separate vocabularies.

### Migration from v2

All v2 posts and projects port to v3. **Body text is byte-for-byte unchanged.** Only frontmatter shape changes mechanically. To retrieve a v2 file: `git checkout 2.3.0 -- <path>`.

---

## Site map (Phase 1)

| Path | Purpose |
|---|---|
| `/` | 3-column homepage |
| `/blog` | Post index, tag-filterable |
| `/blog/YYYY/slug` | Individual post |
| `/projects` | Project index, category-filterable |
| `/projects/YYYY/slug` | Individual project |
| `/tag/<slug>` | Posts with this tag |
| `/category/<slug>` | Projects in this category |
| `/about` | Long-form personal info + CV PDF link |
| `/colophon` | Site / tools / credits |
| `/contact` | Email + social links (no form) |
| `/rss.xml` | Blog feed |
| `/sitemap-index.xml` | Sitemap |
| `/robots.txt` | Allow all |
| `/404` | Custom 404 |

---

## Live preview (during v3 development)

While v3 is in development, every push to `v3` deploys to **https://angelod1as.github.io/portfolio/** via GitHub Actions. The site is built with `base: '/portfolio'` for that subpath. At launch, both `site` and `base` flip to the production domain.

## Repo conventions

- **Default branch is `v3`** during the rewrite. All PRs target `v3`.
- **`main` is locked** via a branch ruleset (`lock-main-during-v3-rewrite`) until launch.
- **v2 (Next.js) is preserved at tag `2.3.0`.**
- **Conventional commits** (`feat:`, `fix:`, `chore:`, `docs:`, `ci:`, `refactor:`).
- **No `Co-Authored-By`** lines in commit messages.
- **Never commit directly to `v3`** — feature branches and PRs only.

### Expected CI failure: Vercel

The v2 Vercel project is still wired to this repo and will attempt to build every PR and branch push. **Every Vercel deploy on `v3` (and on PRs targeting it) will fail** — Astro is not the framework Vercel is configured for, and we are moving off Vercel onto GitHub Pages. **Ignore Vercel red ❌ checks**; they are not blocking. The Vercel integration will be removed at launch.

---

## License

- **MIT** for code → [`LICENSE`](./LICENSE)
- **CC BY-NC 4.0** for content → [`LICENSE-content`](./LICENSE-content)

---

## Out of scope (for now)

- Comments (replaced by "reply via email / social" CTA at end of posts)
- Search-as-a-service (Pagefind covers it statically)
- i18n (English only; structured to allow pt-BR later)
- CV as an HTML page (PDF link in `/about` instead)
- Preserving v2 URLs (low traffic; broken links go to `/404`)
- AI-generated or AI-edited prose, anywhere
