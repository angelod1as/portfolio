import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
// import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import Link from '../../components/Link';

const Container = styled.div`
  * {
    transition: all 0.2s !important;
  }
  figure {
    background-color: ${p => p.color};
    line-height: 0;
  }
  a {
    width: 100%;
    color: ${p => p.theme.color.black};
    text-decoration: none;
  }
  &:hover {
    a {
      text-decoration: underline;
      figure {
        div {
          transform: translate(10px, -10px);
        }
      }
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
    font-weight: 700;
  }
  p {
    font-size: 1em;
    margin: 0;
    span {
      font-size: 0.9em;
      font-style: italic;
      color: ${p => p.theme.color.darkgray};
      margin-left: 5px;
    }
  }
`;

const Figure = styled.figure`
  max-width: 500px;
`;

const Tile = props => {
  const { front, fullPath, from, color } = props;
  const { fluid } = front.image.childImageSharp;
  return (
    <Container color={color}>
      <Link to={fullPath} from={from}>
        <Figure>
          <Img fluid={fluid} />
        </Figure>
        <Text>
          <h2>{front.title}</h2>
          <p>
            {front.desc}
            <span>{front.date}</span>
          </p>
        </Text>
      </Link>
    </Container>
  );
};

Tile.propTypes = {
  color: PropTypes.string.isRequired,
  fullPath: PropTypes.string.isRequired,
  from: PropTypes.string,
  front: PropTypes.shape({
    image: PropTypes.shape({
      childImageSharp: PropTypes.shape({
        fluid: PropTypes.shape(),
      }),
    }),
    title: PropTypes.string,
    desc: PropTypes.string,
    date: PropTypes.string,
  }).isRequired,
};

Tile.defaultProps = {
  from: null,
};

export default Tile;
