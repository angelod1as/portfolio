import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
// import { graphql } from 'gatsby';
// import Img from 'gatsby-image';
import Link from '../../components/Link';

const Container = styled.div`
  * {
    transition: all 0.2s;
  }
  figure {
    background-color: ${p => p.theme.color.color};
    line-height: 0;
  }
  &:hover {
    a {
      transform: none;
      img {
        /* transform: scale(0.97); */
        transform: translate(10px, -10px);
      }
    }
    h2 {
      transform: skewX(-15deg);
    }
  }
  img {
    width: 100%;
    height: auto;
  }
`;

const Text = styled.div`
  margin-top: 10px;
  h2 {
    font-size: 1.3em;
    margin-bottom: 5px;
  }
  p {
    font-size: 1em;
    span {
      font-size: 0.9em;
      font-weight: 700;
      color: ${p => p.theme.color.darkgray};
    }
  }
`;

const Tile = props => {
  const { front, fullPath, from } = props;
  return (
    <Container>
      <Link to={fullPath} from={from}>
        <figure>
          <img src={front.image} alt="" />
        </figure>
        <Text>
          <h2>{front.title}</h2>
          <p>
            {front.desc}
            &nbsp;
            <span>{front.date}</span>
          </p>
        </Text>
      </Link>
    </Container>
  );
};

Tile.propTypes = {
  fullPath: PropTypes.string.isRequired,
  from: PropTypes.string,
  front: PropTypes.shape({
    image: PropTypes.string,
    title: PropTypes.string,
    desc: PropTypes.string,
    date: PropTypes.string,
  }).isRequired,
};

Tile.defaultProps = {
  from: null,
};

export default Tile;
