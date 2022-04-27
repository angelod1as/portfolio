import { HomeSection } from '#components/common/HomeSection'
import React from 'react'
import { Generalist } from './Generalist'
import { Opening } from './Opening'

// TODO: Add :stars: to Stuff

export function Home() {
  return (
    <>
      <HomeSection>
        <Opening />
      </HomeSection>

      <HomeSection>
        <Generalist />
      </HomeSection>

      {/* <Highlighted /> */}

      {/* <Mosaic /> */}

      {/* Extra  */}

      {/* <h2 className="text-7xl">you can always rely on a blog</h2>

      <LatestPosts /> */}
    </>
  )
}
