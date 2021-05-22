import { render, screen } from '@test/test-helper'
import Embed from '.'

describe('Embed component', () => {
  it('renders properly', () => {
    const embed = '<div>test innerHtml</div>'
    render(<Embed embed={embed} />)
    expect(screen.getByTestId(/danger-div/).innerHTML).toBe(embed)
  })
})
