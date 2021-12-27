import { Footer } from '#components/common/Footer'
import { Header } from '#components/common/Header'
import React, { FC } from 'react'

export const Providers: FC = ({ children }) => {
  return (
    <div className="relative min-h-screen text-white bg-black">
      <Header isHome={false} />
      <div className="max-w-xl m-auto">{children}</div>
      <Footer />
    </div>
  )
}
