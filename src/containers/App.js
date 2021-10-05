import React, { Component }  from 'react';

import {
  Switch, Route, Redirect,
} from 'react-router-dom';
// import { useEffect } from 'react';
// import loadMeasurements from '../actions/measurementsAction';
// import { useDispatch } from 'react-redux';
import Measurements from './measurements';
import Progress from './Progress';
import AddTransaction from '../components/AddTransaction';
  import axios from "axios";
  import Home from "../components/Home";
  import Home2 from "../components/Home2"


  
  export default class App extends Component {
    constructor() {
      super();
  
      this.state = {
        loggedInStatus: "NOT_LOGGED_IN",
        user: {}
      };
  
      this.handleLogin = this.handleLogin.bind(this);
      this.handleLogout = this.handleLogout.bind(this);
    }
  
    checkLoginStatus() {
      axios
        .get("http://localhost:3001/logged_in", { withCredentials: true })
        .then(response => {
          if (
            response.data.logged_in &&
            this.state.loggedInStatus === "NOT_LOGGED_IN"
          ) {
            this.setState({
              loggedInStatus: "LOGGED_IN",
              user: response.data.user
            });
          } else if (
            !response.data.logged_in &
            (this.state.loggedInStatus === "LOGGED_IN")
          ) {
            this.setState({
              loggedInStatus: "NOT_LOGGED_IN",
              user: {}
            });
          }
        })
        .catch(error => {
          console.log("check login error", error);
        });
    }
  
    componentDidMount() {
      this.checkLoginStatus();
    }
  
    handleLogout() {
      this.setState({
        loggedInStatus: "NOT_LOGGED_IN",
        user: {}
      });
    }
  
    handleLogin(data) {
      this.setState({
        loggedInStatus: "LOGGED_IN",
        user: data.user
      });
    }
  
    render() {
  return (
    <div className="App">
      <Switch>
 
        <Route exact path="/add" component={AddTransaction} />
        <Route path="/progress/:measurementId" component={Progress} />
      
        <Route
              exact
              path={"/"}
              render={props => (
                <Home
                  {...props}
                  handleLogin={this.handleLogin}
                  handleLogout={this.handleLogout}
                  loggedInStatus={this.state.loggedInStatus}
                />
              )}
            />
              <Route
              exact
              path={"/reg"}
              render={props => (
                <Home2
                  {...props}
                  handleLogin={this.handleLogin}
                  handleLogout={this.handleLogout}
                  loggedInStatus={this.state.loggedInStatus}
                />
              )}
            />
            <Route
              exact
              path={"/dashboard"}
              render={props => (
                <Measurements
                  {...props}
                  loggedInStatus={this.state.loggedInStatus}
                />
              )}
            />
        <Redirect to="/" />
      </Switch>
  
    </div>
  );
}
}


