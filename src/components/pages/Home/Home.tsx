import { HomeSection } from '#components/common/HomeSection'
import { Link, LinkProps } from '#components/common/Links'
import React, { FC, ReactNode } from 'react'
import { textColor } from 'src/helpers/colors'
import { Am, Generalist, Opening, Want, Was, Colophon } from './Sections'

// TODO: Add :stars: to Stuff

const sections = [
  {
    Component: Opening,
    color: textColor[0],
  },
  {
    Component: Generalist,
    color: textColor[1],
  },
  {
    Component: Want,
    color: textColor[2],
  },
  {
    Component: Am,
    color: textColor[3],
  },
  {
    Component: Was,
    color: textColor[4],
  },
]

export function Home() {
  return (
    <>
      {sections.map(({ Component, color }, index) => {
        const Strong: FC<{ children: ReactNode }> = ({ children }) => (
          <strong className={color}>{children}</strong>
        )

        const ColorLink: FC<LinkProps> = props => (
          <Link className={color} {...props}>
            {props.children}
          </Link>
        )

        return (
          <HomeSection key={index}>
            <Component color={color} Strong={Strong} ColorLink={ColorLink} />
          </HomeSection>
        )
      })}
      <Colophon color={textColor[5]} />
    </>
  )
}
