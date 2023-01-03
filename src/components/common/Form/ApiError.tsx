import { ErrorProps } from '#types/types'
import React, { FC } from 'react'

type ApiErrorProps = {
  errors: ErrorProps[]
}

export const ApiError: FC<ApiErrorProps> = ({ errors }) => {
  if (!errors || errors.length === 0) return null

  return (
    <div className="w-full font-bold text-red">
      <p className="text-sm font-bold">Something went wrong.</p>
      <p className="text-sm">Errors:</p>
      <ul className="text-sm">
        {errors.map(({ msg }) => {
          return <li key={msg}>{msg}</li>
        })}
      </ul>
    </div>
  )
}
