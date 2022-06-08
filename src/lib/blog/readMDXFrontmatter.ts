import { readFileSync } from 'fs'
import matter from 'gray-matter'
import { join } from 'path'
import { serialize } from '../MDX/serialize'

export const readMDXFrontmatter = async (contentDir: string, file: string) => {
  const filePath = join(contentDir, file)
  const fileContent = readFileSync(filePath, 'utf-8')
  const { data, content } = matter(fileContent)

  const compiledTitle = (await serialize({ content: data.title }))
    .compiledSource

  const newData = {
    ...data,
    compiledTitle,
  }

  return { data: newData, content, slug: file.replace(/\.mdx?/, '') }
}