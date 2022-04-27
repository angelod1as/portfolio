import React from 'react'
import { render, screen } from '#test/index'
import { Home } from '#components/pages/Home'

const headings = {
  h1: /I'm angelo and I do stuff/i,
  h2: {
    generalist: /I'm a proud generalist/i,
    explore: /you are free to explore new stuff/i,
    blog: /you can always rely on a blog/i,
    contact: /contact me anytime/i,
  },
  h3: {
    highlight: /highlighted projects/i,
    posts: /latest posts/i,
  },
}

describe(Home, () => {
  it('renders the fixed textual content', () => {
    render(<Home />)

    expect(
      screen.getByRole('heading', {
        name: headings.h1,
      })
    ).toBeInTheDocument()

    expect(screen.getByText(/I'm a developer, writer and designer/i))

    expect(
      screen.getByRole('heading', { level: 2, name: headings.h2.generalist })
    )

    expect(
      screen.getByRole('heading', { level: 3, name: headings.h3.highlight })
    )

    expect(screen.getByRole('heading', { level: 2, name: headings.h2.explore }))

    expect(screen.getByRole('heading', { level: 2, name: headings.h2.blog }))

    expect(screen.getByRole('heading', { level: 3, name: headings.h3.posts }))

    expect(screen.getByRole('heading', { level: 2, name: headings.h2.contact }))
  })
})
