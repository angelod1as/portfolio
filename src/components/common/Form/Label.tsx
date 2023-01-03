import { FCC } from '#types/types'
import React, { LabelHTMLAttributes } from 'react'

type LabelProps = LabelHTMLAttributes<HTMLLabelElement>

export const Label: FCC<LabelProps> = ({ className, htmlFor, ...props }) => {
  return (
    <label
      {...props}
      htmlFor={htmlFor}
      className={`${className ?? 'flex-1 block w-full'}`}
    />
  )
}
