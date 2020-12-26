export default function makeSafeDate(date: Date) {
  console.log(date)
  if (date) {
    const locale = 'en'
    const options = {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    }
    return new Intl.DateTimeFormat(locale, options).format(date)
  }
  return undefined
}
