import { splitDirAndFiles } from '#lib/common/splitDirAndFiles'
import { readFileSync } from 'fs'
import matter from 'gray-matter'
import { Metadata, PageMetadata } from '#types/types'

export const getPagesMetadata = async (filePaths: string[]) => {
  const pagesMetadatas = filePaths.map(async filePath => {
    const [directory, filename] = splitDirAndFiles(filePath)
    const fileContent = readFileSync(filePath, 'utf-8')
    const { data } = matter(fileContent)
    const slug = filename.replace(/\.mdx?/, '')

    const pageMetadata: PageMetadata = {
      metadata: data as Metadata,
      directory,
      slug,
    }

    return pageMetadata
  })

  return await Promise.all(pagesMetadatas)
}
