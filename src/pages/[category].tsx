import { getPageText } from '#lib/getPageText'
import { GetStaticPaths, GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import React from 'react'
import { tiles } from 'src/helpers/verbs'
import { getProjectByCategory } from '#lib/getProjectByCategory'
import { Category, CategoryProps } from '#components/pages/Category'
import { dateToString } from 'src/helpers/dateToString'

const CategoryPage = ({
  category,
  compiledSource,
  latest,
  highlighted,
}: CategoryProps) => {
  const router = useRouter()

  if (category.title === '404') {
    void router.push('/404')
    return null
  }

  return (
    <Category
      category={category}
      compiledSource={compiledSource}
      latest={latest}
      highlighted={highlighted}
    />
  )
}

export default CategoryPage

export const getStaticPaths: GetStaticPaths = async () => {
  const categories = tiles.map(tile => {
    return {
      params: { category: tile.href },
    }
  })

  return {
    paths: categories,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const category = tiles.find(tile => tile.href === params?.category)

  if (!category) {
    return { props: { category: { title: '404' } } }
  }

  const { compiledSource } = await getPageText(category.href)
  const projects = await getProjectByCategory(category.href)

  const tileGroup = projects.map(
    ({ data: { date, title, desc, image, highlighted, slug } }) => ({
      date: dateToString(date),
      title,
      desc,
      image,
      highlighted: highlighted || false,
      slug,
      category,
    })
  )

  const latest = tileGroup.filter(({ highlighted }) => !highlighted)

  const highlighted = tileGroup.filter(({ highlighted }) => highlighted)

  const props: CategoryProps = {
    category,
    compiledSource,
    latest,
    highlighted,
  }

  return {
    props,
  }
}
