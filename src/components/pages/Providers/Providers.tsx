import { Footer } from '#components/common/Footer'
import { Header } from '#components/common/Header'
import { MDXProvider } from '@mdx-js/react'
import React, { FC, ReactNode } from 'react'
import { RandomColors } from 'src/helpers/colors'

const components = {}

type ProvidersType = {
  colors: RandomColors
  children: ReactNode
}

export const Providers: FC<ProvidersType> = ({ children, colors }) => {
  return (
    <MDXProvider components={components}>
      <div className="relative min-h-screen text-white bg-black ">
        <Header colors={colors} />
        <div className="flex flex-col max-w-xl gap-16 px-4 pt-32 pb-16 m-auto md:pt-40">
          {children}
        </div>
        <Footer colors={colors} />
      </div>
    </MDXProvider>
  )
}
