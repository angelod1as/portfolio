import { NotionResponse } from '#components/pages/Ask/useGetNotion'
import { Client } from '@notionhq/client'
import { NextApiHandler } from 'next'

type DatabaseProperties = {
  created_time: string
  properties: {
    Question: {
      rich_text: Array<{
        plain_text: string
      }>
    }
  }
}

const flattenRichText = (
  array: DatabaseProperties['properties']['Question']['rich_text']
) => {
  return array.map(item => item.plain_text).join('\n')
}

const handler: NextApiHandler<NotionResponse> = async (req, res) => {
  const databaseId = process.env.NOTION_ASK_DB ?? ''
  const apiKey = process.env.NOTION_ASK_KEY ?? ''

  if (req.method === 'GET') {
    const notion = new Client({ auth: `${apiKey}` })
    try {
      const response = await notion.databases.query({
        database_id: databaseId,
        filter: {
          and: [
            {
              property: 'Answered',
              checkbox: { equals: true },
            },
          ],
        },
      })

      const data = response.results.map(item => {
        const dbItem = item as unknown as DatabaseProperties
        const question = flattenRichText(dbItem.properties.Question.rich_text)

        return {
          question,
          createdAt: dbItem.created_time,
        }
      })

      res.status(200).json({
        error: undefined,
        questions: data,
      })
    } catch (error) {
      res.status(500).json({
        error: 'Something wrong happened server side, please contact Angelo',
        questions: [],
      })
    }
  }
}

export default handler
