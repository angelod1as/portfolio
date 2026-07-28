# Tasks: Five-lane personal site (v1)

**Feature**: `specs/001-five-lane-site/` | **Branch**: `v4` | **Date**: 2026-07-26

**Input**: [spec.md](./spec.md), [plan.md](./plan.md), [data-model.md](./data-model.md),
[contracts/](./contracts/), [research.md](./research.md), [quickstart.md](./quickstart.md)

Tests are included because the constitution requires red/green TDD. Only the four units
with real branching logic are tested — address derivation, collision detection, cross-lane
queries, and the migration script. Markup rendering is covered by the build and the
accessibility audit, not by tests.

---

## Phase 1: Setup

- [x] T001 HALT — get Angelo's approval for three dependencies (`@astrojs/sitemap`,
      `vitest`, `gray-matter`) before installing anything. Dependency choice is on the
      standard halt list. Record the answer in `specs/001-five-lane-site/plan.md`
- [x] T002 Install the approved dependencies and commit `package.json` +
      `pnpm-lock.yaml`
- [x] T003 [P] Add `@astrojs/sitemap` to the integrations array in `astro.config.mjs`
- [x] T004 [P] Create `vitest.config.ts` at the repo root, scoped to `tests/`
- [x] T005 [P] Add a `test` script to `package.json` running `vitest run`
- [x] T006 Create the content folders `content/essays/`, `content/notes/`,
      `content/work/`, `content/library/` with a `.gitkeep` in each
- [ ] T007 Delete the scaffold placeholder `content/essays/scaffold.md` once a real entry
      exists to keep the build non-empty

---

## Phase 2: Foundational (blocks every user story)

**Blocking**: no user story phase starts until this phase is complete.

### Schema

- [x] T008 Define the shared base entry schema — `title`, `date`, `lang`, `tags`, `draft`,
      `newsletter`, `image` — in `src/content.config.ts` per data-model.md
- [x] T009 Define the `essays` and `notes` collections using the base schema, loaded by
      glob from `content/essays` and `content/notes`, in `src/content.config.ts`
- [x] T010 Define the `work` collection — base plus `type`, `summary`, `live`, `hero` with
      `alt` required whenever `hero` is present — in `src/content.config.ts`
- [x] T011 Define the `library` collection — base plus `medium` and `by` — in
      `src/content.config.ts`

### Address derivation (TDD)

- [x] T012 Write failing tests for address derivation in `tests/address.test.ts`: a date
      and slug produce `/YYYY/MM/slug`, months are zero-padded, and the lane never appears
- [x] T013 Implement `src/lib/address.ts` to make `tests/address.test.ts` pass
- [x] T014 Add `pnpm test` to the `fast` and `full` tiers of `.os/gates.yaml`, in the same
      commit as the first passing test, per the constitution

### Collision detection (TDD)

- [x] T015 Write failing tests in `tests/collisions.test.ts`: two entries resolving to one
      address throw, the error names both file paths, and unique addresses do not throw
- [x] T016 Implement `src/lib/collisions.ts` to make `tests/collisions.test.ts` pass

### Cross-lane queries (TDD)

- [x] T017 Write failing tests in `tests/entries.test.ts`: all published entries across
      four collections sorted newest first, drafts excluded, filter by language, filter by
      tag, filter by year, each result carrying its lane
- [x] T018 Implement `src/lib/entries.ts` to make `tests/entries.test.ts` pass

### Shared markup

- [x] T019 [P] Create `src/layouts/Base.astro` — semantic document shell, `<title>`,
      meta description, social preview meta pointing at the site default. No styling
- [x] T020 [P] Create `src/components/EntryList.astro` — renders a list of entries with
      title, date, language and tags, used by every index
- [x] T021 Create `src/pages/[year]/[month]/[slug].astro` — the single entry route drawing
      from all four collections, calling the collision check before emitting any page
- [x] T022 Create `src/layouts/Entry.astro` — the entry page shell, showing the lane and
      linking each tag

**Checkpoint**: an entry in any lane is reachable at its date-stamped address, duplicates
fail the build, and `bash scripts/gate.sh full` passes.

---

## Phase 3: User Story 4 — Angelo publishes without friction (P1)

**Goal**: adding one file publishes an entry; a malformed file never reaches the site.

**Independent test**: create `content/notes/probe.md` with the required fields, build, and
find it at its address, on the notes index and in the feed — with no other file edited.

