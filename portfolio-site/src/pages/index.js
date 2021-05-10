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
  skillIcons: {
    margin: "0 15px 0 15px",
  },
  skillIcon: {
    height: "50px",
    padding: "5px",
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
        {data.allMarkdownRemark.edges.map(({ node }) => {
          const icons = node.frontmatter.icons.split(",")
          console.log(icons)
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
                      {node.frontmatter.stack}
                    </Avatar>
                  }
                  title={node.frontmatter.title}
                />
                <div className={classes.skillIcons}>
                  {icons.map(iconUrl => {
                    return (
                      <img
                        className={classes.skillIcon}
                        src={iconUrl}
                        alt="Skill"
                      />
                    )
                  })}
                </div>
                <CardContent className={classes.cardContent}>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {node.rawMarkdownBody}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className={classes.cardActions} disableSpacing>
                <IconButton
                  component="a"
                  href={node.frontmatter.site}
                  target="_blank"
                  rel="noopener"
                  aria-label="Site"
                >
                  <LaunchIcon />
                </IconButton>
                <IconButton
                  component="a"
                  href={node.frontmatter.gitHub}
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
          frontmatter {
            title
            stack
            site
            gitHub
            icons
          }
          rawMarkdownBody
        }
      }
    }
  }
`
