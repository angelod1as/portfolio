import { readFileSync } from 'fs'
import matter from 'gray-matter'
import { join } from 'path'
import { timeToRead } from 'src/helpers/timeToRead'
import { wordCount } from 'src/helpers/wordCount'
import { MDXReturn } from './MDX/compileMDX'
import { serialize } from './MDX/serialize'

export const getFileText = async <T>(
  directory: string,
  page: string,
  type?: 'page' | 'blog'
): Promise<MDXReturn<T>> => {
  const filePath = join(directory, `${page}.mdx`)
  const fileContent = readFileSync(filePath, 'utf-8')

  const { data, content } = matter(fileContent)

  const title =
    type === 'page'
      ? `I'm angelo and I do **${data.title as string}**`
      : data.title

  const newData = {
    ...data,
    compiledTitle: (await serialize(title)).compiledSource,
    wordCount: wordCount(content),
    timeToRead: timeToRead(content),
  } as unknown as T

  const { compiledSource } = await serialize(content, directory)

  return {
    slug: page,
    metadata: newData,
    compiledSource,
    directory,
  }
}
