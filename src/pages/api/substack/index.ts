import { NextApiResponse, NextApiRequest } from 'next'
import RSSParser from 'rss-parser'

const substackRSS = 'https://angelodias.substack.com/feed.rss'
export type RSSItems = RSSParser.Output<{
  isoDate: Date
}>['items']

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse<RSSItems>
) {
  const parser = new RSSParser({
    customFields: {
      item: ['isoDate'],
    },
  })

  const jsonRSS = await fetch(substackRSS).then(
    async res => await parser.parseString(await res.text())
  )

  return res.status(200).json(jsonRSS.items.slice(0, 4))
}
