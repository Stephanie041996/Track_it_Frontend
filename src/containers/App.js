import React, { Component } from 'react';
import {
  BrowserRouter, Switch, Route, Redirect,
} from 'react-router-dom';
import axios from 'axios';
import Measurements from './measurements';
import Progress from './Progress';
import AddTransaction from '../components/AddTransaction';
import Home from '../components/Home';
import Home2 from '../components/Home2';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      loggedInStatus: 'NOT_LOGGED_IN',
      user: {},
    };

    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  componentDidMount() {
    this.checkLoginStatus();
  }

  handleLogout() {
    this.setState({
      loggedInStatus: 'NOT_LOGGED_IN',
      user: {},
    });
  }

  handleLogin(data) {
    this.setState({
      loggedInStatus: 'LOGGED_IN',
      user: data.user,
    });
  }

  checkLoginStatus() {
    axios
      .get('https://guarded-brushlands-05784.herokuapp.com/logged_in', { withCredentials: true })
      .then((response) => {
        if (
          response.data.logged_in
            && this.state.loggedInStatus === 'NOT_LOGGED_IN'
        ) {
          this.setState({
            loggedInStatus: 'LOGGED_IN',
            user: response.data.user,
          });
        } else if (
          !response.data.logged_in
            & (this.state.loggedInStatus === 'LOGGED_IN')
        ) {
          this.setState({
            loggedInStatus: 'NOT_LOGGED_IN',
            user: {},
          });
        }
      })
      .catch((error) => {
        console.log('check login error', error);
      });
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>

            <Route exact path="/add" component={AddTransaction} />
            <Route path="/progress/:measurementId" component={Progress} />

            <Route
              exact
              path="/"
              render={(props) => (
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
              path="/reg"
              render={(props) => (
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
              path="/dashboard"
              render={(props) => (
                <Measurements
                  {...props}
                  loggedInStatus={this.state.loggedInStatus}
                />
              )}
            />
            <Redirect to="/" />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
