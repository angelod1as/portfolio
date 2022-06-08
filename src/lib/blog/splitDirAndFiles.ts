export const splitDirAndFiles = (file: string) => {
  const split = file.split('/')
  const length = split.length - 1
  const filename = split[length]
  const contentDir = split.splice(0, length).join('/')
  return [contentDir, filename]
}
