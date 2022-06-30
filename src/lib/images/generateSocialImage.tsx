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
  const publicFinalPath = directory
    .split(publicDir)
    .join(`/public${publicDir}`)
    .replace(fileName, '')

  const finalName = `${fileName}.social.png`
  const finalPath = `${publicDir}/${finalName}`

  if (!existsSync(publicFinalPath)) {
    mkdirSync(publicFinalPath, { recursive: true })
  }

  const finalFileA = `${publicFinalPath}/${finalName}`

  if (existsSync(finalFileA)) {
    return finalPath
  }

  const finalHtml = generateHtml(metadata)

  await runPuppeteer(finalHtml, finalFileA).catch(err => {
    throw new Error(err)
  })

  return finalPath
}
