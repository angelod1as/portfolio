import { getFilesInFolder } from '#lib/getFilesInFolder'
import { getFileText } from '#lib/getFileText'
import ow from 'ow'
import { GetStaticPaths, GetStaticProps } from 'next'
import { FC } from 'react'
import { MDXReturn } from '#lib/MDX/compileMDX'
import { Post } from '#components/pages/Blog/Post'
import { BlogPostMetadata } from '#types/types'
import { RandomColors, randomColors } from 'src/helpers/colors'

export type BlogPostProps = {
  content: MDXReturn<BlogPostMetadata>
}

const BlogPost: FC<BlogPostProps> = ({ content }) => {
  return <Post content={content} />
}

type BlogTypes = Partial<BlogPostMetadata>

type ParamsType = Array<{
  params: {
    slug: string
  }
}>

export const getStaticPaths: GetStaticPaths = async () => {
  const pages = await getFilesInFolder<BlogTypes>('blog')
  const paths: ParamsType = pages
    .filter(page => !page?.metadata?.draft)
    .map(page => ({
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
  colors?: RandomColors
}

export const getStaticProps: GetStaticProps<
  GetStaticPropsType
> = async context => {
  ow(context.params, ow.object)
  ow(context.params.slug, ow.string)

  const content = await getFileText('blog', context.params.slug)
  const colors = randomColors(content?.metadata?.color)

  return {
    props: { content, colors },
  }
}

export default BlogPost
