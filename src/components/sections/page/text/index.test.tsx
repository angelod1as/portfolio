import { render, screen } from '@test/test-helper'
import Text from '.'

jest.mock('@components/atoms/Project', () => () => <div>Project</div>)
jest.mock('@contentful/rich-text-react-renderer', () => ({
  documentToReactComponents: () => 'CONTENT',
  Options: {},
}))

const content = {
  fields: {
    title: 'title',
    description: 'description',
    content: {} as any,
    slug: 'slug',
    date: '2021-05-01T17:00:00Z',
    excerpt: 'excerpt',
    live: 'live',
    repository: 'repository',
    summary: {} as any,
  },
}

describe('Text page', () => {
  it('Renders properly', () => {
    render(<Text content={content} type="text" />)
    expect(screen.getByText(/Visite a página do projeto/)).toBeInTheDocument()
    expect(screen.getByText(/Explore o repositório/)).toBeInTheDocument()
    expect(screen.getByText(/Publicado em/)).toBeInTheDocument()
    expect(screen.getByText(/1 de mai. de 2021/)).toBeInTheDocument()
    expect(screen.getByText(/CONTENT/)).toBeInTheDocument()
  })
})
