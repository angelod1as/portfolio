import React from 'react';
import { graphql } from 'gatsby';

import Container from '../layouts';

import PortfolioSidebar from '../fragments/Portfolio/Sidebar';
import PortfolioMain from '../fragments/Portfolio';

const seo = '';

const About = ({ data }) => {
  return (
    <Container seo={seo}>
      <PortfolioSidebar />
      <PortfolioMain />
    </Container>
  );
};

export const query = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          fileAbsolutePath
          frontmatter {
            title
            path
            date
          }
        }
      }
    }
  }
`;

export default About;
