import { render, screen } from '@test/test-helper'
import Tag from '.'

describe('Tag component', () => {
  it('Render properly', () => {
    render(<Tag tag="string" />)
    expect(screen.getByText(/string/)).toBeInTheDocument()
  })
})
