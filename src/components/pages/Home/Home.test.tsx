import React from 'react'
import { render, screen } from '#test/index'
import { Home } from '#components/pages/Home'

const headings = {
  h1: /I'm angelo and I do stuff/i,
  h2: {
    generalist: /I'm a proud generalist/i,
    want: /I want/i,
    am: /I am/i,
    was: /I was/i,
    recommendations: /A few LinkedIn recommendations/i,
  },
}

describe('Home', () => {
  it('renders the fixed textual content', () => {
    render(<Home />)

    // Check main heading
    expect(
      screen.getByRole('heading', {
        name: headings.h1,
      })
    ).toBeInTheDocument()

    // Check for key text parts - use getAllByText since there might be multiple occurrences
    expect(screen.getAllByText(/developer/i).length).toBeGreaterThan(0)
    expect(screen.getAllByText(/writer/i).length).toBeGreaterThan(0)
    expect(screen.getAllByText(/designer/i).length).toBeGreaterThan(0)

    // Check main section headings
    expect(
      screen.getByRole('heading', { level: 2, name: headings.h2.generalist })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { level: 2, name: headings.h2.want })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { level: 2, name: headings.h2.am })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { level: 2, name: headings.h2.was })
    ).toBeInTheDocument()
  })
})
