import { render, screen } from '@test/test-helper'
import Footer from '.'

describe('Footer component', () => {
  it('renders properly without data', () => {
    render(<Footer blogPosts={[]} newsletter={false} social={[]} />)
    expect(screen.queryByText(/Sign up my/)).not.toBeInTheDocument()
  })
  it('renders properly with data', () => {
    const blogPosts = [
      {
        title: 'Title',
        lead: 'lead',
        date: '2021-05-10',
      },
    ]
    render(<Footer blogPosts={blogPosts} newsletter social={[{}]} />)
    expect(screen.getByText(/Sign up my/)).toBeInTheDocument()
    expect(screen.getByText(/blog posts/)).toBeInTheDocument()
    expect(screen.getByText(/Title/)).toBeInTheDocument()
    expect(screen.getByText(/lead/)).toBeInTheDocument()
    expect(screen.getByText(/9 de mai. de 2021/)).toBeInTheDocument()
    expect(screen.getByText(/Let's talk about/)).toBeInTheDocument()
  })
})
