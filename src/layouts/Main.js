import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';

const Main = ({ children }) => {
  return <Fade>{children}</Fade>;
};

Main.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Main;
