import { readdirSync } from 'fs'
import { join } from 'path'
import { copyFileToPublic } from './copyFileToPublic'

const mediaFileTypes = ['.png', '.jpg', '.jpeg', '.gif', '.mp3', '.mp4']

export const handleMDXMedia = (directory: string) => {
  const projectDir = process.cwd()
  const publicDir = directory.split(projectDir)[1]

  const fileNames = readdirSync(directory)

  for (const fileName of fileNames) {
    const isMedia = mediaFileTypes.some(fileType =>
      fileName.toLowerCase().includes(fileType)
    )

    const filePath = join(directory, fileName)

    const publicFinalPath = filePath
      .split(publicDir)
      .join(`/public${publicDir}`)
      .replace(fileName, '')

    if (isMedia) {
      copyFileToPublic(fileName, filePath, publicFinalPath)
    }
  }
}
