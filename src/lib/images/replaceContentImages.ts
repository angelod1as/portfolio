import imageSize from 'image-size'
import path from 'path'

export const replaceContentImages = (
  content: string,
  publicDir: string,
  contentDir: string
) =>
  content.replace(
    /!\[(.*?)]*\]\((.*?)\s*\)/g,
    (fullString, altAndCaption?: string, url?: string) => {
      if (!url || !altAndCaption) return fullString
      const [alt, caption] = altAndCaption.split('||')

      if (fullString.includes('http')) {
        const url = fullString.match(/!\[.*?\]\((.*?)\)/)?.[1] ?? ''
        return `<figure className="my-8"><img
          src="${url}"
          alt="${alt.trim()}"
        /></figure>`
      }

      const imageRelativePath = path.join(publicDir, url)
      const imageFullPath = `${contentDir}/public${imageRelativePath}`
      const { height, width } = imageSize(imageFullPath)

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
