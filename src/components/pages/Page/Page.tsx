import { MDX } from '#components/common/MDX'
import { NewHead } from '#components/common/NewHead'
import { PageProps } from '#pages/[slug]'
import React, { FC } from 'react'

export const Page: FC<PageProps> = ({ content }) => {
  const { compiledSource, metadata, directory } = content
  return (
    <>
      <NewHead title={metadata?.title} />
      <MDX mdx={{ compiledSource }} metadata={metadata} directory={directory} />
    </>
  )
}
