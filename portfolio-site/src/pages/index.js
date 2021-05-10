import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"

import {
  Avatar,
  Divider,
  IconButton,
  Card,
  CardActions,
  CardActionArea,
  CardHeader,
  CardContent,
  Grid,
  Typography,
} from "@material-ui/core"
import GitHubIcon from "@material-ui/icons/GitHub"
import LaunchIcon from "@material-ui/icons/Launch"
import { makeStyles } from "@material-ui/core/styles"
import portfolioPic from "../images/portfolioPic.png"
import projectsInfo from "../projects/info"

const useStyles = makeStyles(() => ({
  bio: {
    display: "flex",
    "margin-top": 0,
  },
  avatar: {
    margin: "0 15px 15px 0",
  },
  root: {
    maxWidth: 345,
    margin: "20px 0 20px 0",
  },
  media: {
    height: "50vh",
    paddingTop: "56.25%", // 16:9
  },
  cardHeader: {
    "padding-bottom": 0,
  },
  cardActions: {
    padding: 0,
  },
  cardContent: {
    "padding-bottom": "5px",
  },
}))

const Home = ({ data }) => {
  const classes = useStyles()

  return (
    <Layout>
      <div className={classes.bio}>
        <Avatar
          className={classes.avatar}
          src={portfolioPic}
          name="profile-pic"
          alt="Nick"
        />
        <p className={classes.bio}>
          Hi! I recently graduated from the fullstack developer bootcamp at
          Northcoders. Here you can find some of the projects that are keeping
          me busy.
        </p>
      </div>
      <Divider />
      <Typography variant="h5" style={{ padding: "15px" }}>
        Projects
      </Typography>
      <Grid container justify="space-evenly">
        {projectsInfo.map(({ stack, title, body, links, imageUrl }) => {
          return (
            <Card className={classes.root}>
              <CardActionArea>
                <CardHeader
                  className={classes.cardHeader}
                  avatar={
                    <Avatar
                      aria-label="stack avatar"
                      className={classes.avatar}
                    >
                      {stack}
                    </Avatar>
                  }
                  title={title}
                />
                <CardContent className={classes.cardContent}>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {body}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className={classes.cardActions} disableSpacing>
                <IconButton
                  component="a"
                  href={links.site}
                  target="_blank"
                  rel="noopener"
                  aria-label="Site"
                >
                  <LaunchIcon />
                </IconButton>
                <IconButton
                  component="a"
                  href={links.gitHub}
                  target="_blank"
                  rel="noopener"
                  aria-label="GitHub"
                >
                  <GitHubIcon />
                </IconButton>
              </CardActions>
            </Card>
          )
        })}
      </Grid>
    </Layout>
  )
}

export default Home

export const query = graphql`
  query MyQuery {
    allMarkdownRemark {
      edges {
        node {
          html
        }
      }
    }
  }
`
