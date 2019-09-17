import React from 'react';
// import PropTypes from 'prop-types';

import Container from '../components/container';

import Sidebar from '../components/Sidebar';

const seo = 'Erro 404';

const IndexPage = () => {
  return (
    <Container seo={seo}>
      <Sidebar title="Erro 404" />
      <div>
        <h1>Oops, acho que você chegou em uma página que não existe!</h1>
        <img
          src="https://img.shields.io/github/last-commit/angelod1as/portfolio?color=%2319006A"
          alt=""
          target="_blank"
          rel="noreferrer noopener"
        />
      </div>
    </Container>
  );
};

// IndexPage.propTypes = {
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

// IndexPage.defaultProps = {
//   location: {
//     state: {
//       from: null,
//     },
//   },
// };

export default IndexPage;
