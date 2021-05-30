import { render, screen } from '@test/test-helper'

import Card from '.'

jest.mock('next/link', () => ({ href }) => <div>{href}</div>)

describe('Card component', () => {
  it('Renders properly with full information, wo link', () => {
    render(
      <Card
        image="http://image.png"
        quickNote="A quick note"
        tags={['coding', 'talking']}
        title="Card Title"
        link=""
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
        image="image.png"
        quickNote="A quick note"
        tags={['coding', 'talking']}
        title="Card Title"
        link="http://foo.bar"
      />
    )
    expect(screen.getByText('http://foo.bar')).toBeInTheDocument()
  })
})
