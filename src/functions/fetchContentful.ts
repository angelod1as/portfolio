import { createClient } from 'contentful'

const Space = process.env.NEXT_SERVER_CONTENTFUL_SPACE_ID
const Token = process.env.NEXT_SERVER_CONTENTFUL_ACCESS_TOKEN

interface FetchProps {
  type?: 'tile' | 'project'
  tag?: string
  locale?: string
}

interface PageEntry {
  fields?: {
    content?: {
      fields?: {
        content?: {
          content: Array<{
            nodeType: string
            data?: {
              target?: {
                sys?: {
                  id?: string
                }
              }
            }
          }>
        }
      }
    }
  }
}

export const sorter = (a: any, b: any) =>
  new Date(b.fields.date).getTime() - new Date(a.fields.date).getTime()

const fetchContentful = async <T>({ type, tag, locale }: FetchProps) => {
  const client = createClient({
    space: Space,
    accessToken: Token,
  })

  let order = ''
  if (type === 'tile') {
    order = 'fields.order'
  }

  const returned = {
    content: [],
    items: [],
  }

  if (type) {
    try {
      const entries = await client.getEntries<T>({
        content_type: type,
        order: order,
        locale: locale,
      })

      // Getting right image information
      entries.items.forEach((each: PageEntry) => {
        if (each.fields?.content?.fields?.content?.content) {
          const content = each.fields.content.fields.content.content
          content.map(async eachContent => {
            if (eachContent.nodeType === 'embedded-entry-block') {
              const id = eachContent?.data?.target?.sys?.id
              if (id) {
                const asset = await client.getEntry(id)
                eachContent.data.target = asset
              }
            }
          })
        }
      })

      returned.content = entries.items
    } catch (error) {
      returned.content = []
    }
  }

  if (tag) {
    try {
      const entries = await client.getEntries<T>({
        content_type: 'project',
        limit: 1000,
      })

      const filtered = entries.items
        .filter((eachItem: any) => {
          const it = eachItem.fields.tags.filter(
            (eachTag: any) => eachTag.fields.title === tag
          )
          return it.length > 0
        })
        .sort(sorter)

      returned.items = filtered
    } catch (error) {
      returned.items = []
    }
  }

  return returned
}

export default fetchContentful
