import { render, screen } from '@test/test-helper'
import Button from '.'

jest.mock('react-icons/vsc', () => ({
  VscGithubInverted: () => <div>Icon</div>,
}))

describe('Button component', () => {
  it('renders properly', () => {
    render(<Button icon="github">Test</Button>)
    expect(screen.getByText(/Test/)).toBeInTheDocument()
    expect(screen.getByText(/Icon/)).toBeInTheDocument()
    expect(screen.getByRole('button')).toHaveStyle({
      color: 'ButtonText',
    })
  })

  it('renders properly inverted', () => {
    render(
      <Button icon="github" inverted>
        Test
      </Button>
    )
    expect(screen.getByRole('button')).toHaveStyle({
      color: 'rgb(255, 255, 255)',
    })
  })

  it('renders properly borderless', () => {
    render(
      <Button icon="github" borderless>
        Test
      </Button>
    )
    expect(screen.getByRole('button')).toHaveStyle({
      'background-color': 'rgb(255, 255, 255)',
    })
  })

  it('renders properly borderless and inverted', () => {
    render(
      <Button icon="github" borderless inverted>
        Test
      </Button>
    )
    expect(screen.getByRole('button')).toHaveStyle({
      'background-color': 'ButtonFace',
    })
  })

  it('renders without icon', () => {
    render(<Button>Test</Button>)
    expect(screen.getByText(/Test/)).toBeInTheDocument()
    expect(screen.queryByText(/Icon/)).not.toBeInTheDocument()
  })

  it('renders no icon with wrong icon', () => {
    render(<Button icon="wrong">Test</Button>)
    expect(screen.getByText(/Test/)).toBeInTheDocument()
    expect(screen.queryByText(/Icon/)).not.toBeInTheDocument()
  })

  it('renders Link when "to" is present', () => {
    render(<Button to="/to">Test</Button>)
    expect(screen.getByTestId(/link/)).toBeInTheDocument()
    expect(screen.queryByTestId(/href/)).not.toBeInTheDocument()
  })

  it('renders A tag when "href" is present', () => {
    render(<Button href="/to">Test</Button>)
    expect(screen.getByTestId(/href/)).toBeInTheDocument()
    expect(screen.queryByTestId(/link/)).not.toBeInTheDocument()
  })
})
