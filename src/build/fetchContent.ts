const space = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID
const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN

export async function fetchContent(query: string) {
  console.log('\n\nFetching data')
  try {
    const res = await fetch(`https://graphql.contentful.com/content/v1/spaces/${space}`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({ query }),
    })
    const { data } = await res.json()
    console.log('\n\nData fetched')
    return data
  } catch (error) {
    console.error(`There was a problem retrieving entries with the query ${query}`)
    console.error(error)
  }
}
