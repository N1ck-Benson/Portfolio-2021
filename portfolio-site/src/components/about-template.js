// Template of the About page, which is generated dynamically
// by gatsby-node.js from the about.md file in /files.

import React from "react"
import Layout from "./layout"
import { Grid } from "@material-ui/core"

// pageContext is destructured from the context passed
// to About by the createPage function in gatsby-node.js.
const About = ({ pageContext }) => {
  const { body } = pageContext
  return (
    <Layout>
      <Grid container justify="center">
        <Grid item className="bodyText">
          <div dangerouslySetInnerHTML={{ __html: body }} />
        </Grid>
      </Grid>
    </Layout>
  )
}

export default About
