import React from "react"
import Layout from "../components/layout"
import {
  Avatar,
  Divider,
  IconButton,
  Card,
  CardActionArea,
  CardHeader,
  CardContent,
  CardActions,
  Grid,
  Typography,
} from "@material-ui/core"
import GitHubIcon from "@material-ui/icons/GitHub"
import LaunchIcon from "@material-ui/icons/Launch"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
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

const projectsList = [
  {
    stack: "B",
    title: "NC News API",
    body:
      "My first fully-functioning backend project! An API serving news articles with nine useful endpoints. Soon to be expanded on frontend... Working in Node.js, Express, PSQL & Knex",
    links: {
      gitHub: "https://github.com/N1ck-Benson/backend-nc-news",
      site: "https://nc-news-database.herokuapp.com/api",
    },
    imageUrl: "../images/code-sample-1.png",
  },
  {
    stack: "F",
    title: "Blurble Mobile",
    body:
      "I worked in a team on this platform for hosting book clubs, using React Native. Blurble lets book clubs read together virtually, and lets readers build communities around books they love.",
    links: {
      gitHub: "https://github.com/N1ck-Benson/Blurble",
      site: "...",
    },
    imageUrl: "../images/code-sample-2.webp",
  },
  {
    stack: "F",
    title: "Portfolio Site",
    body:
      "My portfolio is a space where I'm trying out tech like Gatsby, graphQL and Material-UI. See my progress on GitHub and in the Journal section below.",
    links: {
      gitHub: "https://github.com/N1ck-Benson/portfolio",
      site: "",
    },
    imageUrl: "../images/code-sample-3.webp",
  },
]

const Home = () => {
  const classes = useStyles()
  return (
    <Layout>
      <div className={classes.bio}>
        <Avatar
          className={classes.avatar}
          src="../images/portfolioPic.png"
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
        {projectsList.map(({ stack, title, body, links, imageUrl }) => {
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
