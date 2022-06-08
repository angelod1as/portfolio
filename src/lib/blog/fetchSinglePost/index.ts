import { MDXReturn } from '#lib/MDX/compileMDX'
import { BlogPagePostMetadata } from '#pages/blog'
import { Metadata } from '#types/types'
import { readFileSync } from 'fs'
import matter from 'gray-matter'
import { join } from 'path'
import { parseMDXContent } from './parseMDXContent'
import { parseMDXMetadata } from './parseMDXMetadata'

export const fetchSinglePost = async (
  postData: BlogPagePostMetadata
): Promise<MDXReturn> => {
  const { directory, slug } = postData
  const MDXPath = join(directory, `${slug}.mdx`)
  const MDXContent = readFileSync(MDXPath, 'utf-8')

  const { data, content } = matter(MDXContent)
  const metadata = data as Metadata

  const parsedContent = await parseMDXContent(content, directory)
  const parsedMetadata = await parseMDXMetadata(
    metadata,
    directory,
    slug,
    parsedContent
  )

  return {
    slug,
    directory,
    compiledSource: parsedContent,
    metadata: parsedMetadata,
  }
}
