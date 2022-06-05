const readingSpeed = {
  fast: 240,
  normal: 180,
  slow: 100,
}

export const timeToRead = (string: string) => {
  const words = string.trim().split(/\s+/).length
  const time = Math.ceil(words / readingSpeed.fast)
  return time
}
