import rss from '@astrojs/rss'
import type { APIContext } from 'astro'
import { loadPublished } from '../lib/content'

export async function GET(context: APIContext) {
  const entries = await loadPublished()

  return rss({
    title: 'Angelo Dias',
    description:
      'Essays, notes, work and a library — in English and Portuguese.',
    site: context.site ?? 'https://www.angelodias.com.br',
    items: entries.map(entry => ({
      title: entry.data.title,
      pubDate: entry.data.date,
      link: entry.address,
      categories: [entry.lane, ...entry.data.tags],
      description: (entry.data as { description?: string }).description,
    })),
  })
}
