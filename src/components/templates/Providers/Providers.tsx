import { Footer } from '#components/common/Footer'
import { Header } from '#components/common/Header'
import ProgressBar from '#components/common/ProgressBar/ProgressBar'
import { FCC } from '#types/types'
import { MDXProvider } from '@mdx-js/react'
import React from 'react'
import { RandomColors } from 'src/helpers/colors'
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
        <div className="relative min-h-screen text-white bg-black ">
          <Header />
          <div className="flex flex-col max-w-xl gap-16 px-4 pt-32 pb-16 m-auto md:pt-40">
            {children}
          </div>
          <Footer slug={slug} />
          <ProgressBar />
        </div>
      </MDXProvider>
    </ColorContextProvider>
  )
}
