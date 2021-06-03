import { ContentfulClientApi, createClient } from 'contentful'

const Space = process.env.NEXT_SERVER_CONTENTFUL_SPACE_ID
const Token = process.env.NEXT_SERVER_CONTENTFUL_ACCESS_TOKEN

interface FetchProps {
  type?: 'tile' | 'project'
  tag?: string
  locale?: string
}

type EntryContent = {
  nodeType: string
  content?: {
    nodeType: string
    value?: string
    content?: []
    data?: {
      target?: {
        sys?: {
          id?: string
        }
        metadada?: Record<string, unknown>
        fields?: Record<string, unknown>
      }
    }
  }[]
  data?: {
    target?: {
      sys?: {
        id?: string
      }
    }
  }
}

interface PageEntry {
  fields?: {
    content?: {
      fields?: {
        content?: {
          content: EntryContent[]
        }
      }
    }
    slug?: string
    internalRedirect?: string
  }
}

interface GetInfoProps {
  entryContent?: EntryContent
  client: ContentfulClientApi
}

const getFullInformation = async ({ entryContent, client }: GetInfoProps) => {
  const id = entryContent?.data?.target?.sys?.id
  if (id) {
    const target = await client.getEntry(id)
    entryContent.data.target = target
    return entryContent
  }
  return entryContent
}

const getInlineEmbedInformation = async ({
  entryContent,
  client,
}: GetInfoProps) => {
  const { content } = entryContent
  return {
    ...entryContent,
    content: content.map(async item => {
      const { nodeType } = item
      if (nodeType === 'embedded-entry-inline') {
        return await getFullInformation({ entryContent: item, client })
      }
      return item
    }),
  }
}

interface ContentProps {
  type?: FetchProps['type']
  locale?: string
  client: ContentfulClientApi
}

const getContent = async <T>({ type, client, locale }: ContentProps) => {
  if (type) {
    try {
      const entries = await client.getEntries<T>({
        content_type: type,
        order: type === 'tile' ? 'fields.order' : '',
        locale: locale,
      })

      const { items } = entries

      return items.map((entry: PageEntry) => {
        const content = entry.fields?.content?.fields?.content?.content
        if (content) {
          content.map(async entryContent => {
            const { nodeType } = entryContent
            // Getting right image information
            if (nodeType === 'embedded-entry-block') {
              return await getFullInformation({ entryContent, client })
            }
            // Getting inline-embed information
            if (nodeType === 'paragraph') {
              return await getInlineEmbedInformation({ entryContent, client })
            }
            return entryContent
          })
        }
        return entry
      })
    } catch (error) {
      return []
    }
  }
  return []
}

interface ItemProps {
  tag?: string
  client: ContentfulClientApi
}

const getItems = async <T>({ tag, client }: ItemProps) => {
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

      return filtered
    } catch (error) {
      return []
    }
  }
  return []
}

export const sorter = (a: any, b: any) =>
  new Date(b.fields.date).getTime() - new Date(a.fields.date).getTime()

const fetchContentful = async <T>({ type, tag, locale }: FetchProps) => {
  const client = createClient({
    space: Space,
    accessToken: Token,
  })
  return {
    content: await getContent<T>({ client, type, locale }),
    items: await getItems<T>({ client, tag }),
  }
}

export default fetchContentful
