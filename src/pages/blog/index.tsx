import { Blog } from '#components/pages/Blog'
import { fetchAllPosts } from '#lib/blog/fetchAllPosts'
import { generateRssFeed } from '#lib/RSS/generateRssFeed'
import { Metadata } from '#types/types'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import React from 'react'
import { randomColors } from 'src/helpers/colors'

export type BlogPagePostMetadata = {
  metadata: Pick<
    Metadata,
    'createdAt' | 'compiledTitle' | 'description' | 'draft' | 'publishAt'
  >
  slug: string
  directory: string
}

type BlogPageProps = {
  posts: Array<{
    metadata: Metadata
    slug: string
  }>
}

function BlogPage({
  posts,
}: BlogPageProps): InferGetStaticPropsType<typeof getStaticProps> {
  return <Blog posts={posts} />
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = await fetchAllPosts()

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
