export const removeSymbolsFromString = (string: string) => {
  return string
    .replace(/\*\*/g, '')
    .replace(/\*/g, '')
    .replace(/__/g, '')
    .replace(/_/g, '')
}
