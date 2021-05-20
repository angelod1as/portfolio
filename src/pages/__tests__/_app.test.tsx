import {
  render,
  screen,
  fireEvent,
  act,
  waitForElementToBeRemoved,
} from '@test/test-helper'

import AppWrapper from '../_app'

jest.mock('@components/atoms/Loading', () => () => <div>Loading</div>)

const Component = ({ children }) => (
  <div>
    <div>Component</div>
    <div>{children}</div>
  </div>
)

describe('NextJS _App Wrapper', () => {
  it('Renders properly', async () => {
    render(
      <AppWrapper
        Component={Component}
        pageProps={{} as any}
        router={{} as any}
      />
    )
    expect(screen.getByText('Component')).toBeInTheDocument()
    const checkbox = screen.getByRole('checkbox', { name: 'switch language' })
    expect(checkbox).toBeInTheDocument()
    expect(screen.queryByText(/Loading/)).not.toBeInTheDocument()
    act(() => {
      fireEvent.click(checkbox)
    })
    expect(screen.getByText(/Loading/)).toBeInTheDocument()
    await waitForElementToBeRemoved(screen.getByText(/Loading/))
    expect(screen.queryByText(/Loading/)).not.toBeInTheDocument()
  })
})
