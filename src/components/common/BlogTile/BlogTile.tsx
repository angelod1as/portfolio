import { BlogTileProps } from '#types/types'
import Image from 'next/image'
import React from 'react'
import { Link } from '../Links'

export const BlogTile = ({
  createdAt,
  desc,
  image,
  title,
  slug,
}: BlogTileProps) => {
  return (
    <Link href={`/blog/${slug}`} block inner>
      <Image src={image} alt="" width={300} height={300} />
      <h3>{title}</h3>
      <p className="not-italic">
        {desc} <span className="text-sm opacity-60">{createdAt}</span>
      </p>
    </Link>
  )
}
