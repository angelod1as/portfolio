import { render, screen } from '@test/test-helper'
import Loading from '.'

describe('Loading component', () => {
  it('renders properly', () => {
    render(<Loading />)
    expect(screen.getByText(/carregando/)).toBeInTheDocument()
  })
})
