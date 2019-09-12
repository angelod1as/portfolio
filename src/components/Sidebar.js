import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import Back from './Back';

const H1 = styled.h1`
  font-weight: 700;
  margin: 30px 0;
  line-height: 1.3em;
  font-size: 24px;
`;

const Sidebar = ({ back, title, children }) => {
  return (
    <Fade>
      <div>
        <Back to={back} />
        <H1>{title}</H1>
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
