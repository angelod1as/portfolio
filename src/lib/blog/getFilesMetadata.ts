import { serialize } from '#lib/MDX/serialize'
import { BlogPagePostMetadata } from '#pages/blog'
import { readFileSync } from 'fs'
import matter from 'gray-matter'
import { join } from 'path'
import { splitDirAndFiles } from './splitDirAndFiles'

export const getFilesMetadata = async (fileNames: string[]) => {
  const postsMetadatas = fileNames.map(async fileName => {
    const [directory, filename] = splitDirAndFiles(fileName)
    const filePath = join(directory, filename)
    const fileContent = readFileSync(filePath, 'utf-8')
    const { data } = matter(fileContent)
    const slug = fileName.replace(/\.mdx?/, '')
    const compiledTitle = (await serialize({ content: data.title }))
      .compiledSource

    const postMetadata: BlogPagePostMetadata = {
      metadata: {
        ...data,
        compiledTitle,
      },
      slug,
    }

    return postMetadata
  })

  return await Promise.all(postsMetadatas)
}
