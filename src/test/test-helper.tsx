import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import '@testing-library/jest-dom'

// Add in any providers here if necessary:
// (ReduxProvider, ThemeProvider, etc)
const Providers: React.FC = ({ children }) => {
  return <>{children}</>
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const customRender = (ui: any, options = {}) =>
  render(ui, { wrapper: Providers, ...options })

// re-export everything
export * from '@testing-library/react'

// override render method
export { customRender as render }

/// <reference path="" />
