import { Verb } from 'src/helpers/verbs'
import { getProjects } from './getProjects'

export const getProjectByCategory = async (category: Verb) => {
  const asyncInformation = await getProjects()
  asyncInformation.filter(({ data }) => {
    return data.tags.includes(category)
  })

  return await Promise.all(asyncInformation)
}
