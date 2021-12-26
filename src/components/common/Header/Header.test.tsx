import { render, screen } from '#test/index'
import { Header } from '.'

describe(Header, () => {
  it('renders properly', () => {
    render(Header)

    expect(screen.getByText('Menu')).toBeInTheDocument()
    expect(screen.getByText(/I'm angelo and I do stuff/i)).toBeInTheDocument()
  })
})
