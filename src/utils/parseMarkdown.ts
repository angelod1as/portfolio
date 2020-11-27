import { Remarkable } from 'remarkable'

// const schema = merge(gh, { tagNames: ['math', 'mi'] })

export default function parseMarkdown(content: string) {
  const excerptMarker = '<!-- excerpt -->'
  let excerpt = ''
  if (content.includes(excerptMarker)) {
    excerpt = content.split(excerptMarker)[0]
  }
  const md = new Remarkable({
    html: true,
    typographer: true,
    quotes: '“”‘’',
  })
  const text = md.render(content)

  return { text, excerpt }
}
