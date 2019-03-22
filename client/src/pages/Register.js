import React from 'react';
import API from "../utils/API";
import Store from "../utils/Store";

class Register extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  handleInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({
      [name]: value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const email = this.state.email.trim();
    const password = this.state.password;

    if(this.areInputsValid(email, password)) {
      API.register({
        email,
        password
      }).then((response) => {
        Store.set("userData", response.data);
        this.props.history.push('/');
      });
    }
  }

  areInputsValid = (email, password) => {
    if(!email) {
      alert("Please fill out the email");
      return false;
    }

    if(!password) {
      alert("Please fill out the password");
      return false;
    }

    return true;
  }


  render() {
    const { email, password } = this.state;
    return (
      <form className="container" onSubmit={this.handleSubmit}>
        <h1>Register</h1>
        <div className="form-group">
          <input
            className="form-control"
            name="email"
            type="email"
            value={email}
            onChange={this.handleInputChange}
            placeholder="email"
          />
        </div>
        <div className="form-group">
          <input
            className="form-control"
            name="password"
            type="password"
            value={password}
            onChange={this.handleInputChange}
            placeholder="password"
          />
        </div>
        <button
          className="btn btn-primary"
          type="submit">
          Register!
        </button>
      </form>
    );
  }
}

export default Register;
