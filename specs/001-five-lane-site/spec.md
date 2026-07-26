# Feature Specification: Five-lane personal site (v1)

**Feature Branch**: `v4`

**Created**: 2026-07-26

**Status**: Draft

**Input**: A personal site organised by format rather than subject — Essays, Notes, Work,
Library and Now — where subject is carried by free-form tags, entries are written in
English or Brazilian Portuguese and share one feed, and every entry lives at a
date-stamped address. v1 is structure and content only: plain HTML, no styling.

## User Scenarios & Testing _(mandatory)_

### User Story 1 - A hiring manager decides whether Angelo can do the work (Priority: P1)

Someone lands on the site from a LinkedIn profile or a CV. They have maybe ten seconds of
patience. They need to see, without reading an essay, that this person has done real
professional work — and they need a path to the evidence: what he built, for whom, when,
and what other people say about working with him.

**Why this priority**: This is the visitor the site exists to convince. If the site fails
here it has failed at its job, however good the writing is.

**Independent Test**: Land on the homepage cold, reach a piece of professional work and a
recommendation within two clicks, without reading any prose longer than a title.

**Acceptance Scenarios**:

1. **Given** a visitor on the homepage, **When** the page loads, **Then** they see who
   Angelo is in one line and a labelled door into Work alongside the other lanes.
2. **Given** a visitor on the Work index, **When** they scan it, **Then** each entry shows
   what it was, who it was for, and when — before they open anything.
3. **Given** a visitor on a Work entry, **When** they read it, **Then** they find the
   when / where / who / what / why summary and a link to the live thing where one exists.
4. **Given** a visitor who wants third-party evidence, **When** they look at Work, **Then**
   they find professional recommendations attributed to real named people.
5. **Given** a visitor who wants to know what Angelo is doing right now, **When** they open
   Now, **Then** they find a single current page — job, studies, preoccupations.

---

### User Story 2 - A curious reader finds something worth reading (Priority: P2)

Someone arrives from a link, a search result, or a feed. They are not hiring. They want to
know whether this person is interesting enough to keep reading — and if so, to keep up
with what he writes.

**Why this priority**: The second audience, and the one that produces subscribers and
word of mouth. Depends on nothing from P1.

**Independent Test**: From the homepage, reach a full essay and a note in one click each,
and find a machine-readable feed to subscribe with.

**Acceptance Scenarios**:

1. **Given** a visitor on the homepage, **When** they scan it, **Then** they see recent
   entries from each lane — enough to judge whether any of it is for them.
2. **Given** a visitor on the Essays index, **When** they scan it, **Then** entries are
   listed newest first with title, date and tags.
3. **Given** a visitor reading an entry, **When** they finish, **Then** they can reach that
   entry's tags and the lane it belongs to.
4. **Given** a visitor who wants to follow along, **When** they look for a feed, **Then** a
   valid feed exists covering all published entries.
5. **Given** a visitor on the Library index, **When** they scan it, **Then** they see what
   Angelo has read and what he thought of it.

---

### User Story 3 - A reader follows one subject across every format (Priority: P3)

Someone likes what Angelo writes about psychology, and wants all of it — the long essay,
the half-formed note, the book he read about it — regardless of which lane each lives in.

**Why this priority**: This is the payoff of separating format from subject. Without it,
splitting into lanes actively hides related material and the architecture is a net loss.

**Independent Test**: From any tagged entry, reach a page listing every entry with that
tag across all lanes.

**Acceptance Scenarios**:

1. **Given** a visitor reading a tagged entry, **When** they select a tag, **Then** they
   see every entry carrying that tag, from any lane, newest first.
2. **Given** a visitor on a tag page, **When** they scan it, **Then** each result shows
   which lane it came from.
3. **Given** a visitor who wants the whole vocabulary, **When** they open the tag index,
   **Then** they see every tag in use with how many entries carry it.

---

### User Story 4 - Angelo publishes without friction (Priority: P1)

Angelo has a thought. He wants it online. Publishing must be cheaper than opening Substack
or he will not do it, and the site will rot.

**Why this priority**: Tied with P1 because a site nobody feeds is worse than no site. The
stated metric behind the metric is exactly this.

**Independent Test**: Create a new entry in any lane by adding one file, with no other
step, and see it appear in the right places.

**Acceptance Scenarios**:

1. **Given** Angelo adds a file to a lane's content folder with the required fields,
   **When** the site is built, **Then** the entry appears on its lane index, the homepage,
   its tag pages and the feed, with no other change required.
2. **Given** an entry is missing a required field or has an invalid one, **When** the site
   is built, **Then** the build fails and names the file and the offending field.
3. **Given** an entry marked as a draft, **When** the site is built, **Then** it is absent
   from every index, feed and address.
