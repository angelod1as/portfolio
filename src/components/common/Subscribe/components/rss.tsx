import { Link } from '#components/common/Links'
import React from 'react'

export const Rss = () => {
  return (
    <p className="text-sm text-gray-400">
      If you prefer to subscribe just to the blog, I recommend getting an RSS
      reader like <Link href="https://newsblur.com/">NewsBlur</Link> and
      subscribing to my{' '}
      <Link href="/rss/feed.xml" inner>
        RSS feed
      </Link>
      .
    </p>
  )
}
