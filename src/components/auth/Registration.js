/* eslint-disable no-alert */
import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

export default class Registration extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit(event) {
    const { username } = this.state;

    axios
      .post(
        'https://guarded-brushlands-05784.herokuapp.com/registrations',
        {
          user: {
            username,

          },
        },
        { withCredentials: true },
      )
      .then((response) => {
        if (response.data.status === 'created') {
          this.props.handleSuccessfulAuth(response.data);
        }
      })
      .catch(() => {
        alert('Please enter a valid user name ');
      });
    event.preventDefault();
  }

  render() {
    return (
      <div className="Login-form">
        <form className="input-form" onSubmit={this.handleSubmit}>
          <input
            className="input-box"
            type="text"
            name="username"
            placeholder="User Name"
            value={this.state.username}
            onChange={this.handleChange}
            required
          />

          <button type="submit">Register</button>
        </form>
      </div>
    );
  }
}

Registration.propTypes = {
  handleSuccessfulAuth: PropTypes.func.isRequired,

};
