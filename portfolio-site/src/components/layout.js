// Gatsby takes this component as a wrapper for all site pages.
// Pages include index.js, and those dynamically
// rendered by gatsby-node.js from .md files in the /files directory.
import React from "react"
import { Link } from "gatsby"
import {
  AppBar,
  CssBaseline,
  Divider,
  Drawer,
  Grid,
  Hidden,
  IconButton,
  List,
  ListItem,
  ListItemText,
  ThemeProvider,
  Toolbar,
  Typography,
} from "@material-ui/core"
import MenuIcon from "@material-ui/icons/Menu"
import { makeStyles } from "@material-ui/core/styles"
import theme from "../theme"

const drawerWidth = 240

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
    backgroundColor: "#D90429",
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  h5: {
    width: "max-content",
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    maxWidth: "100vw",
    padding: "20px 10px",
    backgroundColor: "#EDF2F4",
    color: "#2B2D42",
  },
}))

// ResponsiveDrawer uses two React <Hidden/> components
// The first shows a 'temporary' drawer for small screens
// The second shows a 'permanent' drawer for wide screens
const ResponsiveDrawer = props => {
  const { window, mobileOpen, handleDrawerToggle } = props
  const classes = useStyles()

  // Contents of the drawer side-menu...
  const drawer = (
    <div>
      <Typography variant="h6" className="MuiListItem-gutters">
        Explore
      </Typography>
      <Divider />
      <List>
        {["Projects", "About", "Journal"].map((text, index) => {
          let destination = "/"

          if (index === 1) {
            destination += text.toLowerCase() + "/"
          } else if (index === 2) {
            destination += text.toLowerCase() + "/redesigning-my-portfolio"
          }

          return (
            <ListItem
              button
              component={Link}
              to={destination}
              key={`internalLink${index}`}
            >
              <ListItemText primary={text} />
            </ListItem>
          )
        })}
      </List>
      <Divider />
      <List>
        {["GitHub", "LinkedIn"].map((text, index) => {
          const destination = !index
            ? "https://github.com/N1ck-Benson"
            : "https://www.linkedin.com/in/nick-benson-b99a58137"
          return (
            <ListItem
              button
              component="a"
              href={destination}
              target="_blank"
              rel="noopener"
              key={`externalLink${index}`}
            >
              <ListItemText primary={text} />
            </ListItem>
          )
        })}
      </List>
    </div>
  )

  const container =
    window !== undefined ? () => window().document.body : undefined

  // Structure of the drawer side-menu...
  // The CssBaseline establishes some basic styling, including page margins and layout
  return (
    <div>
      <nav className={classes.drawer} aria-label="Site navigation">
        {/* smUp -> temporary drawer and icon are hidden at or above 'small' screen-size */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor="left"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        {/* xsDown -> permanent drawer is hidden at or below 'xsmall' screen size */}
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
    </div>
  )
}

const Layout = ({ children }) => {
  const classes = useStyles()
  const [mobileOpen, setMobileOpen] = React.useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <CssBaseline />
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              className={classes.menuButton}
            >
              <MenuIcon />
            </IconButton>
            <Grid container alignItems="baseline">
              <Typography variant="h6">nick benson &nbsp;</Typography>
              <Typography variant="h5" className={classes.h5}>
                Fullstack Developer
              </Typography>
            </Grid>
          </Toolbar>
        </AppBar>
        <ResponsiveDrawer
          mobileOpen={mobileOpen}
          handleDrawerToggle={handleDrawerToggle}
        />
        <main className={classes.content}>
          {/* A 'buffer' div is necessary for content to be start below the app bar */}
          <div className={classes.toolbar} />
          {children}
        </main>
      </div>
    </ThemeProvider>
  )
}

export default Layout
