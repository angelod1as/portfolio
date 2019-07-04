import React from 'react';

import Container from '../layouts';

import Opening from '../fragments/Home/Opening';
import Menu from '../fragments/Home/Menu';

// const IndexPage = () => (
//   <Layout>
//     <SEO title="Home" />
//     <h1>Hi people</h1>
//     <p>Welcome to your new Gatsby site.</p>
//     <p>Now go build something great.</p>
//     <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
//       <Image />
//     </div>
//     <Link to="/page-2/">Go to page 2</Link>
//   </Layout>
// );
const seo = '';

const IndexPage = () => (
  <Container center seo={seo}>
    <Opening />
    <Menu />
  </Container>
);

export default IndexPage;
