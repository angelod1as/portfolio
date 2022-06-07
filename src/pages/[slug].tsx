import { Page } from '#components/pages/Page'
import { getFilesInFolder } from '#lib/getFilesInFolder'
import { getFileText } from '#lib/getFileText'
import ow from 'ow'
import { GetStaticPaths, GetStaticProps } from 'next'
import { FC } from 'react'
import { MDXReturn } from '#lib/MDX/compileMDX'
import { RandomColors, randomColors } from 'src/helpers/colors'
import { Metadata } from '#types/types'

export type PageProps = {
  content: MDXReturn
}

const AnyPage: FC<PageProps> = ({ content }) => {
  return <Page content={content} />
}

type ParamsType = Array<{
  params: {
    slug: string
  }
}>

export const getStaticPaths: GetStaticPaths = async () => {
  const pages = await getFilesInFolder('pages')
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
  data?: Metadata
  compiledSource?: string
  colors: RandomColors
}

export const getStaticProps: GetStaticProps<
  GetStaticPropsType
> = async context => {
  ow(context.params, ow.object)
  ow(context.params.slug, ow.string)

  const file = (await getFilesInFolder('pages')).find(
    page => context.params?.slug === page.slug
  )

  if (file === undefined) {
    throw new Error(`File not found! ${context.params?.slug}}`)
  }

  const content = await getFileText(file.directory, context.params.slug, 'page')

  const colors = randomColors(content?.metadata?.color)

  return {
    props: {
      content,
      colors,
      slug: context.params.slug,
    },
  }
}

export default AnyPage
