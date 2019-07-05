import React from 'react';
import PropTypes from 'prop-types';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import { Link } from 'gatsby';
import { withTheme } from 'styled-components';

const CustomLink = ({ children, direction, className, color, to, theme }) => {
  const mainColor = theme.color.color;

  return (
    <AniLink cover direction={direction} className={className} bg={color || mainColor} to={to}>
      {/* <Link to={to}> */}
      {children}
      {/* </Link> */}
    </AniLink>
  );
};

CustomLink.propTypes = {
  children: PropTypes.node.isRequired,
  // theme: PropTypes.shape({
  //   color: PropTypes.shape({
  //     color: PropTypes.string,
  //   }),
  // }).isRequired,
  to: PropTypes.string.isRequired,
  direction: PropTypes.string,
  className: PropTypes.string,
  color: PropTypes.string,
};

CustomLink.defaultProps = {
  direction: 'right',
  className: null,
  color: null,
};

export default withTheme(CustomLink);
