import { BlogTile } from '#components/common/BlogTile'
import { getFilesInFolder } from '#lib/getFilesInFolder'
import { BlogFullData, BlogTileProps } from '#types/types'
import { GetStaticProps } from 'next'

type BlogProps = {
  articles: BlogTileProps[]
}

const Blog = ({ articles }: BlogProps) => {
  return (
    <>
      <h1>I'm angelo and I do blogging</h1>

      {articles.map(({ slug, desc, image, createdAt, title }) => (
        <BlogTile
          title={title}
          desc={desc}
          image={image}
          createdAt={createdAt}
          key={slug}
          slug={slug}
        />
      ))}
    </>
  )
}

export default Blog

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
