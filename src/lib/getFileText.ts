import { Metadata } from '#types/types'
import { readFileSync } from 'fs'
import matter from 'gray-matter'
import { join } from 'path'
import { timeToRead } from 'src/helpers/timeToRead'
import { wordCount } from 'src/helpers/wordCount'
import { MDXReturn } from './MDX/compileMDX'
import { serialize } from './MDX/serialize'

export const getFileText = async (
  directory: string,
  slug: string,
  type?: 'page' | 'blog'
): Promise<MDXReturn> => {
  const filePath = join(directory, `${slug}.mdx`)
  const fileContent = readFileSync(filePath, 'utf-8')

  const { data, content } = matter(fileContent)
  const typedData = data as Metadata

  const title =
    type === 'page'
      ? `I'm angelo and I do **${data.title as string}**`
      : data.title

  const metadata: Metadata = {
    ...typedData,
    compiledTitle: (await serialize({ content: title })).compiledSource,
    wordCount: wordCount(content),
    timeToRead: timeToRead(content),
  }

  const { compiledSource } = await serialize({
    content,
    metadata,
    directory,
  })

  return {
    slug,
    metadata,
    compiledSource,
    directory,
  }
}
