import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Container from '.';

import Sidebar from '../components/Sidebar';
import PortfolioMain from '../fragments/Portfolio';

const seo = "Angelo Dias' Portfolio";

const Portfolio = props => {
  const {
    location: { pathname },
    data: {
      markdownRemark: {
        frontmatter: { title, color },
        excerpt,
      },
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

  // const items = edges.map(({ node }) => {
  //   const { frontmatter } = node;
  //   const { fullPath } = node.fields;
  //   const image = images.filter(each => {
  //     const imageId = each.node.frontmatter.image.childImageSharp.id;
  //     return frontmatter.image.childImageSharp.id === imageId;
  //   });
  //   frontmatter.image.childImageSharp = image[0].node.frontmatter.image.childImageSharp;
  //   return {
  //     frontmatter,
  //     fullPath,
  //   };
  // });

  return (
    <Container color={color} seo={seo}>
      <Sidebar title={title} excerpt={excerpt} />
      <div>oi</div>
      {/* <PortfolioMain items={items} from={pathname} /> */}
    </Container>
  );
};

export const query = graphql`
  query($id: String) {
    markdownRemark(id: { eq: $id }) {
      id
      frontmatter {
        title
        color
      }
      excerpt(format: HTML)
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
//             image {
//               childImageSharp {
//                 id
//                 fluid(maxWidth: 800, maxHeight: 800, cropFocus: CENTER) {
//                   ...GatsbyImageSharpFluid
//                 }
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// `;

Portfolio.propTypes = {
  location: PropTypes.shape().isRequired,
  data: PropTypes.shape().isRequired,
};

export default Portfolio;
