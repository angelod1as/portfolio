export default function makeSafeDate(date: Date) {
  const locale = 'en'
  const options = {
    dateStyle: 'short',
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  }
  return new Intl.DateTimeFormat(locale, options).format(date)
}
