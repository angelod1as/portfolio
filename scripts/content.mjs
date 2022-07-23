import { existsSync, mkdirSync, writeFileSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'
import { getFilename, getToday } from './common.mjs'

const frontmatter = {
  blog: `---
title:
createdAt: ${new Date().getTime()}
description:
---

Write here
`,
  projects: `---
title:
subtitle:
summary:
createdAt: ${new Date().getTime()}
  where: >-

  who: >-

  what: >-

  why: >-

live:
hero:
  src:
  alt:
---

Write here
`,
}

const newContent = () => {
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
}

newContent()
