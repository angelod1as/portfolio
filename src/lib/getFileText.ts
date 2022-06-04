import { readFileSync } from 'fs'
import matter from 'gray-matter'
import { join } from 'path'
import { serialize } from './MDX/serialize'

export const getFileText = async (folder: string, page: string) => {
  const filePath = join(folder, `${page}.mdx`)
  const fileContent = readFileSync(filePath, 'utf-8')

  const { data, content } = matter(fileContent)

  const { compiledSource } = await serialize(content)

  return {
    slug: page,
    metadata: data,
    compiledSource,
  }
}
