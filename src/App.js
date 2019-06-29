import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Recipe from "./components/Recipe";
import Home from "./components/Home";
import Search from "./components/Search";
import About from "./components/About";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/search/recipe/:id" component={Recipe} />
            <Route exact path="/about" component={About} />
            <Route exact path="/search" component={Search} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
