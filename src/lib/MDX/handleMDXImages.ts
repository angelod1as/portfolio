import { copyImagesToPublic } from './copyImagesToPublic'

export const handleMDXImages = <T>(
  directory: string,
  content: string,
  metadata: T
) => {
  // generateSocialImages(directory, metadata)
  return copyImagesToPublic(directory, content)
}
