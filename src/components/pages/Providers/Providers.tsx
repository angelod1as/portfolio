import { Footer } from '#components/common/Footer'
import { Header } from '#components/common/Header'
import React, { FC } from 'react'

export const Providers: FC = ({ children }) => {
  return (
    <div className="relative min-h-screen text-white bg-black min-w-screen">
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  )
}
