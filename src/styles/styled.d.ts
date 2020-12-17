/* eslint-disable @typescript-eslint/no-empty-interface */
import {} from 'styled-components'

import theme from './theme'

declare module 'styled-components' {
  type Theme = typeof theme
  export interface DefaultTheme extends Theme {}
}
