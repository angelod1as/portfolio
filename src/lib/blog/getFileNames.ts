import { readdirSync, statSync } from 'fs'
import { join } from 'path'

export const getFileNames = (directory: string): string[] => {
  const filesInsideDir = readdirSync(directory)

  return filesInsideDir
    .map(file => {
      const filePath = join(directory, file)

      if (statSync(filePath).isDirectory()) {
        return getFileNames(filePath)
      }

      if (filePath.endsWith('.mdx')) {
        return filePath
      }

      return undefined
    })
    .flat(Infinity)
    .filter(Boolean) as string[]
}
