const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);
const { fmImagesToRelative } = require('gatsby-remark-relative-images');

exports.onCreateNode = async ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  fmImagesToRelative(node);

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
      return slug.replace('.mdx', '').replace('.md', '');
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
  const checkQuery = async query => {
    const ql = await graphql(query);
    return ql.data.allMarkdownRemark.edges.length > 0;
  };
  // check if pages exist
  if (
    await checkQuery(`
    query {
      allMarkdownRemark(
        filter: { fields: { type: { eq: "portfolio" } } }
        sort: { order: DESC, fields: frontmatter___date }
      ) {
        edges {
          node {
            id
          }
        }
      }
    }
  `)
  ) {
    const getPortfolio = () => {
      return graphql(`
        query {
          allMarkdownRemark(
            filter: { fields: { type: { eq: "portfolio" } } }
            sort: { order: DESC, fields: frontmatter___date }
          ) {
            edges {
              node {
                id
                frontmatter {
                  date(formatString: "MMMM DD, YYYY")
                  title
                  menu
                  descGroup {
                    desc
                    longdesc
                  }
                  image {
                    childImageSharp {
                      id
                    }
                  }
                }
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
      context: {
        content: portfolioQl,
      },
    });

    // creating each portfolio page
    portfolioQl.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.fields.fullPath,
        component: path.resolve(`src/templates/item.js`),
        context: {
          content: node,
        },
      });
    });
  }

  // #########
  // PAGES
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
              frontmatter {
                title
                date(formatString: "MMMM DD, YYYY")
                menu
                descGroup {
                  desc
                  longdesc
                }
                order
              }
              fields {
                slug
                type
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
    context: {
      content: homeQl,
    },
  });

  // creating each sub pages
  homeQl.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.fullPath,
      component: path.resolve(`src/templates/item.js`),
      context: {
        content: node,
      },
    });
  });
};
