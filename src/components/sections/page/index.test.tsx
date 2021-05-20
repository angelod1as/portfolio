import { render, screen } from '@test/test-helper'
import Page from '.'
import { ContentFieldsProps } from './text'

jest.mock('@components/atoms/Header', () => () => <div>Header</div>)
jest.mock('./projects', () => () => <div>Project</div>)
jest.mock('./text', () => () => <div>Text</div>)

describe('Page component that generates projects or text', () => {
  it('renders properly', () => {
    const content = {
      fields: {
        type: 'text',
        hasido: true,
        content: {
          fields: {} as ContentFieldsProps,
        },
      },
    }
    render(<Page content={content} />)
    expect(screen.getByText(/Header/)).toBeInTheDocument()
    expect(screen.getByText(/Text/)).toBeInTheDocument()
  })

  it('renders properly', () => {
    const content = {
      fields: {
        type: 'projects',
        hasido: true,
        content: {
          fields: {} as ContentFieldsProps,
        },
      },
    }
    render(<Page content={content} items={[]} />)
    expect(screen.getByText(/Header/)).toBeInTheDocument()
    expect(screen.getByText(/Project/)).toBeInTheDocument()
  })
})
