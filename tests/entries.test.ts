import { describe, it, expect } from 'vitest'
import {
  toEntries,
  published,
  byLang,
  byTag,
  byYear,
  tagCounts,
} from '../src/lib/entries'

// Shaped like what getCollection returns, reduced to what the helpers touch.
const raw = (
  id: string,
  data: Partial<{
    title: string
    date: string
    lang: 'en' | 'pt'
    tags: string[]
    draft: boolean
  }>
) => ({
  id,
  data: {
    title: data.title ?? id,
    date: new Date(data.date ?? '2026-01-01'),
    lang: data.lang ?? ('en' as const),
    tags: data.tags ?? [],
    draft: data.draft ?? false,
  },
})

const fixture = () =>
  toEntries({
    essays: [
      raw('old', { date: '2022-05-15', tags: ['psych'] }),
      raw('new', { date: '2026-07-24', tags: ['tech', 'psych'] }),
      raw('hidden', { date: '2026-07-25', draft: true, tags: ['tech'] }),
    ],
    notes: [raw('nota', { date: '2026-06-01', lang: 'pt', tags: ['psych'] })],
    work: [raw('job', { date: '2023-06-27' })],
    library: [raw('andor', { date: '2026-05-02', tags: ['scifi'] })],
  })

describe('toEntries', () => {
  it('labels every entry with the lane it came from', () => {
    const all = fixture()
    expect(all.find(e => e.id === 'nota')?.lane).toBe('notes')
    expect(all.find(e => e.id === 'andor')?.lane).toBe('library')
  })

  it('gives every entry its date-stamped address', () => {
    const all = fixture()
    expect(all.find(e => e.id === 'new')?.address).toBe('/2026/07/new')
  })
})

describe('published', () => {
  it('sorts newest first', () => {
    const ids = published(fixture()).map(e => e.id)
    expect(ids).toEqual(['new', 'nota', 'andor', 'job', 'old'])
  })

  it('excludes drafts', () => {
    expect(published(fixture()).map(e => e.id)).not.toContain('hidden')
  })
})

describe('byLang', () => {
  it('keeps only the requested language', () => {
    expect(byLang(published(fixture()), 'pt').map(e => e.id)).toEqual(['nota'])
  })

  it('never returns a draft', () => {
    expect(byLang(published(fixture()), 'en').map(e => e.id)).not.toContain(
      'hidden'
    )
  })
})

describe('byTag', () => {
  it('gathers a tag across every lane', () => {
    expect(byTag(published(fixture()), 'psych').map(e => e.id)).toEqual([
      'new',
      'nota',
      'old',
    ])
  })

  it('returns nothing for an unused tag', () => {
    expect(byTag(published(fixture()), 'nope')).toEqual([])
  })
})

describe('byYear', () => {
  it('keeps only entries from that year', () => {
    expect(byYear(published(fixture()), 2026).map(e => e.id)).toEqual([
      'new',
      'nota',
      'andor',
    ])
  })
})

describe('tagCounts', () => {
  it('counts every tag in use, excluding drafts', () => {
    expect(tagCounts(published(fixture()))).toEqual([
      { tag: 'psych', count: 3 },
      { tag: 'scifi', count: 1 },
      { tag: 'tech', count: 1 },
    ])
  })
})
