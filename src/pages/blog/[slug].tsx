import ow from 'ow'
import { GetStaticPaths, GetStaticProps } from 'next'
import { FC } from 'react'
import { MDXReturn } from '#lib/MDX/compileMDX'
import { Post } from '#components/pages/Blog/Post'
import { Metadata } from '#types/types'
import { RandomColors, randomColors } from 'src/helpers/colors'
import { fetchAllPosts } from '#lib/blog/fetchAllPosts'
import { fetchSinglePost } from '#lib/blog/fetchSinglePost'

export type BlogPostProps = {
  content: MDXReturn
}

const BlogPost: FC<BlogPostProps> = ({ content }) => {
  return <Post content={content} />
}

export const getStaticPaths: GetStaticPaths = async () => {
  const allPosts = await fetchAllPosts()
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

type GetStaticPropsType = {
  data?: Metadata
  compiledSource?: string
  colors?: RandomColors
}

export const getStaticProps: GetStaticProps<
  GetStaticPropsType
> = async context => {
  ow(context.params, ow.object)
  ow(context.params.slug, ow.string)

  const allPosts = await fetchAllPosts()
  const postData = allPosts.find(page => context.params?.slug === page.slug)

  if (postData === undefined) {
    throw new Error(`File not found! ${context.params?.slug}}`)
  }

  const post: MDXReturn = await fetchSinglePost(postData)

  const colors = randomColors(post.metadata.color)

  return {
    props: { content: post, colors, slug: context.params.slug },
  }
}

export default BlogPost
