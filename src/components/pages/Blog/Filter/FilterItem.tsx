import { Item } from '@radix-ui/react-toggle-group'
import React, { FC } from 'react'
import { RandomColors } from 'src/helpers/colors'
import style from './FilterItem.module.sass'

type FilterItemProps = {
  label: string
  value: string
  checked: boolean
  colors: RandomColors
}

export const FilterItem: FC<FilterItemProps> = ({
  label,
  value,
  checked,
  colors,
}) => {
  const checkedStyle = checked ? style.checked : style.unchecked
  const bgStyle = checked ? colors.bgColor : 'bg-transparent'
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
