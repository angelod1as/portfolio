import { Metadata } from '#types/types'
import { Feed } from 'feed'
import fs from 'fs'
import { removeSymbolsFromString } from 'src/helpers/removeSymbolsFromString'

type Posts = Array<{
  metadata: Partial<Metadata> | undefined
  slug: string
}>

export const generateRssFeed = async (posts: Posts) => {
  const baseURL = 'https://www.angelodias.com.br'
  const author = {
    name: 'Angelo Dias',
    email: 'oiangelodias@gmail.com',
    link: 'https://www.angelodias.com.br',
  }
  const now = new Date()
  const updateTime = `${now.getFullYear()}-${
    now.getMonth() + 1
  }-${now.getDate()} ${now.getHours()}:00:00`

  const feed = new Feed({
    title: 'My name is Angelo and I do Blogging',
    description: 'Thoughts and ideas on anything, from tech to nonsense',
    id: `${baseURL}/blog`,
    link: `${baseURL}/blog`,
    updated: new Date(updateTime),
    language: 'en',
    image: `${baseURL}/social.png`,
    favicon: `${baseURL}/favicon.ico`,
    copyright: 'All rights reserved 2021, Angelo Dias',
    generator: 'awesome', // optional, default = 'Feed for Node.js'
    feedLinks: {
      json: `${baseURL}/json`,
      atom: `${baseURL}/atom`,
    },
    author,
  })

  posts.forEach(({ metadata, slug }) => {
    const url = `${baseURL}/blog/${slug}`
    if (metadata && !metadata.draft) {
      const { createdAt, description, title } = metadata
      feed.addItem({
        title: title ? removeSymbolsFromString(title) : 'Missing title!',
        id: url,
        link: url,
        description: description,
        content: description,
        author: [author],
        contributor: [author],
        date: createdAt ? new Date(createdAt) : new Date(updateTime),
      })
    }
  })

  fs.mkdirSync('./public/rss', { recursive: true })
  fs.writeFileSync('./public/rss/feed.xml', feed.rss2())
  fs.writeFileSync('./public/rss/atom.xml', feed.atom1())
  fs.writeFileSync('./public/rss/feed.json', feed.json1())
}