4. **Given** Angelo writes in Portuguese, **When** he declares the entry's language,
   **Then** no separate translation or duplicate entry is required for it to publish.

---

### User Story 5 - A bilingual audience is served without being fragmented (Priority: P3)

Some readers read only English, some only Portuguese, some both. Nobody should be shown a
wall of text in a language they cannot read with no way to narrow it, and nobody should
have to pick a language before they are allowed to see anything.

**Why this priority**: Real, but a refinement of P2 — the site is usable without it.

**Independent Test**: On any lane index, restrict the listing to one language and confirm
the other language's entries drop out.

**Acceptance Scenarios**:

1. **Given** a visitor on a lane index, **When** they look at an entry in the listing,
   **Then** its language is visible before they open it.
2. **Given** a visitor on a lane index, **When** they filter to one language, **Then**
   only entries in that language remain.
3. **Given** a visitor arriving with no preference, **When** the page loads, **Then**
   entries in both languages are shown together.

---

### User Story 6 - The old site's content survives the move (Priority: P2)

Twelve blog posts and twenty-two project entries exist on the current site, some going
back to 2015. None of them should be lost, and none of Angelo's sentences should be
altered on the way across.

**Why this priority**: The success metric requires Work to be fully ported. Nothing to
show means no reason to cut over.

**Independent Test**: Compare the ported entry count against the source, and diff the body
text of a sample of entries — the prose must be byte-identical.

**Acceptance Scenarios**:

1. **Given** the existing content, **When** it is ported, **Then** every non-draft entry
   is present in a lane and reachable at an address.
2. **Given** a ported entry, **When** its body is compared against the original, **Then**
   the prose is unchanged.
3. **Given** a ported entry whose title contained emphasis markup, **When** it is
   displayed, **Then** the title reads as plain text with the markup removed.
4. **Given** a ported project entry, **When** it is displayed, **Then** its
   when / where / who / what / why summary, its link to the live thing and its hero image
   survive the move.

---

### Edge Cases

- An entry carries no tags — it must still list, publish and be reachable.
- Two entries in the same month share a slug — the collision must fail the build loudly
  rather than silently overwrite one of them.
- An entry carries a date in the future — v1 treats it as published; scheduled publishing
  is explicitly a later phase, and the behaviour must not be quietly half-implemented.
- A tag is used exactly once — its page must still exist and not look broken.
- A Work entry has no live link, or no hero image — both are optional and their absence
  must not break the layout or the build.
- The personal recommendations list is empty at launch — the section must degrade rather
  than render an empty shell.
- A visitor asks for a tag or a year that does not exist — they get a clear not-found page,
  not a blank one.
- An entry belongs plausibly in two lanes — it lives in exactly one; the overlap is
  expressed with tags.
- A ported entry has no language recorded — the build must not guess silently; the field is
  required and its absence fails the build.

## Requirements _(mandatory)_

### Functional Requirements

**Lanes and navigation**

- **FR-001**: The site MUST present exactly five lanes — Essays, Notes, Work, Library and
  Now — where a lane is a format, not a subject.
- **FR-002**: The homepage MUST show a taste of each lane, with recent entries per lane and
  a labelled path into each lane's own index.
- **FR-003**: Each of Essays, Notes, Work and Library MUST have an index listing its
  entries newest first, showing at minimum title, date, language and tags.
- **FR-004**: Now MUST be a single page describing Angelo's current situation, not a
  collection.

**Entries and addresses**

- **FR-005**: Every entry MUST be reachable at an address of the form `/YYYY/MM/slug`,
  derived from its own date, regardless of which lane it belongs to.
- **FR-006**: A year MUST have an archive page listing every entry published in it.
- **FR-007**: Every entry MUST declare a title, a date, a language, and its draft status.
- **FR-008**: Entries marked as drafts MUST NOT appear in any index, archive, tag page or
  feed, and MUST NOT be reachable at an address.
- **FR-009**: Two entries MUST NOT be allowed to occupy the same address; a collision MUST
  fail the build.

**Subjects**

- **FR-010**: Entries MUST support zero or more free-form tags; no fixed vocabulary is
  imposed.
- **FR-011**: Each tag in use MUST have a page listing every entry carrying it, from every
  lane, newest first, with each result showing which lane it came from.
- **FR-012**: A tag index MUST list every tag in use with the number of entries carrying it.

**Language**

- **FR-013**: Every entry MUST declare its language as either English or Brazilian
  Portuguese; the field is required and an entry without it MUST fail the build.
- **FR-014**: Both languages MUST share one set of indexes and one address space; the site
  MUST NOT have per-language routes or require translation.
- **FR-015**: An entry's language MUST be visible in listings before the entry is opened.
- **FR-016**: Lane indexes MUST allow a visitor to narrow the listing to a single language,
  with both shown by default.

**Work**

