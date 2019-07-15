import React from 'react';
// import PropTypes from 'prop-types';

import Container from '../templates';

import Main from '../layouts/Main';
import Sidebar from '../components/Sidebar';

const seo = 'Erro 404';

const IndexPage = () => {
  return (
    <Container seo={seo}>
      <Sidebar back="/" title="Erro 404" />
      <Main>
        <h1>Oops, acho que você chegou em uma página que não existe!</h1>
      </Main>
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
