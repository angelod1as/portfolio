import React from 'react';
import PropTypes from 'prop-types';

import Container from '../../components/container';
import Sidebar from '../../components/Sidebar';
import { Content, Grid, SidebarHolder } from '../page.styles';

const NotFound = ({ info: { seo, color, excerpt, live, path, contextType, title, from } }) => (
  <Container seo={seo}>
    <Grid>
      <SidebarHolder color={color}>
        <Sidebar
          excerpt={excerpt}
          live={live}
          path={path}
          type={contextType}
          title={title}
          color={color}
          from={from}
        />
      </SidebarHolder>
      <Content>
        <h2>Page not found</h2>
        <p>Click on the "back" link to go... well, back.</p>
      </Content>
    </Grid>
  </Container>
);

NotFound.propTypes = {
  info: PropTypes.shape({
    seo: PropTypes.string,
    color: PropTypes.string,
    excerpt: PropTypes.string,
    live: PropTypes.string,
    path: PropTypes.string,
    contextType: PropTypes.string,
    title: PropTypes.string,
    from: PropTypes.string,
  }).isRequired,
};

export default NotFound;
