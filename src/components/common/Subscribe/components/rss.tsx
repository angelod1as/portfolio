import { Link } from '#components/common/Links'
import React from 'react'

export const Rss = () => {
  return (
    <p className="text-sm text-gray-400">
      This blog has an exclusive{' '}
      <Link href="/rss/feed.xml" inner>
        RSS feed
      </Link>
    </p>
  )
}
