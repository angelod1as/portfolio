import { HomeSection } from '#components/common/HomeSection'
import React from 'react'
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
      {sections.map(({ Component, color }, index) => (
        <HomeSection key={index}>
          <Component color={color} />
        </HomeSection>
      ))}
      <Colophon color={textColor[5]} />
    </>
  )
}
