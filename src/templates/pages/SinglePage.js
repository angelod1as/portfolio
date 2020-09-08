import React from 'react';
import PropTypes from 'prop-types';

import Container from '../../components/container';
import Sidebar from '../../components/Sidebar';
import { Content, Grid, SidebarHolder } from '../page.styles';

const SinglePage = ({
  info: { seo, color, excerpt, live, path, contextType, title, from },
  children,
}) => (
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
          singlePage
        />
      </SidebarHolder>
      <Content>{children}</Content>
    </Grid>
  </Container>
);

SinglePage.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
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

export default SinglePage;
