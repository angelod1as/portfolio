import Home, { getStaticProps } from '../index'

import { render, screen } from '@test/test-helper'

jest.mock('@sections/home/index', () => () => <div>Home</div>)
jest.mock('@functions/fetchContentful', () => ({ type }) => type)

describe('Home component', () => {
  it('Renders properly', () => {
    render(<Home homeData={{}} />)
    expect(screen.getByText(/Home/)).toBeInTheDocument()
  })

  it('Get Static Props', async () => {
    const response = await getStaticProps({ locale: 'pt' })
    expect(response).toStrictEqual({ props: { homeData: 'tile' } })
  })
})
