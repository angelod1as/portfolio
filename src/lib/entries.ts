import { addressFor } from './address'

export type Lane = 'essays' | 'notes' | 'work' | 'library'

/**
 * The minimum every lane's entries have in common. Kept structural rather than
 * imported from `astro:content` so these helpers stay testable without an Astro
 * runtime — but generic, so the concrete collection type survives to the pages
 * that need to render it.
 */
export type RawEntry = {
  id: string
  data: {
    title: string
    date: Date
    tags: string[]
    draft: boolean
  }
}

export type Entry<R extends RawEntry = RawEntry> = R & {
  lane: Lane
  address: string
  /** The untouched collection entry, so pages can render it without a cast. */
  raw: R
}

/**
 * Tags are free-form, so they may contain spaces or punctuation. The display text
 * is whatever Angelo wrote; the URL uses this.
 */
export function tagSlug(tag: string): string {
  return tag
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

/**
 * Flattens the four collections into one list, labelling each entry with the lane it
 * came from and the address it lives at. Everything downstream — indexes, tag pages,
 * the archive, the feed — works from this one shape.
 */
function label<R extends RawEntry>(lane: Lane, list: R[]): Entry<R>[] {
  return list.map(raw => ({
    ...raw,
    lane,
    address: addressFor(raw.data.date, raw.id),
    raw,
  }))
}

// Each lane is its own type parameter so the four collection types survive as a
// union — a page can then render an entry without casting it back.
export function toEntries<
  E extends RawEntry,
  N extends RawEntry,
  W extends RawEntry,
  L extends RawEntry,
>(byLane: {
  essays: E[]
  notes: N[]
  work: W[]
  library: L[]
}): Entry<E | N | W | L>[] {
  return [
    ...label('essays', byLane.essays),
    ...label('notes', byLane.notes),
    ...label('work', byLane.work),
    ...label('library', byLane.library),
  ]
}

// These are generic rather than typed to `Entry[]` so the concrete collection type
// survives filtering — a page still needs to render whatever comes out.

/** Drafts are absent from everything. Newest first. */
export function published<E extends Entry>(entries: E[]): E[] {
  return entries
    .filter(entry => !entry.data.draft)
    .sort((a, b) => b.data.date.getTime() - a.data.date.getTime())
}

/** Matches on the slug, so `/tags/music-production` finds "music production". */
export function byTag<E extends Entry>(entries: E[], slug: string): E[] {
  return entries.filter(entry => entry.data.tags.some(t => tagSlug(t) === slug))
}

export function byYear<E extends Entry>(entries: E[], year: number): E[] {
  return entries.filter(entry => entry.data.date.getUTCFullYear() === year)
}

export type TagCount = { tag: string; slug: string; count: number }

export function tagCounts(entries: Entry[]): TagCount[] {
  const counts = new Map<string, { tag: string; count: number }>()

  for (const entry of entries) {
    for (const tag of entry.data.tags) {
      const slug = tagSlug(tag)
      const seen = counts.get(slug)

      // Two different tags that slugify the same would fight over one address.
      // Fail loudly rather than silently merging them.
      if (seen && seen.tag !== tag) {
        throw new Error(
          `Tags "${seen.tag}" and "${tag}" both resolve to /tags/${slug}. ` +
            'Rename one of them.'
        )
      }

      counts.set(slug, { tag, count: (seen?.count ?? 0) + 1 })
    }
  }

  return [...counts.entries()]
    .map(([slug, { tag, count }]) => ({ tag, slug, count }))
    .sort((a, b) => a.tag.localeCompare(b.tag))
}
