// Template of Journal pages, which are generated
// dynamically by gatsby-node.js from /files.

import React from "react"
import Layout from "./layout"
import { Divider, Grid, makeStyles, Typography } from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  bodyText: {
    [theme.breakpoints.up("sm")]: {
      maxWidth: "60vw",
    },
  },
  bodyContainer: {
    justifyContent: "center",
    minWidth: "80vw",
  },
}))

// pageContext is destructured from the context passed
// to each Journal page by the createPage function in
// gatsby-node.js.
const JournalTemplate = ({ pageContext }) => {
  const classes = useStyles
  const { body } = pageContext
  return (
    <Layout>
      <Divider />
      <Grid container className={classes.bodyContainer}>
        <Grid item>
          <Typography variant="body1" className={classes.bodyText}>
            Welcome to my Journal pages. This is where I provide some brief
            commentary on the projects in my portfolio. Rather than being
            instructional, it's a quick way to look under the hood without
            needing to dive into the code on GitHub. But please do that as well!
            Below are some links to my other Journal pages.
          </Typography>
          <Divider />
        </Grid>
        <Grid item>
          <div
            dangerouslySetInnerHTML={{ __html: body }}
            className={classes.bodyText}
          />
        </Grid>
      </Grid>
    </Layout>
  )
}

export default JournalTemplate
