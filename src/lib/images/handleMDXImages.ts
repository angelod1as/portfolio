import { readdirSync } from 'fs'
import { join } from 'path'
import { copyFileToPublic } from './copyFileToPublic'

const imageFileTypes = ['.png', '.jpg', '.jpeg', '.gif']

export const handleMDXImages = (directory: string) => {
  const projectDir = process.cwd()
  const publicDir = directory.split(projectDir)[1]

  const fileNames = readdirSync(directory)

  for (const fileName of fileNames) {
    const isImage = imageFileTypes.some(fileType =>
      fileName.toLowerCase().includes(fileType)
    )

    const filePath = join(directory, fileName)

    const publicFinalPath = filePath
      .split(publicDir)
      .join(`/public${publicDir}`)
      .replace(fileName, '')

    if (isImage) {
      copyFileToPublic(fileName, filePath, publicFinalPath)
    }
  }
}
