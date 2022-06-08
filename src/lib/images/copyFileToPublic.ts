import { copyFileSync, existsSync, mkdirSync } from 'fs'
import path from 'path'

export const copyFileToPublic = (
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

  // TODO: needs to be sync?
  copyFileSync(sourceFile, path.join(targetFolder, fileName))
}
