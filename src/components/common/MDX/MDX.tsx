import { useColorContext } from '#components/templates/Providers/ColorProvider'
import { Metadata, FCC, MDXProps } from '#types/types'
import { MDXRemote } from 'next-mdx-remote'
import React from 'react'
import { TimestampToDate } from 'src/helpers/TimestampToDate'
import { parseComponents } from './parseComponents'
import styles from './MDX.module.sass'
import { PageType } from '#lib/common/fetchAllPages'

type Props = {
  mdx: MDXProps
  metadata?: Metadata
  type: PageType
}

export const MDX: FCC<Props> = ({ mdx, type, metadata }) => {
  const { colors } = useColorContext()
  const { components, ...rest } = mdx

  const [bodyComponents, titleComponents] = parseComponents({
    components,
    colors,
  })

  if (type === 'blog' && metadata) {
    const { compiledTitle, createdAt, timeToRead, wordCount, tags } = metadata
    return (
      <div className={`${styles.container} ${styles.blogPost}`}>
        {compiledTitle && (
          <MDXRemote
            compiledSource={compiledTitle}
            components={titleComponents}
          />
        )}
        <p className="mb-8 text-xl text-gray-400">{metadata.description}</p>
        <p className="flex flex-wrap gap-4 mb-8 text-xs text-gray-400">
          {!!createdAt && (
            <span>Published at {TimestampToDate(createdAt)}</span>
          )}
          <span>±{timeToRead} minute read</span>
          <span>{wordCount} words</span>
          {tags?.length && <span>Tags: {tags.join(', ')}</span>}
        </p>
        <MDXRemote {...rest} components={bodyComponents} />
        <div className="mt-8 text-gray-400">
          <p className="text-sm">Thanks for reading.</p>
          <p className="text-sm">
            Even though this blog has no comments section, I'd love to hear your
            thoughts about this article.
          </p>
          <p className="text-sm">
            Tag me on <a href="https://twitter.com/oicronofobico">Twitter</a>,{' '}
            <a href="https://instagram.com/oicronofobico">Instagram</a> or{' '}
            <a href="https://t.me/oicronofobico">Telegram</a> using
            @oicronofobico and let's get this conversation started
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className={styles.container}>
      {metadata?.compiledTitle && (
        <MDXRemote
          compiledSource={metadata.compiledTitle}
          components={titleComponents}
        />
      )}
      <MDXRemote {...rest} components={bodyComponents} />
    </div>
  )
}
