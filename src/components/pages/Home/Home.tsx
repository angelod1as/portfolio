import { Footer } from '#components/common/Footer'
import { Highlighted } from '#components/pages/Home/Highlighted/Highlighted'
import { LatestPosts } from '#components/pages/Home/LatestPosts'
import React from 'react'
import { Mosaic } from './Mosaic'
import { Summary } from './Summary/Summary'

export function Home() {
  return (
    <>
      <div className="flex flex-col gap-16 px-4 py-16">
        <h1>
          I'm angelo and I do <i>stuff</i>
        </h1>

        <Summary />

        <h2>I'm a proud generalist</h2>

        <Highlighted />

        <h2>you are free to explore new stuff</h2>

        <Mosaic />

        {/* Extra  */}

        <h2>you can always rely on a blog</h2>

        <LatestPosts />

        {/* Latest posts */}

        <Footer />
      </div>
    </>
  )
}
