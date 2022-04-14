import React, { Component } from 'react';
import { useEffect } from 'react';
import { useForm, useFieldArray } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import Question from './Question.jsx';
import Answer from './Answer.jsx';

class Creat_exam  extends Component {
  constructor(props) {
    super(props)
    this.state = { 
       formValues: [{ name: "" }]
     };
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  
  handleChange(i, e) {
    let formValues = this.state.formValues;
    formValues[i][e.target.name] = e.target.value;
    this.setState({ formValues });
  }

  addFormFields() {
    this.setState(({
      formValues: [...this.state.formValues, { name: ""}]
    }))
  }

  removeFormFields(i) {
    let formValues = this.state.formValues;
    formValues.splice(i, 1);
    this.setState({ formValues });
  }

  handleSubmit(event) {
    event.preventDefault();
    alert(JSON.stringify(this.state.formValues));
  }
  
  render(){
        return (
                 
                    <div >
                      <meta charSet="utf-8" />
                      <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no" />
                      <title>Home - Brand</title>
                      <link rel="stylesheet" href="assets/bootstrap/css/bootstrap.min.css" />
                      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat:400,400i,700,700i,600,600i" />
                      <link rel="stylesheet" href="assets/css/BreveSansTitle-Book.css" />
                      <link rel="stylesheet" href="assets/css/Hurme%20Geometric%20Sans%201.css" />
                      <link rel="stylesheet" href="assets/fonts/simple-line-icons.min.css" />
                      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/baguettebox.js/1.10.0/baguetteBox.min.css" />
                      <link rel="stylesheet" href="assets/css/vanilla-zoom.min.css" />
                      <nav className="navbar navbar-light navbar-expand-lg sticky-top shadow-lg clean-navbar" style={{background: '#ffffff', paddingTop: '12.2px', paddingBottom: '7.2px', paddingRight: '0px', paddingLeft: '23px', borderWidth: '6px'}}>
                        <div className="container-fluid"><a className="navbar-brand logo" href="#" style={{color: '#DF2E2E', fontFamily: '"Hurme Geometric Sans 1"', fontWeight: 'bold', fontSize: '33px', padding: '0px', letterSpacing: '1px'}}>Questet</a><button data-bs-toggle="collapse" className="navbar-toggler" data-bs-target="#navcol-1"><span className="visually-hidden">Toggle navigation</span><span className="navbar-toggler-icon" /></button>
                          <div className="collapse navbar-collapse" id="navcol-1">
                            <ul className="navbar-nav ms-auto">
                              <li className="nav-item" style={{paddingRight: '145px'}}>
                                <div />
                              </li>
                              <li className="nav-item"><button className="btn" type="button" style={{fontFamily: '"Hurme Geometric Sans 1"', fontWeight: 'bold', color: '#D82148', letterSpacing: '0px'}}>Sign in</button></li>
                              <li className="nav-item"><button className="btn" type="button" style={{background: '#ffc700', fontFamily: '"Hurme Geometric Sans 1"', fontWeight: 'bold'}}>Sign up</button></li>
                            </ul>
                          </div>
                        </div>
                      </nav>
                      <main className="page landing-page" style={{paddingTop: '0px'}}>
                        <section className="shadow-lg" style={{background: '#3c65c4', paddingBottom: '62px'}}>
                          <h1 style={{paddingLeft: '0px', paddingTop: '50px', textAlign: 'center', color: 'rgb(255,255,255)'}}>Title:<input type="text" style={{marginLeft: '17px', width: '633.4px', borderRadius: '10px', height: '49px', fontSize: '23px', color: 'rgb(0,0,0)', paddingLeft: '10px'}} placeholder="Enter title here" required /></h1>
                          <div className="container">     
                          <form  onSubmit={this.handleSubmit}>
                          {this.state.formValues.map((element, index) => (   
                 
                            <  Question   />
                            ))}
                          </form>
                            <div className="d-flex d-xxl-flex justify-content-center justify-content-xxl-center" style={{paddingLeft: '13px', marginTop: '22px', marginRight: '27px'}}>
                            <button type="button"    className="btn" onClick={() => this.removeFormFields()}  style={{background: '#c90101', fontWeight: 'bold', color: 'rgb(255,255,255)', width: '100%', height: '51px'}} >Remove question</button> 
                             <button   className="btn" type="button" onClick={() => this.addFormFields()} style={{background: '#00a210', fontWeight: 'bold', color: 'rgb(255,255,255)', width: '100%', height: '51px'}}>Add question</button></div>
                            <div className="text-center" style={{paddingTop: '67px', paddingBottom: '160px'}}><button className="btn" type="button" onClick={this.handleSubmit}  style={{background: '#ffffff', height: '60px', width: '170.025px', fontWeight: 'bold', fontSize: '16px'}}>Create Exam</button></div>
                          </div>
                           <div className="text-center" style={{paddingTop: '67px', paddingBottom: '160px'}}><button className="btn" type="button" onClick={handleSubmit}  style={{background: '#3a88b6', height: '60px', width: '170.025px', fontWeight: 'bold', fontSize: '16px'}}>Create Exam</button></div>
                        </section>
                      </main>
                      <footer className="page-footer dark">
                        <div className="container">
                          <div className="row">
                            <div className="col-sm-3">
                              <h5>Get started</h5>
                              <ul>
                                <li><a href="#">Home</a></li>
                                <li><a href="#">Sign up</a></li>
                                <li><a href="#">Downloads</a></li>
                              </ul>
                            </div>
                            <div className="col-sm-3">
                              <h5>About us</h5>
                              <ul>
                                <li><a href="#">Company Information</a></li>
                                <li><a href="#">Contact us</a></li>
                                <li><a href="#">Reviews</a></li>
                              </ul>
                            </div>
                            <div className="col-sm-3">
                              <h5>Support</h5>
                              <ul>
                                <li><a href="#">FAQ</a></li>
                                <li><a href="#">Help desk</a></li>
                                <li><a href="#">Forums</a></li>
                              </ul>
                            </div>
                            <div className="col-sm-3">
                              <h5>Legal</h5>
                              <ul>
                                <li><a href="#">Terms of Service</a></li>
                                <li><a href="#">Terms of Use</a></li>
                                <li><a href="#">Privacy Policy</a></li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="footer-copyright">
                          <p>© 2022 Copyright Text</p>
                        </div>
                      </footer>
                    </div>



        );
    }
  }
 
export default Creat_exam;