import { Highlighted } from '#components/pages/Home/Highlighted/Highlighted'
import { LatestPosts } from '#components/pages/Home/LatestPosts'
import React from 'react'
import { Mosaic } from './Mosaic'
import { Summary } from './Summary/Summary'

// Add :stars: to Stuff

export function Home() {
  return (
    <>
      <h1>I'm angelo and I do stuff</h1>

      <Summary />

      <Highlighted />

      <h2 className="text-7xl">I'm a proud generalist</h2>

      <Mosaic />

      {/* Extra  */}

      <h2 className="text-7xl">you can always rely on a blog</h2>

      <LatestPosts />
    </>
  )
}
