import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import colors from '../components/colors';

import NotFoundPage from './pages/NotFound';
import SinglePage from './pages/SinglePage';
import MosaicPage from './pages/MosaicPage';

const Page = ({
  children,
  notFound,
  pageContext: { type: contextType },
  location,
  data: {
    pageInfo: {
      frontmatter: { title, live },
      excerpt,
      html,
    },
    items,
  },
  path,
}) => {
  const { state } = location;
  let from = null;
  if (state) {
    from = state.from;
  }

  const seo = `Angelo Dias > ${title}`;

  const color = colors[Math.floor(Math.random() * colors.length)];

  if (notFound || contextType === 'notFound') {
    return (
      <NotFoundPage
        info={{
          seo,
          color,
          excerpt,
          live,
          path,
          contextType,
          title,
          from,
        }}
      />
    );
  }

  if (contextType === 'singlepage') {
    return (
      <SinglePage
        info={{
          seo,
          color,
          excerpt,
          live,
          path,
          contextType,
          title,
          from,
        }}
      >
        {children}
      </SinglePage>
    );
  }

  return (
    <MosaicPage
      info={{
        seo,
        color,
        excerpt,
        live,
        path,
        contextType,
        title,
        from,
        html,
        items,
      }}
    />
  );
};

export const query = graphql`
  query($id: String!, $tag: [String]) {
    pageInfo: markdownRemark(id: { eq: $id }) {
      id
      frontmatter {
        title
        tags
        live
        type
      }
      excerpt(format: HTML)
      html
    }
    items: allMarkdownRemark(
      filter: { frontmatter: { tags: { in: $tag } } }
      sort: { order: DESC, fields: frontmatter___date }
    ) {
      edges {
        node {
          frontmatter {
            date(formatString: "MMM D, YYYY")
            desc
            title
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

Page.propTypes = {
  children: PropTypes.node,
  notFound: PropTypes.bool,
  data: PropTypes.shape().isRequired,
  path: PropTypes.string.isRequired,
  location: PropTypes.shape({
    state: PropTypes.shape({
      from: PropTypes.string,
    }),
  }),
  pageContext: PropTypes.shape({
    type: PropTypes.string.isRequired,
  }).isRequired,
};

Page.defaultProps = {
  children: null,
  notFound: false,
  location: {
    state: {
      from: null,
    },
  },
};

export default Page;
