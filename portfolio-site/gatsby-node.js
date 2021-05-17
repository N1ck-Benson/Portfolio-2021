exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const localPath = require("path")

  return graphql(`
    query journalPages {
      allMarkdownRemark(
        filter: { frontmatter: { directory: { eq: "files" } } }
      ) {
        nodes {
          frontmatter {
            title
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
        slug === "about"
          ? localPath.resolve("src/components/about-template.js")
          : localPath.resolve("src/components/journal-template.js")
      createPage({
        path: slug,
        component: template,
        context: { title: title, body: html },
      })
    })
  })
}
