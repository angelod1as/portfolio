import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import Container from '.';

import Item from '../fragments/Item';
import ItemSidebar from '../fragments/Item/Sidebar';

const seo = '';

const IndexPage = props => {
  // getting last page url
  const {
    data,
    location: { state },
  } = props;
  const from = state ? state.from || null : null;

  // getting data
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;

  // returning
  return (
    <Container seo={seo}>
      <ItemSidebar {...frontmatter} from={from} />
      <Item html={html} {...frontmatter} />
    </Container>
  );
};

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(fields: { fullPath: { eq: $path } }) {
      html
      frontmatter {
        title
        menu
        date(formatString: "DD/MM/YY")
        category
        desc
        thumb
        longdesc
        tags
        query
      }
    }
  }
`;

IndexPage.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      from: PropTypes.string,
    }),
  }),
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.shape(),
      html: PropTypes.string,
    }),
  }).isRequired,
};

IndexPage.defaultProps = {
  location: {
    state: {
      from: null,
    },
  },
};

export default IndexPage;
