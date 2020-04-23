import React from 'react';
import Login from './Form';
import Dashboard from"./dashboard";
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom'

const App = () => (
  <Router>
    <Switch>
      <Route path="/Login" exact component={() => <Login/>}/>
      <Route path="/Dashboard" exact component={() => <Dashboard/>}/>
      <Route component={() =>(
        <div>
          <h1>Error 404</h1>
          <span>Página no encontrada</span>
        </div>
      )}/>
    </Switch>
  </Router>
);

export default App;
