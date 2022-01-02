import { Project, ProjectProps } from '#components/pages/Project'
import { getProjectBySlug } from '#lib/getProjectBySlug'
import { getProjects } from '#lib/getProjects'
import { GetStaticPaths, GetStaticProps } from 'next'
import React from 'react'
import { dateToString } from 'src/helpers/dateToString'

const ProjectPage = ({ project }: ProjectProps) => {
  return <Project project={project} />
}

export const getStaticPaths: GetStaticPaths = async () => {
  const projects = await getProjects()

  const paths = projects
    .map(({ data: { tags, slug } }) => {
      return tags.map(tag => {
        return {
          params: {
            category: tag,
            slug,
          },
        }
      })
    })
    .flat()

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const safeProps = { props: {} }
  if (!params?.slug) {
    return safeProps
  }

  const project = await getProjectBySlug(params.slug as string)

  if (!project) {
    return safeProps
  }

  const safeDateProject = {
    ...project,
    data: {
      ...project.data,
      date: dateToString(project.data.date),
    },
  }

  return {
    props: {
      project: safeDateProject,
    },
  }
}

export default ProjectPage
