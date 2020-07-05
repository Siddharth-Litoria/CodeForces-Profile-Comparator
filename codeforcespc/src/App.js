import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Search from './Search'
import './App.css';
import Show from './Show'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
function App() {
  return (
    <Router>
      <Switch>
      <Route path="/Show" component={Show}/>
      <Route exact path="/" component={Search}/>
          </Switch>
      </Router>
  );
}

export default App;
