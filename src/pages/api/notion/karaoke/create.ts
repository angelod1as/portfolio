import { Client } from '@notionhq/client'
import { NextApiHandler } from 'next'

const handler: NextApiHandler = async (req, res) => {
  const databaseId = process.env.NOTION_KARAOKE_DB ?? ''
  const apiKey = process.env.NOTION_API_KEY ?? ''

  if (req.method === 'POST') {
    const data = JSON.parse(req.body)

    const notion = new Client({ auth: `${apiKey}` })
    const response = await notion.pages.create({
      parent: {
        database_id: `${databaseId}`,
      },
      properties: {
        Name: {
          title: [
            {
              text: {
                content: data.name,
              },
            },
          ],
        },
        Email: {
          email: data.email,
        },
        Phone: {
          phone_number: data.phone,
        },
      },
    })
    /** If the request is successful notify back */
    res.status(200).json(response)
  }
}

export default handler
