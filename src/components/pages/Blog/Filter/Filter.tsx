import React, { FC } from 'react'
import { Root as ToggleGroup } from '@radix-ui/react-toggle-group'
import { FilterItem } from './FilterItem'
import { RandomColors } from 'src/helpers/colors'

type FilterProps = {
  order: string
  handleOrder: (value: string) => void
  colors: RandomColors
}

export const Filter: FC<FilterProps> = ({ order, handleOrder, colors }) => {
  const ordering = [
    {
      value: 'descending',
      label: 'Latest',
    },
    {
      value: 'ascending',
      label: 'Oldest',
    },
  ]

  return (
    <div className="flex">
      {/* Ordering */}
      <ToggleGroup
        defaultValue={order}
        onValueChange={handleOrder}
        type="single"
        className={`flex gap-2 p-0 bg-opacity-50 border-2 ${colors.borderColor}`}
      >
        {ordering.map(({ label, value }) => (
          <FilterItem
            key={value}
            label={label}
            value={value}
            checked={value === order}
            colors={colors}
          />
        ))}
      </ToggleGroup>

      {/* TODO: Tags */}
    </div>
  )
}
