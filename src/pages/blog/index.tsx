import { Blog, PostProps } from '#components/pages/Blog'
import { getFilesInFolder } from '#lib/getFilesInFolder'
import { filterMDX } from '#lib/MDX/filterMDX'
import { generateRssFeed } from '#lib/RSS/generateRssFeed'
import { Metadata } from '#types/types'
import { GetStaticProps } from 'next'
import React, { FC } from 'react'
import { randomColors } from 'src/helpers/colors'

type BlogPageProps = {
  posts: Array<{
    metadata: Partial<Metadata> | undefined
    slug: string
  }>
}

const BlogPage: FC<BlogPageProps> = ({ posts }) => {
  const filteredPosts = posts.filter(post => post.metadata) as PostProps

  return <Blog posts={filteredPosts} />
}

type GetStaticPropsType = {
  posts?: Array<{
    metadata: Partial<Metadata> | undefined
    slug: string
  }>
  compiledSource?: string
}

export const getStaticProps: GetStaticProps<GetStaticPropsType> = async () => {
  const blogPosts = await getFilesInFolder('blog')
  const posts = filterMDX(blogPosts).map(({ metadata, slug }) => ({
    metadata,
    slug,
  }))

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
