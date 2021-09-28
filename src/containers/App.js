import React from 'react';

import {
  Switch, Route, Redirect,
} from 'react-router-dom';
import { useEffect } from 'react';
import loadMeasurements from '../actions/measurementsAction';
import { useDispatch } from 'react-redux';
import Measurements from './measurements';
import Progress from './Progress';
import Nav from '../components/Nav';
import AddMeasure from '../components/AddMeasure';



function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadMeasurements());
  }, [dispatch]);

  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={Measurements} />
        <Route exact path="/add" component={AddMeasure} />
        <Route path="/progress/:measurementId" component={Progress} />
        <Redirect to="/" />
      </Switch>
      <Nav />
    </div>
  );
}

export default App;
