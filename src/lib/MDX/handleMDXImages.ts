import { copyImagesToPublic } from './copyImagesToPublic'

export const handleMDXImages = (directory: string, content: string) => {
  return copyImagesToPublic(directory, content)
}
