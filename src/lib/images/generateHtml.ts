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

const parseHero = (src: string, projectDir: string) => {
  const base64 = readFileSync(projectDir + src).toString('base64')

  return `<img class="hero" src="data:image/jpeg;base64,${base64}" />`
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
  const heroImage = metadata.hero?.src
    ? parseHero(metadata.hero.src, projectDir)
    : undefined
  const finalHtml = boilerplate
    .replace('$HEIGHT', viewport.height.toString())
    .replace('$WIDTH', viewport.width.toString())
    .replace('{{TITLE}}', title)
    .replace('{{DESCRIPTION}}', description ?? '')
    .replace('{{SIGNATURE}}', '<p>angelodias.com.br</p>')
    .replace('{{HERO}}', heroImage ?? '')

  return finalHtml
}
