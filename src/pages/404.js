import React from 'react';
// import PropTypes from 'prop-types';

import Page from '../templates/page';

const notFound = () => {
  return (
    <Page
      type="notFound"
      notFound
      pageContext={{ type: 'notFound' }}
      data={{
        pageInfo: {
          frontmatter: {
            title: '404',
            live: null,
          },
          excerpt: null,
          html: null,
        },
      }}
      path="/"
    />
  );
};

// notFound.propTypes = {
//   location: PropTypes.shape({
//     state: PropTypes.shape({
//       from: PropTypes.string,
//     }),
//   }),
//   data: PropTypes.shape({
//     markdownRemark: PropTypes.shape({
//       frontmatter: PropTypes.shape(),
//       html: PropTypes.string,
//     }),
//   }).isRequired,
// };

// notFound.defaultProps = {
//   location: {
//     state: {
//       from: null,
//     },
//   },
// };

export default notFound;
