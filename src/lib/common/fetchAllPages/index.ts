import { getFileNames } from '#lib/common/getFileNames'
import { join } from 'path'
import { compileMetadata } from './compileMetadata'
import { filterMDX } from './filterMDX'
import { getPagesMetadata } from './getPagesMetadata'

export type PageType =
  | 'blog' // adds reading time & more
  | 'pages' // add I am angelo...
  | 'projects' // adds project specific stuff
  | 'clean' // adds nothing but the MDX

export const fetchAllPages = async (type: PageType) => {
  const contentDir = join(process.cwd(), 'content', type)
  const files = getFileNames(contentDir)
  const filesMetadata = await getPagesMetadata(files)
  const filteredMetadata = filterMDX(filesMetadata)
  const compiledMetadata = await compileMetadata(filteredMetadata, type)

  return compiledMetadata
}
