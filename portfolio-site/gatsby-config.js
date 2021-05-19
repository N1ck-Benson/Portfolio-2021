// All installed plugins must be added to config manually.
// -> gatsby-source-filesystem enables graphql queries of the FS.
// -> gatsby-transformer remark parses .md files into HTML.
// -> gatsby-remark-autolink-headers adds links to html
// headers from markdown (for linking with URI fragments).

module.exports = {
  flags: { PRESERVE_WEBPACK_CACHE: true },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `GatsbyJS`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#6b37bf`,
        theme_color: `#6b37bf`,
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: `standalone`,
        icon: `src/images/icon.png`,
      },
    },
    "gatsby-plugin-material-ui",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-autolink-headers",
            options: {
              maintainCase: true,
              elements: ["h2", "h3"],
            },
          },
        ],
      },
    },
  ],
}
