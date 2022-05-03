import { useRouter } from 'next/router'
import React, { FC } from 'react'
import { Link } from '../Links'
import style from './Header.module.sass'

type MenuLinkProps = {
  href: string
  content: string
}
const MenuLink: FC<MenuLinkProps> = ({ href, content }) => {
  const { pathname } = useRouter()

  if (pathname === `${href}`) {
    return <span className="font-bold">{content}</span>
  }

  return (
    <Link inner href={href}>
      {content}
    </Link>
  )
}

export const Header: FC = () => {
  return (
    <div
      className={`fixed top-0 left-0 flex justify-between w-full px-4 py-2 bg-black z-50 ${style.shadow}`}
    >
      <div className="flex gap-4">
        <MenuLink content="start" href="/" />
        <MenuLink content="podcast" href="/cronofobia" />
      </div>
    </div>
  )
}
