export const TimestampToDate = (number: number) =>
  new Intl.DateTimeFormat('pt').format(new Date(number))
