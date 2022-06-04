import { readFileSync } from 'fs'
import matter from 'gray-matter'
import { join } from 'path'
import { MDXReturn } from './MDX/compileMDX'
import { serialize } from './MDX/serialize'

export const getFileText = async <T>(
  folder: string,
  page: string
): Promise<MDXReturn<T>> => {
  const filePath = join(folder, `${page}.mdx`)
  const fileContent = readFileSync(filePath, 'utf-8')

  const { data, content } = matter(fileContent)

  const { compiledSource } = await serialize(content)

  return {
    slug: page,
    metadata: data as T,
    compiledSource,
    directory: folder,
  }
}
