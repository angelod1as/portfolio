import { BlogFullData } from '#types/types'

type ArticleProps = {
  article: BlogFullData
}

export const Article = ({ article }: ArticleProps) => {
  return (
    <>
      <h1>{article.data.title}</h1>
    </>
  )
}
