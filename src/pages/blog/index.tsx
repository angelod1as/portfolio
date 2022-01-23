import Blog from '#components/pages/Blog/Blog'
import { getFilesInFolder } from '#lib/getFilesInFolder'
import { BlogFullData, BlogTileProps } from '#types/types'
import { GetStaticProps } from 'next'

type BlogProps = {
  articles: BlogTileProps[]
}

const BlogPage = ({ articles }: BlogProps) => {
  return <Blog articles={articles} />
}

export default BlogPage

export const getStaticProps: GetStaticProps = async () => {
  const articles = await getFilesInFolder<BlogFullData>('blog')
  const props = {
    articles: articles
      .filter(article => !article.data.wip)
      .map(({ data }) => data),
  }

  return {
    props,
  }
}
