import React from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';

import GlobalStyle from './GlobalStyle';
import SEO from './seo';
import size from './breakpoints';

const theme = {
  color: {
    color: '#19006A',
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

const Main = styled.div`
  color: ${props => props.theme.color.black};
  background-color: ${props => props.theme.color.white};
  font-family: ${props => props.theme.font.display};

  display: grid;
  grid-template-columns: 20% auto;
  height: 100%;

  & > div {
    padding: 40px;
    display: block;
  }

  & > div:first-child {
    position: fixed;
    width: 20%;
    height: 100%;

    background-color: ${p => p.color};
    color: ${p => p.theme.color.white};
  }
  & > div:last-child {
    grid-column-start: 2;
    /* height: 100%; */

    background-color: ${p => p.theme.color.white};
    color: ${p => p.theme.color.black};
  }

  @media ${size.medium} {
    display: block;
    height: 100%;
    & > div:first-child {
      display: block;
      position: relative;
      width: 100%;
      height: auto;
    }
    & > div:last-child {
      display: block;
      width: 100%;
      /* height: 100%; */
    }
  }
`;

const Container = ({ children, home, seo, color }) => {
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
  home: PropTypes.bool,
  seo: PropTypes.string.isRequired,
  color: PropTypes.string,
};

Container.defaultProps = {
  home: false,
  color: '',
};

export default Container;
