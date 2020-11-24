// import SEO from './seo'
import PropTypes from 'prop-types'
import { ThemeProvider } from 'styled-components'

import GlobalStyle from '@styles/GlobalStyle'
import { theme } from '@styles/theme'

// TODO: SEO
const Container = ({
  children,
  // seo
}) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {/* <SEO title={seo} /> */}
      {children}
    </ThemeProvider>
  )
}

Container.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.element), PropTypes.element])
    .isRequired,
  seo: PropTypes.string.isRequired,
}

export default Container
