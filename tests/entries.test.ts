import { describe, it, expect } from 'vitest'
import {
  toEntries,
  published,
  byTag,
  byYear,
  tagCounts,
  tagSlug,
} from '../src/lib/entries'

// Shaped like what getCollection returns, reduced to what the helpers touch.
const raw = (
  id: string,
  data: Partial<{
    title: string
    date: string
    tags: string[]
    draft: boolean
  }>
) => ({
  id,
  data: {
    title: data.title ?? id,
    date: new Date(data.date ?? '2026-01-01'),
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
    notes: [raw('nota', { date: '2026-06-01', tags: ['psych'] })],
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

  it('gives one entry the same address in any lane', () => {
    // Moving a file between lanes to reclassify it must not move its URL.
    const same = raw('reclassified', { date: '2026-07-24' })
    const asEssay = toEntries({
      essays: [same],
      notes: [],
      work: [],
      library: [],
    })
    const asNote = toEntries({
      essays: [],
      notes: [same],
      work: [],
      library: [],
    })

    expect(asNote[0].address).toBe(asEssay[0].address)
    expect(asEssay[0].lane).toBe('essays')
    expect(asNote[0].lane).toBe('notes')
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

  it('finds a multi-word tag by its slug', () => {
    const entries = toEntries({
      essays: [raw('a', { tags: ['music production'] })],
      notes: [],
      work: [],
      library: [],
    })
    expect(byTag(entries, 'music-production').map(e => e.id)).toEqual(['a'])
  })
})

describe('tagSlug', () => {
  it('lowercases and hyphenates', () => {
    expect(tagSlug('Music Production')).toBe('music-production')
  })

  it('strips accents so Portuguese tags get clean URLs', () => {
    expect(tagSlug('psicologia clínica')).toBe('psicologia-clinica')
  })

  it('drops characters that would break a path', () => {
    expect(tagSlug('sex/positive')).toBe('sex-positive')
    expect(tagSlug('what?')).toBe('what')
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
      { tag: 'psych', slug: 'psych', count: 3 },
      { tag: 'scifi', slug: 'scifi', count: 1 },
      { tag: 'tech', slug: 'tech', count: 1 },
    ])
  })

  it('throws when two different tags collide on one slug', () => {
    const entries = toEntries({
      essays: [raw('a', { tags: ['sci fi'] }), raw('b', { tags: ['sci-fi'] })],
      notes: [],
      work: [],
      library: [],
    })
    expect(() => tagCounts(entries)).toThrow(/both resolve to/)
  })
})
