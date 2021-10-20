import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Login from './auth/Login';
import Topbanner from './Topbanner';

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
  }

  handleSuccessfulAuth(data) {
    this.props.handleLogin(data);
    this.props.history.push('/dashboard');
  }

  handleLogoutClick() {
    axios
      .delete('https://guarded-brushlands-05784.herokuapp.com/logout', { withCredentials: true })
      .then(() => {
        this.props.handleLogout();
      })
      .catch(() => {
      });
  }

  render() {
    return (
      <div className="home-section">
        <Topbanner />
        <Login handleSuccessfulAuth={this.handleSuccessfulAuth} />
        <Link to="/reg">Not Registerd ? Register</Link>

      </div>
    );
  }
}

Home.propTypes = {
  handleLogin: PropTypes.func.isRequired,
  handleLogout: PropTypes.func.isRequired,
  history: PropTypes.func.isRequired,
  push: PropTypes.func.isRequired,
};
