import { getFilesInFolder } from '#lib/getFilesInFolder'
import { getFileText } from '#lib/getFileText'
import ow from 'ow'
import { GetStaticPaths, GetStaticProps } from 'next'
import { FC } from 'react'
import { MDXReturn } from '#lib/MDX/compileMDX'
import { Post } from '#components/pages/Blog/Post'
import { Metadata } from '#types/types'
import { RandomColors, randomColors } from 'src/helpers/colors'
import { filterMDX } from '#lib/MDX/filterMDX'

export type BlogPostProps = {
  content: MDXReturn
}

const BlogPost: FC<BlogPostProps> = ({ content }) => {
  return <Post content={content} />
}

type ParamsType = Array<{
  params: {
    slug: string
  }
}>

export const getStaticPaths: GetStaticPaths = async () => {
  const pages = await getFilesInFolder('blog')
  const paths: ParamsType = filterMDX(pages).map(page => ({
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
  data?: Metadata
  compiledSource?: string
  colors?: RandomColors
}

export const getStaticProps: GetStaticProps<
  GetStaticPropsType
> = async context => {
  ow(context.params, ow.object)
  ow(context.params.slug, ow.string)

  const file = (await getFilesInFolder('blog')).find(
    page => context.params?.slug === page.slug
  )

  if (file === undefined) {
    throw new Error(`File not found! ${context.params?.slug}}`)
  }

  const content = await getFileText(file.directory, context.params.slug)
  const colors = randomColors(content?.metadata?.color)

  return {
    props: { content, colors, slug: context.params.slug },
  }
}

export default BlogPost
