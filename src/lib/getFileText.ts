import { readFileSync } from 'fs'
import matter from 'gray-matter'
import { join } from 'path'
import { MDXReturn } from './MDX/compileMDX'
import { serialize } from './MDX/serialize'

export const getFileText = async <T>(
  directory: string,
  page: string
): Promise<MDXReturn<T>> => {
  const filePath = join(directory, `${page}.mdx`)
  const fileContent = readFileSync(filePath, 'utf-8')

  const { data, content } = matter(fileContent)

  const newData = {
    ...data,
    compiledTitle: (await serialize(data.title)).compiledSource,
  } as unknown as T

  const { compiledSource } = await serialize(content, directory)

  return {
    slug: page,
    metadata: newData,
    compiledSource,
    directory,
  }
}
