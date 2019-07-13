import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Link from './Link';

const BackLink = styled.div`
  a {
    padding-left: 20px;
    position: relative;
    &:before {
      content: '‹';
      top: -6px;
      left: 0;
      position: absolute;
      font-size: 1.5em;
    }
    &:hover {
      &:before {
        content: '«';
      }
    }
  }
`;

const Back = ({ to }) => {
  return (
    <BackLink>
      <Link direction="right" className="bg" to={to}>
        {/* <Arrow /> */}
        back
      </Link>
    </BackLink>
  );
};

Back.propTypes = {
  to: PropTypes.string.isRequired,
};

export default Back;
