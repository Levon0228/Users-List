/** @format */

import "./App.css";
import { Route } from 'react-router-dom';
import Users from "./Users/Users";
import Posts from "./Posts/Posts";


function App() {
  return (
    
      <div className="App">
          <Route path="/users"
                  render={ () => <Users/>} />
          <Route path="/posts" 
                  render={ () => <Posts userId={2}/>} />        
      </div>
  );
}

export default App;


