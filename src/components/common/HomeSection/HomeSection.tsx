import { FCC } from '#types/types'
import React from 'react'

export const HomeSection: FCC = ({ children }) => {
  return <div className="flex flex-col gap-14">{children}</div>
}
