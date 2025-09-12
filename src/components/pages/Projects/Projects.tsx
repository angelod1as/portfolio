import { Link } from '#components/common/Links'
import { Strong } from '#components/common/Strong'
import { PageMetadata, ProjectMetadata } from '#types/types'
import { ProjectList } from './ProjectList'

export type ProjectProps = PageMetadata & {
  metadata: Partial<ProjectMetadata>
}

export type ProjectsProps = {
  projects: ProjectProps[]
  slug?: string
}

export const Projects = ({ projects }: ProjectsProps) => {
  return (
    <>
      <h1>
        I'm angelo and I do <span className="text-highlight">projects</span>
      </h1>

      <p>
        From <Strong>web development</Strong> to <Strong>scriptwriting</Strong>,
        I've done a lot.
        <br /> This brief is a summary of notable projects.
      </p>

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
