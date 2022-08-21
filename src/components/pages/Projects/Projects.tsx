import { Link } from '#components/common/Links'
import { Strong } from '#components/common/Strong'
import { useColorContext } from '#components/templates/Providers/ColorProvider'
import { ProjectMetadata } from '#types/types'
import React from 'react'
import { ProjectList } from './ProjectList'

export type ProjectProps = {
  metadata: Partial<ProjectMetadata>
  slug: string
}

export type ProjectsProps = {
  projects: ProjectProps[]
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

      <ProjectList projects={projects} />

      <p className="text-sm text-gray-400">
        This is a forever expanding and{' '}
        <Link href="/blog/iteration-as-mantra" inner>
          iterating
        </Link>{' '}
        project showcase. If you want to see more, don't hesitate to contact me.
        Your needs might turn into a new version of this page, so I thank you in
        advance.
      </p>
    </>
  )
}
