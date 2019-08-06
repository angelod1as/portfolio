import React from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid/v1';
import Fade from 'react-reveal/Fade';
import styled from 'styled-components';
// import { Link } from 'gatsby';
import size from '../../components/breakpoints';

import Tile from './Tile';

const Mosaic = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 50px;

  @media ${size.medium} {
    grid-template-columns: repeat(2, 1fr);
  }
  @media ${size.small} {
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 20px;
  }
`;

const PortfolioMain = props => {
  const { edges, from } = props;
  return (
    <Fade>
      <Mosaic className="portfolio">
        {edges.map(({ node }) => {
          const { frontmatter } = node;
          const { fullPath } = node.fields;
          return <Tile key={uuid()} front={frontmatter} from={from} fullPath={fullPath} />;
        })}
      </Mosaic>
    </Fade>
  );
};

PortfolioMain.propTypes = {
  edges: PropTypes.arrayOf(
    PropTypes.shape({
      node: PropTypes.shape({
        fields: PropTypes.shape({
          fullPath: PropTypes.string,
        }),
        frontmatter: PropTypes.shape(),
      }),
    })
  ).isRequired,
  from: PropTypes.string,
};

PortfolioMain.defaultProps = {
  from: null,
};

export default PortfolioMain;
