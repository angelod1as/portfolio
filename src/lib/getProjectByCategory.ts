import { ProjectFullData } from '#types/types'
import { Verb } from 'src/helpers/verbs'
import { getFilesInFolder } from './getFilesInFolder'

export const getProjectByCategory = async (categoryString: Verb) => {
  const asyncInformation = await getFilesInFolder<ProjectFullData>('projects')
  const filtered = asyncInformation.filter(({ data }) => {
    const hasCategory = data.tags.includes(categoryString)
    return hasCategory
  })

  return await Promise.all(filtered)
}
