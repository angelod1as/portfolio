import ow from 'ow'
import { GetStaticPaths, GetStaticProps } from 'next'
import { FC } from 'react'
import { MDXReturn } from '#types/types'
import { Post } from '#components/pages/Blog/Post'
import { fetchSinglePage } from '#lib/common/fetchSinglePage'
import { fetchAllPages } from '#lib/common/fetchAllPages'

export type BlogPostProps = {
  content: MDXReturn
}

const BlogPost: FC<BlogPostProps> = ({ content }) => {
  return <Post content={content} />
}

export const getStaticPaths: GetStaticPaths = async () => {
  const allPosts = await fetchAllPages('blog')
  const paths = allPosts.map(post => ({
    params: {
      slug: post.slug,
    },
  }))

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async context => {
  ow(context.params, ow.object)
  ow(context.params.slug, ow.string)

  const allPosts = await fetchAllPages('blog')
  const postData = allPosts.find(page => context.params?.slug === page.slug)

  if (postData === undefined) {
    throw new Error(`File not found! ${context.params?.slug}}`)
  }

  const post: MDXReturn = await fetchSinglePage(postData, 'blog')

  return {
    props: { content: post, slug: context.params.slug },
  }
}

export default BlogPost
