import makeSafeDate from './index'

describe('Functions that formats date', () => {
  it('runs properly with supplied date', () => {
    expect(makeSafeDate('2021-01-05', 'pt')).toBe('4 de jan. de 2021')
    expect(makeSafeDate('2021-01-05', 'en')).toBe('Jan 4, 2021')
  })

  it('returns empty string when no date or locale is supplied', () => {
    expect(makeSafeDate(undefined, 'pt')).toBe('')
    expect(makeSafeDate('2021-01-05', undefined)).toBe('')
  })
})
