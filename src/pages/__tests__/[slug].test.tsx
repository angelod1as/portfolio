import fetchContentful from '@functions/fetchContentful'
import { render, screen } from '@test/test-helper'
import PageGenerator, { getStaticPaths, getStaticProps } from '../[slug]'

jest.mock('@components/atoms/NewHead', () => () => <div>NewHead</div>)
jest.mock('@sections/page', () => () => <div>page</div>)
jest.mock('@functions/fetchContentful', () => jest.fn())

describe('404 page', () => {
  it('renders properly', () => {
    render(<PageGenerator content={{} as any} items={{} as any} />)
    expect(screen.getByText(/NewHead/)).toBeInTheDocument()
    expect(screen.getByText(/page/)).toBeInTheDocument()
  })

  it('renders content not found', () => {
    render(<PageGenerator content={undefined} items={{} as any} />)
    expect(screen.getByText(/Content not found/)).toBeInTheDocument()
  })

  it('Get Static Props', async () => {
    const mockResponse = {
      content: [
        {
          fields: {
            slug: 'slug',
          },
        },
      ],
    }

    ;(fetchContentful as jest.Mock).mockImplementation(() => mockResponse)
    const response = await getStaticProps({
      locale: 'pt',
      params: { slug: 'slug' },
    })

    const content = mockResponse.content[0]
    expect(response).toStrictEqual({
      props: { content, items: undefined },
    })
  })

  it('Get Static Paths', async () => {
    const mockResponse = {
      content: [
        {
          fields: {
            slug: 'slug',
          },
        },
      ],
    }

    ;(fetchContentful as jest.Mock).mockImplementation(() => mockResponse)

    const response = await getStaticPaths()
    expect(response).toStrictEqual({
      paths: [
        {
          locale: 'en',
          params: {
            slug: 'slug',
          },
        },
        {
          locale: 'pt',
          params: {
            slug: 'slug',
          },
        },
      ],
      fallback: false,
    })
  })
})
