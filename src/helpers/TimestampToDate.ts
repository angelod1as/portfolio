export const TimestampToDate = (
  number: number,
  exclude?: ['year' | 'month' | 'day']
) =>
  new Intl.DateTimeFormat('en-US', {
    year: exclude?.includes('year') ? undefined : 'numeric',
    month: exclude?.includes('month') ? undefined : 'long',
    day: exclude?.includes('day') ? undefined : 'numeric',
  }).format(new Date(number))
