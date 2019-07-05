import React from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid/v1';
import Fade from 'react-reveal/Fade';
// import { Link } from 'gatsby';
import Link from '../../components/Link';

const PortfolioMain = props => {
  const { edges, nodes, from } = props;
  return (
    <Fade>
      <div className="portfolio">
        <div>
          {edges.map((item, i) => {
            const front = item.node.frontmatter;
            const { slug } = nodes[i].fields;
            return (
              <div key={uuid()}>
                <Link to={slug} from={from}>
                  {front.title}
                </Link>
              </div>
            );
          })}
        </div>
      </div>
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
