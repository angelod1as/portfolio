import { Item } from '@radix-ui/react-toggle-group'
import React, { FC } from 'react'
import style from './FilterItem.module.sass'

type FilterItemProps = {
  label: string
  value: string
  checked: boolean
}

export const FilterItem: FC<FilterItemProps> = ({ label, value, checked }) => {
  return (
    <Item
      key={value}
      value={value}
      className={checked ? style.checked : style.unchecked}
    >
      {label}
    </Item>
  )
}
