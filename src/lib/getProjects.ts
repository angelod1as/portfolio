import { ProjectFullData } from '#types/types'
import { readdirSync, readFileSync } from 'fs'
import matter from 'gray-matter'
import { serialize } from 'next-mdx-remote/serialize'
import { join } from 'path'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import { generateTOC } from 'src/helpers/generateTOC'

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
      const { compiledSource } = await serialize(content, {
        mdxOptions: {
          rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings],
        },
      })

      const toc = generateTOC(content)

      return {
        data: {
          ...data,
          slug,
          toc,
        },
        compiledSource,
      } as unknown as ProjectFullData
    })

  return await Promise.all(asyncProjects)
}
