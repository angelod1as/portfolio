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
    const filePath = createFilePath({ node, getNode, basePath });
    const fullPath = filePath.includes('/home/') ? filePath.replace('/home/', '') : filePath;

    await createNodeField({
      node,
      name: `fullPath`,
      value: fullPath,
    });
  }
};

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;

  // Important:
  // The context is passed as props to the component as well
  // as into the component's GraphQL query.

  // #########
  // SUBPAGES
  // #########
  const getHomeTiles = () => {
    return graphql(`
      query {
        allMarkdownRemark(
          filter: { fields: { type: { eq: "home" } } }
          sort: { fields: frontmatter___order, order: ASC }
        ) {
          nodes {
            id
            fields {
              slug
              type
              fullPath
            }
            frontmatter {
              title
              order
              type
            }
          }
        }
      }
    `);
  };

  const homeTiles = await getHomeTiles();

  if (homeTiles.errors) throw new Error(homeTiles.errors);

  homeTiles.data.allMarkdownRemark.nodes.forEach(node => {
    const {
      id,
      frontmatter: { type, title },
      fields: { fullPath },
    } = node;

    createPage({
      path: fullPath,
      component: path.resolve(`src/templates/page.js`),
      context: {
        id,
        title,
        type,
      },
    });

    createPage({
      path: `${fullPath}about`,
      component: path.resolve(`src/templates/page.js`),
      context: {
        id,
        title,
        type: 'about',
      },
    });
  });

  // #########
  // PROJECTS
  // #########
  const getProjects = () => {
    return graphql(`
      query {
        allMarkdownRemark(
          filter: { fields: { type: { eq: "projects" } } }
          sort: { order: DESC, fields: frontmatter___date }
        ) {
          edges {
            node {
              id
              frontmatter {
                title
              }
              fields {
                fullPath
              }
            }
          }
        }
      }
    `);
  };

  const projectsQl = await getProjects();

  if (projectsQl.errors) throw new Error(projectsQl.errors);

  // creating each project page
  projectsQl.data.allMarkdownRemark.edges.forEach(({ node }) => {
    const {
      id,
      frontmatter: { title },
      fields: { fullPath },
    } = node;
    createPage({
      path: fullPath,
      component: path.resolve(`src/templates/page.js`),
      context: {
        id,
        title,
        type: 'project',
      },
    });
  });

  // #########
  // HOME
  // #########

  // creating main home page
  // has to be last in order
  createPage({
    path: '/',
    component: path.resolve('src/templates/home.js'),
  });
};
