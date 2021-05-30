import { render, screen } from '@test/test-helper'
import Home, { HomeProps } from '.'

jest.mock('next/link', () => ({ href, children }) => (
  <button data-testid={href}>{children}</button>
))

const fields = {
  slug: 'slug',
  title: 'Título',
  order: 1,
  hasido: false,
}

describe('Home section', () => {
  it('renders properly', () => {
    const data: HomeProps['homeData'] = {
      content: [
        {
          fields: {
            ...fields,
          },
        },
      ],
    }
    render(<Home homeData={data} />)
    expect(screen.getByText('Título')).toBeInTheDocument()
  })

  it('renders "I do" properly', () => {
    const data: HomeProps['homeData'] = {
      content: [
        {
          fields: {
            ...fields,
            hasido: true,
          },
        },
      ],
    }
    render(<Home homeData={data} />)
    expect(screen.getByText('Eu faço')).toBeInTheDocument()
  })

  it('renders properly if slug stuff', () => {
    const data: HomeProps['homeData'] = {
      content: [
        {
          fields: {
            ...fields,
            slug: 'stuff',
          },
        },
      ],
    }
    render(<Home homeData={data} />)
    expect(screen.getByText('Sou angelo')).toBeInTheDocument()
  })

  it('renders properly if slug doing', () => {
    const data: HomeProps['homeData'] = {
      content: [
        {
          fields: {
            ...fields,
            slug: 'doing',
          },
        },
      ],
    }
    render(<Home homeData={data} />)
    expect(screen.getByText(/estou fazendo/)).toBeInTheDocument()
    expect(screen.getByText('agora')).toBeInTheDocument()
    expect(screen.getByText('mesmo')).toBeInTheDocument()
  })

  it('renders redir link properly', () => {
    const data: HomeProps['homeData'] = {
      content: [
        {
          fields: {
            ...fields,
            redir: 'http://foo.bar',
          },
        },
      ],
    }
    render(<Home homeData={data} />)
    const match = data.content[0].fields.redir
    expect(screen.getByTestId(match)).toBeInTheDocument()
  })

  it('renders redir link properly', () => {
    const data: HomeProps['homeData'] = {
      content: [
        {
          fields: {
            ...fields,
            internalRedirect: {
              fields: {
                slug: 'slug',
              },
            },
          },
        },
      ],
    }
    render(<Home homeData={data} />)
    const match = `projects/${data.content[0].fields.internalRedirect.fields.slug}`
    expect(screen.getByTestId(match)).toBeInTheDocument()
  })
})
