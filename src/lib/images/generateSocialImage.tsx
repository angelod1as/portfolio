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

  const filePathInSocial = `${process.env.NEXT_PUBLIC_VERCEL_URL ?? ''}${
    filePathInPublic.split('/public')[1]
  }`

  const socialImageFileName = `${fileName}.social.png`
  const instagramImageFileName = `${fileName}.instagram.png`
  const socialImagePathAndFilename = `${filePathInPublic}/${socialImageFileName}`
  const instagramImagePathAndFilename = `${filePathInPublic}/${instagramImageFileName}`

  const socialImageExists = existsSync(socialImagePathAndFilename)
  const instagramImageExists = existsSync(instagramImagePathAndFilename)

  mkdirSync(filePathInPublic, { recursive: true })

  if (socialImageExists && instagramImageExists) {
    return filePathInSocial
  }

  if (!socialImageExists) {
    const viewPort = {
      height: 630,
      width: 1200,
    }

    const finalHtml = generateHtml(metadata, viewPort)

    await runPuppeteer(finalHtml, socialImagePathAndFilename, viewPort).catch(
      err => {
        throw new Error(err)
      }
    )
  }

  if (!instagramImageExists) {
    const viewPort = {
      height: 1200,
      width: 1200,
    }

    const finalHtml = generateHtml(metadata, viewPort)

    await runPuppeteer(finalHtml, instagramImagePathAndFilename, {
      height: 1200,
      width: 1200,
    }).catch(err => {
      throw new Error(err)
    })
  }

  return filePathInSocial
}
