import { DefaultMetadata, MDXProps } from '#types/types'
import { MDXRemote } from 'next-mdx-remote'
import React from 'react'
import { RandomColors } from 'src/helpers/colors'
import { TimestampToDate } from 'src/helpers/TimestampToDate'
import { globalComponents } from './globalComponents'
import styles from './MDX.module.sass'
import { parseComponents } from './parseComponents'

type Props = {
  mdx: MDXProps
  blogPost?: boolean
  colors: RandomColors
  metadata: DefaultMetadata | undefined
}

export const MDX = ({ mdx, colors, blogPost, metadata }: Props) => {
  const { components, ...rest } = mdx

  const mergedComponents = {
    ...components,
    ...globalComponents({ colors }),
  }

  const parsedComponents = parseComponents({
    components: mergedComponents,
    colors,
  })

  // TODO: `pre` and `code` are not wrapping.

  return (
    <div className={`${styles.container} ${blogPost ? styles.blogPost : ''}`}>
      <MDXRemote {...rest} components={parsedComponents} />
      {blogPost && metadata?.createdAt && (
        <p className="mt-8 text-sm opacity-70">
          Published at {TimestampToDate(metadata.createdAt)}. Share abundantly.
        </p>
      )}
    </div>
  )
}
