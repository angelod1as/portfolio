import { readMDX } from '#lib/MDX/readMDX'
import { readdirSync } from 'fs'
import { join } from 'path'
import { compileMDX } from './MDX/compileMDX'

export const getFilesInFolder = async <T>(folder: string) => {
  const contentDir = join(process.cwd(), 'content', folder)
  const files = readdirSync(contentDir)

  const allBlogArticles = files
    .map(file => readMDX(contentDir, file))
    .map(async ({ content, data, slug }) => {
      return await compileMDX<T>({ content, data, slug })
    })

  return await Promise.all(allBlogArticles)
}
