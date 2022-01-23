import { Article } from '#components/pages/Article'
import { getFilesInFolder } from '#lib/getFilesInFolder'
import { getMDXbySlug } from '#lib/MDX/getMDXbySlug'
import { BlogFullData } from '#types/types'
import { GetStaticPaths, GetStaticProps } from 'next'
import { dateToString } from 'src/helpers/dateToString'

export type ArticleProps = { article: BlogFullData }

const ArticlePage = ({ article }: ArticleProps) => {
  return <Article article={article} />
}

export default ArticlePage

export const getStaticPaths: GetStaticPaths = async () => {
  const projects = await getFilesInFolder<BlogFullData>('blog')

  const paths = projects
    .filter(({ data: { wip } }) => !wip)
    .map(({ data: { slug } }) => {
      return {
        params: {
          slug,
        },
      }
    })

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const safeProps = { props: {} }
  if (!params?.slug) {
    return safeProps
  }

  const rawArticle = await getMDXbySlug<BlogFullData>({
    page: 'blog',
    slug: params.slug as string,
  })

  if (!rawArticle) {
    return safeProps
  }

  const article = {
    ...rawArticle,
    data: {
      ...rawArticle.data,
      createdAt: dateToString(rawArticle.data.createdAt),
    },
  }

  return {
    props: {
      article,
    },
  }
}
