import { copyFileSync, existsSync, mkdirSync, readdirSync } from 'fs'
import path from 'path'

const fileTypes = ['.png', '.jpg', '.jpeg', '.gif']

const replaceContentPaths = (content: string, publicDir: string) =>
  content
    ? content.replaceAll(
        /!\[[^\]]*\]\((.*?)\s*("(?:.*[^"])")?\s*\)/g,
        (fullString, captured) =>
          fullString.replace(captured, path.join(publicDir, captured))
      )
    : content

const copyFileToPublic = (
  fileName: string,
  sourceFile: string,
  targetFolder: string
) => {
  if (!existsSync(targetFolder)) {
    mkdirSync(targetFolder, { recursive: true })
  }

  // eslint-disable-next-line no-console
  console.log(`Copying ${fileName} to the public folder`)
  copyFileSync(sourceFile, path.join(targetFolder, fileName))
}

export const copyImagesToPublic = (contentDir: string, content: string) => {
  const projectDir = process.cwd()
  const publicDir = contentDir.split(projectDir)[1]

  // Generate content with new paths
  // eslint-disable-next-line no-console
  console.log('CONTENT', content)
  // eslint-disable-next-line no-console
  console.log('TYPE', typeof content)

  const newContent = replaceContentPaths(content, publicDir)

  // Create files in the right folders
  const files = readdirSync(contentDir)

  files.forEach(file => {
    const isImage = fileTypes.some(fileType =>
      file.toLowerCase().includes(fileType)
    )

    if (isImage) {
      const imagePath = path.join(contentDir, file)
      const publicImagePath = imagePath
        .split(publicDir)
        .join(`/public${publicDir}`)
        .replace(file, '')

      copyFileToPublic(file, imagePath, publicImagePath)
    }
  })

  return newContent
}
