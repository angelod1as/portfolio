import { Strong } from '#components/common/Strong'
import { useColorContext } from '#components/templates/Providers/ColorProvider'
import { ProjectMetadata } from '#types/types'
import React from 'react'
import { Project } from './Project'

export type ProjectProps = Array<{
  metadata: Partial<ProjectMetadata>
  slug: string
}>

export type ProjectsProps = {
  projects: ProjectProps
  slug?: string
}

export const Projects = ({ projects }: ProjectsProps) => {
  const {
    colors: { textColor },
  } = useColorContext()

  return (
    <>
      <h1>
        I'm angelo and I do <span className={textColor}>projects</span>
      </h1>

      <p>
        From <Strong color={textColor}>web development</Strong> to{' '}
        <Strong color={textColor}>scriptwriting</Strong>, I've done a lot.
        <br /> This brief is a summary of notable projects.
      </p>

      <h2>Highlighted</h2>

      {projects
        .sort((a, b) => {
          if (
            typeof a.metadata.summary?.when === 'number' &&
            typeof b.metadata.summary?.when === 'number'
          ) {
            return b.metadata.summary?.when - a.metadata.summary?.when
          }
          return 0
        })
        .map(project => (
          <Project key={project.slug} project={project.metadata} />
        ))}
    </>
  )
}
