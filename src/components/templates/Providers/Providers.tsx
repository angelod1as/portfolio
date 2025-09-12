import { FCC } from '#types/types'
import { MDXProvider } from '@mdx-js/react'
import React from 'react'
import { Template } from '../Wrappers/Template'

const components = {}

type ProvidersType = {
  slug?: string
}

export const Providers: FCC<ProvidersType> = ({ children, slug }) => {
  return (
    <MDXProvider components={components}>
      <Template slug={slug}>{children}</Template>
    </MDXProvider>
  )
}
