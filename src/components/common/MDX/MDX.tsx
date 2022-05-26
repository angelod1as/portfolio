import { useColorContext } from '#components/templates/Providers/ColorProvider'
import { DefaultMetadata, FCC, MDXProps } from '#types/types'
import { MDXRemote } from 'next-mdx-remote'
import React, { ReactNode } from 'react'
import { TimestampToDate } from 'src/helpers/TimestampToDate'
import { globalComponents } from './globalComponents'
import styles from './MDX.module.sass'
import { parseComponents } from './parseComponents'

type Props = {
  mdx: MDXProps
  blogPost?: boolean
  metadata: DefaultMetadata | undefined
}

export const MDX: FCC<Props> = ({ mdx, blogPost, metadata }) => {
  const { colors } = useColorContext()
  const { components, ...rest } = mdx

  const mergedComponents = {
    ...components,
    ...(globalComponents() as unknown as Record<string, ReactNode>),
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
