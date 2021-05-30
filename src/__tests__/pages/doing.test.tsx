import { NotionProps } from '@functions/fetchNotion'
import { render, screen } from '@test/test-helper'
import Doing, { getStaticProps } from '../../pages/doing'

jest.mock('@sections/page/doing', () => () => <div>Doing</div>)
jest.mock('@functions/fetchNotion', () => () => 'fetch')

describe('Home component', () => {
  it('Renders properly', () => {
    render(<Doing items={{} as NotionProps} />)
    expect(screen.getByText(/Doing/)).toBeInTheDocument()
  })

  it('Get Static Props', async () => {
    const response = await getStaticProps()
    expect(response).toStrictEqual({ props: { items: 'fetch' } })
  })
})
