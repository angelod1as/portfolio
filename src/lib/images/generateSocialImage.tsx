import { Metadata } from '#types/types'
import { marked } from 'marked'
import { textColor } from 'src/helpers/colors'
import { runPuppeteer } from './runPuppeteer'

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

export const generateSocialImage = (
  fileName: string,
  publicFinalPath: string,
  metadata: Metadata | undefined,
  boilerplate: string
) => {
  // identify blog posts
  if (metadata?.createdAt) {
    const title = parseText(metadata.title, 'h1')
    const description = metadata.description ?? parseText(metadata.title, 'h2')
    const finalHtml = boilerplate
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

    if (fileName === 'how-i-became-a-developer.mdx') {
      const finalName = `${publicFinalPath}/${fileName.replace(
        '.mdx',
        '.social.png'
      )}`
      runPuppeteer(finalHtml, finalName).catch(err => {
        throw new Error(err)
      })
    }
  }
  return ''
}
