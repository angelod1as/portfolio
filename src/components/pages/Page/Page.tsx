import { MDX } from '#components/common/MDX'
import { NewHead } from '#components/common/NewHead'
import { PageProps } from '#pages/[slug]'
import React, { FC } from 'react'
import { removeSymbolsFromString } from 'src/helpers/removeSymbolsFromString'

export const Page: FC<PageProps> = ({ content }) => {
  const { compiledSource, metadata } = content
  return (
    <>
      {metadata?.title && (
        <NewHead title={removeSymbolsFromString(metadata.title)} />
      )}
      <MDX mdx={{ compiledSource }} metadata={metadata} />
    </>
  )
}
