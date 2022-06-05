import { MDX } from '#components/common/MDX'
import { NewHead } from '#components/common/NewHead'
import { BlogPostProps } from '#pages/blog/[slug]'
import { FCC } from '#types/types'
import React from 'react'
import { removeSymbolsFromString } from 'src/helpers/removeSymbolsFromString'

export const Post: FCC<BlogPostProps> = ({ content }) => {
  const { compiledSource, metadata } = content
  return (
    <>
      {metadata?.title && (
        <NewHead title={removeSymbolsFromString(metadata.title)} />
      )}
      <MDX blogPost mdx={{ compiledSource }} metadata={metadata} />
    </>
  )
}
