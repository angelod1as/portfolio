import { useColorContext } from '#components/templates/Providers/ColorProvider'
import { FCC } from '#types/types'
import { useRouter } from 'next/router'
import React from 'react'
import style from './Header.module.sass'
import { MenuLink } from './MenuLink'

export const Header: FCC = () => {
  const { asPath } = useRouter()
  const { colors } = useColorContext()

  return (
    <div
      className={`fixed top-0 left-0 flex justify-between w-full px-4 py-2 bg-black z-50 ${style.shadow}`}
    >
      <div className="flex flex-wrap justify-between w-full gap-2 text-sm sm:w-auto sm:gap-4 sm:text-base">
        <MenuLink content="start" href="/" />
        <MenuLink content="blog" href="/blog" />
        <MenuLink content="projects" href="/projects" />
        <MenuLink content="podcast" href="/cronofobia" />
        <MenuLink content="ask" href="/pergunte" />
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
