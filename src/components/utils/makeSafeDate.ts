export default function makeSafeDate(date: Date, locale: string) {
  if (date) {
    console.log(locale)
    const options = {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    }
    return new Intl.DateTimeFormat(locale, options).format(date)
  }
  return undefined
}
