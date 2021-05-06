import React from "react"
import AppBar from "@material-ui/core/AppBar"
import Container from "@material-ui/core/Container"
import "@fontsource/nunito"
import Toolbar from "@material-ui/core/Toolbar"

// Styles need to be globalised...
// Currently trying to use global.css, imported in gatsby-browser.js to make it global (but this isn't working)
// Alternative is to use material-ui's context-esque ThemeProvider

// For side-menu/drawer, use docs here: https://material-ui.com/components/drawers/#temporary-drawer

const Layout = ({ children }) => {
  return (
    <Container>
      <AppBar
        position="fixed"
        style={{
          background: "#31334c",
          color: "#e78e31",
          fontFamily: "nunito, sans-serif",
        }}
      >
        <Toolbar>
          <h4>nick benson</h4>
        </Toolbar>
      </AppBar>
      <div style={{ paddingTop: "70px" }}>{children}</div>
    </Container>
  )
}

export default Layout
