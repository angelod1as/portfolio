import { ProjectTileProps } from '#types/types'
import React from 'react'

export const ProjectTile = ({ date, desc, image, title }: ProjectTileProps) => {
  return (
    <div>
      <h3>{title}</h3>
      <p>
        {desc} <span>{date}</span>
      </p>
    </div>
  )
}