- **FR-017**: A Work entry MUST support a structured summary of when, where, who, what and
  why, a personal-or-professional marker, an optional link to the live thing, and an
  optional hero image with alternative text.
- **FR-018**: Work MUST present recommendations in two distinct sets — professional and
  personal — each attributed to a named person.
- **FR-019**: An empty recommendation set MUST be omitted rather than rendered empty.

**Publishing and validation**

- **FR-020**: Adding one correctly-formed file to a lane's content folder MUST be
  sufficient to publish an entry — no index, registry or navigation file may need editing.
- **FR-021**: An entry with a missing or invalid required field MUST fail the build with a
  message naming the file and the field.
- **FR-022**: Every entry MUST carry the fields the future newsletter will need, and no
  part of v1 may read them for sending, scheduling or hiding.

**Distribution**

- **FR-023**: The site MUST publish a machine-readable feed covering all published entries
  across all lanes.
- **FR-024**: The site MUST publish a sitemap covering every reachable address.
- **FR-025**: Every entry MUST have a social preview image for when it is shared.

**Presentation**

- **FR-026**: v1 MUST use semantic markup with block-level layout only — no colour,
  typography, theming or component styling.
- **FR-027**: Every page MUST be usable and legible without any styling applied.
- **FR-028**: The site MUST meet an accessibility score of at least 95 on its main page
  types.

**Migration**

- **FR-029**: All existing non-draft blog and project entries MUST be ported into the
  appropriate lanes, preserving their original dates.
- **FR-030**: Porting MUST NOT alter the body text of any entry.
- **FR-031**: Porting MUST convert legacy fields to their new equivalents — timestamp to
  date, categories to tags — and MUST strip emphasis markup from titles.
- **FR-032**: Language MUST be assigned per ported entry by Angelo, and any entry left
  without one MUST fail the build rather than be guessed.

### Key Entities

- **Entry**: A single published thing. Belongs to exactly one lane. Carries a title, a
  date, a language, tags, a draft flag, newsletter-intent fields reserved for later, and a
  body. Its address derives from its date and slug.
- **Lane**: A format — Essays, Notes, Work, Library. Determines how an entry is presented
  and which index it appears on. Not a subject, and not part of an address.
- **Work entry**: An Entry with additional structure — the when/where/who/what/why summary,
  a personal-or-professional marker, an optional live link, an optional hero image.
- **Library entry**: An Entry describing a book Angelo has read and his reaction to it.
- **Tag**: A free-form subject label shared across lanes. Has a page listing its entries.
- **Recommendation**: A quoted endorsement attributed to a named person, belonging to
  either the professional or the personal set.
- **Now**: A single standing page describing the present, replaced rather than accumulated.

## Success Criteria _(mandatory)_

### Measurable Outcomes

- **SC-001**: A visitor reaches a piece of professional work and a named recommendation
  within two clicks of arriving.
- **SC-002**: A visitor reaches a full essay and a note within one click each of the
  homepage.
- **SC-003**: From any tagged entry, every other entry sharing that tag — in any lane — is
  reachable in one click.
- **SC-004**: Angelo publishes a new entry by adding exactly one file and changing nothing
  else.
- **SC-005**: An entry with a malformed or missing required field never reaches the
  published site; the build fails first, naming the file and the field.
- **SC-006**: All 12 existing blog posts and 22 project entries are present after the port,
  with their prose unchanged.
- **SC-007**: The site carries at least 3 essays, 5 notes and 3 library entries that are
  real writing, not placeholders.
- **SC-008**: Every published entry appears in the feed and the sitemap.
- **SC-009**: Main page types score at least 95 for accessibility.
- **SC-010**: Every page is legible and navigable with styling disabled entirely.
- **SC-011**: A reader can restrict any lane index to a single language and see only that
  language's entries.

## Assumptions

- The five lanes are settled. A sixth is out of scope and would be a separate decision.
- Fiction is a tag on an Essay, not a lane.
- Instagram video is linked to, never embedded or mirrored.
- Free-form tags are correct at this stage because the vocabulary does not exist yet; a
  controlled vocabulary can be imposed later once drift is visible.
- Future-dated entries publish immediately at v1. Hiding them until their date is scheduled
  publishing, which is a later phase.
- Book data is entered by hand. Goodreads has no usable API, and the site takes no runtime
  dependency on any book service.
- Personal recommendations do not exist yet. The site ships with the professional set and
  an absent personal set if none have been collected by then.
- Old addresses (`/blog/*`, `/projects/*`) break at cutover. No redirects — decided.
- Deployment to the VPS and the DNS change are human steps performed by Angelo at a time of
  his choosing, and are not part of this feature.
- The success metric's accessibility target is measured with a standard auditing tool
  against the homepage, a lane index, an entry page and a tag page.
