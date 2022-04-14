import React, { Component } from 'react';

class Creat_exam extends React.Component {
    constructor(props) {
        super(props)
        this.state = { 
           formValues: [{adanswer: "",  all : "" }]
         };
        this.handleSubmit = this.handleSubmit.bind(this)
      }
      
      
      addAnswer() {
        this.setState(({
          formValues: [...this.state.formValues, {add: "", all: "" }]
        }))
      }

    
      addFormFields() {
        this.setState(({
          formValues: [...this.state.formValues, { all: "" }]
        }))
      }
    
      removeFormFields(i) {
        let formValues = this.state.formValues;
        formValues.splice(i, 1);
        this.setState({ formValues });
      }
    
      handleSubmit(event) {
         alert(this.state.formValues);
      }
      
      
    render() { 
        return (
                    <div>
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
                            <div value={element.all || ""} onChange={e => this.handleChange(index, e)} key={index} className="row" style={{paddingTop: '23px', paddingBottom: '17px'}}>
                              <div className="col">
                                <div className="card" style={{borderRadius: '8px'}}>
                                  <div  className="card-body" style={{paddingLeft: '54px', paddingTop: '20px', paddingBottom: '20px'}}>
                                    <h4 className="d-flex align-items-center card-title" style={{fontSize: '24px', paddingBottom: '0px', marginBottom: '0px', fontWeight: 'bold', marginTop: '19px'}}>Question:&nbsp;<textarea  className="d-flex align-items-center" style={{width: '80%', marginLeft: '21px', height: '43.6px', paddingLeft: '13px', paddingTop: '4px'}} placeholder="Type your question." required defaultValue={""} /><br /><br /></h4>
                                    <div className="d-flex justify-content-center align-items-center" style={{paddingBottom: '19px'}}>
                                      <h4  className="d-flex align-items-center" style={{fontSize: '18px', paddingBottom: '0px', marginTop: '27px', fontWeight: 'bold', color: 'var(--bs-red)'}}>Upload Image&nbsp; &nbsp;&nbsp;<br /><br /></h4><input type="file" />
                                    </div>
                                    <div  className="d-flex justify-content-center align-items-center align-content-center" style={{marginBottom: '22px'}}>
                                      <div className="form-check" style={{marginTop: '0px', marginRight: '46px', fontSize: '23px', color: 'var(--bs-pink)'}}><input className="form-check-input" type="radio" id="s_1" defaultValue="s_1" name="t_1" defaultChecked /><label className="form-check-label" htmlFor="s_1" style={{color: 'rgb(121,0,164)', fontWeight: 'bold'}}>Single Answer question</label></div>
                                      <div className="form-check" style={{fontSize: '23px', color: 'var(--bs-pink)'}}><input className="form-check-input" type="radio" id="m_1" defaultValue="m_1" name="t_1" /><label className="form-check-label" htmlFor="m_1" style={{fontWeight: 'bold'}}>Multi Answer question<br /></label></div>
                                    </div>
                                    <h4 className="card-title" style={{fontSize: '24px', fontWeight: 'bold', paddingBottom: '12px', marginBottom: '0px', marginLeft: '6px'}}>Answers:</h4>  
                                    <div >
                                      <div value={element.add || ""} onChange={e => this.handleChange(index, e)} key={index}  style={{marginBottom: '19px', marginTop: '6px'}}>
                                        <div className="row">
                                          <div className="col d-flex justify-content-center align-items-center" style={{width: '80%', minWidth: '80%', maxWidth: '80%'}}><label className="form-label" style={{fontWeight: 'bold', marginLeft: '11px', marginTop: '5px', fontSize: '23px', color: 'rgb(63,70,78)'}}>1:&nbsp;&nbsp;</label><textarea style={{width: '95%', height: '46px', minWidth: '50%', fontSize: '22px', paddingLeft: '11px', paddingTop: '5px'}} defaultValue={"safad"} /></div>
                                          <div className="col d-flex align-items-center" style={{width: '20%'}}>
                                            <div className="d-flex align-items-center"><input type="checkbox" id="r_1_1" style={{fontWeight: 'bold', color: 'var(--bs-indigo)', fontSize: '21px'}} />
                                              <div className="form-check"><input className="form-check-input" type="radio" id="r_1_1" name="r_1_1" defaultValue={1} style={{fontWeight: 'bold', color: 'var(--bs-indigo)', fontSize: '21px'}} defaultChecked /><label className="form-check-label" htmlFor="r_1_1" style={{fontWeight: 'bold', color: 'var(--bs-indigo)', fontSize: '21px'}}>Right Answer</label></div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div style={{marginBottom: '19px', marginTop: '6px'}}>
                                      </div>
                                    </div>
                                    <div className="d-flex d-xxl-flex justify-content-center justify-content-xxl-center" style={{paddingLeft: '13px', marginTop: '22px', marginRight: '70px'}}><button onClick={() => this.addAnswer()}  className="btn" type="button"  style={{background: '#aa32d5', fontWeight: 'bold', color: 'rgb(255,255,255)'}} >Add answer</button></div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            ))}
                            <div className="d-flex d-xxl-flex justify-content-center justify-content-xxl-center" style={{paddingLeft: '13px', marginTop: '22px', marginRight: '27px'}}>
                            <button type="button"   className="btn"  style={{background: '#c90101', fontWeight: 'bold', color: 'rgb(255,255,255)', width: '100%', height: '51px'}} onClick={() => this.removeFormFields()}>Remove</button> 
                             <button onClick={() => this.addFormFields()} className="btn" type="button" style={{background: '#00a210', fontWeight: 'bold', color: 'rgb(255,255,255)', width: '100%', height: '51px'}}>Add question</button></div>
                            <div className="text-center" style={{paddingTop: '67px', paddingBottom: '160px'}}><button className="btn" type="button" style={{background: '#ffffff', height: '60px', width: '170.025px', fontWeight: 'bold', fontSize: '16px'}}>Create Exam</button></div>
                            </form>
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
 
export default Creat_exam;