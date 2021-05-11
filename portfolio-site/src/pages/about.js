import React from "react"
import Layout from "../components/layout"
import {
  Box,
  Divider,
  Paper,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Typography,
} from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles({
  table: {},
})

const About = () => {
  const classes = useStyles
  return (
    <Layout>
      <Box>
        <Typography variant="h5">
          Hi, I'm Nick, welcome to my portfolio!
          <br />
        </Typography>
        <Divider />
        <Typography>
          <br />
          <em>
            You can take a look at the things I've been working on in the
            Projects page, where you'll find links to my GitHub repos and hosted
            sites.
          </em>
        </Typography>
        <Typography variant="h6">
          <br />
          Some of my skills...
        </Typography>
        <br />
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="skills">
            <TableHead>
              <TableRow>
                <TableCell>
                  <Typography variant="h6">Backend</Typography>
                </TableCell>
                <TableCell />
                <TableCell />
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell></TableCell>
                <TableCell>JavaScript</TableCell>
                <TableCell>Node.js, Express, Knex, Heroku</TableCell>
              </TableRow>
              <TableRow>
                <TableCell></TableCell>
                <TableCell>SQL</TableCell>
                <TableCell>postgreSQL for querying servers</TableCell>
              </TableRow>
            </TableBody>
            <TableHead>
              <TableRow>
                <TableCell>
                  <Typography variant="h6">Frontend</Typography>
                </TableCell>
                <TableCell />
                <TableCell />
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell></TableCell>
                <TableCell>React, React Native, Gatsby</TableCell>
                <TableCell>
                  mobile app development, portfolio site, smaller projects
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell></TableCell>
                <TableCell>HTML5, CSS3</TableCell>
                <TableCell>flexbox and grid</TableCell>
              </TableRow>
              <TableRow>
                <TableCell></TableCell>
                <TableCell>graphQL</TableCell>
                <TableCell>
                  hydrating Gatsby sites with images and .md files
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Layout>
  )
}

export default About
