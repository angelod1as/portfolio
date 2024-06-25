import { HomeSection } from '#components/common/HomeSection'
import { Link, LinkProps } from '#components/common/Links'
import { FCC } from '#types/types'
import React from 'react'
import { textColor } from 'src/helpers/colors'
import {
  Am,
  Generalist,
  Opening,
  Want,
  Was,
  Colophon,
  Recommendations,
} from './Sections'

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
  {
    Component: Recommendations,
    color: textColor[5],
  },
]

export function Home() {
  return (
    <>
      {sections.map(({ Component, color }, index) => {
        const Strong: FCC = ({ children }) => (
          <strong className={color}>{children}</strong>
        )

        const ColorLink: FCC<LinkProps> = props => (
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
      <Colophon color={textColor[0]} />
    </>
  )
}
