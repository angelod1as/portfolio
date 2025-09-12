import { Metadata } from '#types/types'
import { timeToRead } from 'src/helpers/timeToRead'
import { wordCount } from 'src/helpers/wordCount'
import { PageType } from '../fetchAllPages'
import {
  compileHero,
  compileSummary,
  compileTitle,
} from '../fetchAllPages/compileMetadata'

export const parseMDXMetadata = async (
  metadata: Metadata,
  directory: string,
  fileName: string,
  content: string,
  type: PageType,
  hasContent: boolean
) => {
  const projectDir = process.cwd()
  const _publicDir = directory.split(projectDir)[1]

  const hero = compileHero(metadata.hero, directory)

  // Generate Social Image URL (dynamic, not at build time)
  const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL
    ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
    : process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : 'http://localhost:3000'

  const socialImagePath = hasContent
    ? `${baseUrl}/api/og?title=${encodeURIComponent(metadata.title || '')}&description=${encodeURIComponent(metadata.description || '')}`
    : 'no-content'

  return {
    ...metadata,
    socialImagePath,
    compiledTitle: await compileTitle(metadata.title, type),
    wordCount: wordCount(content),
    timeToRead: timeToRead(content),
    compiledSummary: await compileSummary(metadata.summary),
    hero,
  }
}
