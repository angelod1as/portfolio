import { Footer } from '#components/common/Footer'
import { Header } from '#components/common/Header'
import { MDXProvider } from '@mdx-js/react'
import React, { FC } from 'react'

const components = {}

export const Providers: FC = ({ children }) => {
  return (
    <MDXProvider components={components}>
      <div className="relative min-h-screen text-white bg-black ">
        <Header />
        <div className="flex flex-col max-w-xl gap-16 px-4 pt-32 pb-16 m-auto">
          {children}
        </div>
        <Footer />
      </div>
    </MDXProvider>
  )
}
