import { FCC, Metadata } from '#types/types'
import React from 'react'

type ProjectWrapperProps = {
  metadata: Metadata
}

export const ProjectWrapper: FCC<ProjectWrapperProps> = ({
  children,
  metadata,
}) => {
  const { createdAt, timeToRead, wordCount, tags } = metadata

  return <>{children}</>
}
