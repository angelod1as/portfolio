import React from 'react'
import { render, screen } from '#test/index'
import { Contact } from '.'

// Mock Next.js Image component
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: React.ImgHTMLAttributes<HTMLImageElement>) => {
    // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
    return <img {...props} />
  },
}))

const services = ['github', 'telegram', 'linkedin']

describe('Contact', () => {
  it('renders properly', () => {
    render(<Contact />)

    // Check for alt text in images since services are rendered as images
    services.forEach(service => {
      expect(screen.getByAltText(service)).toBeInTheDocument()
    })
  })
})
