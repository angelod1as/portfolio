import { MDX } from '#components/common/MDX'
import { NewHead } from '#components/common/NewHead'
import { PageProps } from '#pages/[slug]'
import React, { FC } from 'react'

export const Page: FC<PageProps> = ({ colors, content }) => {
  const { compiledSource, metadata } = content
  return (
    <>
      <NewHead title={metadata?.title} />
      <MDX mdx={{ compiledSource }} colors={colors} />
    </>
  )
}
