import { render, screen } from '@test/test-helper'
import Doing from '.'

jest.mock('@components/atoms/CardSection', () => () => <div>Card Section</div>)

const cards = {
  todo: [],
  doing: [],
  done: [],
  later: [],
  waiting: [],
  dropped: [],
}

describe('Doing page', () => {
  it('Renders properly', () => {
    render(<Doing cards={cards} />)
    expect(screen.getAllByText(/Card Section/)).toHaveLength(6)
  })
})
