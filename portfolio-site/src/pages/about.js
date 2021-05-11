import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import { Divider, Grid, makeStyles } from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  body: {
    [theme.breakpoints.up("sm")]: {
      maxWidth: "60vw",
    },
  },
}))

const about = ({ data }) => {
  const classes = useStyles
  const body = data.markdownRemark.html
  return (
    <Layout>
      <Divider />
      <Grid container>
        <Grid item>
          <div
            dangerouslySetInnerHTML={{ __html: body }}
            className={classes.body}
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
