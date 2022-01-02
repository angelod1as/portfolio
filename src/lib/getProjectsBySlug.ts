import { ProjectData } from '#types/types'
import { readdirSync, readFileSync } from 'fs'
import matter from 'gray-matter'
import { serialize } from 'next-mdx-remote/serialize'
import { join } from 'path'
import { Verb } from 'src/helpers/verbs'

export const getProjectsBySlug = async (slug: Verb) => {
  const contentDir = join(process.cwd(), 'content', 'projects')
  const files = readdirSync(contentDir)

  const asyncInformation = files
    .map(file => {
      const filePath = join(contentDir, file)
      const fileContent = readFileSync(filePath, 'utf-8')
      const { data, content } = matter(fileContent)

      return { data, content }
    })
    .filter(({ data }) => {
      return data.tags.includes(slug)
    })
    .map(async ({ content, data }) => {
      const { compiledSource } = await serialize(content)

      return {
        data,
        compiledSource,
      } as unknown as ProjectData
    })

  return await Promise.all(asyncInformation)
}
