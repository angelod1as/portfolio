import { ProjectProps, Projects } from '#components/pages/Projects'
import { fetchAllPages } from '#lib/common/fetchAllPages'
import { GetStaticProps } from 'next'
import React from 'react'
import { randomColors } from 'src/helpers/colors'

type ProjectsPageProps = {
  projects: ProjectProps[]
}

function ProjectsPage({ projects }: ProjectsPageProps) {
  return <Projects projects={projects} />
}

export const getStaticProps: GetStaticProps = async () => {
  const projects = await fetchAllPages('projects')

  const colors = randomColors()

  return {
    props: {
      projects,
      colors,
      slug: 'projects',
    },
  }
}

export default ProjectsPage
