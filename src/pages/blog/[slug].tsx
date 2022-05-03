import { getFilesInFolder } from '#lib/getFilesInFolder'
import { getFileText } from '#lib/getFileText'
import ow from 'ow'
import { GetStaticPaths, GetStaticProps } from 'next'
import { FC } from 'react'
import { MDXReturn } from '#lib/MDX/compileMDX'
import { Post } from '#components/pages/Blog/Post'
import { BlogPostMetadata } from '#types/types'

export type BlogPostProps = MDXReturn<BlogPostMetadata>

const BlogPost: FC<BlogPostProps> = ({ compiledSource, metadata, slug }) => {
  return (
    <Post compiledSource={compiledSource} metadata={metadata} slug={slug} />
  )
}

type BlogTypes = Partial<BlogPostMetadata>

type ParamsType = Array<{
  params: {
    slug: string
  }
}>

export const getStaticPaths: GetStaticPaths = async () => {
  const pages = await getFilesInFolder<BlogTypes>('blog')
  const paths: ParamsType = pages.map(page => ({
    params: {
      slug: page.slug,
    },
  }))

  return {
    paths,
    fallback: false,
  }
}

type GetStaticPropsType = {
  data?: BlogPostMetadata
  compiledSource?: string
}

export const getStaticProps: GetStaticProps<
  GetStaticPropsType
> = async context => {
  if (!context.params?.slug) {
    return {
      props: {},
    }
  }

  ow(context.params.slug, ow.string)

  const content = await getFileText('blog', context.params.slug)

  return {
    props: content,
  }
}

export default BlogPost
