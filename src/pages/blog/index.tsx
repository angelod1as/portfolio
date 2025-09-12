import { Blog } from '#components/pages/Blog'
import { fetchAllPages } from '#lib/common/fetchAllPages'
import { generateRssFeed } from '#lib/RSS/generateRssFeed'
import { Metadata } from '#types/types'
import { GetStaticProps } from 'next'
import React from 'react'

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

  return {
    props: {
      posts,
      slug: 'blog',
    },
  }
}

export default BlogPage
