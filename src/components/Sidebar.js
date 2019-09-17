import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import parse from 'html-react-parser';
import Fade from 'react-reveal/Fade';

const H1 = styled.h1`
  font-weight: 700;
  margin: 30px 0;
  line-height: 1.3em;
  font-size: 24px;
`;

const Sidebar = ({ title, excerpt }) => {
  return (
    <>
      <H1>{title}</H1>
      {excerpt ? parse(excerpt) : ''}
      <p>==read more button==</p>
    </>
  );
};

Sidebar.propTypes = {
  title: PropTypes.string.isRequired,
  excerpt: PropTypes.string.isRequired,
};

export default Sidebar;
