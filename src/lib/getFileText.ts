import { Metadata } from '#types/types'
import { readFileSync } from 'fs'
import matter from 'gray-matter'
import { join } from 'path'
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
  }

  const { compiledSource } = await serialize({
    content,
  })

  return {
    slug,
    metadata,
    compiledSource,
    directory,
  }
}
