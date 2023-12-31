import { FCC } from '#types/types'
import React from 'react'

type SelectProps = {
  htmlFor: string
  label: string
  onChange: (value: string) => void
  name: string
  id: string
  categories: string[] | number[]
  selected: string
}

export const Select: FCC<SelectProps> = ({
  htmlFor,
  label,
  onChange,
  name,
  id,
  categories,
  selected,
}) => {
  return (
    <div className="flex w-full gap-2 md:flex-col">
      <label htmlFor={htmlFor}>{label}</label>
      <select
        name={name}
        id={id}
        onChange={e => onChange(e.target.value)}
        value={selected}
        className="w-full"
      >
        <option value="">all</option>
        {categories.map(category => (
          <option value={category} key={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  )
}
