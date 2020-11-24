import getData from '@utils/getData'

import { TileProp } from './index'
import Category from '@sections/category'

function CategoryGenerator({ category }: { category: TileProp }) {
  return <Category category={category} />
}

export async function getStaticPaths() {
  const categories = getData<TileProp[]>({ type: 'home' })
  const paths = categories.map((item) => ({
    params: { id: item.id },
  }))
  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const categories = getData<TileProp[]>({ type: 'home' })
  const category = categories.find((item) => item.id === params.id)
  return { props: { category } }
}

export default CategoryGenerator
