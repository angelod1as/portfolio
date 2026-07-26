# Phase 0 — Research

Unknowns pulled from the Technical Context, resolved before design.

## 1. Date-stamped addresses from content, not from folders

**Decision**: Build `/YYYY/MM/slug` from each entry's `date` field, in one catch-all route
that draws from every lane's collection at once.

**Rationale**: The address must not depend on where a file sits on disk, because Angelo
moves files between lanes to reclassify them (FR-024) and an address must survive that. A
single route asking every collection for its entries means one place decides addresses, and
lane membership stays a property of the file's folder rather than of its URL.

**Alternatives considered**: Deriving the path from the folder (`content/essays/2026/07/`)
— rejected because moving a file between lanes would then change its URL, breaking
FR-024's promise. Per-lane routes emitting the same URL shape — rejected because four
routes generating into one namespace makes collision detection (FR-009) impossible to
centralise.

## 2. Failing the build on a slug collision

**Decision**: The catch-all route builds its full list of addresses first, counts
duplicates, and throws with both file paths named before emitting any page.

**Rationale**: FR-009 requires a loud failure. Static site generators silently let the last
writer win otherwise, and the failure would surface as a mysteriously missing entry weeks
later. Throwing during path generation fails `pnpm build`, which is the gate.

**Alternatives considered**: A separate lint step — rejected; a check that is not part of
the build is a check that gets skipped. Suffixing duplicates automatically — rejected; it
hides the mistake and produces an address Angelo did not choose.

## 3. Language filtering without JavaScript

**Decision**: Three built pages per lane — the unfiltered index and one per language —
generated from one parameterised route. Links between them are plain anchors.

**Rationale**: FR-033 requires the site to work with scripting off, and this is the only
approach that satisfies it without inventing a CSS-only toggle. Cost is three pages per
lane instead of one, which is free in a static build.

**Alternatives considered**: A `<details>`/`:target` CSS trick — rejected as a hack that
degrades badly and fights FR-032's "legible with no styling". Client-side filtering —
rejected by the clarification.

## 4. Stripping emphasis from ported titles

**Decision**: The migration script strips inline emphasis markers from titles with a narrow
transformation, applied once, with the result written into the ported file. Titles are
plain strings from then on.

**Rationale**: Angelo approved the strip. Doing it once at migration time means no runtime
markdown parsing for titles and no ambiguity about whether a title is markup or text.

**Alternatives considered**: Rendering titles as inline markdown at request time —
rejected; it forces every title consumer (feed, sitemap, preview image, `<title>`) to
either render or strip markup, and half of them cannot.

## 5. Where the port's language assignments come from

**Decision**: The migration script writes `lang` into every ported file using a per-file
mapping supplied by Angelo, and refuses to run without one covering every file.

**Rationale**: FR-038 forbids guessing. A script that defaults to `en` would quietly
mislabel the Portuguese entries and nobody would notice until a reader did.

**Alternatives considered**: Language detection from the body text — rejected as guessing
with extra steps. Defaulting to `en` with a warning — rejected; warnings are not read.

## 6. Testing a site with almost no logic

**Decision**: Test the things that can be wrong — the migration script's field
transformations, the address derivation, the collision detector, and the query helpers that
lane indexes and tag pages depend on. Do not test that Astro renders HTML.

**Rationale**: The constitution requires the test runner to enter the gate in the same
commit as the first real test. These four have branching logic and are worth red/green.
Markup rendering is covered by the build plus the accessibility check.

**Alternatives considered**: End-to-end browser tests — rejected for v1; expensive, and the
accessibility audit already exercises the rendered pages. No tests at all — rejected; the
migration script mutates Angelo's content and must be shown to fail first.

## 7. Accessibility measurement

**Decision**: Audit four page types — homepage, a lane index, an entry, a tag page — with a
standard auditing tool, run manually before cutover and recorded in the review packet.

**Rationale**: SC-009 needs a number. Wiring the audit into the gate as a `slow` command is
attractive but premature while the pages do not exist; it becomes a `slow` entry once they
do.

**Alternatives considered**: Adding it to `full` immediately — rejected; it is slow and
would be listed before it can run, which the gate design forbids.

## 8. New dependencies this design needs

**Decision**: Propose exactly three, and stop for approval before adding any — dependency
choice is on the standard halt list.

| Dependency         | Why                                                  |
| ------------------ | ---------------------------------------------------- |
| `@astrojs/sitemap` | FR-029. The alternative is hand-rolling XML.         |
| `vitest`           | The test runner the four testable units need.        |
| `gray-matter`      | Frontmatter parsing in the one-off migration script. |

**Rationale**: Each maps to a specific requirement, and none of them ship code into the
rendered page. `gray-matter` is a devDependency used by a script that runs once.

**Alternatives considered**: Hand-written sitemap XML — rejected, it silently rots as
routes change. `node:test` instead of vitest — viable and dependency-free, but vitest reads
the same config as the rest of the toolchain and gives a usable watch mode; worth one
devDependency. Parsing frontmatter by hand in the migration script — rejected; the old
content uses multi-line YAML scalars that a regex will get wrong.
