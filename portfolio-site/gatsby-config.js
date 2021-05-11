module.exports = {
  /* Your site config here */
  plugins: [
    "gatsby-plugin-material-ui",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    "gatsby-transformer-remark",
  ],
}
