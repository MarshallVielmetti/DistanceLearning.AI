import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import {
  LandingPage,
  Error404Page,
  SignupPage,
  SigninPage,
  AboutPage,
  TeacherHome,
  TeacherClass,
  TeacherStart,
  StudentHome,
  StudentStart,
  StudentClass,
} from "Pages";

import TeacherRoute from "Components/Protected Route/TeacherRoute";
import StudentRoute from "Components/Protected Route/StudentRoute";

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
            {/* Teacher Routes */}
            <TeacherRoute>
              <Route path="/teacher/home" component={TeacherHome} />
              <Route path="/teacher/start" component={TeacherStart} />
              <Route path="/teacher/class" component={TeacherClass} />
              <Route path="/teacher/report" component={Error404Page} />
            </TeacherRoute>
            {/* Student Routes */}
            <StudentRoute>
              <Route path="/student/home" component={StudentHome} />
              <Route path="/student/start" component={StudentStart} />
              <Route path="/student/class" component={StudentClass} />
              <Route path="/student/report" component={Error404Page} />
            </StudentRoute>
            <Route exact path="/test" component={TeacherRoute} />
            <Route component={Error404Page} />
          </Switch>
        </Router>
      </ThemeProvider>
    );
  }
}
