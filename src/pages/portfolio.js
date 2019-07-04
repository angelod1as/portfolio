import React from 'react';

import Container from '../layouts';

import PortfolioSidebar from '../fragments/Portfolio/Sidebar';
import PortfolioMain from '../fragments/Portfolio';

const seo = '';

const About = () => (
  <Container seo={seo}>
    <PortfolioSidebar />
    <PortfolioMain />
  </Container>
);

export default About;
