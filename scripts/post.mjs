import { existsSync, mkdirSync, writeFileSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const frontmatter = `---
title:
createdAt: ${new Date().getTime()}
description:
---

Write here
`

const getToday = () => {
  const addZero = number =>
    number < 10 ? '0' + number.toString() : number.toString()

  const dateObj = new Date()
  const month = addZero(dateObj.getUTCMonth() + 1)
  const day = addZero(dateObj.getUTCDate().toString())
  const year = dateObj.getUTCFullYear().toString()

  return [year, month, day]
}

const newPost = () => {
  const fileName = process.argv[2]
  const __dirname = dirname(fileURLToPath(import.meta.url))
  const contentFolder = join(__dirname, '../', 'content', 'blog')
  const [year, month] = getToday()

  if (!fileName) {
    throw new Error('You need to pass a filename')
  }

  console.log('Creating new blog post ' + fileName + '.mdx')

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

  writeFileSync(pathAndFileName, frontmatter)
}

newPost()
