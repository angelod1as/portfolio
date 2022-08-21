import { ProjectProps } from '../Projects'
import { Item } from './Item'

type ProjectListProps = {
  projects: ProjectProps[]
}

export const ProjectList = ({ projects }: ProjectListProps) => {
  const sortedProjects = projects.sort((a, b) => {
    if (
      typeof a.metadata.summary?.when === 'number' &&
      typeof b.metadata.summary?.when === 'number'
    ) {
      return b.metadata.summary?.when - a.metadata.summary?.when
    }
    return 0
  })
  return (
    <>
      {sortedProjects.map(({ slug, metadata, hasContent }) => (
        <Item
          slug={slug}
          key={slug}
          metadata={metadata}
          hasContent={hasContent}
        />
      ))}
    </>
  )
}
