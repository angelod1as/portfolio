import { render, screen } from '@test/test-helper'
import NewHead from '.'

jest.mock('react-responsive-embed', () => () => <div>ResponsiveEmbed</div>)

describe('NewHead  component', () => {
  it('renders properly', () => {
    render(<NewHead />)
    expect(screen.queryByText(/Title/)).not.toBeInTheDocument()
    expect(screen.queryByText(/Description/)).not.toBeInTheDocument()
  })
  it('renders properly with title and description', () => {
    render(<NewHead title="Title" description="Description" />)
    expect(screen.queryByText(/Title/)).not.toBeInTheDocument()
    expect(screen.queryByText(/Description/)).not.toBeInTheDocument()
  })
})
