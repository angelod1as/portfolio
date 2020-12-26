import { IProject } from 'src/@types/generated/contentful'
import Project, { ImageProps } from '@components/atoms/Project'

import { Wrapper, H2, Mosaic, ProjectHolder } from './styles'

interface ProjectsProps {
  items: Array<{
    fields: IProject['fields'] & {
      safeDate: string
    }
  }>
}

export default function Projects({ items }: ProjectsProps) {
  return (
    <Wrapper>
      <H2>Latest projects</H2>
      <Mosaic>
        {items.map(
          (
            { fields: { safeDate, description, slug, title, coverImage } },
            i
          ) => {
            return (
              <ProjectHolder key={`${slug}-${i}`}>
                <Project
                  title={title}
                  safeDate={safeDate}
                  to={slug}
                  lead={description}
                  image={coverImage as ImageProps[]}
                />
              </ProjectHolder>
            )
          }
        )}
      </Mosaic>
    </Wrapper>
  )
}
