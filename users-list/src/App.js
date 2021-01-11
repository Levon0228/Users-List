/** @format */

import "./App.css";
import { Route } from "react-router-dom";
import React, { useState } from "react";
import Users from "./Users/Users";
import Posts from "./Posts/Posts";

function App() {
  return (
    <div className="App">
      <Route path="/users" render={() => <Users />} />
      <Route path="/posts" render={() => <Posts />} />
    </div>
  );
}

export default App;
