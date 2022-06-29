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
        <b>Brief intro</b>. Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Adipisci, laborum unde. Tempore id ullam blanditiis. Sequi, modi
        nesciunt. Tempore laudantium, optio iste quisquam provident quidem sint
        consectetur molestiae aspernatur voluptatibus!
      </p>

      <h2 className="h2-as-h1">Highlighted projects:</h2>

      {projects.map(project => (
        <Project key={project.slug} project={project.metadata} />
      ))}
    </>
  )
}
