import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Link from '../../components/Link';

const Container = styled.div`
  &:hover {
    background-color: red;
    a {
      transform: none;
    }
    p {
      transform: skewX(-15deg);
    }
  }
  p {
    margin: 0;
  }
  img {
    width: 100%;
    height: auto;
  }
`;

const Tile = props => {
  const { front, fullPath, from } = props;
  console.log(front);
  return (
    <Container>
      <Link to={fullPath} from={from}>
        <img src={front.thumb} alt="" />
        <p>{front.title}</p>
      </Link>
    </Container>
  );
};

// Tile.propTypes = {
//   from: PropTypes.string,
// };

export default Tile;
