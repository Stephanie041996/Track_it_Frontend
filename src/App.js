import React from 'react';
import './App.css';
import {
  Switch, Route, Redirect,
} from 'react-router-dom';
import Measurements from './containers/measurements';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={Measurements} />
        
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
