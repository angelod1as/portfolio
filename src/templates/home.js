import React from 'react';
import PropTypes from 'prop-types';

import Container from '.';

import Opening from '../fragments/Home/Opening';
import Menu from '../fragments/Home/Menu';

const Home = props => {
  const {
    location: { pathname },
    pageContext: {
      content: {
        data: {
          allMarkdownRemark: { edges },
        },
      },
    },
  } = props;

  const menuItems = edges.map(({ node }) => {
    const { frontmatter, fields } = node;
    const { descGroup } = frontmatter;
    return { ...frontmatter, ...descGroup, ...fields };
  });

  const seo = "Angelo Dias's Portfolio";

  return (
    <Container center seo={seo}>
      <Opening />
      <Menu items={menuItems} from={pathname} />
    </Container>
  );
};

Home.propTypes = {
  pageContext: PropTypes.shape({
    content: PropTypes.shape({
      data: PropTypes.shape({
        allMarkdownRemark: PropTypes.shape({
          nodes: PropTypes.arrayOf(PropTypes.shape()),
          edges: PropTypes.arrayOf(
            PropTypes.shape({
              node: PropTypes.shape({
                frontmatter: PropTypes.shape({
                  date: PropTypes.string,
                  slug: PropTypes.string,
                  title: PropTypes.string,
                }),
              }),
            })
          ),
        }),
      }),
    }),
  }).isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }).isRequired,
};

export default Home;
