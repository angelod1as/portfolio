import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Main = styled.div`
  color: ${props => props.theme.color.black};
  background-color: ${props => props.theme.color.white};
  font-family: ${props => props.theme.font.display};

  height: 100%;
  display: flex;
`;

const Shifter = styled.div`
  &.left {
    width: 50%;
  }
  &.right {
    width: 50%;
    background-color: ${props => props.theme.color.color};
    color: ${props => props.theme.color.white};
  }
`;

const Container = props => {
  const { left, right } = props;

  return (
    <Main>
      <Shifter className="left">{left}</Shifter>
      <Shifter className="right">{right}</Shifter>
    </Main>
  );
};

Container.propTypes = {
  left: PropTypes.element.isRequired,
  right: PropTypes.element.isRequired,
};

export default Container;
