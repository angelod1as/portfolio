import { Metadata } from '#types/types'
import { readdirSync, readFileSync } from 'fs'
import { join } from 'path'
import { copyFileToPublic } from './copyFileToPublic'
import { generateSocialImage } from './generateSocialImage'
import { replaceContentImages } from './replaceContentImages'

const imageFileTypes = ['.png', '.jpg', '.jpeg', '.gif']

const getFileType = (file: string) => {
  if (file.endsWith('.mdx')) {
    return 'mdx'
  }

  const isImage = imageFileTypes.some(fileType =>
    file.toLowerCase().includes(fileType)
  )

  if (isImage) {
    return 'image'
  }

  return 'skip'
}

export const handleMDXImages = (
  directory: string,
  content: string,
  metadata?: Metadata
) => {
  const projectDir = process.cwd()
  const publicDir = directory.split(projectDir)[1]
  const boilerplatePath = join(process.cwd(), 'src/lib/images/boilerplate.html')
  const boilerplate = readFileSync(boilerplatePath, 'utf8')

  // Create files in the right folders
  const files = readdirSync(directory)

  files.forEach(file => {
    const fileType = getFileType(file)
    const filePath = join(directory, file)

    const publicFinalPath = filePath
      .split(publicDir)
      .join(`/public${publicDir}`)
      .replace(file, '')

    if (fileType === 'image') {
      copyFileToPublic(file, filePath, publicFinalPath)
    } else if (fileType === 'mdx') {
      generateSocialImage(file, publicFinalPath, metadata, boilerplate)
    }
  })

  // Generate content with new paths
  const newContent = replaceContentImages(content, publicDir, projectDir)

  return newContent
}
