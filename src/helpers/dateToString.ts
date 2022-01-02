export const dateToString = (date: Date) =>
  date.toLocaleString('en-US', {
    dateStyle: 'medium',
  })
