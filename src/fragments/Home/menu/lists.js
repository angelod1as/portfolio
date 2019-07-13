import React from 'react';
import uuid from 'uuid/v1';
import { StaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Link from '../../../components/Link';

const Lists = ({ MenuItem }) => {
  return (
    <StaticQuery
      query={graphql`
        query ListQuery {
          allMarkdownRemark(filter: { fields: { type: { eq: "menu" } } }) {
            edges {
              node {
                html
                frontmatter {
                  title
                }
              }
            }
          }
        }
      `}
      render={data => {
        const item = data.allMarkdownRemark.edges.map(node => {
          return [node.node.frontmatter.title, node.node.html];
        });

        const print = item.map(list => (
          <MenuItem key={uuid()}>
            <p>{list[0]}</p>
            <div
              dangerouslySetInnerHTML={{
                __html: list[1]
                  .replace('<li><a href=', '<li class="listlink"><a href=')
                  .replace('<a href=', '<a class="bg" href='),
              }}
            />
          </MenuItem>
        ));

        return print;
      }}
    />
  );
};

Lists.propTypes = {
  MenuItem: PropTypes.shape().isRequired,
};

export default Lists;
