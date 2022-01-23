import { Verb } from 'src/helpers/verbs'
import { getProjects } from './getProjects'

export const getProjectByCategory = async (categoryString: Verb) => {
  const asyncInformation = await getProjects()
  const filtered = asyncInformation.filter(({ data }) => {
    const hasCategory = data.tags.includes(categoryString)
    return hasCategory
  })

  return await Promise.all(filtered)
}
