import { getFileNames } from '#lib/common/getFileNames'
import { PageMetadata } from '#types/types'
import { join } from 'path'
import { filterMDX } from './filterMDX'
import { getPagesMetadata } from './getPagesMetadata'

export type PageType = 'blog' | 'pages'

export const fetchAllPages = async (type: PageType) => {
  const contentDir = join(process.cwd(), 'content', type)
  const files = getFileNames(contentDir)
  const filesMetadata = await getPagesMetadata(files, type)
  const filteredMetadata = filterMDX<PageMetadata>(filesMetadata)

  return filteredMetadata
}
