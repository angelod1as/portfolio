import { Project, ProjectProps } from '#components/pages/Project'
import { getProjectBySlug } from '#lib/getProjectBySlug'
import { getProjects } from '#lib/getProjects'
import { GetStaticPaths, GetStaticProps } from 'next'
import React from 'react'
import { dateToString } from 'src/helpers/dateToString'
import { Verb, verbs } from 'src/helpers/verbs'

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
  if (!params?.slug || !params?.category) {
    return safeProps
  }

  const category = verbs[params.category as Verb]

  const rawProject = await getProjectBySlug(params.slug as string)

  if (!rawProject) {
    return safeProps
  }

  const project = {
    ...rawProject,
    data: {
      ...rawProject.data,
      date: dateToString(rawProject.data.date),
    },
    category,
  }

  return {
    props: {
      project,
    },
  }
}

export default ProjectPage