- [x] T023 [US4] Verify the one-file publish path end to end using the probe procedure in
      quickstart.md, then delete the probe
- [x] T024 [US4] Verify each failure mode in the contracts/authoring.md failure table
      fails the build with the file and field named: missing `lang`, invalid `lang`,
      missing `title`, missing `date`, `hero` without `alt`, unknown `medium`
- [x] T025 [US4] Exclude drafts from every collection query in `src/lib/entries.ts` and
      from the entry route in `src/pages/[year]/[month]/[slug].astro`
- [x] T026 [US4] Verify a drafted entry is absent from `dist/` entirely — no page, index,
      feed or sitemap entry — per the quickstart grep check

**Checkpoint**: publishing is one file; bad content cannot ship.

---

## Phase 4: User Story 1 — A hiring manager evaluates Angelo (P1)

**Goal**: professional work and third-party evidence within two clicks.

**Independent test**: from `/`, reach a professional Work entry and a named recommendation
in two clicks without reading prose.

- [x] T027 [US1] Create `content/recommendations.yaml` with the professional set ported
      from the current site, and an empty personal set
- [x] T028 [US1] Load and validate recommendations in `src/content.config.ts` as a data
      collection with `kind`, `name`, `role`, `text`
- [x] T029 [US1] Create `src/components/Recommendations.astro` rendering one set, omitting
      itself entirely when the set is empty
- [x] T030 [US1] Create `src/pages/work/[...lang].astro` — the Work index listing entries
      with what, who and when visible before opening, plus both recommendation sets
- [x] T031 [US1] Extend `src/layouts/Entry.astro` to render the Work `summary`
      (when / where / who / what / why), the `live` link when present, and the `hero`
      image with its `alt` when present
- [x] T032 [US1] Create `content/now.md` and `src/pages/now.astro` — the standing page,
      not a collection, absent from indexes and the feed
- [x] T033 [US1] Create `src/pages/index.astro` — the taster homepage: one line on who
      Angelo is, recent entries per lane, and a labelled door into each lane

**Checkpoint**: the P1 visitor journey works. This plus Phase 3 is the MVP.

---

## Phase 5: User Story 2 — A curious reader finds something to read (P2)

**Goal**: reach an essay and a note in one click each, and subscribe.

**Independent test**: from `/`, open a full essay and a note in one click each, and fetch a
valid feed.

- [x] T034 [P] [US2] Create `src/pages/essays/[...lang].astro` — the Essays index, newest
      first
- [x] T035 [P] [US2] Create `src/pages/notes/[...lang].astro` — the Notes index, newest
      first
- [x] T036 [P] [US2] Create `src/pages/library/[...filter].astro` — the Library index
      showing title, medium, `by` and date for each entry
- [x] T037 [US2] Create `src/pages/rss.xml.ts` — a feed covering every published entry
      across all four lanes, excluding drafts
- [ ] T038 [US2] Write at least 3 essays, 5 notes and 3 library entries as real content —
      HALT and hand this to Angelo; the agent does not write his prose

**Checkpoint**: the reader journey works and the site has something in it.

---

## Phase 6: User Story 6 — The old content survives the move (P2)

**Goal**: 12 blog posts and 22 project entries ported, prose byte-identical.

**Independent test**: count the ported entries against the source and diff every body.

- [x] T039 [US6] ~~HALT — get the per-file `en`/`pt` assignment.~~ Removed 2026-07-28:
      language handling was dropped, so the port needs no per-file decision
- [ ] T040 [US6] Write failing tests in `tests/migrate.test.ts`: epoch-millisecond
      `createdAt` becomes a date, `categories` becomes `tags`, emphasis markers are
      stripped from titles, `summary.when` normalises from a list, the body is returned
      unchanged byte for byte, `live: not-available` is dropped, and `hero.src` is rewritten
      to a root-absolute path
- [ ] T041 [US6] Implement `scripts/migrate-content.mjs` to make `tests/migrate.test.ts`
      pass, reading from the `main` branch and writing into `content/`
- [ ] T042 [US6] Run the migration: blog posts into `content/essays/`, projects into
      `content/work/`, preserving original dates
- [ ] T043 [US6] Verify every ported body against its source with a diff over all 34
      files, not a sample; verify the counts are 12 and 22
