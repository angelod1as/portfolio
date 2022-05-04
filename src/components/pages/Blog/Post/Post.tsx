import { MDX } from '#components/common/MDX'
import { NewHead } from '#components/common/NewHead'
import { BlogPostProps } from '#pages/blog/[slug]'
import React, { FC } from 'react'

export const Post: FC<BlogPostProps> = ({ content, colors }) => {
  const { compiledSource, metadata } = content
  return (
    <>
      <NewHead title={metadata?.title} />
      <MDX blogPost mdx={{ compiledSource }} colors={colors} />
    </>
  )
}
