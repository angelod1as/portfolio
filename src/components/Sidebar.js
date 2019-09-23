import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import parse from 'html-react-parser';
import Fade from 'react-reveal/Fade';
import { Link } from 'gatsby';

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

const Back = styled(Link)`
  padding-left: 20px;
  position: relative;
  color: ${p => p.theme.color.white};
  text-decoration: none;
  font-weight: bold;
  &:before {
    content: '‹';
    top: -6px;
    left: 0;
    position: absolute;
    font-size: 1.5em;
  }
  &:hover {
    color: ${p => p.theme.color.white};
    &:before {
      content: '«';
    }
  }
`;

const ReadMore = styled(Link)``;

const Sidebar = ({ from, type, title, excerpt, live, path }) => {
  if (type === 'projects') {
    return (
      <>
        <Back to="/">back</Back>
        <H1>{title}</H1>
        {excerpt ? parse(excerpt) : ''}
        <ReadMore to={`${path}about`}>Read more</ReadMore>
      </>
    );
  }
  if (type === 'project' || type === 'text') {
    return (
      <>
        {from ? <Back to={from}>back</Back> : <Back to="/">back</Back>}
        <H1>{title}</H1>
        {live ? (
          <Live>
            <a href={live} target="_blank" rel="noopener noreferrer">
              See it live
            </a>
          </Live>
        ) : (
          ''
        )}
      </>
    );
  }
  const backPath = path.replace('/about', '');
  return (
    <>
      <Back to={backPath}>back</Back>
      <H1>About: {title}</H1>
    </>
  );
};

Sidebar.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  excerpt: PropTypes.string,
  live: PropTypes.string,
};

Sidebar.defaultProps = {
  excerpt: null,
  live: null,
};

export default Sidebar;