- [ ] T044 [US6] Copy the hero images and per-entry assets referenced by ported entries so
      no `hero.src` or inline image is broken

**Checkpoint**: the site carries its history and no sentence changed.

---

## Phase 7: User Story 3 — Following a subject across lanes (P3)

**Goal**: one tag gathers every lane's entries.

**Independent test**: from a tagged entry, reach every entry sharing that tag.

- [x] T045 [P] [US3] Create `src/pages/tags/[tag].astro` — every entry with that tag,
      any lane, newest first, each result labelled with its lane
- [x] T046 [P] [US3] Create `src/pages/tags/index.astro` — every tag in use with a count
- [x] T047 [US3] Verify a tag used in exactly one lane and a tag used in several both
      render correctly, and that a tag used once does not look broken

**Checkpoint**: the format/subject split pays off instead of hiding things.

---

## Phase 8: ~~User Story 5 — serving both languages~~ (removed)

Dropped on 2026-07-28. The site is English and does not model language, so T048–T052 no
longer exist. The language variants that had been built were removed.

---

## Phase 9: Polish & cross-cutting

- [x] T053 [P] Add the year archive `src/pages/[year]/index.astro` listing every entry
      published that year
- [x] T054 [P] Create `src/pages/404.astro` for unknown tags, years and entries
- [ ] T055 [P] Add the site-wide default social preview image at `public/og-default.png`
      and wire the per-entry override chain — `image`, then `hero.src`, then the default —
      in `src/layouts/Base.astro`. HALT if the default image needs designing
- [x] T056 Verify `/sitemap.xml` covers every address in contracts/routes.md
- [ ] T057 Run the accessibility audit over the homepage, a lane index, an entry and a tag
      page; record all four scores. Fix anything below 95
- [ ] T058 Add the accessibility audit to the `slow` tier of `.os/gates.yaml` now that
      pages exist to audit
- [x] T059 Verify every page renders legibly with styling disabled, per SC-010
- [ ] T060 Walk every check in quickstart.md end to end and record the results
- [x] T061 Confirm no stylesheet, no client-side script, no newsletter code and no redirect
      was added anywhere in the diff

---

## Dependencies

```text
Phase 1 Setup
  └─> Phase 2 Foundational  (blocks everything)
        ├─> Phase 3 US4 publish        (P1)
        ├─> Phase 4 US1 hiring manager (P1)  ─┐
        ├─> Phase 5 US2 reader         (P2)  ─┼─> Phase 9 Polish
        ├─> Phase 6 US6 port           (P2)  ─┤
        ├─> Phase 7 US3 tags           (P3)  ─┤
        └─> Phase 8 US5 bilingual      (P3)  ─┘
```

**Real ordering constraints**

- T001 blocks T002 blocks everything else — nothing is installed before approval.
- T012–T018 (the lib) block every route file.
- T014 must land in the same commit as the first passing test, not later.
- T039 blocks T041 — no language map, no migration.
- Phase 6 runs after Phase 2 because the port writes into a schema that must be settled
  first, but is otherwise independent of Phases 3–5.
- T057 depends on pages existing, so it runs late; T058 depends on T057.

**Story independence**: US1, US2, US3, US5 and US6 touch different route files and can be
built in any order once Phase 2 lands. US4 is verification of the foundation rather than
new surface, so it comes first.

---

## Parallel execution examples

**Phase 2, after the schema (T008–T011)**: the three TDD pairs are independent —
T012/T013, T015/T016 and T017/T018 can run in parallel by three agents, as can T019 and
T020.

**Phase 5**: T034, T035 and T036 are three separate route files with no shared state.

**Phase 7**: T045 and T046 are independent.

**Phase 9**: T053, T054 and T055 touch different files.

---

## Implementation strategy

**MVP = Phase 1 + Phase 2 + Phase 3 + Phase 4.** That is a site where publishing works,
bad content cannot ship, and a hiring manager can evaluate Angelo. It is worth deploying
even with no essays yet.

**Then Phase 6 (the port)**, because it turns an empty skeleton into a site with ten years
of history — the single biggest jump in whether the thing is worth showing anyone.

**Then Phases 5, 7, 8** in any order, followed by Phase 9.

**Three halts are built into the task list** and are not failures: T001 (dependencies),
T038 (Angelo writes the prose, not the agent), T039 (the language map). A fourth is
conditional: T055 if the default preview image turns out to need designing.
