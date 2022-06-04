import { MDX } from '#components/common/MDX'
import { NewHead } from '#components/common/NewHead'
import { BlogPostProps } from '#pages/blog/[slug]'
import { FCC } from '#types/types'
import React from 'react'

export const Post: FCC<BlogPostProps> = ({ content }) => {
  const { compiledSource, metadata, directory } = content
  return (
    <>
      <NewHead title={metadata?.title} />
      <MDX
        blogPost
        mdx={{ compiledSource }}
        metadata={metadata}
        directory={directory}
      />
    </>
  )
}
