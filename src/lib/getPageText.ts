import { readFileSync } from 'fs'
import matter from 'gray-matter'
import { join } from 'path'
import { serialize } from './serialize'

export const getPageText = async (page: string) => {
  const filePath = join(process.cwd(), 'content', 'pages', `${page}.mdx`)
  const fileContent = readFileSync(filePath, 'utf-8')

  const { data, content } = matter(fileContent)

  const { compiledSource } = await serialize(content)

  return {
    data,
    compiledSource,
  }
}
