import { IProject } from 'src/@types/generated/contentful'
import Project, { ImageProps } from './Project'

import { Wrapper, H2, Mosaic, ProjectHolder } from './styles'

interface ProjectsProps {
  items: IProject[]
}

export default function Projects({ items }: ProjectsProps) {
  return (
    <Wrapper>
      <H2>Latest projects</H2>
      <Mosaic>
        {items.map(
          ({ fields: { date, description, slug, title, coverImage } }, i) => {
            return (
              <ProjectHolder key={`${slug}-${i}`}>
                <Project
                  title={title}
                  date={date}
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
