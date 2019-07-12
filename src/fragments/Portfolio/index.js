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
  const { edges, nodes, from } = props;
  return (
    <Fade>
      <Mosaic className="portfolio">
        {edges.map((item, i) => {
          const front = item.node.frontmatter;
          const { fullPath } = nodes[i].fields;
          return <Tile key={uuid()} front={front} from={from} fullPath={fullPath} />;
        })}
        {edges.map((item, i) => {
          const front = item.node.frontmatter;
          const { fullPath } = nodes[i].fields;
          return <Tile key={uuid()} front={front} from={from} fullPath={fullPath} />;
        })}
        {edges.map((item, i) => {
          const front = item.node.frontmatter;
          const { fullPath } = nodes[i].fields;
          return <Tile key={uuid()} front={front} from={from} fullPath={fullPath} />;
        })}
      </Mosaic>
    </Fade>
  );
};

PortfolioMain.propTypes = {
  edges: PropTypes.arrayOf(
    PropTypes.shape({
      item: PropTypes.element,
    })
  ).isRequired,
  nodes: PropTypes.arrayOf(
    PropTypes.shape({
      fields: PropTypes.shape({
        slug: PropTypes.string,
      }),
    })
  ).isRequired,
  from: PropTypes.string,
};

PortfolioMain.defaultProps = {
  from: null,
};

export default PortfolioMain;
