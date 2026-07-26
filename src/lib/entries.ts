import { addressFor } from './address'

export type Lane = 'essays' | 'notes' | 'work' | 'library'

type RawEntry = {
  id: string
  data: {
    title: string
    date: Date
    lang: 'en' | 'pt'
    tags: string[]
    draft: boolean
  }
}

export type Entry = RawEntry & {
  lane: Lane
  address: string
}

/**
 * Flattens the four collections into one list, labelling each entry with the lane it
 * came from and the address it lives at. Everything downstream — indexes, tag pages,
 * the archive, the feed — works from this one shape.
 */
export function toEntries(byLane: Record<Lane, RawEntry[]>): Entry[] {
  return (Object.keys(byLane) as Lane[]).flatMap(lane =>
    byLane[lane].map(raw => ({
      ...raw,
      lane,
      address: addressFor(raw.data.date, raw.id),
    }))
  )
}

/** Drafts are absent from everything. Newest first. */
export function published(entries: Entry[]): Entry[] {
  return entries
    .filter(entry => !entry.data.draft)
    .sort((a, b) => b.data.date.getTime() - a.data.date.getTime())
}

export function byLang(entries: Entry[], lang: 'en' | 'pt'): Entry[] {
  return entries.filter(entry => entry.data.lang === lang)
}

export function byTag(entries: Entry[], tag: string): Entry[] {
  return entries.filter(entry => entry.data.tags.includes(tag))
}

export function byYear(entries: Entry[], year: number): Entry[] {
  return entries.filter(entry => entry.data.date.getUTCFullYear() === year)
}

export function tagCounts(entries: Entry[]): { tag: string; count: number }[] {
  const counts = new Map<string, number>()

  for (const entry of entries) {
    for (const tag of entry.data.tags) {
      counts.set(tag, (counts.get(tag) ?? 0) + 1)
    }
  }

  return [...counts.entries()]
    .map(([tag, count]) => ({ tag, count }))
    .sort((a, b) => a.tag.localeCompare(b.tag))
}
