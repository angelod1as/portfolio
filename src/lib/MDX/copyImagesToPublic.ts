import { copyFileSync, existsSync, mkdirSync, readdirSync } from 'fs'
import imageSize from 'image-size'
import path from 'path'

const fileTypes = ['.png', '.jpg', '.jpeg', '.gif']

const replaceContentImages = (
  content: string,
  publicDir: string,
  contentDir: string
) =>
  content.replace(
    /!\[(.*?)]*\]\((.*?)\s*\)/g,
    (fullString, altAndCaption?: string, url?: string) => {
      if (!url || !altAndCaption) return fullString
      const imageRelativePath = path.join(publicDir, url)
      const imageFullPath = `${contentDir}/public${imageRelativePath}`
      const { height, width } = imageSize(imageFullPath)
      const [alt, caption] = altAndCaption.split('||')

      if (height && width) {
        return `<Image
          src="${imageRelativePath}"
          alt="${alt.trim()}"
          height={${height}}
          width={${width}}
          caption="${caption?.trim() ?? ''}"
        />`
      }

      return fullString.replace(url, path.join(publicDir, url))
    }
  )

const copyFileToPublic = (
  fileName: string,
  sourceFile: string,
  targetFolder: string
) => {
  if (!existsSync(targetFolder)) {
    mkdirSync(targetFolder, { recursive: true })
  }

  if (existsSync(path.join(targetFolder, fileName))) {
    return
  }

  // eslint-disable-next-line no-console
  console.log(`Copying ${fileName} to the public folder`)
  copyFileSync(sourceFile, path.join(targetFolder, fileName))
}

export const copyImagesToPublic = (contentDir: string, content: string) => {
  const projectDir = process.cwd()
  const publicDir = contentDir.split(projectDir)[1]

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

  // Generate content with new paths
  const newContent = replaceContentImages(content, publicDir, projectDir)

  return newContent
}
