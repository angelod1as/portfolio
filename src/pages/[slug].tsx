import { Page } from '#components/pages/Page'
import { getFilesInFolder } from '#lib/getFilesInFolder'
import { getPageText } from '#lib/getPageText'
import ow from 'ow'
import { GetStaticPaths, GetStaticProps } from 'next'
import { FC } from 'react'
import { MDXReturn } from '#lib/MDX/compileMDX'

type PageMetadata = {
  title: string
  color: string
}
export type PageProps = MDXReturn<PageMetadata>

const AnyPage: FC<PageProps> = ({ compiledSource, metadata, slug }) => {
  return (
    <Page compiledSource={compiledSource} metadata={metadata} slug={slug} />
  )
}

type PageTypes = {
  title?: string
}

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
  data?: {
    title: string
  }
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

  const content = await getPageText(context.params.slug)

  return {
    props: content,
  }
}

export default AnyPage
