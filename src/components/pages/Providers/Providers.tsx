import { Footer } from '#components/common/Footer'
import { Header } from '#components/common/Header'
import { FCC } from '#types/types'
import { MDXProvider } from '@mdx-js/react'
import React from 'react'
import { RandomColors } from 'src/helpers/colors'
import { ColorContextProvider } from './ColorProvider'

const components = {}

type ProvidersType = {
  colors: RandomColors
}

export const Providers: FCC<ProvidersType> = ({ children, colors }) => {
  return (
    <ColorContextProvider value={{ colors }}>
      <MDXProvider components={components}>
        <div className="relative min-h-screen text-white bg-black ">
          <Header />
          <div className="flex flex-col max-w-xl gap-16 px-4 pt-32 pb-16 m-auto md:pt-40">
            {children}
          </div>
          <Footer />
        </div>
      </MDXProvider>
    </ColorContextProvider>
  )
}
