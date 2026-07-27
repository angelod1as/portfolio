import { describe, it, expect } from 'vitest'
import { addressFor } from '../src/lib/address'

describe('addressFor', () => {
  it('builds /YYYY/MM/slug from a date and a slug', () => {
    expect(addressFor(new Date('2026-07-24'), 'why-i-left-nextjs')).toBe(
      '/2026/07/why-i-left-nextjs'
    )
  })

  it('zero-pads single-digit months', () => {
    expect(addressFor(new Date('2022-05-15'), 'fountain-pen')).toBe(
      '/2022/05/fountain-pen'
    )
  })

  it('uses the last path segment when the id is nested', () => {
    // Ported content sits in year/month folders on disk. The address comes from
    // the date, so the folders must not leak into the URL.
    expect(addressFor(new Date('2022-05-15'), '2022/05/fountain-pen')).toBe(
      '/2022/05/fountain-pen'
    )
  })

  it('reads the date in UTC, so an entry never lands in the wrong month', () => {
    // A date parsed as midnight UTC must not slip to the previous month for
    // anyone west of Greenwich.
    expect(addressFor(new Date('2026-03-01T00:00:00Z'), 'edge')).toBe(
      '/2026/03/edge'
    )
  })
})
