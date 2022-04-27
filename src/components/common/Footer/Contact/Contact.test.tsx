import React from 'react'
import { render, screen } from '#test/index'
import { Contact } from '.'

const services = ['instagram', 'telegram', 'email', 'twitter']

describe(Contact, () => {
  it('renders properly', () => {
    render(<Contact />)

    services.forEach(service => {
      expect(screen.getByText(service)).toBeInTheDocument()
    })
  })
})
