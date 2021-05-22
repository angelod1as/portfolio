import { render, screen } from '@test/test-helper'
import Project from '.'

jest.mock('react-icons/vsc', () => ({
  VscWarning: () => <div>Icon</div>,
}))

describe('Project component', () => {
  it('renders properly', () => {
    render(
      <Project
        image={[{ url: 'http://foo.bar' }]}
        title="Title"
        lead="Lead"
        date="2021-05-01T17:00:00Z"
        to="/foo"
      />
    )
    expect(screen.getByText(/Title/)).toBeInTheDocument()
    expect(screen.getByText(/Lead/)).toBeInTheDocument()
    expect(screen.getByText(/1 de mai. de 2021/)).toBeInTheDocument()
  })

  it('renders without image and being embed', () => {
    render(
      <Project
        image={undefined}
        title="Title"
        lead="Lead"
        date="2021-05-01T17:00:00Z"
        to="/foo"
        embed
      />
    )
    expect(screen.getByText(/Icon/)).toBeInTheDocument()
    expect(screen.getByText(/clique para visitar/)).toBeInTheDocument()
  })
})
