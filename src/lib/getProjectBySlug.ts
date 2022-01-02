import { getProjects } from './getProjects'

export const getProjectBySlug = async (slug: string) => {
  const asyncProjects = await getProjects()
  const project = (await Promise.all(asyncProjects)).find(
    ({ data }) => data.slug === slug
  )

  return project
}
