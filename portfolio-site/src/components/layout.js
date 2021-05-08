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
  Toolbar,
  Typography,
} from "@material-ui/core"
import MenuIcon from "@material-ui/icons/Menu"
import { makeStyles } from "@material-ui/core/styles"

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
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
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
        {["Portfolio", "About", "Skills"].map((text, index) => {
          const destination = index === 0 ? "/" : "/" + text.toLowerCase() + "/"
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
        {/* The implementation of <Hidden> can be changed to js to avoid SEO duplication of links. */}
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
          <span>
            {/* <p style={{ margin: "5px 0 0 0" }}>nick benson</p> */}
            <Typography variant="body1" style={{ margin: "5px 0 0 0" }}>
              nick benson
            </Typography>
            <Typography variant="h6" style={{ margin: "0 0 0 0" }}>
              Fullstack Developer
            </Typography>
          </span>
        </Toolbar>
      </AppBar>
      <ResponsiveDrawer
        mobileOpen={mobileOpen}
        handleDrawerToggle={handleDrawerToggle}
      />
      <main className={classes.content}>
        {/* A div creates space above the main text for the fixed toolbar */}
        <div className={classes.toolbar} />
        {children}
      </main>
    </div>
  )
}

export default Layout
