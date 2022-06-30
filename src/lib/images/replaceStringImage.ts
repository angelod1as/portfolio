export type ImageString = `${string}.${'jpg' | 'png' | 'jpeg' | 'gif'}`

export const imageExtensions = ['jpg', 'png', 'jpeg', 'gif']

export const replaceStringImage = (content: ImageString, directory: string) => {
  const projectDir = process.cwd()
  const publicDir = directory.split(projectDir)[1]

  return `${publicDir}/${content}`
}
