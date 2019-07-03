import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import Back from './Back';

const H2 = styled.h2`
  margin: 30px 0;
`;

const Sidebar = ({ back, title, children }) => {
  return (
    <Fade delay={400}>
      <div>
        <Back to={back} />
        <H2>{title}</H2>
        {children}
      </div>
    </Fade>
  );
};

Sidebar.propTypes = {
  back: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Sidebar;
