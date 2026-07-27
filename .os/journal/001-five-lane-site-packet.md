# Review packet — 001-five-lane-site

**Feature**: Five-lane personal site (v1) · **Branch**: `v4` · **Date**: 2026-07-26
**Autonomy**: L2 — commit, push, open a PR. Merge stays human.

## What was built

A static Astro 7 site with four content collections and two standing files, replacing the
Next.js site that lives on `main`. Every entry is addressed `/YYYY/MM/slug` derived from
its own date, so moving a file between lanes never moves its URL. Language and medium
filters are separate built pages. There is no CSS and no client-side JavaScript anywhere in
the output, by design.

22 pages build from a single scaffold entry: four lane indexes in three language variants
each, three Library medium views, a tag index and tag pages, a year archive, the homepage,
`/now`, `/404`, a feed and a sitemap.

## Gate

```
$ bash scripts/gate.sh full
GATE full PASS 4/4
$ echo $?
0
```

Four commands: `astro check` (0 errors), `prettier --check`, `vitest run` (26 tests across
3 files), `astro build`.

The test runner joined `.os/gates.yaml` in commit `7c0e7e3`, the same commit as the first
passing test, as the constitution requires. It was deliberately absent before that.

## Verification actually performed

Not claims — each of these was run and its output observed.

| Check                               | Result                                                                                                                            |
| ----------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| One-file publish (SC-004)           | A new note appeared at its address, on the lane index, its tag page, the homepage, the feed and the sitemap. Nothing else edited. |
| Missing `lang`                      | Build fails, names the file and `lang`                                                                                            |
| Invalid `lang: es`                  | Build fails, names `lang`                                                                                                         |
| Missing `title`                     | Build fails, names `title`                                                                                                        |
| Missing `date`                      | Build fails, names `date`                                                                                                         |
| `medium: audiobook`                 | Build fails, names `medium`                                                                                                       |
| `hero` without `alt`                | Build fails: `hero.alt: Required`                                                                                                 |
| Two entries at one address (FR-009) | Build fails: `/2026/07/scaffold ← essays/scaffold, notes/scaffold`                                                                |
| Draft entry (FR-008)                | Zero occurrences anywhere in `dist/` — no page, index, feed or sitemap                                                            |
| No CSS (FR-031)                     | 0 stylesheet links, 0 `<style>` blocks, 0 `.css` files in `dist/`                                                                 |
| No client JS (FR-033)               | 0 `<script>` tags, 0 `.js` files in `dist/`                                                                                       |
| Sitemap coverage (FR-029)           | 21 of 22 pages; the omission is `/404`, which is correct                                                                          |
| `newsletter` never read (FR-027)    | No reference outside the schema definition                                                                                        |
| No scheduled publishing (FR-027)    | No date comparison against now anywhere in `src/`                                                                                 |

## Decisions taken (approval class)

Logged in `.os/journal/001-five-lane-site.md`:

- Recommendation schema gained optional `company` and `link`, because the five real
  LinkedIn recommendations on `main` carry both and dropping them would lose real data.
- `src/lib/content.ts` was added, outside the plan's file list, so `src/lib/entries.ts`
  stays free of `astro:content` imports and remains testable without an Astro runtime.
- The scaffold placeholder entry is still present; removing it before real content exists
  would leave every collection empty.

## Decisions escalated (halted and asked)

- **Three dependencies** — `@astrojs/sitemap`, `vitest`, `gray-matter`. Asked before
  installing anything; approved.

## Reviewer findings and what was done

An independent reviewer agent read the diff against the spec, the constitution and the
contracts. It confirmed all seven invariants it was asked to check, and found twelve
defects. Ten were fixed in this run; two are latent and belong to the port.

**Two findings touched the gate itself. Both were real.**

1. **`.prettierignore` excluded `/.os`** — so `prettier --check .`, a gate command, skipped
   the gate's own configuration. `.prettierignore` is on `tamper_watch`, and this is
   precisely the failure that watch exists to catch. I wrote that exclusion myself, without
   noticing what it covered. Removed, both `.os` files formatted, and re-proved: breaking
   `.os/gates.yaml` now fails `prettier --check`, restoring it passes.
2. **`render(entry as never)`** in the entry route — a cast through `never` on the only
   call that renders every entry, defeating `astro check` at exactly that point. Fixed
   properly rather than suppressed: `Entry` and the query helpers are now generic, so the
   concrete collection type survives from `getCollection` through filtering to `render`.
   No cast remains, and `astro check` reports 0 errors.

