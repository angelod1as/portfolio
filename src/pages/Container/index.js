import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

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
    display: flex;
  }

  & > div:first-child {
    position: fixed;
    transition: all 1s;
    width: ${p => (p.center ? '50%' : '20%')};
    height: 100vh;

    background-color: ${p => (p.center ? p.theme.color.white : p.theme.color.color)};
    color: ${p => (p.center ? p.theme.color.black : p.theme.color.white)};
  }
  & > div:last-child {
    grid-column-start: 2;

    transition: all 1s;
    /* width: ${p => (p.center ? '50%' : '80%')}; */
    background-color: ${p => (p.center ? p.theme.color.color : p.theme.color.white)};
    color: ${p => (p.center ? p.theme.color.white : p.theme.color.black)};
  }
`;

const Container = props => {
  const { left, right, center } = props;

  return (
    <Main center={center}>
      <div>{left}</div>
      <div>{right}</div>
    </Main>
  );
};

Container.propTypes = {
  left: PropTypes.element.isRequired,
  right: PropTypes.element.isRequired,
  center: PropTypes.bool,
};

Container.defaultProps = {
  center: false,
};

export default Container;
