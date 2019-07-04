import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Link from './Link';

const BackLink = styled.div`
  a {
    &:hover {
      transform: skewX(-15deg);
      i {
        transform: rotate(135deg) translate3d(5px, 5px, 0);
        border-color: ${p => p.theme.color.gray};
      }
    }
  }
`;

const Arrow = styled.i`
  border: solid ${p => p.theme.color.white};
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 4px;
  transform: rotate(135deg);
  margin-right: 5px;
  transition: all 0.2s;
`;

const Back = ({ to }) => {
  return (
    <BackLink>
      <Link direction="right" className="bg" to={to}>
        <Arrow />
        back
      </Link>
    </BackLink>
  );
};

Back.propTypes = {
  to: PropTypes.string.isRequired,
};

export default Back;
