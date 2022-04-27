import { getFilesInFolder } from '#lib/getFilesInFolder'

type GetMDXbySlugProps = {
  page: string
  slug: string
}

export const getMDXbySlug = async <T>({ page, slug }: GetMDXbySlugProps) => {
  const asyncProjects = await getFilesInFolder<T>(page)
  const projects = await Promise.all(asyncProjects)
  const project = projects.find(props => {
    const typedProps = props as unknown as { data: { slug: string } }

    return typedProps.data.slug === slug
  })

  return project
}
