import { readMDX } from '#lib/MDX/readMDX'
import { readdirSync, statSync } from 'fs'
import { join } from 'path'
import { compileMDX } from './MDX/compileMDX'
import { splitDirAndFiles } from './MDX/splitDirAndFiles'

const mapFiles = (rootDir: string): string[] => {
  const filesInsideDir = readdirSync(rootDir)

  return filesInsideDir
    .map(file => {
      const filePath = join(rootDir, file)

      if (statSync(filePath).isDirectory()) {
        return mapFiles(filePath)
      }

      if (filePath.endsWith('.mdx')) {
        return filePath
      }

      return undefined
    })
    .flat(Infinity)
    .filter(Boolean) as string[]
}

export const getFilesInFolder = async <T>(folder: string) => {
  const contentDir = join(process.cwd(), 'content', folder)

  const files = mapFiles(contentDir)

  const allFiles = files.map(async file => {
    const [contentDir, filename] = splitDirAndFiles(file)
    const { content, data, slug } = readMDX(contentDir, filename)
    return await compileMDX<T>({ content, data, slug, directory: contentDir })
  })

  return await Promise.all(allFiles)
}
