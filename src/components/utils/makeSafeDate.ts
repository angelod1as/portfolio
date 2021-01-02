export default function makeSafeDate(date: Date, locale: string) {
  if (date) {
    const options = {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    }
    return new Intl.DateTimeFormat(locale, options).format(date)
  }
  return undefined
}
