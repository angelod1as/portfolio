import { render, screen } from '#test/index'
import { Header } from '.'

// Mock Next.js router
jest.mock('next/router', () => ({
  useRouter: () => ({
    asPath: '/blog',
    pathname: '/blog',
    query: {},
    push: jest.fn(),
  }),
}))

describe('Header', () => {
  it('renders properly', () => {
    render(<Header />)

    expect(screen.getByText('start')).toBeInTheDocument()
    expect(screen.getByText('blog')).toBeInTheDocument()
    expect(screen.getByText('projects')).toBeInTheDocument()
    expect(screen.getByText(/I'm/)).toBeInTheDocument()
    expect(screen.getByText(/angelo/)).toBeInTheDocument()
  })
})
