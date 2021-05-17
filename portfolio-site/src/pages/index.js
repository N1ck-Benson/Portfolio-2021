import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import htmlCssIcon from "../images/htmlCssIcon.png"

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

const useStyles = makeStyles(theme => ({
  bio: {
    display: "flex",
    alignItems: "center",
    margin: "0 0 10px 0",
  },
  bioText: {
    [theme.breakpoints.up("md")]: {
      maxWidth: "33vw",
    },
  },
  avatar: {
    margin: "10px 10px 10px 10px",
    flexGrow: 0,
    flexShrink: 0,
  },
  portfolioPic: {
    [theme.breakpoints.down("sm")]: {
      margin: "10px 20px 10px 0",
    },
    margin: "10px 20px 10px 10px",
    height: "110px",
    width: "115px",
  },
  projectsHeader: {
    display: "flex",
    alignItems: "center",
    "& span": {
      marginBottom: "25px",
    },
  },
  card: {
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
    alignContent: "space-evenly",
  },
  skillIcon: {
    height: "50px",
    width: "auto",
    padding: "5px",
  },
}))

const Home = ({ data }) => {
  const classes = useStyles()

  return (
    <Layout>
      <Grid container className={classes.bio}>
        <Grid item>
          <Avatar
            className={classes.portfolioPic}
            src={portfolioPic}
            name="profile-pic"
            alt="Nick"
          />
        </Grid>
        <Grid item xs>
          <p className={classes.bioText}>
            Hi! I recently graduated from the fullstack developer bootcamp at
            Northcoders. Here you can find some of the projects that are keeping
            me busy.
          </p>
        </Grid>
      </Grid>
      <Divider />
      <header className={classes.projectsHeader}>
        <Typography variant="h5" style={{ padding: "15px" }}>
          Projects
        </Typography>
        <span className={"MuiTypography-colorTextSecondary"}>
          Frontend | Backend
        </span>
      </header>
      <Grid container justify="space-evenly" spacing={2}>
        {data.allMarkdownRemark.edges.map(({ node }) => {
          const skills = node.frontmatter.skills.split(",")
          const icons = node.frontmatter.icons.split(",")
          const { stack, title, site, gitHub } = node.frontmatter
          return (
            <Grid item key={title}>
              <Card className={classes.card}>
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
                  <Divider />
                  <div className={classes.skillIcons}>
                    {icons.map((iconUrl, index) => {
                      return (
                        <img
                          className={classes.skillIcon}
                          src={
                            iconUrl !== " htmlCssIcon" ? iconUrl : htmlCssIcon
                          }
                          alt={skills[index]}
                          title={skills[index]}
                          key={`icon${index}`}
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
                    href={site}
                    target="_blank"
                    rel="noopener"
                    aria-label="Site"
                  >
                    <LaunchIcon />
                    <Typography
                      variant="overline"
                      color="textSecondary"
                      component="p"
                    >
                      &nbsp; Site
                    </Typography>
                  </IconButton>
                  <IconButton
                    component="a"
                    href={gitHub}
                    target="_blank"
                    rel="noopener"
                    aria-label="GitHub"
                  >
                    <GitHubIcon />
                    <Typography
                      variant="overline"
                      color="textSecondary"
                      component="p"
                    >
                      &nbsp; GitHub
                    </Typography>
                  </IconButton>
                </CardActions>
              </Card>
            </Grid>
          )
        })}
      </Grid>
    </Layout>
  )
}

export default Home

export const query = graphql`
  query projectsQuery {
    allMarkdownRemark(
      filter: { frontmatter: { directory: { eq: "projects" } } }
    ) {
      edges {
        node {
          frontmatter {
            title
            stack
            gitHub
            site
            skills
            icons
          }
          rawMarkdownBody
        }
      }
    }
  }
`