**Spec violations fixed**

| Finding                                                                                                                                                        | Fix                                                                                                                                                   |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| Library index showed no language and no tags (FR-003, FR-015) — and I had ticked T051 claiming otherwise                                                       | Both added, matching the shared list                                                                                                                  |
| Work index hid `summary.what` / `where` until an entry was opened, breaking US1 acceptance scenario 2 — the P1 visitor's whole path. T030 was ticked and false | Work now has its own listing showing what it was and who for                                                                                          |
| `/sitemap.xml` was in the routes contract but never emitted; T056 was ticked and false                                                                         | Contract corrected to `/sitemap-index.xml` + `/sitemap-0.xml`; `robots.txt` rewritten to point at it and to drop the old site's dead `Disallow` rules |
| `og:image` pointed at `/og-default.png`, which does not exist — all 22 pages shipped a 404'd preview                                                           | Points at the existing `/social.png` until a default is designed                                                                                      |
| Heading order skipped `h1` → `h3` on indexes, archive and tag pages — a scored accessibility failure, putting SC-009 at risk                                   | Heading level is now a prop: `h2` on indexes, `h3` under the homepage's per-lane `h2`. Verified in built HTML                                         |
| A tautological test — `addressFor(d, 'x')` compared to itself — that could never fail                                                                          | Deleted; replaced with a real one in `entries.test.ts` asserting the same entry gets the same address in two different lanes                          |

**Bug fixed**

- **Collision detection ran before drafts were filtered.** A published `notes/foo.md` and a
  draft `essays/foo.md` in the same month — a plausible "drafting a rewrite" state — failed
  the build, though FR-008 says a draft occupies no address at all. Now checked after
  drafts are removed.

**Tag slugs**

Confirmed by the reviewer and fixed with Angelo's decision: URLs use a slug, display keeps
the original text. `music production` → `/tags/music-production`. Two tags that slugify to
one address now fail the build by name, consistent with entry collisions. Covered by five
new tests, including accents (`psicologia clínica` → `psicologia-clinica`) and path
characters.

## Latent defects — for the migration script, not fixable yet

Both come from the old content's shape and will bite the moment T042 runs. Recorded here so
the port is written with them in mind:

1. **`hero.src` is a bare filename** on every old project (`hero: { src: opening.jpg }`).
   Rendered as-is, `/2023/06/sex-journalism/` resolves it to `/2023/06/opening.jpg` — a 404
   — and `og:image` becomes `https://www.angelodias.com.br/opening.jpg`. The migration must
   rewrite these to root-absolute paths under `public/`, or `Entry.astro` must resolve them
   against the entry's folder.
2. **`live: not-available` is a sentinel**, used by five old projects, meaning "no link".
   Rendered as-is it produces `<a href="not-available">See it live</a>`. The port must drop
   it rather than carry it across.

## Stale documents, corrected

The reviewer caught that `.specify/memory/constitution.md` and `docs/PROJECT.md` still said
"no `/en` or `/pt` routes at v1" while the build ships `/essays/en`, `/notes/pt` and so on.
The 2026-07-26 clarification authorised exactly those as _index views_, so the code is
right and the wording was stale. Both documents now distinguish lane-index language
variants from per-entry language routes, which remain forbidden.

## Not done

Honestly and by name.

| Task       | Why                                                                                                                                                                                   |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| T038       | **Halt.** 3 essays, 5 notes, 3 library entries must be Angelo's own writing. The agent does not write his prose.                                                                      |
| T039       | **Halt.** The per-file `en`/`pt` assignment for all 34 existing entries. FR-038 forbids guessing.                                                                                     |
| T040–T044  | **Blocked by T039.** The migration script, the port itself, the body-diff verification and the asset copy. Nothing was written, because writing a script that cannot be run is waste. |
| T007       | Depends on real content existing. The scaffold entry stays until then.                                                                                                                |
| T055       | **Halt.** The default social preview image is a visual asset, and design decisions halt at v1.                                                                                        |
| T057, T058 | The accessibility audit needs an auditing tool, which is another dependency decision. Not taken unilaterally.                                                                         |
| T060       | Partially done — every quickstart check that does not require real content was run and is in the table above. The port and accessibility sections could not be.                       |

Nothing was skipped for convenience. Every incomplete item is either a halt, blocked by a
halt, or waiting on content that only Angelo can supply.

## Reviewer

An independent reviewer agent was dispatched against the diff and the spec. Its findings
are appended below.
