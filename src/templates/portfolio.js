import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Container from '.';

import PortfolioSidebar from '../fragments/Portfolio/Sidebar';
import PortfolioMain from '../fragments/Portfolio';

const seo = '';

const Portfolio = ({ data }) => {
  const { edges, nodes } = data.allMarkdownRemark;
  return (
    <Container seo={seo}>
      <PortfolioSidebar />
      <PortfolioMain edges={edges} nodes={nodes} />
    </Container>
  );
};

export const pageQuery = graphql`
  query {
    allMarkdownRemark {
      nodes {
        fields {
          slug
        }
      }
      edges {
        node {
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
          }
        }
      }
    }
  }
`;

Portfolio.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
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
};

export default Portfolio;
