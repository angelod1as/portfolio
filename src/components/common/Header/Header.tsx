import { useRouter } from 'next/router'
import React, { FC } from 'react'
import { Link } from '../Links'
import style from './Header.module.sass'

export const Header: FC = () => {
  const { pathname } = useRouter()
  const isHome = pathname === '/'
  return (
    <div
      className={`fixed top-0 left-0 flex justify-between w-full px-4 py-2 bg-black z-50 ${style.shadow}`}
    >
      <div className="flex gap-4">
        <Link inner href="blog">
          blog
        </Link>
        <Link inner href="/#portfolio">
          portfolio
        </Link>
        <Link inner href="cronofobia">
          podcast
        </Link>
      </div>

      {isHome ? (
        <div />
      ) : (
        <Link inner href="/">
          <h2 className="text-base">I'm angelo and I do stuff</h2>
        </Link>
      )}
    </div>
  )
}
