import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import parse from 'html-react-parser';
import Sidebar from '../components/Sidebar';

import Container from '.';

const Html = styled.div`
  padding-bottom: 100px;
  height: 100%;
  & > * {
    max-width: 920px;
  }
  & > img {
    max-width: 100%;
  }

  h1 {
    font-size: 2.5em;
    font-weight: 700;
    margin: 0 0 40px 0;
  }

  iframe + h1,
  picture + h1 {
    margin-top: 20px;
  }

  h2 {
    font-weight: 700;
    margin: 40px 0 20px 0;
  }

  p {
    font-weight: 300;
  }

  img {
    width: 100%;
    height: auto;
  }

  iframe {
    width: 100%;
    max-width: 920px;
    height: 517px;
  }

  & > figure:first-child {
    margin-top: 0;
  }

  figure {
    margin: 30px 0;
    max-width: 920px;

    &.margin {
      picture {
        span {
          margin: 20px 0;
        }
        &:first-child {
          span {
            margin-top: 0;
          }
        }
      }
    }

    &.small {
      max-width: 300px;
    }

    &.medium {
      max-width: 600px;
    }

    &.big,
    &.full {
      max-width: 100%;
    }

    &.large {
      max-width: 920px;
    }

    &.center {
      margin: 0 auto;
      text-align: center;
      & > p {
        text-align: center;
      }
    }

    &.mosaic {
      display: grid;
      grid-gap: 10px;
      grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
      img {
        border: 1px solid ${p => p.theme.color.gray};
      }
      &.nobg {
        img {
          border: none;
        }
      }

      &.medium {
        grid-template-columns: repeat(auto-fit, minmax(190px, 1fr));
      }

      &.large {
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      }

      &.four {
        grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      }

      &.five {
        grid-template-columns: repeat(auto-fit, minmax(170px, 1fr));
      }
    }

    & > p {
      font-style: italic;
    }
  }
`;

const IndexPage = props => {
  const {
    data: {
      markdownRemark: {
        html,
        frontmatter: { title },
      },
    },
  } = props;

  const seo = `Angelo Dias does ${title}`;

  // returning
  return (
    <Container seo={seo}>
      <Sidebar title={title} />
      <Html>{parse(html)}</Html>
    </Container>
  );
};

export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        tags
        live
      }
    }
  }
`;

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.shape(),
      html: PropTypes.string,
    }),
  }).isRequired,
};

IndexPage.defaultProps = {};

export default IndexPage;
