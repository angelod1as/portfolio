import { TOCGroup } from '#components/common/TOC/TOC'
import slugify from 'slugify'

export function generateTOC(content: string) {
  const regexp = /^(###### |##### |#### |### |## )(.*)\n/gm

  const headings = [...Array.from(content.matchAll(regexp))]

  const tableOfContents: TOCGroup = headings.map(heading => {
    const headingText = heading[2].trim()
    const headingType = heading[1].trim().length
    const headingLink = slugify(headingText, { lower: true, strict: true })
    const title = `${'- '.repeat(headingType - 2)}${headingText}`

    return {
      title: title,
      link: `#${headingLink}`,
    }
  })

  return tableOfContents
}
