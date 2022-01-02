import { Verb } from 'src/helpers/verbs'
import { getProjects } from './getProjects'

export const getProjectByCategory = async (categoryString: Verb) => {
  const asyncInformation = await getProjects()
  asyncInformation.filter(({ data }) => {
    return data.tags.includes(categoryString)
  })

  return await Promise.all(asyncInformation)
}
