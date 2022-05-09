import React, { FC, ReactNode } from 'react'

export const HomeSection: FC<{ children: ReactNode }> = ({ children }) => {
  return <div className="flex flex-col gap-14">{children}</div>
}
