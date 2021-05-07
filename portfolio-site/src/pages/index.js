import React from "react"
import Layout from "../components/layout"
import {
  Paper,
  Avatar,
  IconButton,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
} from "@material-ui/core"
import FavoriteIcon from "@material-ui/icons/Favorite"
import ShareIcon from "@material-ui/icons/Share"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
}))

const projectsList = [
  {
    stack: "F",
    title: "NC News",
    body: "here's a quick description",
    links: {
      gitHub: "...",
      site: "...",
    },
    imageUrl: "../images/code-sample-1.webp",
  },
  {
    stack: "FS",
    title: "portfolio",
    body: "here's another quick description",
    links: {
      gitHub: "...",
      site: "...",
    },
    imageUrl: "../images/code-sample-2.webp",
  },
  {
    stack: "B",
    title: "Blurble",
    body: "here's one last quick description",
    links: {
      gitHub: "...",
      site: "...",
    },
    imageUrl: "../images/code-sample-3.webp",
  },
]

const Index = () => {
  const classes = useStyles()
  return (
    <Layout>
      <Paper variant="outlined">
        <Typography variant="body1">
          Hi! I recently graduated from the full-stack developer bootcamp at
          Northcoders, and am actively seeking new opportunities. I’m working
          mainly in Node.js, but primed to add new tech to my toolbelt and
          develop skills on both front- and back-end.
        </Typography>
      </Paper>
      {projectsList.map(({ stack, title, body, links, imageUrl }) => {
        return (
          <Card className={classes.root}>
            <CardHeader
              avatar={
                <Avatar aria-label="stack avatar" className={classes.avatar}>
                  {stack}
                </Avatar>
              }
              title={title}
            />
            <CardMedia
              className={classes.media}
              image={imageUrl}
              title={title}
            />
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                {body}
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="Site">
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="GitHub">
                <ShareIcon />
              </IconButton>
            </CardActions>
          </Card>
        )
      })}
    </Layout>
  )
}

export default Index
