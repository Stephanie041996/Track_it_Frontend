import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

export default class Login extends Component {
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
        'https://guarded-brushlands-05784.herokuapp.com/sessions',
        {
          user: {
            username,

          },
        },
        { withCredentials: true },
      )
      .then((response) => {
        if (response.data.logged_in) {
          this.props.handleSuccessfulAuth(response.data);
        }
      })
      .catch(() => {

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
            placeholder="username"
            value={this.state.username}
            onChange={this.handleChange}
            required
          />

          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  handleSuccessfulAuth: PropTypes.func.isRequired,

};
