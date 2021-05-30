import { Client } from '@notionhq/client'

const Token = process.env.NEXT_SERVER_NOTION_TOKEN

/* eslint-disable camelcase */
type RichTextProps = {
  rich_text: Array<{
    type: string
    text: {
      content: string
      link: string | null
    }
    plain_text: string
    href: string | null
  }>
}

type PropertiesProps = {
  Tag: {
    multi_select: Array<{
      name: string
    }>
  }
  Status: {
    select: {
      name: string
    }
  }
  Public: {
    checkbox: boolean
  }
  'Quick note': RichTextProps
  Name: {
    title: Array<{
      plain_text: string
    }>
  }
  Image: RichTextProps
  Link: RichTextProps
}
/* eslint-enable camelcase */

export type NotionProps = {
  createdTime: string
  lastEditedTime: string
  tags?: Array<string> | null
  status?: string | null
  quickNote?: string | null
  image?: string | null
  title?: string | null
  link?: string | null
}

const fetchNotion = async () => {
  const notion = new Client({
    auth: Token,
  })

  const { results } = await notion.databases.query({
    database_id: '9cefc9c56ec64287a87489c64d89b59e',
  })

  return results
    .filter(
      item =>
        !item.archived &&
        (item.properties as unknown as PropertiesProps)?.Public?.checkbox
    )
    .map(item => {
      const { created_time: createdTime, last_edited_time: lastEditedTime } =
        item

      const properties = item.properties as unknown as PropertiesProps
      const { Status, Name, Tag, Image, Link } = properties
      const quickNote = properties['Quick note']?.rich_text?.[0]?.plain_text
      const image = Image?.rich_text?.[0]?.plain_text
      const link = Link?.rich_text?.[0]?.plain_text

      const result: NotionProps = {
        createdTime,
        lastEditedTime,
        tags: Tag?.multi_select?.map(tag => tag.name) || null,
        status: Status?.select?.name || null,
        quickNote: quickNote || null,
        title: Name?.title?.[0]?.plain_text || null,
        image: image || null,
        link: link || null,
      }

      return result
    })
}

export default fetchNotion
