import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import { Divider, Grid, makeStyles } from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  bodyText: {
    [theme.breakpoints.up("sm")]: {
      maxWidth: "60vw",
    },
  },
  bodyContainer: {
    justifyContent: "center",
  },
}))

const about = ({ data }) => {
  const classes = useStyles
  const body = data.markdownRemark.html
  return (
    <Layout>
      <Divider />
      <Grid container className={classes.bodyContainer}>
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

export default about

export const query = graphql`
  query MyQuery {
    markdownRemark(frontmatter: { title: { eq: "About" } }) {
      html
    }
  }
`
