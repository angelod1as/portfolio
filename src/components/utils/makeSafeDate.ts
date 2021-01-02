export default function makeSafeDate(date: string, locale: string) {
  if (date) {
    const rightDate = new Date(date)
    const options = {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    }
    return new Intl.DateTimeFormat(locale, options).format(rightDate)
  }
  return undefined
}
