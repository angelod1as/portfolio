import { render, screen } from '@test/test-helper'
import BottomBar from '.'

jest.mock('./HomeButton/', () => () => <div>Home Button</div>)
jest.mock('./LocaleSwitcher/', () => () => <div>Locale Switcher</div>)

describe('BottomBar component', () => {
  it('renders properly', () => {
    render(<BottomBar setLoading={jest.fn()} />)
    expect(screen.getByText(/Home Button/)).toBeInTheDocument()
    expect(screen.getByText(/Locale Switcher/)).toBeInTheDocument()
  })
})
