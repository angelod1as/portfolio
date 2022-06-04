import { useColorContext } from '#components/templates/Providers/ColorProvider'
import { DefaultMetadata, FCC, MDXProps } from '#types/types'
import { MDXRemote } from 'next-mdx-remote'
import React from 'react'
import { TimestampToDate } from 'src/helpers/TimestampToDate'
import { parseComponents } from './parseComponents'

type Props = {
  mdx: MDXProps
  blogPost?: boolean
  metadata: DefaultMetadata | undefined
}

export const MDX: FCC<Props> = ({ mdx, blogPost, metadata }) => {
  const { colors } = useColorContext()
  const { components, ...rest } = mdx

  const parsedComponents = parseComponents({
    components,
    colors,
  })

  return (
    <div className={`.mdx-container ${blogPost ? '.blogPost' : ''}`}>
      <MDXRemote {...rest} components={parsedComponents} />
      {blogPost && metadata?.createdAt && (
        <p className="mt-8 text-sm opacity-70">
          Published at {TimestampToDate(metadata.createdAt)}. Share abundantly.
        </p>
      )}
    </div>
  )
}
