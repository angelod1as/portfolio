export const splitDirAndFiles = (file: string) => {
  const split = file.split('/')
  const length = split.length - 1
  const filename = split[length]
  const directory = split.splice(0, length).join('/')
  return [directory, filename]
}
