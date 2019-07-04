import React from 'react';

import Container from '../layouts';

import Opening from '../fragments/Home/Opening';
import Menu from '../fragments/Home/Menu';

const seo = '';

const IndexPage = () => (
  <Container center seo={seo}>
    <Opening />
    <Menu />
  </Container>
);

export default IndexPage;
