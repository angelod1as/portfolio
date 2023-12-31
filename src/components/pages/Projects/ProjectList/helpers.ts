import { ProjectProps } from '../Projects'

export type Projects = ProjectProps[]
type Filters = {
  selectedCategory: string
  selectedTime: string
  selectedType: string
}

const generateCategories = (
  projects: Projects,
  { selectedTime, selectedType }: Filters
) =>
  projects
    .filter(project =>
      [
        selectedTime === ''
          ? true
          : project.metadata.compiledSummary?.when?.includes(selectedTime),
        selectedType === '' ? true : project.metadata.type === selectedType,
      ].every(Boolean)
    )
    .flatMap(project => project.metadata.categories)
    .filter(
      (category, index, self): category is string =>
        Boolean(category) && self.indexOf(category) === index
    )
    .sort()

const generateTimes = (
  projects: Projects,
  { selectedCategory, selectedType }: Filters
) =>
  projects
    .filter(project =>
      [
        selectedCategory === ''
          ? true
          : project.metadata.categories?.includes(selectedCategory),
        selectedType === '' ? true : project.metadata.type === selectedType,
      ].every(Boolean)
    )
    .map(project =>
      project.metadata.summary?.when
        ? new Date(project.metadata.summary?.when).getFullYear()
        : undefined
    )
    .filter(
      (category, index, self): category is number =>
        Boolean(category) && self.indexOf(category) === index
    )
    .sort((a, b) => b - a)

const generateTypes = (
  projects: Projects,
  { selectedTime, selectedCategory }: Filters
) =>
  projects
    .filter(project =>
      [
        selectedTime === ''
          ? true
          : project.metadata.compiledSummary?.when?.includes(selectedTime),
        selectedCategory === ''
          ? true
          : project.metadata.categories?.includes(selectedCategory),
      ].every(Boolean)
    )
    .flatMap(project => project.metadata.type)
    .filter(
      (category, index, self): category is string =>
        Boolean(category) && self.indexOf(category) === index
    )
    .sort()

export const generateSelects = (
  projects: Projects,
  selectedCategory: string,
  selectedTime: string,
  selectedType: string
) => {
  const filters: Filters = {
    selectedCategory,
    selectedTime,
    selectedType,
  }
  const categories = generateCategories(projects, filters)
  const times = generateTimes(projects, filters)
  const types = generateTypes(projects, filters)
  return { times, categories, types }
}

export const sortProjectByDate = (a: ProjectProps, b: ProjectProps) => {
  if (
    typeof a.metadata.summary?.when === 'number' &&
    typeof b.metadata.summary?.when === 'number'
  ) {
    return b.metadata.summary?.when - a.metadata.summary?.when
  }
  return 0
}

export const sortProjectsByState = (
  projects: Projects,
  selectedCategory: string,
  selectedTime: string,
  selectedType: string
) => {
  return projects
    .filter(project => {
      return selectedCategory !== ''
        ? project.metadata.categories?.includes(selectedCategory)
        : true
    })
    .filter(project => {
      return selectedTime !== ''
        ? project.metadata.compiledSummary?.when?.includes(selectedTime)
        : true
    })
    .filter(project => {
      return selectedType !== ''
        ? project.metadata?.type?.includes(selectedType)
        : true
    })
    .sort(sortProjectByDate)
}
