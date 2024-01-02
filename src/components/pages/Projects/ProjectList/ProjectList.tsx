import { useMemo, useState } from 'react'
import { Item } from './Item'
import { Select } from '#components/common/Select'
import { Projects, generateSelects, sortProjectsByState } from './helpers'
import { H3 } from '#components/common/Typography'

type ProjectListProps = {
  projects: Projects
}

export const ProjectList = ({ projects }: ProjectListProps) => {
  const [selectedCategory, setSelectedCategory] = useState('')
  const [selectedTime, setSelectedTime] = useState('')
  const [selectedType, setSelectedType] = useState('')

  const sortedProjects = useMemo(
    () =>
      sortProjectsByState(
        projects,
        selectedCategory,
        selectedTime,
        selectedType
      ),
    [projects, selectedCategory, selectedTime, selectedType]
  )

  const { times, categories, types } = useMemo(
    () =>
      generateSelects(projects, selectedCategory, selectedTime, selectedType),
    [projects, selectedCategory, selectedTime, selectedType]
  )

  const clearSelections = () => {
    setSelectedCategory('')
    setSelectedTime('')
    setSelectedType('')
  }

  const ongoingProjects = sortedProjects.filter(
    project => project.metadata.compiledSummary?.ongoing
  )

  const finishedProjects = sortedProjects.filter(
    project => !project.metadata.compiledSummary?.ongoing
  )

  return (
    <>
      <div className="flex flex-col gap-2">
        <div className="flex gap-2">
          <div className="flex flex-col w-full gap-2 md:flex-row">
            <Select
              categories={categories}
              selected={selectedCategory}
              htmlFor="category"
              label="category"
              id="category"
              name="category"
              onChange={setSelectedCategory}
            />
            <Select
              categories={times}
              selected={selectedTime}
              htmlFor="time"
              label="time"
              id="time"
              name="time"
              onChange={setSelectedTime}
            />
            <Select
              categories={types}
              selected={selectedType}
              htmlFor="type"
              label="type"
              id="type"
              name="type"
              onChange={setSelectedType}
            />
          </div>
        </div>
        <button
          className="py-1 bg-black border-2 border-gray-700 cursor-pointer"
          onClick={() => clearSelections()}
        >
          clear selections
        </button>
      </div>
      {ongoingProjects.length > 0 && (
        <div className="flex flex-col gap-8">
          <H3>Ongoing</H3>
          <div className="flex flex-col gap-16">
            {ongoingProjects.map(({ slug, metadata, hasContent }) => (
              <Item
                slug={slug}
                key={slug}
                metadata={metadata}
                hasContent={hasContent}
              />
            ))}
          </div>
        </div>
      )}

      {finishedProjects.length !== 0 && (
        <div className="flex flex-col gap-8">
          <H3>Finished</H3>
          <div className="flex flex-col gap-16">
            {finishedProjects.map(({ slug, metadata, hasContent }) => (
              <Item
                slug={slug}
                key={slug}
                metadata={metadata}
                hasContent={hasContent}
              />
            ))}
          </div>
        </div>
      )}
    </>
  )
}
