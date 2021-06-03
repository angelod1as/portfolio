import { render, screen } from '@test/test-helper'
import CardSection from './'

describe('Card section', () => {
  it('renders nothing when empty', () => {
    render(<CardSection title="To do" items={[]} />)
    expect(screen.queryByText(/To do/)).not.toBeInTheDocument()
  })

  it('renders correctly', () => {
    render(
      <CardSection
        title="To do"
        items={[
          {
            en: {
              note: 'note',
              title: 'title',
            },
            pt: {
              note: 'note',
              title: 'title',
            },
            link: 'link',
            image: 'image',
            tags: ['tags'],
            externalLink: 'externalLink',
          },
        ]}
      />
    )
    expect(screen.getByText(/To do/)).toBeInTheDocument()
    expect(screen.getByText(/title/)).toBeInTheDocument()
  })
})
