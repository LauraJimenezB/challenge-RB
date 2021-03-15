import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from "./Home"
import Social from "./Social"
import Nav from "./components/nav"
import "./App.css";

export default function App() {
  return (
    <Router>
      <div>
        <header>
            <h2>Select Builder Schedule - 2021 Fall Cohort</h2>
        </header>
        <div className="flex-row">
        <Nav/>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/social-innovation">
            <Social/>
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
      </div>
    </Router>
  );
}
