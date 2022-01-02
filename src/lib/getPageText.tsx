import { readFileSync } from 'fs'
import matter from 'gray-matter'
import { join } from 'path'
import { serialize } from 'next-mdx-remote/serialize'

export const getPageText = async (slug: string) => {
  const contentDir = join(process.cwd(), 'content', 'tiles')

  const filePath = join(contentDir, `${slug}.mdx`)
  const fileContent = readFileSync(filePath, 'utf-8')

  const { data, content } = matter(fileContent)

  const { compiledSource } = await serialize(content)

  return {
    data,
    compiledSource,
  }
}
