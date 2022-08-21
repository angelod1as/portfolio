import { generateSocialImage } from '#lib/images/generateSocialImage'
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
  type: PageType
) => {
  const projectDir = process.cwd()
  const publicDir = directory.split(projectDir)[1]

  // Generate Social Image
  const socialImagePath = await generateSocialImage({
    directory,
    publicDir,
    fileName,
    metadata,
  })

  return {
    ...metadata,
    socialImagePath,
    compiledTitle: await compileTitle(metadata.title, type),
    wordCount: wordCount(content),
    timeToRead: timeToRead(content),
    compiledSummary: await compileSummary(metadata.summary),
    hero: compileHero(metadata.hero, directory),
  }
}
