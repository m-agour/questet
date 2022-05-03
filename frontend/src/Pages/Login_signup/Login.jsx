import "./style.css";
import React from "react";
import { useNavigate, Navigate } from "react-router-dom";
import { login, isLoggedIn } from "../../services/authService";
import Register from "./Register";

export default function Login() {
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    let { logemail,logpass } = document.forms[0];

    let userData = {
      email: logemail.value,
      password: logpass.value,
    };

    let res = await login(userData);
    if (res) navigate("/");
  };

  return isLoggedIn() ? (
    <Navigate to="/" />
  ) : (
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
                            <form onSubmit={handleSubmit}>
                              <div className="form-group">
                                <input
                                  type="email"
                                  name="logemail"
                                  className="form-style"
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
                      <Register/>
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



