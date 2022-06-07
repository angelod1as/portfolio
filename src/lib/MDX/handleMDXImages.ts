import { Metadata } from '#types/types'
import { copyImagesToPublic } from './copyImagesToPublic'

export const handleMDXImages = (
  directory: string,
  content: string,
  metadata: Metadata
) => {
  // generateSocialImages(directory, metadata)
  return copyImagesToPublic(directory, content)
}
