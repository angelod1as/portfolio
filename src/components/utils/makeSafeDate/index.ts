export default function makeSafeDate(date?: string, locale?: string) {
  if (date && locale) {
    const rightDate = new Date(date)
    const options = {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    } as any
    return new Intl.DateTimeFormat(locale, options).format(rightDate)
  }
  return ''
}
