import { FCC } from '#types/types'
import React from 'react'

export const Tag: FCC = ({ children }) => {
  return (
    <span className="px-2 py-1 text-xs text-gray-500 border-2 border-gray-500">
      {children}
    </span>
  )
}
