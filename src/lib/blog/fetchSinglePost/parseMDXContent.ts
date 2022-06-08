import { handleMDXImages } from '#lib/images/handleMDXImages'
import { replaceContentImages } from '#lib/images/replaceContentImages'
import { serialize } from '#lib/MDX/serialize'

export const parseMDXContent = async (content: string, directory: string) => {
  const projectDir = process.cwd()
  const publicDir = directory.split(projectDir)[1]

  handleMDXImages(directory)

  const parsedContent = replaceContentImages(content, publicDir, projectDir)

  return (await serialize({ content: parsedContent })).compiledSource
}
