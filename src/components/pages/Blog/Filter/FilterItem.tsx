import { Item } from '@radix-ui/react-toggle-group'
import React, { FC } from 'react'
import style from './FilterItem.module.sass'

type FilterItemProps = {
  label: string
  value: string
  checked: boolean
}

export const FilterItem: FC<FilterItemProps> = ({ label, value, checked }) => {
  const checkedStyle = checked ? style.checked : style.unchecked
  const bgStyle = checked ? 'bg-highlight' : 'bg-transparent'
  return (
    <Item
      key={value}
      value={value}
      className={`py-1 px-2 ${checkedStyle} ${bgStyle}`}
    >
      <p className="m-0 transition-all">{label}</p>
    </Item>
  )
}
