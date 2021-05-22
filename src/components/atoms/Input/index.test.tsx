import { render, screen } from '@test/test-helper'
import Input from '.'

describe('Input component', () => {
  it('renders properly', () => {
    render(<Input label="Label" />)
    expect(screen.getByText(/Label/)).toBeInTheDocument()
    expect(screen.queryByTestId(/icon/)).not.toBeInTheDocument()

    expect(screen.getByTestId(/input-wrapper/)).toHaveStyle({
      'background-color': 'rgb(255, 255, 255)',
    })
  })
  it('renders inverted properly', () => {
    render(<Input label="Label" inverted />)
    expect(screen.getByText(/Label/)).toHaveStyle({ color: 'rgb(255,255,255)' })
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
