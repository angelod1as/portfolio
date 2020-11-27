import { createClient } from 'contentful'

const Space = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID
const Token = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN

interface FetchProps {
  type: 'tile' | 'projects'
}

const fetchContentful = async ({ type }: FetchProps) => {
  console.log('fetch')
  const client = createClient({
    space: Space,
    accessToken: Token,
  })

  try {
    const entries = await client.getEntries({
      content_type: type,
      order: 'fields.order',
    })
    return entries.items
  } catch (error) {
    console.log(error)
  }
}

export default fetchContentful
