import { ContentItem } from '#components/common/ContentItem'
import { useColorContext } from '#components/templates/Providers/ColorProvider'
import React, { useState } from 'react'
import { TimestampToDate } from 'src/helpers/TimestampToDate'
import { PostProps } from '../Blog'
import { generateTitle } from './generateTitle'
import { Filter } from '../Filter'

export type BlogListProps = {
  posts: PostProps
}

export const BlogList = ({ posts }: BlogListProps) => {
  const { colors } = useColorContext()
  const [order, setOrder] = useState<string>('descending')

  const handleOrder = (value: string) => {
    if (value) {
      setOrder(value)
    }
  }

  const blogPosts = posts.sort((a, b) => {
    if (!a.metadata.createdAt || !b.metadata.createdAt) {
      return 0
    }

    if (order === 'ascending') {
      return a.metadata.createdAt - b.metadata.createdAt
    } else {
      return b.metadata.createdAt - a.metadata.createdAt
    }
  })

  return (
    <div>
      <h2 className="mb-10 h2-as-h1">Blog</h2>
      <div className="flex flex-col gap-12">
        <Filter order={order} handleOrder={handleOrder} />
        <ul className="flex flex-col gap-16">
          {blogPosts.map(({ slug, metadata }) => {
            return (
              <ContentItem
                key={slug}
                inner
                url={`/blog/${slug}`}
                date={
                  metadata.createdAt
                    ? TimestampToDate(metadata.createdAt)
                    : undefined
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
          })}
        </ul>
      </div>
    </div>
  )
}
