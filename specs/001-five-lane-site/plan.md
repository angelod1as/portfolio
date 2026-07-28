# Implementation Plan: Five-lane personal site (v1)

**Branch**: `v4` | **Date**: 2026-07-26 | **Spec**: [spec.md](./spec.md)

**Input**: Feature specification from `specs/001-five-lane-site/spec.md`

## Summary

Build a static site with four content collections (Essays, Notes, Work, Library) plus two
standing files (Now, recommendations). Addresses are derived from each entry's own date,
not its folder, so reclassifying an entry never moves its URL. Language and medium filters
are separate built pages, so nothing depends on JavaScript. Existing content is ported by a
one-off script that transforms frontmatter and leaves every body byte-identical.

Presentation is deliberately absent: semantic markup, block layout, no CSS.

## Technical Context

**Language/Version**: TypeScript, Node ≥ 20 (installed: 24.15.0)

**Primary Dependencies**: Astro 7.1.3, `@astrojs/mdx` 7. Proposed and awaiting approval:
`@astrojs/sitemap`, `vitest`, `gray-matter` — see research.md §8.

**Storage**: Markdown and MDX files in `content/`, outside `src/`. No database.

**Testing**: `vitest`, entering `.os/gates.yaml` in the same commit as the first test, per
the constitution.

**Target Platform**: Static output, served from the Hostinger KVM2 via Coolify. Deployment
is a human step and outside this feature.

**Project Type**: Static site.

**Performance Goals**: None stated. A personal site with ~40 entries; build time is not a
constraint.

**Constraints**: No JavaScript at runtime (FR-033). No CSS beyond block-level layout
(FR-031). Accessibility ≥ 95 (FR-034). Angelo's prose is never modified (constitution).

**Scale/Scope**: ~40 entries at launch across four lanes; roughly 25 route files.

## Constitution Check

_Checked before Phase 0 and again after Phase 1 design._

| Principle                                 | Status | Note                                                                                                                                     |
| ----------------------------------------- | ------ | ---------------------------------------------------------------------------------------------------------------------------------------- |
| Format is a lane, subject is a tag        | Pass   | Four collections, all subjects in tags. No sixth lane. Library covering three media stays one lane — one format, one shape.              |
| Angelo's prose is not the agent's to edit | Pass   | The port transforms frontmatter only. Title stripping is the one approved exception, and `proseWrap: 'preserve'` keeps bodies untouched. |
| No language modelling                     | Pass   | Dropped 2026-07-28. No `lang` field, badge, filter or per-language route anywhere.                                                       |
| `/YYYY/MM/slug` for every entry           | Pass   | One route derives every address; lanes never appear in a URL.                                                                            |
| Schema anticipates the newsletter         | Pass   | `newsletter` and `date` carried; nothing reads them.                                                                                     |
| v1 is plain HTML                          | Pass   | No stylesheet is created. The accessibility requirement is met with semantics, not styling.                                              |
| Nothing inherited from earlier attempts   | Pass   | No file is copied from `v3` or `astro/`.                                                                                                 |
| Gate is the only definition of done       | Pass   | `vitest` joins the gate with the first test; the accessibility audit joins `slow` once pages exist.                                      |
| Tests fail first                          | Pass   | Four testable units identified (research.md §6); each starts red.                                                                        |

**Halts required before implementation**

1. **Three new dependencies** (`@astrojs/sitemap`, `vitest`, `gray-matter`). Dependency
   choice is on the standard halt list. Nothing is installed until Angelo approves.
   ~~2. The language map for the port.~~ **Removed 2026-07-28** — language handling was
   dropped, so the port needs no per-file decision and is fully mechanical.

The dependency halt was cleared on 2026-07-26. Nothing now blocks the port but the work
itself.

## Project Structure

### Documentation (this feature)

