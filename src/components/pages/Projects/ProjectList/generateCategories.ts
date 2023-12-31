import { Projects, Filters } from './helpers'

export const generateCategories = (
  projects: Projects,
  { selectedTime, selectedType }: Filters
) => {
  return projects
    .filter(project =>
      [
        selectedTime === ''
          ? true
          : project.metadata.compiledSummary?.when?.includes(selectedTime),
        selectedType === '' ? true : project.metadata.type === selectedType,
      ].some(Boolean)
    )
    .flatMap(project => project.metadata.categories)
    .filter(
      (category, index, self): category is string =>
        Boolean(category) && self.indexOf(category) === index
    )
    .sort()
  return categories
}
