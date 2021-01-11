/** @format */

import "./App.css";
import { Route, Switch } from "react-router-dom";
import React from "react";
import Users from "./Containers/Users/Users";
import Posts from "./Containers/Posts/Posts";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/users"> <Users/> </Route>
        <Route exact path="/posts"> <Posts/> </Route>
      </Switch>
    </div>
  );
}

export default App;