```text
specs/001-five-lane-site/
├── plan.md              # this file
├── spec.md
├── research.md          # Phase 0
├── data-model.md        # Phase 1
├── quickstart.md        # Phase 1
├── contracts/
│   ├── authoring.md     # the author-facing contract
│   └── routes.md        # the public address surface
├── checklists/
│   └── requirements.md
└── tasks.md             # /speckit-tasks, not this command
```

### Source code

```text
src/
├── content.config.ts          # four collections, one shared base schema
├── lib/
│   ├── address.ts             # date + slug → /YYYY/MM/slug
│   ├── collisions.ts          # duplicate address detection, throws
│   └── entries.ts             # cross-lane queries: all, by tag, by year, tag slugs
├── layouts/
│   ├── Base.astro
│   └── Entry.astro
├── components/
│   ├── EntryList.astro        # used by every index
│   ├── LangLinks.astro        # all · english · português
│   └── Recommendations.astro
└── pages/
    ├── index.astro            # taster homepage
    ├── [year]/index.astro     # year archive
    ├── [year]/[month]/[slug].astro   # every entry, all lanes
    ├── essays/index.astro
    ├── notes/index.astro
    ├── work/index.astro
    ├── library/[...filter].astro     # index + the three medium views
    ├── tags/index.astro
    ├── tags/[tag].astro
    ├── now.astro
    ├── rss.xml.ts
    └── 404.astro

content/
├── essays/    notes/    work/    library/
├── now.md
└── recommendations.yaml

scripts/
└── migrate-content.mjs        # one-off; reads main, writes content/

tests/
├── address.test.ts
├── collisions.test.ts
├── entries.test.ts
└── migrate.test.ts
```

`src/lib/` exists because four route files need the same queries; that is three call sites
before the first line is written, which satisfies the constitution's rule on abstraction.

## Approach

**Order of work.** Schema and helpers first, because every route depends on them and they
are the only things worth testing. Then the entry route, because a working address proves
the riskiest decision. Then indexes, then tags, then feed and sitemap. The port runs late,
once the shape it must produce is settled — porting into a schema that then changes means
doing it twice.

**The port is a script, not an agent task.** 34 files transformed by hand is 34 chances to
alter a sentence. The script is tested, run once, and its output reviewed as a diff.

**What is deliberately not built**: any stylesheet, any client-side script, any newsletter
or scheduling behaviour, any redirect from the old URLs, any generated preview image.

## Phase 0 — Research

Complete. See [research.md](./research.md). Eight unknowns resolved: address derivation,
collision failure, title stripping,
what is worth testing, how accessibility gets measured, and which dependencies are needed.

## Phase 1 — Design & Contracts

Complete.

- [data-model.md](./data-model.md) — the shared base entry, the three lane extensions, the
  two standing files, and the derived views.
- [contracts/authoring.md](./contracts/authoring.md) — what Angelo writes, and exactly how
  a malformed file fails.
- [contracts/routes.md](./contracts/routes.md) — every address the site answers on.
- [quickstart.md](./quickstart.md) — runnable checks mapped to the success criteria.

**Constitution re-check after design**: no new violations. The design adds no styling, no
runtime scripting, no lane, and no dependency beyond the three flagged above.

## Risks

| Risk                                                             | Mitigation                                                                                                          |
| ---------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| The port alters prose despite the rules                          | The body diff is a test, run over every ported file, not a sample.                                                  |
| Essays and Notes drift into meaning the same thing               | Accepted by Angelo and recorded in the spec. Nothing technical can fix a judgement call.                            |
| Accessibility ≥ 95 with zero styling                             | Achievable — semantics are what the audit measures — but unverified until pages exist. Audit early, not at the end. |
| Old content's `summary.when` is a list of timestamps, not a date | The schema accepts both shapes; the port normalises.                                                                |
| The 12 old posts land in Essays and some belonged in Notes       | Moving a file moves the lane and keeps the address. Cheap to correct later.                                         |
