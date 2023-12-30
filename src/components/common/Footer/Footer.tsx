import { FCC } from '#types/types'
import React from 'react'
import { Contact } from './Contact'

type FooterProps = {
  slug?: string
}

export const Footer: FCC<FooterProps> = () => {
  return (
    <footer className="flex flex-col max-w-xl gap-20 px-4 py-10 m-auto">
      {/* TODO: Turn on Newsletter again */}
      {/* {slug !== 'blog' && <Subscribe />} */}
      <Contact />
    </footer>
  )
}
