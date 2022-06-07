import { Metadata } from '#types/types'
import { readdirSync } from 'fs'
import path from 'path'
import { copyFileToPublic } from './copyFileToPublic'
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

  // Create files in the right folders
  const files = readdirSync(directory)

  files.forEach(file => {
    const fileType = getFileType(file)
    const filePath = path.join(directory, file)

    const publicImagePath = filePath
      .split(publicDir)
      .join(`/public${publicDir}`)
      .replace(file, '')

    if (fileType === 'image') {
      copyFileToPublic(file, filePath, publicImagePath)
    } else if (fileType === 'mdx') {
      // generateSocialImage(file, filePath, metadata)
    }
  })

  // Generate content with new paths
  const newContent = replaceContentImages(content, publicDir, projectDir)

  return newContent
}
