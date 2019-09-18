import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import parse from 'html-react-parser';
import styled from 'styled-components';

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
    data: {
      pageInfo: {
        frontmatter: { title, type },
        excerpt,
        html,
      },
      items,
    },
  } = props;

  const seo = `Angelo Dias does ${title}`;

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

  const color = colors[Math.floor(Math.random() * colors.length)];

  if (type === 'projects') {
    return (
      <Container seo={seo}>
        <Grid>
          <SidebarHolder color={color}>
            <Sidebar title={title} excerpt={excerpt} color={color} />
          </SidebarHolder>
          <Content>
            <Mosaic items={collection} color={color} />
          </Content>
        </Grid>
      </Container>
    );
  }
  return (
    <Container seo={seo}>
      <Grid>
        <SidebarHolder color={color}>
          <Sidebar title={title} color={color} />
        </SidebarHolder>
        <Content>
          <Html color={color}>{parse(html)}</Html>
        </Content>
      </Grid>
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
        tags
        live
        type
      }
      excerpt(format: HTML)
      html
    }
    items: allMarkdownRemark(filter: { frontmatter: { tags: { in: [$title] } } }) {
      edges {
        node {
          frontmatter {
            date(formatString: "MMM D, YYYY")
            desc
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

Page.propTypes = {
  data: PropTypes.shape().isRequired,
  pageContext: PropTypes.shape({
    type: PropTypes.string.isRequired,
  }).isRequired,
};

export default Page;
