import { render, screen } from '@test/test-helper'
import InlineEmbed from '.'

jest.mock('@components/atoms/Project', () => () => <div>ProjectEmbed</div>)

describe('Loading', () => {
  it('renders properly', () => {
    render(
      <InlineEmbed
        description="description"
        slug="slug"
        title="title"
        coverImage={{}}
        date="date"
      />
    )
    expect(screen.getByText(/ProjectEmbed/)).toBeInTheDocument()
  })
})
