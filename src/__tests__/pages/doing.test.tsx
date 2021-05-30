import { render, screen } from '@test/test-helper'
import Doing, { getStaticProps } from '../../pages/doing'

jest.mock('@sections/doing', () => () => <div>Doing</div>)
jest.mock('@functions/fetchNotion', () => () => [item])

const item = {
  status: 'to do',
}

describe('Home component', () => {
  it('Renders properly', () => {
    render(
      <Doing
        cards={{
          todo: [],
          doing: [],
          done: [],
          later: [],
          waiting: [],
          dropped: [],
        }}
      />
    )
    expect(screen.getByText(/Doing/)).toBeInTheDocument()
  })

  it('Get Static Props', async () => {
    const response = await getStaticProps()
    expect(response).toStrictEqual({
      props: {
        cards: {
          todo: [item],
          doing: [],
          done: [],
          later: [],
          waiting: [],
          dropped: [],
        },
      },
    })
  })
})
