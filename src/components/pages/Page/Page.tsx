import { MDX } from '#components/common/MDX'
import { NewHead } from '#components/common/NewHead'
import { PageProps } from '#pages/[slug]'
import React, { FC } from 'react'
import { useColors } from 'src/hooks/useColors'

export const Page: FC<Omit<PageProps, 'slug'>> = ({
  compiledSource,
  metadata,
}) => {
  const colors = useColors(metadata?.color)

  return (
    <>
      <NewHead title={metadata?.title} />
      <MDX
        mdx={{ compiledSource }}
        textColor={colors.textColor}
        bgColor={colors.bgColor}
      />
    </>
  )
}
