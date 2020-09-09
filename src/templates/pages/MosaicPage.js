import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import parse from 'html-react-parser';
import parserOptions from '../../components/parser';

import Mosaic from '../../fragments/Mosaic';
import Html from '../../components/html-styles';

import Container from '../../components/container';
import Sidebar from '../../components/Sidebar';
import { Content, Grid, SidebarHolder } from '../page.styles';

const NotFound = ({
  info: { seo, color, excerpt, live, path, contextType, title, from, html, items, summary },
}) => {
  const collection = items.edges.map(({ node }) => {
    if (contextType === 'projects') {
      const { frontmatter } = node;
      const { fullPath } = node.fields;
      const image = items.edges.filter(each => {
        const imageId = each.node.frontmatter.image.childImageSharp.id;
        return frontmatter.image.childImageSharp.id === imageId;
      });
      frontmatter.image.childImageSharp = image[0].node.frontmatter.image.childImageSharp;
      return {
        frontmatter,
        fullPath,
      };
    }
    return null;
  });

  const getContent = useCallback(pageType => {
    if (pageType === 'projects') {
      return <Mosaic items={collection} color={color} path={path} summary={summary} />;
    }
    return <Html color={color}>{parse(html, parserOptions())}</Html>;
  }, []);

  return (
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
        <Content>{getContent(contextType)}</Content>
      </Grid>
    </Container>
  );
};

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
    html: PropTypes.string,
    items: PropTypes.array,
    summary: PropTypes.string,
  }).isRequired,
};

export default NotFound;
