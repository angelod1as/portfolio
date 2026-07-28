# Quickstart — validating the feature end to end

Runnable checks that prove the site does what the spec says. Each maps to success criteria.

## Prerequisites

```bash
cd ~/Documents/GIT/private/portfolio/v4
pnpm install
```

Node ≥ 20. Nothing else — no services, no database, no credentials.

## The gate

```bash
bash scripts/gate.sh full
```

Expected: `GATE full PASS n/n`, exit 0. This is the definition of done. It runs
`astro check`, `prettier --check`, the test suite, and `pnpm build`.

## Publishing works (SC-004)

```bash
cat > content/notes/probe.md <<'EOF'
---
title: Probe
date: 2026-07-26
tags: [meta]
---
Body.
EOF
pnpm build
```

Expected: `/2026/07/probe` exists in `dist/`, appears in the notes index, on `/tags/meta`,
in `/rss.xml` and `/sitemap.xml` — with no file other than the one created. Then delete it.

## Bad content is stopped (SC-005)

```bash
# remove the title line from any entry, then:
pnpm build
```

Expected: build fails, exit non-zero, naming the file and `title`. Restore and rebuild.

Repeat for: a missing `date`, a `hero` without `alt`, an unknown `medium`, and two entries
resolving to the same `/YYYY/MM/slug` — the last must name both files.

## Drafts stay hidden (FR-008)

Set `draft: true` on an entry, build, then:

```bash
grep -rl "that entry's title" dist/ | head
```

Expected: no matches anywhere in `dist/` — no page, no index, no feed, no sitemap.

## No scripts anywhere (SC-012)

```bash
pnpm build && pnpm preview
```

Browse the site with JavaScript disabled.

Expected: every page and every link works. Nothing on the site depends on scripting.

## Library media (SC-013)

Open `/library`, `/library/books`, `/library/series`, `/library/films`.

Expected: each shows only its medium; the unfiltered index shows all, each row labelled.

## Tags cross lanes (SC-003)

Open any tag page reachable from an entry.

Expected: entries from more than one lane appear when the tag is used across lanes, each
labelled with its lane, newest first.

## The port preserved the prose (SC-006)

```bash
git show main:content/blog/2022/05/my-career-manifesto.mdx > /tmp/before.mdx
# compare bodies, ignoring frontmatter
diff <(sed '1,/^---$/d;1,/^---$/d' /tmp/before.mdx) \
     <(sed '1,/^---$/d;1,/^---$/d' content/essays/<ported path>)
```

Expected: empty diff for every sampled entry. Counts: 12 blog posts and 22 project entries
present after the port.

## Legible unstyled (SC-010)

Open any page with CSS disabled.

Expected: headings, lists and links are in a sensible reading order and every page remains
navigable. At v1 this should look identical to the styled version, because there is no CSS.

## Accessibility (SC-009)

Audit the homepage, a lane index, an entry page and a tag page with a standard auditing
tool.

Expected: accessibility ≥ 95 on each. Record the four numbers in the review packet.

## Two-click test (SC-001, SC-002)

From `/` with fresh eyes: reach a professional Work entry and a named recommendation in two
clicks; reach a full essay and a note in one click each.
