import { render, screen } from '@test/test-helper'
import Projects from '.'

jest.mock('@components/atoms/Project', () => () => <div>Project</div>)

const items = [
  {
    fields: {
      date: '',
      description: '',
      slug: '',
      title: '',
      coverImage: {},
      tags: [],
    },
  },
]

describe('Projects page', () => {
  it('Renders properly', () => {
    render(<Projects items={items} />)
    expect(screen.getByText('Project')).toBeInTheDocument()
    expect(screen.getByText('Últimos projetos')).toBeInTheDocument()
  })
})
