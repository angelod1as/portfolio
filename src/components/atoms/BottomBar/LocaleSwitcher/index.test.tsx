import { fireEvent, render, screen } from '@test/test-helper'
import LocaleSwitcher from '.'

describe('Locale Switcher component', () => {
  it('renders properly', () => {
    const setLoading = jest.fn()
    render(<LocaleSwitcher setLoading={setLoading} />)
    expect(screen.getByText(/🇧🇷/)).toBeInTheDocument()
    expect(screen.getByText(/🇬🇧/)).toBeInTheDocument()
    const checkbox = screen.getByRole('checkbox', { name: 'switch language' })
    expect(checkbox).toBeInTheDocument()
    fireEvent.click(checkbox)
    expect(setLoading).toHaveBeenCalled()
  })
})
