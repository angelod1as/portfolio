import { useColorContext } from '#components/templates/Providers/ColorProvider'
import React, { ReactNode } from 'react'
import { Link } from '../Links'
import { Tag } from '../Tag'

type ContentItemProps = {
  url: string
  title?: ReactNode
  description?: string
  date?: string
  tags?: string[]
  inner?: boolean
}

export const ContentItem = ({
  title,
  url,
  description,
  date,
  tags,
  inner,
}: ContentItemProps) => {
  const { colors } = useColorContext()

  return (
    <li className="relative pl-6">
      <div className={`absolute top-0 left-0 w-2 h-full ${colors.bgColor}`} />
      {title && (
        <Link inner={inner} href={url}>
          {title}
        </Link>
      )}
      <p className="m-0 mt-2">
        {description ?? ''}
        {date && (
          <span className="ml-2">
            <small className="text-gray-500">{date}</small>
          </span>
        )}
      </p>
      {tags?.length && (
        <div className="flex gap-2 mt-2">
          {tags.map(tag => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
      )}
    </li>
  )
}
