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
  public: {
    checkbox: boolean
  }
  title_pt: RichTextProps
  note_pt: RichTextProps
  title_en: RichTextProps
  note_en: RichTextProps
  image: RichTextProps
  link: RichTextProps
  external_link: RichTextProps
  tag: {
    multi_select: Array<{
      name: string
    }>
  }
  status: {
    select: {
      name: string
    }
  }
}
/* eslint-enable camelcase */

export type NotionProps = {
  createdTime: string
  lastEditedTime: string
  tags?: Array<string> | null
  status?: string | null
  en: {
    title: string | null
    note: string | null
  }
  pt: {
    title: string | null
    note: string | null
  }
  image?: string | null
  link?: string | null
  externalLink?: string | null
}

const getValue = (value: any) => value || null

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
        (item.properties as unknown as PropertiesProps)?.public?.checkbox
    )
    .map(item => {
      const { created_time: createdTime, last_edited_time: lastEditedTime } =
        item

      const properties = item.properties as unknown as PropertiesProps

      const result: NotionProps = {
        createdTime,
        lastEditedTime,
        tags: getValue(properties?.tag?.multi_select?.map(tag => tag.name)),
        status: getValue(properties?.status?.select?.name),
        en: {
          title: getValue(properties?.title_en?.rich_text?.[0]?.plain_text),
          note: getValue(properties?.note_en?.rich_text?.[0]?.plain_text),
        },
        pt: {
          title: getValue(properties?.title_pt?.rich_text?.[0]?.plain_text),
          note: getValue(properties?.note_pt?.rich_text?.[0]?.plain_text),
        },
        image: getValue(properties?.image?.rich_text?.[0]?.plain_text),
        link: getValue(properties?.link?.rich_text?.[0]?.plain_text),
        externalLink: getValue(
          properties?.external_link?.rich_text?.[0]?.plain_text
        ),
      }

      return result
    })
}

export default fetchNotion
