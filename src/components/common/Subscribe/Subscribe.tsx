import React from 'react'
import { textColor } from 'src/helpers/colors'

export const Subscribe = () => {
  return (
    <form method="post" action="https://blogtrottr.com">
      <h2 className="mb-10 h2-as-h1">
        Subscribe to my <span className={textColor[0]}>blog</span>
      </h2>
      <div className="flex items-center gap-4 mb-8">
        <label htmlFor="btr_email" className="whitespace-nowrap">
          Your email:
        </label>
        <input
          type="text"
          name="btr_email"
          id="btr_email"
          placeholder="mrspock@enterprise.com"
          className="w-full"
        />

        <input
          type="hidden"
          name="btr_url"
          value="https://www.angelodias.com.br/rss/feed.xml"
        />
        <input type="hidden" name="schedule_type" value="0" />
        <input type="submit" value="Follow" />
      </div>
      <p>
        PS: I use a free service called{' '}
        <a href="https://blogtrottr.com/">blogtrottr</a> to manage blog-to-email
        posts instead of a full-blown newsletter service. It's free (for you and
        for me) and very configurable.
      </p>
    </form>
  )
}
