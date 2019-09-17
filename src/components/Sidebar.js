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

const Live = styled.div`
  color: ${p => p.theme.color.color};
  background-color: ${p => p.theme.color.darkgray};
  font-size: 1.3em;
  text-align: center;
  transition: all 0.2s;
  cursor: pointer;
  a {
    width: 100%;
    padding: 10px 20px;
    background-color: ${p => p.theme.color.white};
  }
  &:hover {
    a {
      color: ${p => p.theme.color.color};
      transform: translate(5px, -5px);
    }
  }
`;

const Sidebar = ({ title, excerpt, live }) => {
  return (
    <>
      <p>==some menu?==</p>
      <H1>{title}</H1>
      {excerpt ? parse(excerpt) : ''}
      {live ? (
        <Live>
          <a href={live} target="_blank" rel="noopener noreferrer">
            See it live
          </a>
        </Live>
      ) : (
        ''
      )}
      <p>==read more button==</p>
    </>
  );
};

Sidebar.propTypes = {
  title: PropTypes.string.isRequired,
  excerpt: PropTypes.string,
  live: PropTypes.string,
};

Sidebar.defaultProps = {
  excerpt: null,
  live: null,
};

export default Sidebar;
