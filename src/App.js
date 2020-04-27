import React from "react";
import "./Reset.css";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import About from "./About";
import Home from "./Home";
import Case from "./Case";
import Persona from "./Persona";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/contact">
          <About />
        </Route>
        <Route path="/case">
          <Case />
        </Route>
        <Route path="/persona">
          <Persona />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
