import { useColorContext } from '#components/templates/Providers/ColorProvider'
import { Metadata, FCC, MDXProps } from '#types/types'
import { MDXRemote } from 'next-mdx-remote'
import React from 'react'
import { TimestampToDate } from 'src/helpers/TimestampToDate'
import { parseComponents } from './parseComponents'
import styles from './MDX.module.sass'

type Props = {
  mdx: MDXProps
  blogPost?: boolean
  metadata: Metadata | undefined
}

export const MDX: FCC<Props> = ({ mdx, blogPost, metadata }) => {
  const { colors } = useColorContext()
  const { components, ...rest } = mdx

  const [bodyComponents, titleComponents] = parseComponents({
    components,
    colors,
  })

  if (blogPost && metadata) {
    const { compiledTitle, createdAt, timeToRead, wordCount } = metadata
    return (
      <div className={`${styles.container} ${styles.blogPost}`}>
        {compiledTitle && (
          <MDXRemote
            compiledSource={compiledTitle}
            components={titleComponents}
          />
        )}
        {createdAt && (
          <p className="flex gap-4 mb-8 text-sm opacity-70">
            <span>Published at {TimestampToDate(createdAt)}</span>
            <span>±{timeToRead} minute read</span>
            <span>{wordCount} words</span>
          </p>
        )}
        <MDXRemote {...rest} components={bodyComponents} />
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
