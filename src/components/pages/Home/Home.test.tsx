import React from 'react'
import { render, screen } from '#test/index'
import { Home } from '#components/pages/Home'

describe('Home', () => {
  it('renders a heading', () => {
    render(<Home />)

    expect(screen.getByText('Home')).toBeInTheDocument()
  })
})
