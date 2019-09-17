import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Container from '.';

import Sidebar from '../components/Sidebar';
import PortfolioMain from '../fragments/Portfolio';

const seo = "Angelo Dias' Portfolio";

const Portfolio = props => {
  const {
    data: {
      pageInfo: {
        frontmatter: { title, color },
        excerpt,
      },
      items,
    },
    // pageContext: {
    //   content: {
    //     data: {
    //       allMarkdownRemark: { edges },
    //     },
    //   },
    // },
    // data: {
    //   allMarkdownRemark: { edges: images },
    // },
  } = props;

  const collection = items.edges.map(({ node }) => {
    const { frontmatter } = node;
    const { fullPath } = node.fields;
    const image = items.edges.filter(each => {
      const imageId = each.node.frontmatter.image.childImageSharp.id;
      return frontmatter.image.childImageSharp.id === imageId;
    });
    frontmatter.image.childImageSharp = image[0].node.frontmatter.image.childImageSharp;
    return {
      frontmatter,
      fullPath,
    };
  });

  return (
    <Container color={color} seo={seo}>
      <Sidebar title={title} excerpt={excerpt} />
      <PortfolioMain items={collection} />
    </Container>
  );
};

export const query = graphql`
  query($id: String!, $title: String!) {
    pageInfo: markdownRemark(id: { eq: $id }) {
      id
      frontmatter {
        title
        color
      }
      excerpt(format: HTML)
    }
    items: allMarkdownRemark(filter: { frontmatter: { tags: { in: [$title] } } }) {
      edges {
        node {
          frontmatter {
            title
            color
            tags
            image {
              childImageSharp {
                id
                fluid(maxWidth: 800, maxHeight: 800, cropFocus: CENTER) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          fields {
            slug
            type
            fullPath
          }
        }
      }
    }
  }
`;

// export const query = graphql`
//   query {
//     allMarkdownRemark(
//       filter: { fields: { type: { eq: "portfolio" } } }
//       sort: { order: DESC, fields: frontmatter___date }
//     ) {
//       edges {
//         node {
//           frontmatter {

//         }
//       }
//     }
//   }
// `;

Portfolio.propTypes = {
  data: PropTypes.shape().isRequired,
};

export default Portfolio;
