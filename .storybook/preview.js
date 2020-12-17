import { ThemeProvider } from 'styled-components';
import theme from '../src/styles/theme'
import GlobalStyle from '../src/styles/GlobalStyle'

export const decorators = [
  (Story) => {
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Story/>
      </ThemeProvider>
    )
  }
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}