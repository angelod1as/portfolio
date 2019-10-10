import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { graphql, Link } from 'gatsby';
import uuid from 'uuid/v1';

import Container from '../components/container';
import colors from '../components/colors';
import sizes from '../components/breakpoints';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
`;

const Tile = styled(Link)`
  display: block;
  width: 100%;
  @media ${sizes.large} {
    width: 100vw;
  }
  padding-bottom: 100%;
  position: relative;
  color: ${p => p.theme.color.white};
  background-color: ${p => p.theme.color.white};
  &:hover {
    color: ${p => p.theme.color.white};
  }
`;

const Inside = styled.div`
  background-color: ${p => p.color};
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10%;
  @media ${sizes.medium} {
    padding: 0;
    align-items: center;
    text-align: center;
  }
  transition: 0.2s transform;

  &:hover {
    transform: scale(0.98);
  }
`;

const Text = styled.p`
  margin: 0;
  padding: 0;
  font-weight: bold;
  font-size: 3em;
  font-family: ${p => p.theme.font.display};
`;

const Small = styled(Text)`
  font-size: 1.5em;
  @media ${sizes.large} {
    font-size: 1.2em;
  }
`;

const Big = styled(Text)`
  @media ${sizes.large} {
    font-size: 2.3em;
  }
`;

const Home = ({
  data: {
    allMarkdownRemark: { nodes },
  },
}) => {
  return (
    <Container seo="Angelo Dias's Portfolio" home>
      <Grid>
        {nodes.map((node, i) => {
          const {
            frontmatter: { title, noIDo },
            fields: { fullPath },
          } = node;
          let link = `/${fullPath}`;
          if (node.frontmatter.redir) {
            link = node.frontmatter.redir;
          }
          if (title === 'stuff') {
            return (
              <Tile to={link} key={uuid()}>
                <Inside color={colors[i % colors.length]}>
                  <Big>I'm angelo</Big>
                  <Big>
                    and I do <i>stuff</i>
                  </Big>
                  <Small>
                    (<i>please</i> click for more)
                  </Small>
                </Inside>
              </Tile>
            );
          }
          return (
            <Tile to={link} key={uuid()}>
              <Inside color={colors[i % colors.length]}>
                {noIDo ? '' : <Small>I do</Small>}
                <Big>{title}</Big>
              </Inside>
            </Tile>
          );
        })}
      </Grid>
    </Container>
  );
};

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: { fields: { type: { eq: "home" } } }
      sort: { fields: frontmatter___order, order: ASC }
    ) {
      nodes {
        id
        fields {
          fullPath
        }
        frontmatter {
          title
          order
          noIDo
          redir
        }
      }
    }
  }
`;

Home.propTypes = {
  data: PropTypes.shape().isRequired,
};

export default Home;
