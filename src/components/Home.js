import React, { Component } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import Login from "./auth/Login";

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
  }

  handleSuccessfulAuth(data) {
    this.props.handleLogin(data);
    this.props.history.push("/dashboard");
  }

  handleLogoutClick() {
    axios
      .delete("https://guarded-brushlands-05784.herokuapp.com/logout", { withCredentials: true })
      .then(response => {
        this.props.handleLogout();
      })
      .catch(error => {
        console.log("logout error", error);
      });
  }

  render() {
    return (
      <div className="home-section">
      
        <Login handleSuccessfulAuth={this.handleSuccessfulAuth} />
        <Link to="/reg">Not Registerd ? Register</Link>
    
      </div>
    );
  }
}
