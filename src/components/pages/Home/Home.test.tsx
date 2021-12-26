import React from 'react'
import { render, screen } from '#test/index'
import { Home } from '#components/pages/Home'

describe('Home', () => {
  it('renders the heading', () => {
    render(<Home />)
    const heading = screen.getByRole('heading', {
      name: /I am angelo and I do stuff/,
    })
    expect(heading).toBeInTheDocument()
  })
})
