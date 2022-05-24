import { FCC } from '#types/types'
import React from 'react'
import { Subscribe } from '../Subscribe'
import { Contact } from './Contact'

export const Footer: FCC = () => {
  return (
    <footer className="flex flex-col max-w-xl gap-20 px-4 py-10 m-auto">
      <Subscribe />
      <Contact />
    </footer>
  )
}
