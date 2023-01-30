/* eslint-disable no-console */
import { MDXReturn, Metadata, PageMetadata } from '#types/types'
import { readFileSync } from 'fs'
import matter from 'gray-matter'
import { join } from 'path'
import { PageType } from '../fetchAllPages'
import { parseMDXContent } from './parseMDXContent'
import { parseMDXMetadata } from './parseMDXMetadata'

export const fetchSinglePage = async (
  pageData: PageMetadata,
  type: PageType
): Promise<MDXReturn> => {
  const { directory, slug, extension } = pageData
  const MDXPath = join(directory, `${slug}.${extension}`)

  const MDXContent = readFileSync(MDXPath, 'utf-8')

  const { data, content } = matter(MDXContent)
  const metadata = data as Metadata
  const parsedContent = await parseMDXContent(content, directory, extension)
  const parsedMetadata = await parseMDXMetadata(
    metadata,
    directory,
    slug,
    parsedContent,
    type,
    content.length > 0
  )

  return {
    slug,
    directory,
    compiledSource: parsedContent,
    metadata: parsedMetadata,
  }
}
