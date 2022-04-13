import React, { Component } from "react";
import "./style.css";
import axios from "axios";

class Login extends React.Component {
  constructor(props) {
    super(props);
    // this.handleSubmit = this.handleSubmit.bind(this);
    this.props = props;
    this.email = React.createRef();
    this.password = React.createRef();
    this.loginEmail = React.createRef();
    this.loginPassword = React.createRef();
    this.firstName = React.createRef();
  }

  login = (event) => {
    event.preventDefault();

    let data = {
      email: this.loginEmail.current.value,
      password: this.loginPassword.current.value,
    };
    console.log(data);
    axios.post("http://127.0.0.1:5000/api/auth/login", data).then(
      (response) => {
        console.log(response);
        this.props.history.push("/home");
      },
      (error) => {
        this.props.history.push("/");
        console.log(error);
      }
    );
  };

  signup = (event) => {
    let data = {
      email: this.email.current.value,
      firstName: this.firstName.current.value,
      password: this.password.current.value,
    };
    event.preventDefault();

    console.log(data);
    axios.post("http://127.0.0.1:5000/api/user", data).then(
      (response) => {
        console.log(response);
        this.props.history.push("/home");
      },
      (error) => {
        console.log(error);
        this.props.history.push("/");
      }
    );
  };

  render() {
    return (
      <div>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css"
        />
        <link
          rel="stylesheet"
          href="https://unicons.iconscout.com/release/v2.1.9/css/unicons.css"
        />
        <div className="section">
          <div className="container">
            <div className="row full-height justify-content-center">
              <div className="col-12 text-center align-self-center py-5">
                <div className="section pb-5 pt-5 pt-sm-2 text-center">
                  <h6 className="mb-0 pb-3">
                    <span>Log In </span>
                    <span>Sign Up</span>
                  </h6>
                  <a href="/home"> hi </a>
                  <input
                    className="checkbox"
                    type="checkbox"
                    id="reg-log"
                    name="reg-log"
                  />
                  <label htmlFor="reg-log" />
                  <div className="card-3d-wrap mx-auto">
                    <div className="card-3d-wrapper">
                      <div className="card-front">
                        <div className="center-wrap">
                          <div className="section text-center">
                            <h4 className="mb-4 pb-3">
                              <span>Log in </span>
                            </h4>
                            <form onSubmit={this.login}>
                              <div className="form-group">
                                <input
                                  type="email"
                                  name="logemail"
                                  className="form-style"
                                  ref={this.loginEmail}
                                  placeholder="Your Email"
                                  id="logemail"
                                  autoComplete="off"
                                />
                                <i className="input-icon uil uil-at" />
                              </div>
                              <div className="form-group mt-2">
                                <input
                                  type="password"
                                  name="logpass"
                                  ref={this.loginPassword}
                                  className="form-style"
                                  placeholder="Your Password"
                                  id="logpass"
                                  autoComplete="off"
                                />
                                <i className="input-icon uil uil-lock-alt" />
                              </div>
                              <button
                                herf="/home"
                                class="button-49"
                                type="submit"
                              >
                                Submit
                              </button>
                              <p className="mb-0 mt-4 text-center">
                                <a href="#0" className="link">
                                  Forgot your password?
                                </a>
                              </p>
                            </form>
                          </div>
                        </div>
                      </div>
                      <div className="card-back">
                        <form onSubmit={this.signup}>
                          <div className="center-wrap">
                            <div className="section text-center">
                              <h4 className="mb-4 pb-3">
                                <span>Sign Up</span>
                              </h4>
                              <div className="form-group">
                                <input
                                  type="text"
                                  name="logname"
                                  className="form-style"
                                  placeholder="Your Full Name"
                                  ref={this.firstName}
                                  id="logname"
                                  autoComplete="off"
                                />
                                <i className="input-icon uil uil-user" />
                              </div>
                              <div className="form-group mt-2">
                                <input
                                  type="email"
                                  name="logemail"
                                  className="form-style"
                                  placeholder="Your Email"
                                  ref={this.email}
                                  id="logemail"
                                  autoComplete="off"
                                />
                                <i className="input-icon uil uil-at" />
                              </div>
                              <div className="form-group mt-2">
                                <input
                                  type="password"
                                  name="logpass"
                                  className="form-style"
                                  minLength={8}
                                  ref={this.password}
                                  placeholder="Your Password"
                                  id="logpass"
                                  autoComplete="off"
                                />
                                <i className="input-icon uil uil-lock-alt" />
                              </div>
                              <button
                                herf="/home"
                                class="button-49"
                                role="button"
                              >
                                Submit
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
