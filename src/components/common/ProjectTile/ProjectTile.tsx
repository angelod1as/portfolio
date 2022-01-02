import { ProjectTileProps } from '#types/types'
import Image from 'next/image'
import React from 'react'
import { Link } from '../Links'

export const ProjectTile = ({
  date,
  desc,
  image,
  title,
  slug,
}: ProjectTileProps) => {
  return (
    <Link href={`/projects/${slug}`} block inner>
      <Image src={image} alt="" width={300} height={300} />
      <h3>{title}</h3>
      <p className="not-italic">
        {desc} <span className="text-sm opacity-60">{date}</span>
      </p>
    </Link>
  )
}
