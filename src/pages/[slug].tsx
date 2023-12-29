import { Page } from '#components/pages/Page'
import ow from 'ow'
import { GetStaticPaths, GetStaticProps } from 'next'
import { FC } from 'react'
import { randomColors } from 'src/helpers/colors'
import { fetchAllPages } from '#lib/common/fetchAllPages'
import { fetchSinglePage } from '#lib/common/fetchSinglePage'
import { MDXReturn } from '#types/types'

export type PageProps = {
  content: MDXReturn
}

const AnyPage: FC<PageProps> = ({ content }) => {
  return <Page content={content} />
}

export const getStaticPaths: GetStaticPaths = async () => {
  const allPages = await fetchAllPages('pages')
  const paths = allPages.map(page => ({
    params: {
      slug: page.slug,
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

  const allPages = await fetchAllPages('pages')
  const pageData = allPages.find(page => context.params?.slug === page.slug)

  if (pageData === undefined) {
    throw new Error(`File not found! ${context.params?.slug}}`)
  }

  const page: MDXReturn = await fetchSinglePage(pageData, 'pages')

  const colors = randomColors(page.metadata.color)

  return {
    props: { content: page, colors, slug: context.params.slug },
  }
}

export default AnyPage
