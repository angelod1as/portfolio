import React, { Component, Fragment } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';

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
`;

const Shifter = styled.div`
  /* transition: width 1s; */
  &.center {
    background-color: lightblue;
  }
  &.right {
    /* width: 50%; */
    background-color: ${props => props.theme.color.color};
    color: ${props => props.theme.color.white};
  }

  &.left,
  &.right {
    transition: width 2s ease;
    width: 0%;
    &.open {
      /* transition: width 1s ease; */
      width: 100%;
    }
  }
`;

class Container extends Component {
  constructor() {
    super();
    this.state = {
      open: 'left',
    };
  }

  handleClick() {
    const { open } = this.state;
    this.setState({ open: open === 'left' ? 'right' : 'left' });
  }

  render() {
    const { left, right, division, bg } = this.props;
    const { open } = this.state;

    const leftClass = `
      left
      ${open === 'left' ? 'open' : ''}
    `;

    const rightClass = `
    right
    ${open === 'right' ? 'open' : ''}
  `;
    return (
      <Fragment>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <Main>
            <Shifter className={leftClass}>
              <Fade>{left}</Fade>
            </Shifter>
            <Shifter className="center">
              <Fade>
                {open === 'left' ? right : left}
                <Link to="about">
                  <button type="button" onClick={() => this.handleClick()}>
                    hora de morfar!
                  </button>
                </Link>
              </Fade>
            </Shifter>
            <Shifter className={rightClass}>
              <Fade>{right}</Fade>
            </Shifter>
          </Main>
        </ThemeProvider>
      </Fragment>
    );
  }
}

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
