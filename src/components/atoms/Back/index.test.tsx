import { fireEvent, render, screen } from '@test/test-helper'
import { useRouter } from 'next/router'
import Back from '.'

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}))

describe('Home button component', () => {
  it('renders properly', () => {
    const back = jest.fn()
    ;(useRouter as jest.Mock).mockImplementation(() => ({
      back: back,
    }))
    render(<Back />)
    const button = screen.getByText(/back/)
    expect(button).toBeInTheDocument()
    fireEvent.click(button)
    expect(back).toHaveBeenCalled()
  })
})
