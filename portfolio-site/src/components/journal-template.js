import React from "react"
import Layout from "./layout"
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

const JournalTemplate = ({ pageContext }) => {
  const classes = useStyles
  const { body } = pageContext
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

export default JournalTemplate
