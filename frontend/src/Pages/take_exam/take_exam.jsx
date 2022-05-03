import React, { Component } from 'react';

class Take_exam extends Component {

    render() { 
        return (
  
                    <div>
                      <meta charSet="utf-8" />
                      <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no" />
                      <title>Home - Brand</title>
                      <link
                        rel="stylesheet"
                        href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css"
                        />
                        <link
                        rel="stylesheet"
                        href="https://unicons.iconscout.com/release/v2.1.9/css/unicons.css"
                        />
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
                          <h1 style={{paddingLeft: '0px', paddingTop: '50px', textAlign: 'center', color: 'rgb(255,255,255)'}}>Exam: Physics 101 summer 2019</h1>
                          <div className="container">
                            <div className="row" style={{paddingTop: '23px', paddingBottom: '17px'}}>
                              <div className="col">
                                <div className="card" style={{borderRadius: '8px'}}>
                                  <div className="card-body" style={{paddingLeft: '54px', paddingTop: '20px', paddingBottom: '20px'}}>
                                    <h4 className="card-title" style={{fontSize: '24px', paddingBottom: '12px', marginBottom: '-17px', fontWeight: 'bold', marginTop: '19px'}}>Q1: What is your name?<br /><br /></h4><img src="assets/img/tech/image4.jpg" style={{width: '400px', height: '400px', marginBottom: '26px'}} />
                                    <h4 className="card-title" style={{fontSize: '24px', fontWeight: 'bold', paddingBottom: '12px', marginBottom: '0px', marginLeft: '6px'}}>Answer:</h4>
                                    <div style={{paddingLeft: '13px'}}>
                                      <div className="form-check"><input className="form-check-input" type="checkbox" id="formCheck-1" style={{fontSize: '23px', marginLeft: '-34.5px'}} /><label className="form-check-label" htmlFor="formCheck-1" style={{fontSize: '19px', color: 'rgb(0,0,0)'}}>Mohamed Nagy</label></div>
                                      <div className="form-check"><input className="form-check-input" type="checkbox" id="formCheck-8" style={{fontSize: '23px'}} /><label className="form-check-label" htmlFor="formCheck-8" style={{fontSize: '19px', color: 'rgb(0,0,0)'}}>Ahmed mahmoud<br /></label></div>
                                      <div className="form-check"><input className="form-check-input" type="checkbox" id="formCheck-7" style={{fontSize: '23px'}} /><label className="form-check-label" htmlFor="formCheck-7" style={{fontSize: '19px', color: 'rgb(0,0,0)'}}>John Cena<br /></label></div>
                                    </div>
                                    <div className="d-flex justify-content-end" style={{marginTop: '43px'}}><button className="btn btn-danger" type="button">Report</button></div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="row" style={{paddingTop: '23px', paddingBottom: '17px'}}>
                              <div className="col">
                                <div className="card" style={{borderRadius: '8px'}}>
                                  <div className="card-body" style={{paddingLeft: '54px', paddingTop: '20px', paddingBottom: '20px'}}>
                                    <h4 className="card-title" style={{fontSize: '25px', fontWeight: 'bold', paddingBottom: '12px', marginBottom: '-17px', marginTop: '19px'}}>Q2: What is your age?<br /><br /></h4><img src="assets/img/tech/image4.jpg" style={{width: '400px', height: '400px', marginBottom: '26px'}} />
                                    <h4 className="card-title" style={{fontSize: '24px', fontWeight: 'bold', paddingBottom: '12px', marginBottom: '3px'}}>Answer:</h4>
                                    <div style={{paddingLeft: '13px'}}>
                                      <div className="form-check"><input className="form-check-input" type="radio" id="ans1" style={{fontSize: '23px', marginTop: '0.75px'}} name={1} /><label className="form-check-label" htmlFor="ans1" style={{color: 'rgb(0,0,0)', fontSize: '19px'}}>12</label></div>
                                      <div className="form-check"><input className="form-check-input" type="radio" id="ans2" style={{fontSize: '23px', marginTop: '0.75px'}} name={1} /><label className="form-check-label" htmlFor="ans2" style={{color: 'rgb(0,0,0)', fontSize: '19px'}}>13</label></div>
                                      <div className="form-check"><input className="form-check-input" type="radio" id="ans3" style={{fontSize: '23px', marginTop: '0.75px'}} name={1} /><label className="form-check-label" htmlFor="ans3" style={{color: 'rgb(0,0,0)', fontSize: '19px'}}>14</label></div>
                                      <div className="form-check"><input className="form-check-input" type="radio" id="ans4" style={{fontSize: '23px', marginTop: '0.75px'}} name={1} /><label className="form-check-label" htmlFor="ans4" style={{color: 'rgb(0,0,0)', fontSize: '19px'}}>15</label></div>
                                    </div>
                                    <div className="d-flex justify-content-end" style={{marginTop: '43px'}}><button className="btn btn-danger" type="button">Report</button></div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="text-center" style={{paddingTop: '67px', paddingBottom: '160px'}}><button className="btn" type="button" style={{background: '#ffffff', height: '60px', width: '170.025px', fontWeight: 'bold', fontSize: '16px'}}>Submit Answers</button></div>
                          </div>
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
 
export default Take_exam ;