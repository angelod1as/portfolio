const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.onCreateNode = async ({ node, getNode, actions }) => {
  const { createNodeField } = actions;

  // select only markdown
  if (node.internal.type === `MarkdownRemark`) {
    // Making type
    const makeType = () => {
      const split = node.fileAbsolutePath.split('content/')[1];
      let type = '';
      if (split.indexOf('/') > 0) {
        [type] = split.split('/');
      } else {
        type = 'pages';
      }
      return type;
    };

    const makeSlug = () => {
      const split = node.fileAbsolutePath.split('content/')[1];
      let slug = '';
      if (split.indexOf('/') > 0) {
        [, slug] = split.split('/');
      } else {
        slug = split;
      }
      return slug.replace('.md', '');
    };

    // create slugs
    await createNodeField({
      node,
      name: `slug`,
      value: makeSlug(),
    });

    // Making type
    await createNodeField({
      node,
      name: `type`,
      value: makeType(),
    });

    const basePath = `content`;

    // create fullPaths
    const fullPath = createFilePath({ node, getNode, basePath });

    await createNodeField({
      node,
      name: `fullPath`,
      value: fullPath,
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
        allMarkdownRemark(
          filter: { fields: { type: { eq: "portfolio" } } }
          sort: { order: DESC, fields: frontmatter___date }
        ) {
          edges {
            node {
              fields {
                type
                slug
                fullPath
              }
            }
          }
        }
      }
    `);
  };

  const portfolioQl = await getPortfolio();

  if (portfolioQl.errors) throw new Error(portfolioQl.errors);

  // creating main portfolio page
  createPage({
    path: '/portfolio',
    component: path.resolve('src/templates/portfolio.js'),
    context: {},
  });

  // creating each portfolio page
  portfolioQl.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.fullPath,
      component: path.resolve(`src/templates/item.js`),
      context: {},
    });
  });

  // #########
  // PORTFOLIO
  // #########
  const getHome = () => {
    return graphql(`
      {
        allMarkdownRemark(
          filter: { fields: { type: { eq: "pages" } } }
          sort: { order: DESC, fields: frontmatter___date }
        ) {
          edges {
            node {
              fields {
                type
                slug
                fullPath
              }
            }
          }
        }
      }
    `);
  };

  const homeQl = await getHome();

  if (homeQl.errors) throw new Error(homeQl.errors);

  // creating main home page
  createPage({
    path: '/',
    component: path.resolve('src/templates/home.js'),
    context: {},
  });

  // creating each sub pages
  homeQl.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.fullPath,
      component: path.resolve(`src/templates/item.js`),
      context: {},
    });
  });
};
