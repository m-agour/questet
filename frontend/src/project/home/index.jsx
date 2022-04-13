import React, { Component } from 'react';
import "./css/style.css" 
import "./css/bootstrap.css" 



class Home extends Component {
    
    render() { 
        return (
                    <div>
                      <meta charSet="utf-8" />
                      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                      <meta name="keywords" content />
                      <meta name="description" content />
                      <meta name="author" content />
                      <title>Adward</title>
                      <link rel="stylesheet" type="text/css" href="css/bootstrap.css" />
                      <link rel="stylesheet" href="css/css-circular-prog-bar.css" />
                      <link href="https://fonts.googleapis.com/css?family=Poppins:400,700display=swap" rel="stylesheet" />
                      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" />
                      <link href="css/style.css" rel="stylesheet" />
                      <link href="css/responsive.css" rel="stylesheet" />
                      <link rel="stylesheet" href="css/css-circular-prog-bar.css" />
                      <div className="top_container">
                        <header className="header_section">
                          <div className="container">
                            <nav className="navbar navbar-expand-lg custom_nav-container ">
                              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon" />
                              </button>
                              <div className='btn3_on-hover' >
                              <input type="search" id="site-search" placeholder="Student Exam Key" name="q"></input>
                              <button  >Next</button>
                              </div>
                              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <div className="d-flex ml-auto flex-column flex-lg-row align-items-center">
                                  <ul className="navbar-nav  ">                                    
                                    <li className="nav-item">
                                      <a  href='/profile'>
                                        <button className="btn4_on-hover " role="button"  >Profile
                                        </button>
                                        </a>
                                    </li>
                                  </ul>
                                </div>
                              </div></nav>
                          </div>
                        </header>
                        <section className="hero_section ">
                          <div className="hero-container container">
                            <div className="hero_detail-box">
                              <h2>
                                Welcome to <br />
                              </h2>
                              <h1>
                              Quesetet
                              </h1>
                              <p>
                                Secure platform for online exams and assessments Questet.com
                              </p>
                              <div className="hero_btn-continer">
                                
                              </div>
                            </div>
                            <div className="hero_img-container">
                              <div>
                                <img src="images/hero.png" alt="" className="img-fluid" />
                              </div>
                            </div>
                          </div>
                        </section>
                      </div>
                      {/* end header section */}
                      {/* about section */}
                      <section className="about_section layout_padding">
                         <button type="submit"  className="btn1_on-hover">Create Exam</button>    
                         <button type="submit"  className="btn2_on-hover">Take Exam</button>                                  
                        <div className="container">
                          <h2 className="main-heading ">
                            About Site
                          </h2>
                          <p className="text-center">
                            There are many variations of passages of Lorem Ipsum available, but the majority hThere are many variations of
                            passages of Lorem Ipsum available, but the majority h
                          </p>
                          <div className="about_img-box ">
                            <img src="images/kids.jpg" alt="" className="img-fluid w-100" />
                          </div>
                        </div>
                      </section>
                      <section className="contact_section layout_padding-bottom">
                        <div className="container">
                          <h2 className="main-heading">
                            Contact Now
                          </h2>
                          <div className>
                            <div className="contact_section-container">
                              <div className="row">
                                <div className="col-md-6 mx-auto">
                                  <div className="contact-form">
                                    <form action>
                                      <div>
                                        <input type="text" placeholder="Name" />
                                      </div>
                                      <div>
                                        <input type="text" placeholder="Phone Number" />
                                      </div>
                                      <div>
                                        <input type="email" placeholder="Email" />
                                      </div>
                                      <div>
                                        <input type="text" placeholder="Message" className="input_message" />
                                      </div>
                                      <div className="d-flex justify-content-center">
                                        <button type="submit" className="btn_on-hover">
                                          Send
                                        </button>
                                      </div>
                                    </form>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </section>
                      {/* end contact section */}
                      {/* admission section */}
                      
                      
                      <section className="container-fluid footer_section">
                        <p>
                          Copyright © 2022 All Rights Reserved By questet
                        </p>
                      </section>
                      {/* footer section */}
                      {/* google map js */}
                      {/* end google map js */}
                    </div>

        );
    }
}
 
export default Home ;