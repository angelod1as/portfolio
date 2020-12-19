import { createClient } from 'contentful'

const Space = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID
const Token = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN

interface FetchProps {
  type?: 'tile' | 'project'
  tag?: string
}

const fetchContentful = async <T>({ type, tag }: FetchProps) => {
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
      })
      returned.content = entries.items
    } catch (error) {
      console.log(error)
      console.log(error.details)
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
      console.log(error)
      console.log(error.details)
    }
  }

  return returned
}

export default fetchContentful
