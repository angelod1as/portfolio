import { serialize } from '#lib/MDX/serialize'
import { BlogPagePostMetadata } from '#pages/blog'
import { readFileSync } from 'fs'
import matter from 'gray-matter'
import { splitDirAndFiles } from './splitDirAndFiles'

export const getFilesMetadata = async (filePaths: string[]) => {
  const postsMetadatas = filePaths.map(async filePath => {
    const [directory, filename] = splitDirAndFiles(filePath)
    const fileContent = readFileSync(filePath, 'utf-8')
    const { data } = matter(fileContent)
    const slug = filename.replace(/\.mdx?/, '')

    const compiledTitle = (await serialize({ content: data.title }))
      .compiledSource

    const postMetadata: BlogPagePostMetadata = {
      metadata: {
        ...data,
        compiledTitle,
      },
      directory,
      slug,
    }

    return postMetadata
  })

  return await Promise.all(postsMetadatas)
}
