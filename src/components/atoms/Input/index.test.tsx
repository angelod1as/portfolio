import { render, screen } from '@test/test-helper'
import Input from '.'

describe('Loading', () => {
  it('renders properly', () => {
    render(<Input label="Label" inverted />)
    expect(screen.getByText(/Label/)).toBeInTheDocument()
    expect(screen.queryByTestId(/icon/)).not.toBeInTheDocument()
  })
  it('renders email icon properly', () => {
    render(<Input label="Label" icon="email" inverted />)
    expect(screen.getByTestId(/icon/)).toBeInTheDocument()
  })
  it('renders name icon properly', () => {
    render(<Input label="Label" icon="name" inverted />)
    expect(screen.getByTestId(/icon/)).toBeInTheDocument()
  })
})
