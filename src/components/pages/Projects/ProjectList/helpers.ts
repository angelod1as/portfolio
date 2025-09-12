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
    .map(project => {
      // Get the last date from the array (end date), or first if only one
      const when = project.metadata.summary?.when
      if (!when || when.length === 0) return undefined
      
      const lastDate = when[when.length - 1]
      return new Date(Number(lastDate)).getFullYear()
    })
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
  // Get the last date from arrays (end date)
  const aWhen = a.metadata.summary?.when
  const bWhen = b.metadata.summary?.when
  
  if (!aWhen || aWhen.length === 0 || !bWhen || bWhen.length === 0) {
    return 0
  }
  
  const aLastDate = aWhen[aWhen.length - 1]
  const bLastDate = bWhen[bWhen.length - 1]
  
  return Number(bLastDate) - Number(aLastDate)
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
