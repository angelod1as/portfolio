import { useRouter } from 'next/router'
import React, { FC } from 'react'
import { RandomColors } from 'src/helpers/colors'
import style from './Header.module.sass'
import { MenuLink } from './MenuLink'

type HeaderProps = {
  colors: RandomColors
}

export const Header: FC<HeaderProps> = ({ colors }) => {
  const { asPath } = useRouter()

  return (
    <div
      className={`fixed top-0 left-0 flex justify-between w-full px-4 py-2 bg-black z-50 ${style.shadow}`}
    >
      <div className="flex gap-4">
        <MenuLink content="start" href="/" />
        <MenuLink content="blog" href="/blog" />
        <MenuLink content="podcast" href="/cronofobia" />
      </div>
      {asPath !== '/' && (
        <div className="hidden md:block">
          <b>
            I'm <span className={colors.textColor}>angelo</span> and I do stuff
          </b>
        </div>
      )}
    </div>
  )
}
