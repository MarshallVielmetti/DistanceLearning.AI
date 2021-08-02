import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import NoAuthNav from "Components/NoAuthNav/NoAuthNav";

import {
  LandingPage,
  Error404Page,
  SignupPage,
  SigninPage,
  AboutPage,
} from "Pages";

const DefaultTheme = {
  primary: "white",
  secondary: "#3B3A39",
  darkSecondary: "#292828",
  offWhite: "#F3F2F1",
  darkWhite: "#e0dfde",
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
            <Route exact path="/about" component={AboutPage} />
            <Route exact path="/sign-up" component={SignupPage} />
            <Route exact path="/sign-in" component={SigninPage} />
            <Route component={Error404Page} />
          </Switch>
        </Router>
      </ThemeProvider>
    );
  }
}
