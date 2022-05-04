import { MDX } from '#components/common/MDX'
import { NewHead } from '#components/common/NewHead'
import { BlogPostProps } from '#pages/blog/[slug]'
import React, { FC } from 'react'
import { useColors } from 'src/hooks/useColors'

export const Post: FC<BlogPostProps> = ({ compiledSource, metadata }) => {
  const colors = useColors(metadata?.color)

  return (
    <>
      <NewHead title={metadata?.title} />
      <MDX
        blogPost
        mdx={{ compiledSource }}
        textColor={colors.textColor}
        bgColor={colors.bgColor}
      />
    </>
  )
}
