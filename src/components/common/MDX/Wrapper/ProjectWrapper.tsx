import { FCC, Metadata } from '#types/types'
import React from 'react'
import { TimestampToDate } from 'src/helpers/TimestampToDate'

type ProjectWrapperProps = {
  metadata: Metadata
}

export const ProjectWrapper: FCC<ProjectWrapperProps> = ({
  children,
  metadata,
}) => {
  const { createdAt, timeToRead, wordCount, tags } = metadata

  return (
    <>
      <p className="flex flex-wrap gap-4 mb-8 text-xs text-gray-400">
        {!!createdAt && <span>Published at {TimestampToDate(createdAt)}</span>}
        <span>±{timeToRead} minute read</span>
        <span>{wordCount} words</span>
        {tags?.length && <span>Tags: {tags.join(', ')}</span>}
      </p>

      {children}

      <div className="mt-8 text-gray-400">
        <p className="text-sm">Thanks for reading.</p>
        <p className="text-sm">
          Even though this blog has no comments section, I'd love to hear your
          thoughts about this article.
        </p>
        <p className="text-sm">
          Tag me on <a href="https://twitter.com/oicronofobico">Twitter</a>,{' '}
          <a href="https://instagram.com/oicronofobico">Instagram</a> or{' '}
          <a href="https://t.me/oicronofobico">Telegram</a> using @oicronofobico
          and let's get this conversation started
        </p>
      </div>
    </>
  )
}
