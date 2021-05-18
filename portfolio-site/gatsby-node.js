exports.createPages = ({ graphql, actions }) => {
  // The path module is imported for a path.resolve() below.
  // path.resolve is a node.js method for resolving path segments
  // to an absolute path.
  const localPath = require("path")
  const { createPage } = actions

  return graphql(`
    query journalPages {
      allMarkdownRemark(
        filter: { frontmatter: { directory: { eq: "files" } } }
      ) {
        nodes {
          frontmatter {
            slug
          }
          html
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      throw result.errors
    }
    result.data.allMarkdownRemark.nodes.forEach(node => {
      const { title, slug } = node.frontmatter
      const { html } = node
      const template =
        slug === "/about"
          ? localPath.resolve("src/components/about-template.js")
          : localPath.resolve("src/components/journal-template.js")
      createPage({
        path: slug,
        component: template,
        context: { body: html },
      })
    })
  })
}
