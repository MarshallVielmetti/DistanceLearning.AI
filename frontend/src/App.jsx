import React, { Component } from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
 import { ThemeProvider } from 'styled-components'

import {LandingPage, Error404Page} from 'Pages'

const DefaultTheme = {
  primary: "white",
  secondary: "black",
  highlight: "yellow",
  defaultFonts: "Archivo, sans-serif",
  titleFonts: "", 
}

export default class App extends Component {
  render() {
    return (
      <ThemeProvider theme={DefaultTheme}>
      <Router>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route component={Error404Page} />
        </Switch>
      </Router>
      </ThemeProvider>
    )
  }
}
