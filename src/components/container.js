import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from './GlobalStyle';
import SEO from './seo';

const theme = {
  color: {
    color: '#333333',
    white: '#FFFFFF',
    black: '#333333',
    gray: '#CCCCCC',
    darkgray: '#A9A9A9',
  },
  font: {
    display: 'Montserrat Alternates',
    text: 'Montserrat',
  },
};

const Container = ({ children, seo, color }) => {
  theme.color.color = color;

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <SEO title={seo} />
        {children}
      </>
    </ThemeProvider>
  );
};

Container.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.element), PropTypes.element])
    .isRequired,
  seo: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default Container;
