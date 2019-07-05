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
  const { date, title } = frontmatter;

  // returning
  return (
    <Container seo={seo}>
      <ItemSidebar date={date} title={title} from={from} />
      <Item html={html} />
    </Container>
  );
};

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(fields: { slug: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
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
      frontmatter: PropTypes.shape({
        date: PropTypes.string,
        title: PropTypes.string,
      }),
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
