import React from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid/v1';
// import { Link } from 'gatsby';
import Link from '../../components/Link';

const PortfolioMain = props => {
  const { edges, nodes } = props;
  return (
    <div className="portfolio">
      <div>
        {edges.map((item, i) => {
          const front = item.node.frontmatter;
          const { slug } = nodes[i].fields;
          console.log(slug);
          // const url = node.fileAbsolutePath.split('.md')[0].split('/src')[1];
          return (
            <div key={uuid()}>
              <Link to={slug}>{front.title}</Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

PortfolioMain.propTypes = {
  // data: PropTypes.arrayOf(
  //   PropTypes.shape({
  //     item: PropTypes.element,
  //   })
  // ).isRequired,
};

export default PortfolioMain;
