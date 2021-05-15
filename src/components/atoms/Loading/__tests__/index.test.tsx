import { render, screen } from '@test/test-helper'
import Loading from '..'

jest.mock('next/router', () => ({
  useRouter: () => 'pt',
}))

describe('Loading', () => {
  it('renders properly', () => {
    render(<Loading />)
    expect(screen.getByText(/loading/)).toBeInTheDocument()
  })
})
