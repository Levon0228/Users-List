/** @format */

import "./App.css";
import { Route, Switch } from "react-router-dom";
import React, { useState } from "react";
import { Context } from "./Context/Context";
import UsersContanier from "./Containers/Users/UsersContanier";
import PostsContanier from "./Containers/Posts/PostsContanier";

function App() {
  const [context, setContext] = useState({});
  return (
    <Context.Provider value={[context, setContext]}>
      <div className="App">
        <Switch>
          <Route exact path="/users"> <UsersContanier/> </Route>
          <Route exact path="/posts"> <PostsContanier/> </Route>
        </Switch>
      </div>
    </Context.Provider>
  );
}

export default App;
