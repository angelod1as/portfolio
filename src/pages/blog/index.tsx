import { Blog } from '#components/pages/Blog'
import { fetchAllPages } from '#lib/common/fetchAllPages'
import { generateRssFeed } from '#lib/RSS/generateRssFeed'
import { Metadata } from '#types/types'
import { GetStaticProps } from 'next'
import React from 'react'
import { randomColors } from 'src/helpers/colors'

type BlogPageProps = {
  posts: Array<{
    metadata: Metadata
    slug: string
  }>
}

function BlogPage({ posts }: BlogPageProps) {
  return <Blog posts={posts} />
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = await fetchAllPages('blog')

  await generateRssFeed(posts)

  const colors = randomColors()

  return {
    props: {
      posts,
      colors,
      slug: 'blog',
    },
  }
}

export default BlogPage
