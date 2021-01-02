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
      console.warn(error)
      console.warn(error.details)
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
        .sort((a: any, b: any) => {
          return (
            new Date(b.fields.date).getTime() -
            new Date(a.fields.date).getTime()
          )
        })

      returned.items = filtered
    } catch (error) {
      console.warn(error)
      console.warn(error.details)
    }
  }

  return returned
}

export default fetchContentful
