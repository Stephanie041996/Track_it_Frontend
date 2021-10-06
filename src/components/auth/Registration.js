import React, { Component } from 'react';
import axios from 'axios';

export default class Registration extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      registrationErrors: '',
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
      .catch((error) => {
        console.log('registration error', error);
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
