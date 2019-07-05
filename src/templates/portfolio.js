import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Container from '.';

import PortfolioSidebar from '../fragments/Portfolio/Sidebar';
import PortfolioMain from '../fragments/Portfolio';

const seo = '';

const Portfolio = ({ data, location: { pathname } }) => {
  const { edges, nodes } = data.allMarkdownRemark;
  return (
    <Container seo={seo}>
      <PortfolioSidebar />
      <PortfolioMain edges={edges} nodes={nodes} from={pathname} />
    </Container>
  );
};

export const pageQuery = graphql`
  {
    allMarkdownRemark(filter: { fields: { type: { eq: "portfolio" } } }) {
      nodes {
        fields {
          slug
          type
          fullPath
        }
      }
      edges {
        node {
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            category
            test
            menu
            desc
            thumb
            longdesc
            query
          }
        }
      }
    }
  }
`;

Portfolio.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      nodes: PropTypes.arrayOf(PropTypes.shape()),
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            frontmatter: PropTypes.shape({
              date: PropTypes.string,
              slug: PropTypes.string,
              title: PropTypes.string,
            }),
          }),
        })
      ),
    }),
  }).isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }).isRequired,
};

export default Portfolio;
