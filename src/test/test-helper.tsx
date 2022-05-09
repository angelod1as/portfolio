import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import '@testing-library/jest-dom'
import { FCC } from '#types/types'

// Add in any providers here if necessary:
// (ReduxProvider, ThemeProvider, etc)
const Providers: FCC = ({ children }) => {
  return <>{children}</>
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const customRender = (ui: any, options = {}) =>
  render(ui, { wrapper: Providers, ...options })

// re-export everything
// eslint-disable-next-line import/export
export * from '@testing-library/react'

// override render method
// eslint-disable-next-line import/export
export { customRender as render }

/// <reference path="" />
