import { NewHead } from '#components/common/NewHead'
import { GetStaticPaths, GetStaticProps } from 'next'
import React from 'react'
import { tiles, VerbObject } from 'src/helpers/verbs'

type Props = {
  category: VerbObject
}

const Projects = ({ category: { color, title } }: Props) => {
  return (
    <>
      <NewHead title={title} />

      <h1>
        I'm angelo and I do <span className={color}>{title}</span>
      </h1>
    </>
  )
}

export default Projects

export const getStaticPaths: GetStaticPaths = async () => {
  const categories = tiles.map(tile => {
    return {
      params: { category: tile.title, color: tile.color },
    }
  })

  return {
    paths: categories,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const category = tiles.find(tile => tile.title === params?.category)

  return {
    props: {
      category,
    },
  }
}
