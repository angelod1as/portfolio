import { ApiResponse } from '#components/hooks/useGetNotion'
import { NotionResponse } from '#components/pages/Party/karaoke'
import { Client } from '@notionhq/client'
import { NextApiHandler } from 'next'

type DatabaseProperties = {
  properties: {
    Name: {
      title: [
        {
          text: {
            content: string
          }
        }
      ]
    }
  }
}

const handler: NextApiHandler<ApiResponse<NotionResponse>> = async (
  req,
  res
) => {
  const databaseId = process.env.NOTION_KARAOKE_DB ?? ''
  const apiKey = process.env.NOTION_API_KEY ?? ''

  if (req.method === 'GET') {
    const notion = new Client({ auth: `${apiKey}` })
    try {
      const response = await notion.databases.query({
        database_id: databaseId,
        page_size: 100,
      })

      const data = response.results.map(item => {
        const dbItem = item as unknown as DatabaseProperties
        const person = dbItem.properties.Name.title[0].text.content

        return {
          person,
        }
      })

      res.status(200).json({
        error: undefined,
        people: data,
      })
    } catch (error) {
      res.status(500).json({
        error: 'Something wrong happened server side, please contact Angelo',
        people: [],
      })
    }
  }
}

export default handler
