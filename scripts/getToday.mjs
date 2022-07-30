export const getToday = () => {
  const addZero = number =>
    number < 10 ? '0' + number.toString() : number.toString()

  const dateObj = new Date()
  const month = addZero(dateObj.getUTCMonth() + 1)
  const day = addZero(dateObj.getUTCDate().toString())
  const year = dateObj.getUTCFullYear().toString()

  return [year, month, day]
}
