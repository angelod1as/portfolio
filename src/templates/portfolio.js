import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Container from '.';

import PortfolioSidebar from '../fragments/Portfolio/Sidebar';
import PortfolioMain from '../fragments/Portfolio';

const seo = "Angelo Dia's Portfolio";

const Portfolio = props => {
  const {
    location: { pathname },
    pageContext: {
      content: {
        data: {
          allMarkdownRemark: { edges },
        },
      },
    },
    data: {
      allMarkdownRemark: { edges: images },
    },
  } = props;

  return (
    <Container seo={seo}>
      <PortfolioSidebar />
      <PortfolioMain edges={edges} from={pathname} images={images} />
    </Container>
  );
};

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: { fields: { type: { eq: "portfolio" } } }
      sort: { order: DESC, fields: frontmatter___date }
    ) {
      edges {
        node {
          frontmatter {
            image {
              childImageSharp {
                id
                fluid(maxWidth: 800, maxHeight: 800, cropFocus: CENTER) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`;

Portfolio.propTypes = {
  pageContext: PropTypes.shape({
    content: PropTypes.shape({
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
      }),
    }),
  }).isRequired,
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.arrayOf(PropTypes.shape()),
    }),
  }).isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }).isRequired,
};

export default Portfolio;
