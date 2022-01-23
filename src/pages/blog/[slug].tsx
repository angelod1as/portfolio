import { GetStaticPaths, GetStaticProps } from 'next'

export type ArticleProps = {}

const Article = ({}: ArticleProps) => {
  return <div>Article</div>
}

export default Article

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      {
        params: {
          slug: 'text',
        },
      },
    ],
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const props = {}

  return {
    props,
  }
}
