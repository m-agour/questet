import React, { useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import { signup } from "../../services/userService";
import { isLoggedIn } from "../../services/authService";
import "./style.css";


export default function Register(){
  

  const navigate = useNavigate();
  if (isLoggedIn()) navigate("/");

  let  logemail =useState() 
  let firstName =useState()
  let middleName =useState()
  let lastName =useState()
  let logpass =useState()
  
  const handleSubmit = async (event) => {
    event.preventDefault();

    // verify user
    let userData = {
      email: logemail.current.value,
      firstName: firstName.current.value,
      middleName: middleName.current.value,
      lastName: lastName.current.value,
      password: logpass.current.value,
    };
    let res = await signup(userData);
    if (res) {
      navigate("/");
    }
  };

  return isLoggedIn() ? (
    <Navigate to="/" />
  ) : (
        <div className="card-back">
                        <form onSubmit={handleSubmit} >
                          <div className="center-wrap">
                            <div className="section text-center">
                              <h4 className="mb-4 pb-3">
                                <span>Sign Up</span>
                              </h4>
                              <div className="form-group">
                                <input
                                  type="usernam"
                                  name="firstName" 
                                  ref={firstName}
                                  className="form-style"
                                  placeholder="Your firstName"
                                  id="firstName"
                                />
                                <i className="input-icon uil uil-user" />
                              </div>
                              <div className="form-group">
                                <input
                                  type="text"
                                  name="middleName"
                                  ref={middleName}
                                  className="form-style"
                                  placeholder="Your middleName"
                                  id="middleName"
                                  autoComplete="off"
                                />
                                <i className="input-icon uil uil-user" />
                              </div>
                              <div className="form-group">
                                <input
                                  type="text"
                                  name="lastName"
                                  ref={lastName}
                                  className="form-style"
                                  placeholder="Your lastName"
                                  id="lastName"
                                  autoComplete="off"
                                />
                                <i className="input-icon uil uil-user" />
                              </div>
                              <div className="form-group mt-2">
                                <input
                                  type="email"
                                  name="logemail"
                                  ref={logemail}
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
                                  ref={logpass}
                                  className="form-style"
                                  minLength={8}
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



    )
}
