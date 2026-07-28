# Phase 1 — Data model

Four content collections plus two standing files. Every collection shares a base shape;
lanes differ only where the spec says they differ.

## Base entry

Shared by all four collections. Validated at build time; a violation fails `pnpm build`
naming the file and the field (FR-026).

| Field        | Required | Type                                | Notes                                                |
| ------------ | -------- | ----------------------------------- | ---------------------------------------------------- |
| `title`      | yes      | string                              | Plain text. No markup — the port strips it (FR-037). |
| `date`       | yes      | date                                | Drives the address. For Library, the date finished.  |
| `tags`       | no       | string[]                            | Free-form, defaults to empty (FR-010).               |
| `draft`      | no       | boolean                             | Defaults false. True removes it entirely (FR-008).   |
| `newsletter` | no       | `include` \| `standalone` \| `skip` | Defaults `include`. Nothing reads it at v1 (FR-027). |
| `image`      | no       | string                              | Social preview override (FR-030).                    |

**Address**: `/YYYY/MM/slug`, where the year and month come from `date` and the slug from
the filename. Independent of which collection the file is in, so moving a file between
lanes preserves its address.

**Validation rules**

- Two entries resolving to the same address fail the build, both paths named (FR-009).
- A date in the future is published normally at v1 (Assumptions).
- Drafts are absent from every index, archive, tag page, feed, sitemap and address.

## Collections

### `essays` and `notes`

The base entry, nothing added. They are separate collections only so that each has its own
index and its own presentation. No field distinguishes them and no rule decides membership
— the folder a file sits in is Angelo's judgement (FR-024).

`description` is optional on both.

### `work`

Base entry plus:

| Field          | Required | Type                         | Notes                                      |
| -------------- | -------- | ---------------------------- | ------------------------------------------ |
| `type`         | yes      | `personal` \| `professional` | Carried over from the old site.            |
| `summary`      | yes      | object                       | `when`, `where`, `who`, `what`, `why`.     |
| `summary.when` | yes      | date \| date[]               | The old content uses a list; both allowed. |
| `live`         | no       | string                       | Link to the thing. Absent is normal.       |
| `hero`         | no       | `{ src, alt }`               | `alt` required whenever `hero` is present. |

`hero.src` doubles as the social preview override when `image` is unset (FR-030).

### `library`

Base entry plus:

| Field    | Required | Type                         | Notes                              |
| -------- | -------- | ---------------------------- | ---------------------------------- |
| `medium` | yes      | `book` \| `series` \| `film` | Drives the medium filter (FR-022). |
| `by`     | yes      | string                       | Author, director or creator.       |

`date` means finished. No rating, no cover, no reading state (FR-023).

## Standing files

### `now`

A single file, not a collection. Title and body. Replaced in place, never accumulated —
it has no address of the `/YYYY/MM/` form and does not appear in indexes or the feed.

### `recommendations`

Structured data, not prose. A list of:

| Field  | Required | Type                         | Notes                           |
| ------ | -------- | ---------------------------- | ------------------------------- |
| `kind` | yes      | `professional` \| `personal` | The two sets (FR-019).          |
| `name` | yes      | string                       | A real named person.            |
| `role` | no       | string                       | Their relationship to the work. |
| `text` | yes      | string                       | The endorsement itself.         |

A set with no members is omitted from the page entirely, not rendered empty (FR-020).
The personal set is expected to be empty at launch.

## Derived views

Nothing below is stored; all of it is computed from the collections at build time.

- **Lane index** — one collection, newest first.
- **Library medium views** — the Library index filtered to one medium (FR-022).
- **Tag page** — every entry carrying a tag, across all four collections, newest first,
  each result labelled with its lane (FR-011).
- **Tag index** — every tag in use with a count (FR-012).
- **Year archive** — every entry whose date falls in that year (FR-006).
- **Homepage** — recent entries per lane (FR-002).
- **Feed and sitemap** — every published entry across all lanes (FR-028, FR-029).
