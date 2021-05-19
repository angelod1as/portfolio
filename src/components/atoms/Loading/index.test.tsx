import { render, screen } from '@test/test-helper'
import Loading from '.'

describe('Loading', () => {
  it('renders properly', () => {
    render(<Loading />)
    expect(screen.getByText(/loading/)).toBeInTheDocument()
  })
})
