import { fireEvent, render, screen } from '@test/test-helper'
import { useRouter } from 'next/router'
import HomeButton from '.'

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}))

describe('Home button component', () => {
  it('renders properly', () => {
    const push = jest.fn()
    ;(useRouter as jest.Mock).mockImplementation(() => ({
      push,
    }))
    render(<HomeButton />)
    const button = screen.getByText(/Home/)
    expect(button).toBeInTheDocument()
    fireEvent.click(button)
    expect(push).toHaveBeenCalled()
  })
  it('renders nothing when path is home', () => {
    ;(useRouter as jest.Mock).mockImplementation(() => ({
      asPath: '/',
    }))
    render(<HomeButton />)
    expect(screen.queryByText(/Home/)).not.toBeInTheDocument()
  })
})
