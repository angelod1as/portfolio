import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Container from '.';

import Opening from '../fragments/Home/Opening';
import Menu from '../fragments/Home/Menu';

const seo = '';

const Home = ({ data, location: { pathname } }) => {
  const { edges, nodes } = data.allMarkdownRemark;

  const menuItems = edges.map((items, i) => {
    const { frontmatter } = items.node;
    const paths = nodes[i].fields;
    return { ...frontmatter, ...paths };
  });
  return (
    <Container center seo={seo}>
      <Opening />
      <Menu items={menuItems} from={pathname} />
    </Container>
  );
};

export const pageQuery = graphql`
  {
    allMarkdownRemark(filter: { fields: { type: { eq: "pages" } } }) {
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
            title
            date(formatString: "MMMM DD, YYYY")
            category
            menu
            desc
            longdesc
            order
          }
        }
      }
    }
  }
`;

Home.propTypes = {
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

export default Home;
