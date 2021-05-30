import { render, screen } from '@test/test-helper'
import Doing from '.'

describe('Doing page', () => {
  it('Renders properly', () => {
    render(<Doing />)
    expect(screen.getByText(/Content/i)).toBeInTheDocument()
  })
})
