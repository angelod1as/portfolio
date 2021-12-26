import { Footer } from '#components/common/Footer'
import React from 'react'

export function Home() {
  return (
    <>
      <div>
        <h1>
          I'm angelo and I do <i>stuff</i>
        </h1>

        <div>
          <p>I'm a developer, writer and designer.</p>
          <p>I'm a Scrum Master and awarded journalist.</p>
          <p>I make music and I read tarot.</p>
          <p>I have a daily podcast with short episodes.</p>
        </div>

        <h2>I'm a proud generalist</h2>

        <h3>highlighted projects</h3>

        {/* Highlighted */}

        <h2>you are free to explore new stuff</h2>

        {/* Mosaic? */}

        {/* Extra  */}

        <h2>you can always rely on a blog</h2>

        <h3>latest posts</h3>

        {/* Latest posts */}

        <Footer />
      </div>
    </>
  )
}
