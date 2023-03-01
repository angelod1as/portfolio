import { Client } from '@notionhq/client'
import { NextApiHandler } from 'next'

const handler: NextApiHandler = async (req, res) => {
  const databaseId = process.env.NOTION_ASK_DB ?? ''
  const apiKey = process.env.NOTION_API_KEY ?? ''

  if (req.method === 'POST') {
    const data = JSON.parse(req.body)

    const notion = new Client({ auth: `${apiKey}` })
    const response = await notion.pages.create({
      parent: {
        database_id: `${databaseId}`,
      },
      properties: {
        Date: {
          title: [
            {
              text: {
                content: new Date().toLocaleDateString('en-CA'), // YYYY-MM-DD
              },
            },
          ],
        },
        Name: {
          rich_text: [
            {
              type: 'text',
              text: {
                content: data.name ?? '',
              },
            },
          ],
        },
        Question: {
          rich_text: [
            {
              type: 'text',
              text: {
                content: data.message ?? '',
              },
            },
          ],
        },
        Answered: {
          checkbox: false,
        },
      },
    })
    /** If the request is successful notify back */
    res.status(200).json(response)
  }
}

export default handler
