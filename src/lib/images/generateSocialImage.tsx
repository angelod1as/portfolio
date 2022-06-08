/* eslint-disable no-console */
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

  const finalName = `${publicFinalPath}/${fileName}.social.png`

  if (!existsSync(publicFinalPath)) {
    mkdirSync(publicFinalPath, { recursive: true })
  }

  if (existsSync(finalName)) {
    return finalName
  }

  const finalHtml = generateHtml(metadata)

  await runPuppeteer(finalHtml, finalName).catch(err => {
    throw new Error(err)
  })

  return finalName
}
