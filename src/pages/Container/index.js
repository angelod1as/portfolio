import React, { Fragment } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';

import GlobalStyle from '../../components/GlobalStyle';

const theme = {
  color: {
    color: '#19006A',
    white: '#F4F4F4',
    black: '#333333',
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

  height: 100%;
  display: flex;

  .left {
    width: 50%;
  }
  .right {
    width: 50%;
    background-color: ${props => props.theme.color.color};
    color: ${props => props.theme.color.white};
  }
`;

const Container = props => {
  const { left, right, division, bg } = props;
  return (
    <Fragment>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Main>
          <div className="left">{left}</div>
          <div className="right">{right}</div>
        </Main>
      </ThemeProvider>
    </Fragment>
  );
};

Container.propTypes = {
  left: PropTypes.element.isRequired,
  right: PropTypes.element.isRequired,
  division: PropTypes.string,
  bg: PropTypes.string,
};

Container.defaultProps = {
  division: 'left',
  bg: 'left',
};

export default Container;
