const path = require(`path`);

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  const itemTemplate = path.resolve(`src/templates/item.js`);

  return graphql(`
    {
      allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }, limit: 1000) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors);
    }

    return result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: itemTemplate,
        context: {}, // additional data can be passed via context
      });
    });
  });
};
