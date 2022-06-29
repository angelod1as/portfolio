import { getFileNames } from '#lib/common/getFileNames'
import { join } from 'path'
import { compileMetadata } from './compileMetadata'
import { filterMDX } from './filterMDX'
import { getPagesMetadata } from './getPagesMetadata'

export type PageType = 'blog' | 'pages' | 'projects'

export const fetchAllPages = async (type: PageType) => {
  const contentDir = join(process.cwd(), 'content', type)
  const files = getFileNames(contentDir)
  const filesMetadata = await getPagesMetadata(files)
  const filteredMetadata = filterMDX(filesMetadata)
  const compiledMetadata = await compileMetadata(filteredMetadata, type)

  return compiledMetadata
}
