import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import parse from 'html-react-parser';
import styled from 'styled-components';

import parserOptions from '../components/parser';
import Container from '../components/container';

import Sidebar from '../components/Sidebar';
import Mosaic from '../fragments/Mosaic';
import Html from '../components/html-styles';
import size from '../components/breakpoints';
import colors from '../components/colors';

const width = '20%';

const Grid = styled.div`
  color: ${props => props.theme.color.black};
  background-color: ${props => props.theme.color.white};
  font-family: ${props => props.theme.font.display};
  height: 100%;

  display: grid;
  grid-template-areas: 'sidebar content';
  grid-template-columns: ${width} auto;
  position: relative;

  @media ${size.medium} {
    display: block;
    height: 100%;
  }
`;

const SidebarHolder = styled.div`
  grid-area: sidebar;

  padding: 40px;
  position: fixed;
  width: 20%;
  height: 100%;

  background-color: ${p => p.color};
  color: ${p => p.theme.color.white};

  @media ${size.medium} {
    display: block;
    position: relative;
    width: 100%;
    height: auto;
  }
`;

const Content = styled.div`
  grid-area: content;

  padding: 40px;
  background-color: ${p => p.theme.color.white};
  color: ${p => p.theme.color.black};

  @media ${size.medium} {
    display: block;
    width: 100%;
  }
`;

const Page = props => {
  const {
    notFound,
    pageContext,
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
  } = props;

  console.log(pageContext);

  const { state } = location;
  let from = null;
  if (state) {
    from = state.from;
  }

  const seo = `Angelo Dias does ${title}`;

  const color = colors[Math.floor(Math.random() * colors.length)];

  if (!notFound) {
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

    const getContent = pageType => {
      if (pageType === 'projects') return <Mosaic items={collection} color={color} path={path} />;
      return <Html color={color}>{parse(html, parserOptions())}</Html>;
    };

    return (
      <Container seo={seo}>
        <Grid>
          <SidebarHolder color={color}>
            <Sidebar
              excerpt={excerpt}
              live={live}
              path={path}
              type={contextType}
              title={title}
              color={color}
              from={from}
            />
          </SidebarHolder>
          <Content>
            {notFound ? (
              <>
                <h2>Page not found</h2>
                <p>Click on the "back" link to go... well, back.</p>
              </>
            ) : (
              getContent(contextType)
            )}
          </Content>
        </Grid>
      </Container>
    );
  }
  return (
    <Container seo={seo}>
      <Grid>
        <SidebarHolder color={color}>
          <Sidebar
            excerpt={excerpt}
            live={live}
            path={path}
            type={contextType}
            title={title}
            color={color}
            from={from}
          />
        </SidebarHolder>
        <Content>
          <h2>Page not found</h2>
          <p>Click on the "back" link to go... well, back.</p>
        </Content>
      </Grid>
    </Container>
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
  notFound: false,
  location: {
    state: {
      from: null,
    },
  },
};

export default Page;
