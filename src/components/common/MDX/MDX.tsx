import { useColorContext } from '#components/templates/Providers/ColorProvider'
import { Metadata, FCC, MDXProps } from '#types/types'
import { MDXRemote } from 'next-mdx-remote'
import React from 'react'
import { parseComponents } from './parseComponents'
import { PageType } from '#lib/common/fetchAllPages'
import { Wrapper } from './Wrapper/Wrapper'

type Props = {
  mdx: MDXProps
  metadata?: Metadata
  type: PageType
}

export const MDX: FCC<Props> = ({ mdx, type, metadata }) => {
  const { colors } = useColorContext()
  const { components, ...rest } = mdx

  const [bodyComponents, titleComponents] = parseComponents({
    components,
    colors,
  })

  if (metadata) {
    return (
      <Wrapper
        metadata={metadata}
        titleComponents={titleComponents}
        type={type}
      >
        <MDXRemote {...rest} components={bodyComponents} />
      </Wrapper>
    )
  }

  return <MDXRemote {...rest} components={bodyComponents} />
}
