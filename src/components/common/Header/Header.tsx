import React, { FC } from 'react'
import { InnerLink } from '../InnerLink/InnerLink'
import style from './Header.module.css'

type Props = {
  isHome: boolean
}

export const Header: FC<Props> = ({ isHome }) => {
  return (
    <div
      className={`fixed top-0 left-0 flex justify-between w-full px-4 py-2 bg-black z-50 ${style.shadow}`}
    >
      <div className="flex gap-4">
        <InnerLink href="blog">blog</InnerLink>
        <InnerLink href="portfolio">portfolio</InnerLink>
        <InnerLink href="podcast">podcast</InnerLink>
      </div>

      {isHome ? (
        <div />
      ) : (
        <h2 className="text-base">I'm angelo and I do stuff</h2>
      )}
    </div>
  )
}
