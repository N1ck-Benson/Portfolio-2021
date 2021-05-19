// Template of Journal pages, which are generated
// dynamically by gatsby-node.js from /files.

import React from "react"
import Layout from "./layout"
import { Grid, Paper, Typography } from "@material-ui/core"

// pageContext is destructured from the context passed
// to each Journal page by the createPage function in
// gatsby-node.js.
const JournalTemplate = ({ pageContext }) => {
  const { body } = pageContext
  return (
    <Layout>
      <Grid container justify="center">
        <Grid item>
          <Paper className="journalIntro">
            <Typography variant="body1">
              Welcome to my Journal pages, where you can find more information
              about my projects. (More pages on the way!)
            </Typography>
            <Typography variant="body1">
              It's a quick way to look under the hood before you dive into the
              code on GitHub.
            </Typography>
          </Paper>
        </Grid>
        <Grid item className="bodyText">
          <div dangerouslySetInnerHTML={{ __html: body }} />
        </Grid>
      </Grid>
    </Layout>
  )
}

export default JournalTemplate
