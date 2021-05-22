import makeSafeDate from './index'

describe('Functions that formats date', () => {
  it('runs properly with supplied date', () => {
    expect(makeSafeDate('2021-01-05T17:00:00Z', 'pt')).toBe('5 de jan. de 2021')
    expect(makeSafeDate('2021-01-05T17:00:00Z', 'en')).toBe('Jan 5, 2021')
  })

  it('returns empty string when no date or locale is supplied', () => {
    expect(makeSafeDate(undefined, 'pt')).toBe('')
    expect(makeSafeDate('2002-10-10T17:00:00Z', undefined)).toBe('')
  })
})
