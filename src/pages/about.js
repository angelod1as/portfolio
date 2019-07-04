import React from 'react';

import Container from '../layouts';

import AboutSidebar from '../fragments/About/Sidebar';
import AboutMain from '../fragments/About';

const seo = '';

const About = () => (
  <Container seo={seo}>
    <AboutSidebar />
    <AboutMain />
  </Container>
);

export default About;
