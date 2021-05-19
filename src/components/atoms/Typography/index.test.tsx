import { render, screen } from '@test/test-helper'
import { H1, H2, H3, H4, H5 } from '.'

describe('Loading', () => {
  it('renders H1 properly', () => {
    render(<H1>Text</H1>)
    expect(screen.getByText(/Text/)).toMatchInlineSnapshot(`
      .c0 {
        -webkit-animation-direction: normal;
        animation-direction: normal;
        -webkit-animation-duration: 160s;
        animation-duration: 160s;
        -webkit-animation-iteration-count: infinite;
        animation-iteration-count: infinite;
        -webkit-animation-timing-function: ease-in-out;
        animation-timing-function: ease-in-out;
        -webkit-animation-name: color;
        animation-name: color;
      }

      <h1
        class="c0"
      >
        Text
      </h1>
    `)
  })
  it('renders H2 properly', () => {
    render(<H2>Text</H2>)
    expect(screen.getByText(/Text/)).toMatchInlineSnapshot(`
      .c0 {
        -webkit-animation-direction: normal;
        animation-direction: normal;
        -webkit-animation-duration: 160s;
        animation-duration: 160s;
        -webkit-animation-iteration-count: infinite;
        animation-iteration-count: infinite;
        -webkit-animation-timing-function: ease-in-out;
        animation-timing-function: ease-in-out;
        -webkit-animation-name: color;
        animation-name: color;
      }

      <h2
        class="c0"
      >
        Text
      </h2>
    `)
  })
  it('renders H3 properly', () => {
    render(<H3>Text</H3>)
    expect(screen.getByText(/Text/)).toMatchInlineSnapshot(`
      .c0 {
        -webkit-animation-direction: normal;
        animation-direction: normal;
        -webkit-animation-duration: 160s;
        animation-duration: 160s;
        -webkit-animation-iteration-count: infinite;
        animation-iteration-count: infinite;
        -webkit-animation-timing-function: ease-in-out;
        animation-timing-function: ease-in-out;
        -webkit-animation-name: color;
        animation-name: color;
      }

      <h3
        class="c0"
      >
        Text
      </h3>
    `)
  })
  it('renders H4 properly', () => {
    render(<H4>Text</H4>)
    expect(screen.getByText(/Text/)).toMatchInlineSnapshot(`
      .c0 {
        -webkit-animation-direction: normal;
        animation-direction: normal;
        -webkit-animation-duration: 160s;
        animation-duration: 160s;
        -webkit-animation-iteration-count: infinite;
        animation-iteration-count: infinite;
        -webkit-animation-timing-function: ease-in-out;
        animation-timing-function: ease-in-out;
        -webkit-animation-name: color;
        animation-name: color;
      }

      <h4
        class="c0"
      >
        Text
      </h4>
    `)
  })
  it('renders H5 properly', () => {
    render(<H5>Text</H5>)
    expect(screen.getByText(/Text/)).toMatchInlineSnapshot(`
      .c0 {
        -webkit-animation-direction: normal;
        animation-direction: normal;
        -webkit-animation-duration: 160s;
        animation-duration: 160s;
        -webkit-animation-iteration-count: infinite;
        animation-iteration-count: infinite;
        -webkit-animation-timing-function: ease-in-out;
        animation-timing-function: ease-in-out;
        -webkit-animation-name: color;
        animation-name: color;
      }

      <h5
        class="c0"
      >
        Text
      </h5>
    `)
  })
})
