import { render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import { theme } from '@styles/theme'
import 'jest-styled-components'
import '@testing-library/jest-dom/extend-expect'

jest.mock('next/router', () => ({
  useRouter: () => 'pt',
}))

// Add in any providers here if necessary:
// (ReduxProvider, ThemeProvider, etc)
const Providers = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

const customRender = (ui, options = {}) =>
  render(ui, { wrapper: Providers, ...options })

// re-export everything
export * from '@testing-library/react'

// override render method
export { customRender as render }

/// <reference path="" />
