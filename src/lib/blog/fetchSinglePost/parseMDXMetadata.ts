import { generateSocialImage } from '#lib/images/generateSocialImage'
import { serialize } from '#lib/MDX/serialize'
import { Metadata } from '#types/types'
import { timeToRead } from 'src/helpers/timeToRead'
import { wordCount } from 'src/helpers/wordCount'

export const parseMDXMetadata = async (
  metadata: Metadata,
  directory: string,
  fileName: string,
  content: string
) => {
  const projectDir = process.cwd()
  const publicDir = directory.split(projectDir)[1]

  // Generate Social Image
  const socialImagePath = generateSocialImage({
    directory,
    publicDir,
    fileName,
    metadata,
  })

  return {
    ...metadata,
    socialImagePath,
    compiledTitle: (await serialize({ content: metadata.title }))
      .compiledSource,
    wordCount: wordCount(content),
    timeToRead: timeToRead(content),
  }
}
