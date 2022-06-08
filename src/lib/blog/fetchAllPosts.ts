import { filterMDX } from '#lib/MDX/filterMDX'
import { BlogPagePostMetadata } from '#pages/blog'
import { join } from 'path'
import { getFileNames } from './getFileNames'
import { getFilesMetadata } from './getFilesMetadata'

export const fetchAllPosts = async () => {
  const contentDir = join(process.cwd(), 'content', 'blog')
  const files = getFileNames(contentDir)
  const filesMetadata = await getFilesMetadata(files)
  const filteredMetadata = filterMDX<BlogPagePostMetadata>(filesMetadata)

  return filteredMetadata
}
