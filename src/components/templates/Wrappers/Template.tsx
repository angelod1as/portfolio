import { Footer } from '#components/common/Footer'
import { Header } from '#components/common/Header'
import ProgressBar from '#components/common/ProgressBar/ProgressBar'
import { FCC } from '#types/types'
import React from 'react'

type TemplateProps = {
  slug?: string
}

export const Template: FCC<TemplateProps> = ({ children, slug }) => {
  return (
    <div className="relative min-h-screen text-white bg-black ">
      <Header />
      <div className="flex flex-col max-w-xl gap-16 px-4 pt-32 pb-16 m-auto md:pt-40">
        {children}
      </div>
      <Footer slug={slug} />
      {slug !== 'homepage' && <ProgressBar />}
    </div>
  )
}
