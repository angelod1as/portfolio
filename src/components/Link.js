import React from 'react';
import PropTypes from 'prop-types';
// import AniLink from 'gatsby-plugin-transition-link/AniLink';
import { Link } from 'gatsby';
import { withTheme } from 'styled-components';

const CustomLink = props => {
  const {
    children,
    className,
    // direction,
    // color,
    to,
    from,
    // theme
  } = props;

  // const transition = false;
  // console.log('link', from);

  // if (transition) {
  //   const mainColor = theme.color.color;
  //   return (
  //     <AniLink cover direction={direction} className={className} bg={color || mainColor} to={to}>
  //       {children}
  //     </AniLink>
  //   );
  // }
  return (
    <Link to={to} className={className} state={{ from }}>
      {children}
    </Link>
  );
};

CustomLink.propTypes = {
  children: PropTypes.node.isRequired,
  theme: PropTypes.shape({
    color: PropTypes.shape({
      color: PropTypes.string,
    }),
  }).isRequired,
  to: PropTypes.string.isRequired,
  from: PropTypes.string,
  className: PropTypes.string,
  // direction: PropTypes.string,
  // color: PropTypes.string,
};

CustomLink.defaultProps = {
  className: null,
  from: null,
  // color: null,
  // direction: 'right',
};

export default withTheme(CustomLink);
