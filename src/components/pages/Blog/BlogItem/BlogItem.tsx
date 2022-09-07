import { ContentItem } from '#components/common/ContentItem'
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
    <ContentItem
      inner
      url={`/blog/${slug}`}
      date={
        metadata.createdAt ? TimestampToDate(metadata.createdAt) : undefined
      }
      description={metadata.description}
      tags={metadata.tags}
      title={
        metadata.compiledTitle
          ? generateTitle(metadata.compiledTitle, colors)
          : undefined
      }
    />
  )
}
