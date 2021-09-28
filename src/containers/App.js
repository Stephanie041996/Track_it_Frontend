import React from 'react';

import {
  Switch, Route, Redirect,
} from 'react-router-dom';
import { useEffect } from 'react';
import loadMeasurements from '../actions/measurementsAction';
import { useDispatch } from 'react-redux';
import Measurements from './measurements';
import Progress from './Progress';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadMeasurements());
  }, [dispatch]);

  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={Measurements} />
        <Route path="/progress/:measurementId" component={Progress} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
