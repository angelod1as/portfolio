import { ProjectFrontMatterWithSlug } from '#types/types'
import { readdirSync, readFileSync } from 'fs'
import matter from 'gray-matter'
import { serialize } from 'next-mdx-remote/serialize'
import { join } from 'path'

export const getProjects = async () => {
  const contentDir = join(process.cwd(), 'content', 'projects')
  const files = readdirSync(contentDir)

  const asyncProjects = files
    .map(file => {
      const filePath = join(contentDir, file)
      const fileContent = readFileSync(filePath, 'utf-8')
      const { data, content } = matter(fileContent)

      return { data, content, slug: file.replace(/\.mdx?/, '') }
    })
    .map(async ({ content, data, slug }) => {
      const { compiledSource } = await serialize(content)

      return {
        data: {
          ...data,
          slug,
        },
        compiledSource,
      } as unknown as ProjectFrontMatterWithSlug
    })

  return await Promise.all(asyncProjects)
}
