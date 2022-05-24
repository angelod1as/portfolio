import { FCC } from '#types/types'
import React from 'react'
import { Subscribe } from '../Subscribe'
import { Contact } from './Contact'

type FooterProps = {
  slug?: string
}

export const Footer: FCC<FooterProps> = ({ slug }) => {
  return (
    <footer className="flex flex-col max-w-xl gap-20 px-4 py-10 m-auto">
      {slug !== 'blog' && <Subscribe />}
      <Contact />
    </footer>
  )
}
