import ow from 'ow'
import { GetStaticPaths, GetStaticProps } from 'next'
import { FC } from 'react'
import { MDXReturn } from '#types/types'
import { Project } from '#components/pages/Projects/Project'
import { randomColors } from 'src/helpers/colors'
import { fetchSinglePage } from '#lib/common/fetchSinglePage'
import { fetchAllPages } from '#lib/common/fetchAllPages'

export type ProjectPageProps = {
  content: MDXReturn
}

const ProjectPage: FC<ProjectPageProps> = ({ content }) => {
  return <Project content={content} />
}

export const getStaticPaths: GetStaticPaths = async () => {
  const allProjects = await fetchAllPages('projects')
  const paths = allProjects.map(project => ({
    params: {
      slug: project.slug,
    },
  }))

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async context => {
  ow(context.params, ow.object)
  ow(context.params.slug, ow.string)

  const allProjects = await fetchAllPages('projects')
  const projectData = allProjects.find(
    page => context.params?.slug === page.slug
  )

  if (projectData === undefined) {
    throw new Error(`File not found! ${context.params?.slug}}`)
  }

  const project: MDXReturn = await fetchSinglePage(projectData, 'projects')

  const colors = randomColors(project.metadata.color)

  return {
    props: { content: project, colors, slug: context.params.slug },
  }
}

export default ProjectPage
