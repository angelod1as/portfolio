import { Metadata } from '#types/types'
import { existsSync, mkdirSync } from 'fs'
import path from 'path'
import { generateHtml } from './generateHtml'
import { runPuppeteer } from './runPuppeteer'

type GenerateSocialImage = {
  directory: string
  publicDir: string
  fileName: string
  metadata: Metadata
}

export const generateSocialImage = ({
  directory,
  publicDir,
  fileName,
  metadata,
}: GenerateSocialImage) => {
  const publicFinalPath = directory
    .split(publicDir)
    .join(`/public${publicDir}`)
    .replace(fileName, '')

  const finalName = `${publicFinalPath}/${fileName}.social.png`

  if (!existsSync(publicFinalPath)) {
    mkdirSync(publicFinalPath, { recursive: true })
  }

  if (existsSync(path.join(publicFinalPath, finalName))) {
    return
  }

  const finalHtml = generateHtml(metadata)

  runPuppeteer(finalHtml, finalName).catch(err => {
    throw new Error(err)
  })

  return finalName
}
