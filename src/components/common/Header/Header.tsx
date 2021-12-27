import Link from 'next/link'
import React, { FC } from 'react'
import style from './Header.module.css'

type Props = {
  isHome: boolean
}

export const Header: FC<Props> = ({ isHome }) => {
  return (
    <div
      className={`fixed top-0 left-0 flex justify-between w-full px-4 py-2 bg-black ${style.shadow}`}
    >
      <div className="flex gap-4">
        <Link href="blog">blog</Link>
        <Link href="portfolio">portfolio</Link>
        <Link href="podcast">podcast</Link>
      </div>

      {isHome ? (
        <h2 className="text-base">I'm angelo and I do stuff</h2>
      ) : (
        <div />
      )}
    </div>
  )
}
