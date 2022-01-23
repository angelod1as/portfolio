import { BlogTile } from '#components/common/BlogTile'
import { BlogTileProps } from '#types/types'

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
