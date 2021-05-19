import { render, screen } from '@test/test-helper'
import Project from '.'

jest.mock('react-icons/vsc', () => ({
  VscWarning: () => <div>Icon</div>,
}))

describe('Loading', () => {
  it('renders properly', () => {
    render(
      <Project
        image={[{ url: 'http://foo.bar' }]}
        title="Title"
        lead="Lead"
        date="2020-05-01"
        to="/foo"
      />
    )
    expect(screen.getByText(/Title/)).toBeInTheDocument()
    expect(screen.getByText(/Lead/)).toBeInTheDocument()
    expect(screen.getByText(/30 de abr. de 2020/)).toBeInTheDocument()
  })

  it('renders without image and being embed', () => {
    render(
      <Project
        image={undefined}
        title="Title"
        lead="Lead"
        date="2020-05-01"
        to="/foo"
        embed
      />
    )
    expect(screen.getByText(/Icon/)).toBeInTheDocument()
    expect(screen.getByText(/click to visit/)).toBeInTheDocument()
  })
})
