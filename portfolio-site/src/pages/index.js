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
    alignItems: "center",
    margin: "0 0 10px 0",
    maxWidth: "40vw",
  },
  avatar: {
    margin: "10px 10px 10px 10px",
  },
  portfolioPic: {
    margin: "10px 20px 10px 10px",
    height: "100px",
    width: "auto",
  },
  root: {
    maxWidth: 345,
    margin: "20px 0 20px 0",
  },
  cardHeader: {
    padding: 0,
    alignContent: "center",
  },
  cardActions: {
    padding: 0,
  },
  cardContent: {
    "padding-bottom": "5px",
  },
  skillIcons: {
    margin: "15px 15px 0 15px",
    display: "flex",
    alignContent: "center",
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
          className={classes.portfolioPic}
          src={portfolioPic}
          name="profile-pic"
          alt="Nick"
        />
        <p>
          Hi! I recently graduated from the fullstack developer bootcamp at
          Northcoders. Here you can find some of the projects that are keeping
          me busy.
        </p>
      </div>
      <Divider />
      <div className={classes.skillIcons}>
        <Typography variant="h5" style={{ padding: "15px" }}>
          Projects
        </Typography>
        <p className={"MuiTypography-colorTextSecondary"}>Frontend | Backend</p>
      </div>
      <Grid container justify="space-evenly">
        {data.allMarkdownRemark.edges.map(({ node }) => {
          const icons = node.frontmatter.icons.split(",")
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
                <Divider />
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
  query projectsQuery {
    allMarkdownRemark(filter: { frontmatter: { title: { ne: "About" } } }) {
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
