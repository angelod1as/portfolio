const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);
const { fmImagesToRelative } = require('gatsby-remark-relative-images');

// hardcoding slugfy because of ES6 issue
const slugfy = (word, options = { hyphens: true, url: true }) => {
  const hyphens = typeof options.hyphens !== 'undefined' ? options.hyphens : true;
  const url = typeof options.url !== 'undefined' ? options.url : true;
  const from = 'ªãàáäâẽèéëêìíïîºõòóöôøùúüûñç';
  const to = 'aaaaaaeeeeeiiiiooooooouuuunc';

  let w = word
    .toLowerCase()
    .trim()
    .replace(/\$/g, 's');

  if (url) {
    w = w
      .replace(/1º/g, 'primeiro')
      .replace(/2º/g, 'segundo')
      .replace(/(\d)%/g, '$1-por-cento')
      .replace(/%/g, 'porcentagem');
  }

  for (let i = 0, l = from.length; i < l; i += 1) {
    w = w.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
  }

  if (hyphens) {
    return w.replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
  }
  return w.replace(/[^a-z0-9]+/g, '');
};

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
      return slugfy(type);
    };

    const makeSlug = () => {
      const split = node.fileAbsolutePath.split('content/')[1];
      let slug = '';
      if (split.indexOf('/') > 0) {
        [, slug] = split.split('/');
      } else {
        slug = split;
      }
      return slugfy(slug.replace('.mdx', '').replace('.md', ''));
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
      value: slugfy(fullPath),
    });
  }
};

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;

  // Important:
  // The context is passed as props to the component as well
  // as into the component's GraphQL query.

  // creating home subpages
  const getHomeTiles = () => {
    return graphql(`
      query {
        allMarkdownRemark(
          filter: { fields: { type: { eq: "home" } } }
          sort: { fields: frontmatter___order, order: ASC }
        ) {
          nodes {
            id
            frontmatter {
              title
              order
            }
          }
        }
      }
    `);
  };

  const homeTiles = await getHomeTiles();

  if (homeTiles.errors) throw new Error(homeTiles.errors);

  // #########
  // SUBPAGES
  // #########
  homeTiles.data.allMarkdownRemark.nodes.forEach(node => {
    createPage({
      path: node.frontmatter.title,
      component: path.resolve(`src/templates/portfolio.js`),
      context: {
        id: node.id,
        title: node.frontmatter.title,
      },
    });
  });

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
                  descGroup {
                    desc
                    longdesc
                  }
                  live
                  tags
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
  // HOME
  // #########
  // creating main home page
  // has to be last in order
  createPage({
    path: '/',
    component: path.resolve('src/templates/home.js'),
  });

  // // #########
  // // PAGES
  // // #########
  // const getHome = () => {
  //   return graphql(`
  //     {
  //       allMarkdownRemark(
  //         filter: { fields: { type: { eq: "pages" } } }
  //         sort: { order: DESC, fields: frontmatter___date }
  //       ) {
  //         edges {
  //           node {
  //             frontmatter {
  //               title
  //               date(formatString: "MMMM DD, YYYY")
  //               menu
  //               descGroup {
  //                 desc
  //                 longdesc
  //               }
  //               order
  //             }
  //             fields {
  //               slug
  //               type
  //               fullPath
  //             }
  //           }
  //         }
  //       }
  //     }
  //   `);
  // };

  // const homeQl = await getHome();

  // if (homeQl.errors) throw new Error(homeQl.errors);

  // // creating each sub pages
  // homeQl.data.allMarkdownRemark.edges.forEach(({ node }) => {
  //   createPage({
  //     path: node.fields.fullPath,
  //     component: path.resolve(`src/templates/item.js`),
  //     context: {
  //       content: node,
  //     },
  //   });
  // });
};
