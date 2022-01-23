import { readFileSync } from 'fs'
import matter from 'gray-matter'
import { join } from 'path'

export const readMDX = (contentDir: string, file: string) => {
  const filePath = join(contentDir, file)
  const fileContent = readFileSync(filePath, 'utf-8')
  const { data, content } = matter(fileContent)

  return { data, content, slug: file.replace(/\.mdx?/, '') }
}
