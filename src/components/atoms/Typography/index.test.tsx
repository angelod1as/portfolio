import { render, screen } from '@test/test-helper'
import { H1, H2, H3, H4, H5 } from '.'

const getHtml = (element: HTMLElement) => {
  return element.parentElement.innerHTML
}

describe('Typography component', () => {
  it('renders H1 properly', () => {
    render(<H1>Text</H1>)
    const element = screen.getByText(/Text/)
    expect(getHtml(element).includes('h1')).toBeTruthy()
  })
  it('renders H2 properly', () => {
    render(<H2>Text</H2>)
    const element = screen.getByText(/Text/)
    expect(getHtml(element).includes('h2')).toBeTruthy()
  })
  it('renders H3 properly', () => {
    render(<H3>Text</H3>)
    const element = screen.getByText(/Text/)
    expect(getHtml(element).includes('h3')).toBeTruthy()
  })
  it('renders H4 properly', () => {
    render(<H4>Text</H4>)
    const element = screen.getByText(/Text/)
    expect(getHtml(element).includes('h4')).toBeTruthy()
  })
  it('renders H5 properly', () => {
    render(<H5>Text</H5>)
    const element = screen.getByText(/Text/)
    expect(getHtml(element).includes('h5')).toBeTruthy()
  })
})
