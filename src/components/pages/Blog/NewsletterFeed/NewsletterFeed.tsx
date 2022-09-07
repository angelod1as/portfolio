import { ContentItem } from '#components/common/ContentItem'
import { Strong } from '#components/common/Strong'
import { useColorContext } from '#components/templates/Providers/ColorProvider'
import React from 'react'
import { TimestampToDate } from 'src/helpers/TimestampToDate'
import { useRSS } from './useRSS'

export const NewsletterFeed = () => {
  const { colors } = useColorContext()
  const { feed, isLoading, isError } = useRSS()

  if (isLoading) return <div>Loading</div>
  if (isError || !feed) return <div>Error</div>
  return (
    <ul className="flex flex-col gap-16">
      <h2 className="h2-as-h1">
        Latest <Strong color={colors.textColor}>news</Strong>
      </h2>

      {feed.map(({ title, link, content, isoDate }) => {
        const date = TimestampToDate(new Date(isoDate).getTime())
        if (!link || !title || !content) return null

        return (
          <ContentItem
            key={link}
            url={link}
            date={date}
            description={content}
            title={<h2>{title}</h2>}
          />
        )
      })}
    </ul>
  )
}
