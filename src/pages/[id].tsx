import getData from '@utils/getData'

import { TileProp } from './index'
import Category from '@sections/category'

function CategoryGenerator({ content }: { content: TileProp }) {
  return <Category content={content} />
}

export async function getStaticPaths() {
  const categories = getData({ type: 'home', fullContent: true })

  const paths = categories.map((item) => ({
    params: { id: item.id },
  }))
  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const categories: TileProp[] = getData({ type: 'home', fullContent: true })
  const content = categories.find((item) => item.id === params.id)
  return { props: { content } }
}

export default CategoryGenerator
