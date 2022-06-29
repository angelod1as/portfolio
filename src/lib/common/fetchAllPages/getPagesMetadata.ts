import { splitDirAndFiles } from '#lib/common/splitDirAndFiles'
import { serialize } from '#lib/common/MDX/serialize'
import { readFileSync } from 'fs'
import matter from 'gray-matter'
import { PageType } from '.'
import { PageMetadata } from '#types/types'

export const getPagesMetadata = async (filePaths: string[], type: PageType) => {
  const pagesMetadatas = filePaths.map(async filePath => {
    const [directory, filename] = splitDirAndFiles(filePath)
    const fileContent = readFileSync(filePath, 'utf-8')
    const { data } = matter(fileContent)
    const slug = filename.replace(/\.mdx?/, '')

    const title =
      type === 'pages'
        ? `I'm angelo and I do **${data.title as string}**`
        : data.title

    const compiledTitle = (await serialize({ content: title })).compiledSource

    const pageMetadata: PageMetadata = {
      metadata: {
        ...data,
        compiledTitle,
      },
      directory,
      slug,
    }

    return pageMetadata
  })

  return await Promise.all(pagesMetadatas)
}
