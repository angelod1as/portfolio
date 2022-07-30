import { Link } from '#components/common/Links'
import { useColorContext } from '#components/templates/Providers/ColorProvider'
import { Metadata } from '#types/types'
import React from 'react'
import { TimestampToDate } from 'src/helpers/TimestampToDate'
import { generateTitle } from './generateTitle'

type BlogItemProps = {
  metadata: Partial<Metadata>
  slug: string
}

export const BlogItem = ({ slug, metadata }: BlogItemProps) => {
  const { colors } = useColorContext()

  return (
    <li key={slug} className="relative pl-6">
      <div className={`absolute top-0 left-0 w-2 h-full ${colors.bgColor}`} />
      {metadata?.compiledTitle && (
        <Link inner href={`/blog/${slug}`}>
          {generateTitle(metadata.compiledTitle, colors)}
        </Link>
      )}
      <p className="mb-0">
        {metadata.description ?? ''}
        {metadata.createdAt && (
          <span className="ml-2">
            <small className="opacity-80">
              {TimestampToDate(metadata.createdAt)}
            </small>
          </span>
        )}
      </p>
    </li>
  )
}
