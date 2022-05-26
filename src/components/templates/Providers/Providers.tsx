import { FCC } from '#types/types'
import { MDXProvider } from '@mdx-js/react'
import React from 'react'
import { RandomColors } from 'src/helpers/colors'
import { Template } from '../Wrappers/Template'
import { ColorContextProvider } from './ColorProvider'

const components = {}

type ProvidersType = {
  colors: RandomColors
  slug?: string
}

export const Providers: FCC<ProvidersType> = ({ children, colors, slug }) => {
  return (
    <ColorContextProvider value={{ colors }}>
      <MDXProvider components={components}>
        <Template slug={slug}>{children}</Template>
      </MDXProvider>
    </ColorContextProvider>
  )
}
