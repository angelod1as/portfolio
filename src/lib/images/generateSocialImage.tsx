import { Metadata } from '#types/types'
import { existsSync, mkdirSync } from 'fs'
import { generateHtml } from './generateHtml'
import { runPuppeteer } from './runPuppeteer'

type GenerateSocialImage = {
  directory: string
  publicDir: string
  fileName: string
  metadata: Metadata
}

export const generateSocialImage = async ({
  directory,
  publicDir,
  fileName,
  metadata,
}: GenerateSocialImage) => {
  const filePathInPublic = directory
    .split(publicDir)
    .join(`/public${publicDir}`)

  const socialImageFileName = `${fileName}.social.png`
  const fullImagePathAndFilename = `${filePathInPublic}/${socialImageFileName}`

  mkdirSync(filePathInPublic, { recursive: true })

  if (existsSync(fullImagePathAndFilename)) {
    return fullImagePathAndFilename
  }

  const finalHtml = generateHtml(metadata)

  await runPuppeteer(finalHtml, fullImagePathAndFilename).catch(err => {
    throw new Error(err)
  })

  return fullImagePathAndFilename
}
