import { existsSync, mkdirSync, writeFileSync } from 'fs'
import { join } from 'path'
import { getFilename, getToday, gitNewBranch, openInVSCode } from './common.mjs'
import { frontmatter } from './frontmatter.mjs'

const newContent = async () => {
  const { fileName, type, contentFolder } = getFilename()

  console.log(`Trying to create a new ${type} content: ${fileName}.mdx`)

  const [year, month] = getToday()
  const filePath = join(contentFolder, year, month, fileName)

  if (!existsSync(filePath)) {
    mkdirSync(filePath, { recursive: true })
  }

  const pathAndFileName = `${filePath}/${fileName}.mdx`

  if (existsSync(pathAndFileName)) {
    throw new Error(
      "There's already a file with that name in this month's folder"
    )
  }

  writeFileSync(pathAndFileName, frontmatter[type])
  console.log(`${fileName}.mdx created succesfully!`)

  await gitNewBranch(type, fileName)
  openInVSCode(pathAndFileName)
}

await newContent()
