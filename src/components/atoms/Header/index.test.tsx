import { render, screen } from '@test/test-helper'
import Header from '.'

describe('Header component', () => {
  it('renders properly with minimal info', () => {
    render(<Header title="Title" slim type={undefined} />)
    expect(screen.getByText(/Title/)).toBeInTheDocument()
  })
  it('renders properly with more info', () => {
    render(<Header title="Title" hasIDo type="projects" excerpt="excerpt" />)
    expect(screen.getByText(/Sou angelo e faço/)).toBeInTheDocument()
    expect(screen.getByText(/title/)).toBeInTheDocument()
    expect(screen.getByText(/O tempo é curto/)).toBeInTheDocument()
    expect(screen.getByText(/excerpt/)).toBeInTheDocument()
  })
  it('renders properly with doing context', () => {
    render(<Header title="Title" hasIDo doing type="custom" />)
    expect(screen.getByText(/Sou angelo e estou/)).toBeInTheDocument()
    expect(screen.getByText(/title/)).toBeInTheDocument()
  })
})
