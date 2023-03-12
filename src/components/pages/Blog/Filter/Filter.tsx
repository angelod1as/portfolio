import React, { FC } from 'react'
import { Root as ToggleGroup } from '@radix-ui/react-toggle-group'
import { FilterItem } from './FilterItem'
import { useColorContext } from '#components/templates/Providers/ColorProvider'

type FilterProps = {
  order: string
  handleOrder: (value: string) => void
}

export const Filter: FC<FilterProps> = ({ order, handleOrder }) => {
  const { colors } = useColorContext()

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
        className={`flex gap-2 p-0 bg-opacity-50 border-0 ${colors.borderColor}`}
      >
        {ordering.map(({ label, value }) => (
          <FilterItem
            key={value}
            label={label}
            value={value}
            checked={value === order}
          />
        ))}
      </ToggleGroup>

      {/* TODO: Tags */}
    </div>
  )
}
