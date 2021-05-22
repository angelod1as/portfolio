import { render, screen } from '@test/test-helper'
import NotFound from '../../pages/404'

describe('404 page', () => {
  it('renders properly', () => {
    render(<NotFound />)
    expect(screen.getByText(/Sou angelo e/)).toBeInTheDocument()
    expect(screen.getByText(/essa página não existe/)).toBeInTheDocument()
  })
})
