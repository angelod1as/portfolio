import { withNextRouter } from 'storybook-addon-next-router';
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
  }, withNextRouter({
    path:'/',
    asPath: '/',
    query: {},
    push() {},
    locale: 'pt'
  })
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  backgrounds: {
    default: 'gray',
    values: [
      {
        name: 'white',
        value: '#fff'
      },
      {
        name: 'black',
        value: '#000'
      },
      {
        name: 'gray',
        value: '#a9a9a9'
      }
    ]
  }
}