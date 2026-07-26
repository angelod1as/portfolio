import { describe, it, expect } from 'vitest'
import { assertNoCollisions } from '../src/lib/collisions'

const at = (address: string, source: string) => ({ address, source })

describe('assertNoCollisions', () => {
  it('accepts a set of unique addresses', () => {
    expect(() =>
      assertNoCollisions([
        at('/2026/07/one', 'essays/one.md'),
        at('/2026/07/two', 'notes/two.md'),
      ])
    ).not.toThrow()
  })

  it('throws when two entries resolve to the same address', () => {
    expect(() =>
      assertNoCollisions([
        at('/2026/07/same', 'essays/same.md'),
        at('/2026/07/same', 'notes/same.md'),
      ])
    ).toThrow()
  })

  it('names both source files in the error', () => {
    let message = ''
    try {
      assertNoCollisions([
        at('/2026/07/same', 'essays/same.md'),
        at('/2026/07/same', 'notes/same.md'),
      ])
    } catch (error) {
      message = (error as Error).message
    }
    expect(message).toContain('essays/same.md')
    expect(message).toContain('notes/same.md')
    expect(message).toContain('/2026/07/same')
  })

  it('reports every colliding address, not only the first', () => {
    let message = ''
    try {
      assertNoCollisions([
        at('/2026/07/a', 'essays/a.md'),
        at('/2026/07/a', 'notes/a.md'),
        at('/2026/08/b', 'work/b.md'),
        at('/2026/08/b', 'library/b.md'),
      ])
    } catch (error) {
      message = (error as Error).message
    }
    expect(message).toContain('/2026/07/a')
    expect(message).toContain('/2026/08/b')
  })

  it('accepts the same slug in different months', () => {
    expect(() =>
      assertNoCollisions([
        at('/2026/07/notes', 'essays/a.md'),
        at('/2026/08/notes', 'essays/b.md'),
      ])
    ).not.toThrow()
  })

  it('accepts an empty set', () => {
    expect(() => assertNoCollisions([])).not.toThrow()
  })
})
