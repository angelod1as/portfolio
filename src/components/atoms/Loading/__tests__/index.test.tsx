import { render, screen } from '@testing-library/react'
import Loading from '..'

describe('Loading', () => {
  it('renders properly', () => {
    render(<Loading />)
    expect(screen.getByText(/loading/)).toBeInTheDocument()
  })
})
