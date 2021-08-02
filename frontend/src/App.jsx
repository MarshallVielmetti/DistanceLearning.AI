import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { LandingPage, Error404Page, SignupPage } from "Pages";

const DefaultTheme = {
  primary: "white",
  secondary: "#3B3A39",
  darkSecondary: "#292828",
  offWhite: "#F3F2F1",
  highlight: "#F2C811",
  darkHighlight: "#c4a419",
  titleFonts: "Montserrat, Archivo, sans-serif",
  defaultFonts: "Segoe UI, sans-serif",
};

export default class App extends Component {
  render() {
    return (
      <ThemeProvider theme={DefaultTheme}>
        <Router>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/sign-up" component={SignupPage} />
            <Route component={Error404Page} />
          </Switch>
        </Router>
      </ThemeProvider>
    );
  }
}
