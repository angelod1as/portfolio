import { Blog, PostProps } from '#components/pages/Blog'
import { getFilesInFolder } from '#lib/getFilesInFolder'
import { BlogPostMetadata } from '#types/types'
import { GetStaticProps } from 'next'
import React, { FC } from 'react'

type BlogPageProps = {
  posts: Array<{
    metadata: Partial<BlogPostMetadata> | undefined
    slug: string
  }>
}

const BlogPage: FC<BlogPageProps> = ({ posts }) => {
  const filteredPosts = posts.filter(post => post.metadata) as PostProps

  return <Blog posts={filteredPosts} />
}

type GetStaticPropsType = {
  posts?: Array<{
    metadata: Partial<BlogPostMetadata> | undefined
    slug: string
  }>
  compiledSource?: string
}

type BlogTypes = Partial<BlogPostMetadata>

export const getStaticProps: GetStaticProps<GetStaticPropsType> = async () => {
  const blogPosts = await getFilesInFolder<BlogTypes>('blog')
  const posts = blogPosts.map(({ metadata, slug }) => ({
    metadata,
    slug,
  }))

  return {
    props: {
      posts,
    },
  }
}

export default BlogPage
