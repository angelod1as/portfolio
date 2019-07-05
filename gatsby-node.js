const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `content/portfolio` });
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    });
  }
};

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;

  // #########
  // PORTFOLIO
  // #########
  const getPortfolio = () => {
    return graphql(`
      {
        allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
    `);
  };

  const portfolioQl = await getPortfolio();

  if (portfolioQl.errors) throw new Error(portfolioQl.errors);

  createPage({
    path: '/portfolio',
    component: path.resolve('src/templates/portfolio.js'),
    context: {},
  });

  portfolioQl.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`src/templates/item.js`),
      context: {},
    });
  });
};
