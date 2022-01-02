import { NewHead } from '#components/common/NewHead'
import { getPageText } from '#lib/getPageText'
import { GetStaticPaths, GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import React, { DetailedHTMLProps, HTMLAttributes } from 'react'
import { tiles, VerbObject } from 'src/helpers/verbs'
import { MDXRemote } from 'next-mdx-remote'
import { getProjectsBySlug } from '#lib/getProjectsBySlug'
import { ProjectTileProps } from '#types/types'
import { ProjectTile } from '#components/common/ProjectTile'

type Props = {
  category: VerbObject
  compiledSource: string
  latest: ProjectTileProps[]
  highlighted: ProjectTileProps[]
}

const Projects = ({
  category: { color, title },
  compiledSource,
  latest,
  highlighted,
}: Props) => {
  const router = useRouter()

  if (title === '404') {
    void router.push('/404')
    return null
  }

  const components = {
    strong: (
      props: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>
    ) => <b className={color} {...props} />,
  }

  return (
    <>
      <NewHead title={title} />

      <h1>
        I'm angelo and I do <span className={color}>{title}</span>
      </h1>

      <div className="flex flex-col gap-4 text-base">
        <MDXRemote compiledSource={compiledSource} components={components} />
      </div>

      {highlighted?.length > 0 && (
        <div>
          <h2>Highlighted projects:</h2>

          <div>
            {highlighted.map(project => (
              <ProjectTile key={project.title} {...project} />
            ))}
          </div>
        </div>
      )}

      {latest?.length > 0 && (
        <div>
          <h2>Latest projects:</h2>

          <div>
            {highlighted.map(project => (
              <ProjectTile key={project.title} {...project} />
            ))}
          </div>
        </div>
      )}
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

  if (!category) {
    return { props: { category: { title: '404', color: '' } } }
  }

  const { compiledSource } = await getPageText(category.href)
  const projects = await getProjectsBySlug(category.href)

  const tileGroup = projects.map(
    ({ data: { date, title, desc, image, highlighted } }) => ({
      date: date.toLocaleString('en-US', {
        dateStyle: 'medium',
      }),
      title,
      desc,
      image,
      highlighted: highlighted || false,
    })
  )

  const latest = tileGroup.filter(({ highlighted }) => !highlighted)

  const highlighted = tileGroup.filter(({ highlighted }) => highlighted)

  const props: Props = {
    category,
    compiledSource,
    latest,
    highlighted,
  }

  return {
    props,
  }
}
