import { ProjectFullData } from '#types/types'
import { getFilesInFolder } from './getFilesInFolder'

export const getProjectBySlug = async (slug: string) => {
  const asyncProjects = await getFilesInFolder<ProjectFullData>('projects')
  const project = (await Promise.all(asyncProjects)).find(
    ({ data }) => data.slug === slug
  )

  return project
}
