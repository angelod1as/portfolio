import { handleMDXMedia } from '#lib/images/handleMDXMedia'
import { replaceContentImages } from '#lib/images/replaceContentImages'
import { serialize } from '#lib/common/MDX/serialize'

export const parseMDXContent = async (
  content: string,
  directory: string,
  extension: 'mdx' | 'md'
) => {
  const projectDir = process.cwd()
  const publicDir = directory.split(projectDir)[1]

  handleMDXMedia(directory)

  const parsedContent = replaceContentImages(content, publicDir, projectDir)

  return (
    await serialize({
      content: parsedContent,
      options: { mdxOptions: { format: extension } },
    })
  ).compiledSource
}
