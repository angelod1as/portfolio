import { Metadata } from '#types/types'
import { readFileSync } from 'fs'
import { marked } from 'marked'
import { join } from 'path'
import puppeteer from 'puppeteer'
import { textColor } from 'src/helpers/colors'

type Tag = 'h1' | 'h2'
const parseText = (string: string, tag: Tag) => {
  const color = textColor[0]
  marked.use({
    renderer: {
      paragraph: text => `<${tag}>${text}</${tag}>`,
      strong: text => `<b class="${color}">${text}</b>`,
    },
  })
  return marked.parse(string)
}

export const generateHtml = (
  metadata: Metadata,
  viewport: puppeteer.Viewport
) => {
  const projectDir = process.cwd()

  const boilerplate = readFileSync(
    join(projectDir, 'src/lib/images/boilerplate.html'),
    'utf8'
  )

  const title = parseText(metadata.title, 'h1')
  const description = metadata.description
    ? parseText(metadata.description, 'h2')
    : undefined
  const finalHtml = boilerplate
    .replace('$HEIGHT', viewport.height.toString())
    .replace('$WIDTH', viewport.width.toString())
    .replace(
      '{{TITLE}}',
      `
      ${title}
    `
    )
    .replace(
      '{{DESCRIPTION}}',
      description
        ? `
          <h2>
            ${description}
          </h2>
        `
        : ''
    )
    .replace('{{SIGNATURE}}', '<p>angelodias.com.br</p>')

  return finalHtml
}
