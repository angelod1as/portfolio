import { createClient } from 'contentful'

const Space = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID
const Token = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN

interface FetchProps {
  type: 'tile' | 'project'
}

// interface OptionProps {
//   order?: string
// }

const fetchContentful = async <T>({ type }: FetchProps) => {
  const client = createClient({
    space: Space,
    accessToken: Token,
  })

  let order = ''
  if (type === 'tile') {
    order = 'fields.order'
  }

  try {
    const entries = await client.getEntries<T>({
      content_type: type,
      order: order,
    })
    return entries.items
  } catch (error) {
    console.log(error)
    console.log(error.details)
  }
}

export default fetchContentful
