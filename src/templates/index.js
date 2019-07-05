import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';

import GlobalStyle from '../components/GlobalStyle';
import SEO from '../components/seo';

const theme = {
  color: {
    color: '#19006A',
    white: '#F4F4F4',
    black: '#333333',
    gray: '#CCCCCC',
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
  grid-template-columns: ${p => (p.center ? '50%' : '20%')} auto;
  height: 100%;
  transition: grid-template-columns 1s;

  & > div {
    padding: 40px;
    display: ${p => (p.center ? 'flex' : 'block')};
  }

  & > div:first-child {
    position: fixed;
    transition: all 1s;
    width: ${p => (p.center ? '50%' : '20%')};
    height: ${p => (p.center ? '100vh' : '100%')};

    background-color: ${p => (p.center ? p.theme.color.white : p.theme.color.color)};
    color: ${p => (p.center ? p.theme.color.black : p.theme.color.white)};
  }
  & > div:last-child {
    grid-column-start: 2;

    height: ${p => (p.center ? '100vh' : '100%')};

    transition: all 1s;
    /* width: ${p => (p.center ? '50%' : '80%')}; */
    background-color: ${p => (p.center ? p.theme.color.color : p.theme.color.white)};
    color: ${p => (p.center ? p.theme.color.white : p.theme.color.black)};
  }
`;

const Container = ({ children, center, seo }) => {
  return (
    <ThemeProvider theme={theme}>
      <Fragment>
        <GlobalStyle />
        <SEO title={seo} />
        <Main center={center}>
          <div>{children[0]}</div>
          <div>{children[1]}</div>
        </Main>
      </Fragment>
    </ThemeProvider>
  );
};

Container.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
  center: PropTypes.bool,
  seo: PropTypes.string.isRequired,
};

Container.defaultProps = {
  center: false,
};

export default Container;
