import { render } from 'test-utils'
import Loading from '..'

describe('Loading', () => {
  it('renders properly', () => {
    const screen = render(<Loading />)
    expect(screen.getByText(/loading/)).toBeInTheDocument()
  })
})
