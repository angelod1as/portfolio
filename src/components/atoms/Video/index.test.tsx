import { render, screen } from '@test/test-helper'
import Video from '.'

jest.mock('react-responsive-embed', () => () => <div>ResponsiveEmbed</div>)

describe('Loading', () => {
  it('renders properly', () => {
    render(<Video id={1} />)
    expect(screen.getByText(/ResponsiveEmbed/)).toBeInTheDocument()
  })
})
