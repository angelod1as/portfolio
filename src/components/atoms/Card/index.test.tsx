import { render, screen } from '@test/test-helper'

import Card from '.'

jest.mock('next/link', () => ({ href }) => <div>{href}</div>)
jest.mock('./styles', () => ({
  ...jest.requireActual('./styles'),
  ExternalLink: ({ href }) => <div>{href}</div>,
}))

describe('Card component', () => {
  it('Renders properly with full information, wo link', () => {
    render(
      <Card
        item={{
          image: 'http://image.png',
          pt: {
            title: 'Card Title',
            note: 'A quick note',
          },
          en: {
            title: 'Card Title',
            note: 'A quick note',
          },
          tags: ['coding', 'talking'],
          link: '',
        }}
      />
    )
    const card = screen.getByText(/Card Title/)
    expect(card).toBeInTheDocument()
    expect(screen.getByText(/A quick note/)).toBeInTheDocument()
    expect(screen.getByText(/coding/)).toBeInTheDocument()
    expect(screen.getByText(/talking/)).toBeInTheDocument()
    expect(screen.getByRole('img')).toHaveProperty('src', 'http://image.png/')
  })

  it('Render properly with link', () => {
    render(
      <Card
        item={{
          image: 'http://image.png',
          pt: {
            title: 'title',
            note: 'note',
          },
          en: {
            title: 'title',
            note: 'note',
          },
          tags: ['coding', 'talking'],
          link: 'http://foo.bar',
        }}
      />
    )
    expect(screen.getByText('http://foo.bar')).toBeInTheDocument()
  })

  it('Render properly with external link', () => {
    render(
      <Card
        item={{
          image: 'http://image.png',
          pt: {
            title: 'title',
            note: 'note',
          },
          en: {
            title: 'title',
            note: 'note',
          },
          tags: ['coding', 'talking'],
          externalLink: 'http://foo.bar',
        }}
      />
    )
    expect(screen.getByText('http://foo.bar')).toBeInTheDocument()
  })
})
