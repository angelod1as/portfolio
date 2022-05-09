import { Page } from '#components/pages/Page'
import { getFilesInFolder } from '#lib/getFilesInFolder'
import { getFileText } from '#lib/getFileText'
import ow from 'ow'
import { GetStaticPaths, GetStaticProps } from 'next'
import { FC } from 'react'
import { MDXReturn } from '#lib/MDX/compileMDX'
import { RandomColors, randomColors } from 'src/helpers/colors'
import { DefaultMetadata } from '#types/types'

export type PageProps = {
  colors: RandomColors
  content: MDXReturn<DefaultMetadata>
}

const AnyPage: FC<PageProps> = ({ content, colors }) => {
  return <Page content={content} colors={colors} />
}

type PageTypes = Partial<DefaultMetadata>

type ParamsType = Array<{
  params: {
    slug: string
  }
}>

export const getStaticPaths: GetStaticPaths = async () => {
  const pages = await getFilesInFolder<PageTypes>('pages')
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
  data?: PageMetadata
  compiledSource?: string
  colors: RandomColors
}

export const getStaticProps: GetStaticProps<
  GetStaticPropsType
> = async context => {
  ow(context.params, ow.object)
  ow(context.params.slug, ow.string)

  const content = await getFileText('pages', context.params.slug)

  const colors = randomColors(content?.metadata?.color)

  return {
    props: { content, colors },
  }
}

export default AnyPage
