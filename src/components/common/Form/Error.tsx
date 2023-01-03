import { FCC } from '#types/types'
import { ErrorMessage, ErrorMessageProps } from 'formik'
import React from 'react'

type ErrorProps = ErrorMessageProps

export const Error: FCC<ErrorProps> = ({ name, ...props }) => {
  return (
    <ErrorMessage
      {...props}
      name={name}
      component="div"
      className="w-full text-sm font-bold text-red"
    />
  )
}
