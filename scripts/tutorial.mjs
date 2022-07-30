import { getFilename } from './getFilename.mjs'
import { getToday } from './getToday.mjs'
import { existsSync, mkdirSync, writeFileSync } from 'fs'
import { join } from 'path'

const newContent = () => {
  const { fileName, type, contentFolder } = getFilename()

  console.log(`Trying to create a new ${type} content: ${fileName}.mdx`)

  const [year, month] = getToday()
  const folderPath = join(contentFolder, year, month, fileName)

  if (!existsSync(folderPath)) {
    mkdirSync(folderPath, { recursive: true })
  }

  const folderAndFilename = `${folderPath}/${fileName}.mdx`

  // if (existsSync(folderAndFilename)) {
  //   throw new Error(
  //     "There's already a file with that name in this month's folder"
  //   )
  // }

  writeFileSync(folderAndFilename, '')
}

newContent()
