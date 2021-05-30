import { render, screen } from '@test/test-helper'
import Tag from '.'

describe('Tag component', () => {
  it('Render properly', () => {
    render(<Tag>string</Tag>)
    expect(screen.getByText(/string/)).toBeInTheDocument()
  })
})
