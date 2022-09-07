import { ContentItem } from '#components/common/ContentItem'
import { Link } from '#components/common/Links'
import { Loader } from '#components/common/Loader'
import { Strong } from '#components/common/Strong'
import { useColorContext } from '#components/templates/Providers/ColorProvider'
import React from 'react'
import { TimestampToDate } from 'src/helpers/TimestampToDate'
import { useRSS } from './useRSS'

export const NewsletterFeed = () => {
  const { colors } = useColorContext()
  const { feed, isLoading, isError } = useRSS()

  if (isLoading) return <Loader />
  if (isError || !feed) {
    return (
      <div className="text-red">
        <p>
          There should be a nice newsletter feed here, but apparently some weird
          error happened.
        </p>
        <p>
          Please try again later or{' '}
          <Link href="https://angelodias.substack.com">
            go straight to the newsletter homepage
          </Link>
        </p>
      </div>
    )
  }

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
