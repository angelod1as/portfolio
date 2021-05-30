import { render, screen } from '@test/test-helper'
import Doing from '../../pages/doing'

jest.mock('@sections/page/doing', () => () => <div>Doing</div>)

describe('Home component', () => {
  it('Renders properly', () => {
    render(<Doing />)
    expect(screen.getByText(/Doing/)).toBeInTheDocument()
  })
})
