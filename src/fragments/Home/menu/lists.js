import React from 'react';
import uuid from 'uuid/v1';
import { StaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';

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
                  order
                }
              }
            }
          }
        }
      `}
      render={data => {
        const item = data.allMarkdownRemark.edges.map(node => {
          const { title, order } = node.node.frontmatter;
          return [title, node.node.html, order];
        });

        const print = item.map(list => (
          <MenuItem order={list[2]} key={uuid()}>
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

        print.sort((a, b) => ((a.props.order || 0) > (b.props.order || 0) ? 1 : -1));

        return print;
      }}
    />
  );
};

Lists.propTypes = {
  MenuItem: PropTypes.shape().isRequired,
};

export default Lists;
