/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import Question from "./Question";
import axios from "axios";
import Cookies from "js-cookie";

class Creat_exam extends Component {
  constructor(props) {
    super(props);
    if (!Cookies.get("auth")) {
      Cookies.set("redirect", "/create_exam");
      this.props.history.push("/auth");
    }
  }
  state = {
    title: "",
    duration: "",
    startTime: "",
    questions: {},
  };
  count = 1;
  questions = {};
  handleChange = (id, data, type) => {
    if (!this.questions[id]) this.questions[id] = {};
    this.questions[id].data = data;
    this.questions[id].type = type;
  };

  handleAnswerChange = (questionId, answerId, answer) => {
    if (!this.questions[questionId]) this.questions[questionId] = {}
    if (!this.questions[questionId].answers)
      this.questions[questionId].answers = {};
    this.questions[questionId].answers[answerId] = answer;
  };


  submit = (event) => {
    event.preventDefault();

    // let data = {
    //   title: this.state.title,
    //   password: this.loginPassword.current.value,
    // };
    let examData = 
    {
      "title": this.state.title,
       "userId": parseInt(Cookies.get("auth"))
   }
    axios.post("http://127.0.0.1:5000/api/exam", examData).then(
      (response) => {
        let examId = response.data.data.id;
        for (let i in this.questions){
          let question = this.questions[i]
          let data = question.data
          let type = question.type
          axios.post("http://127.0.0.1:5000/api/question", examData).then(
            (response) => {
              console.log(response)
              // let examId = response.data.data.id;
              // for (let i in this.questions){
              //   let question = this.questions[i]
              //   let data = question.data
              //   let type = question.type
                
              // } 
              // this.props.history.push("/");
            },
            (error) => {
              // this.props.history.push("/create_exam");
              console.log(error);
            }
          );
        } 
        // this.props.history.push("/");
      },
      (error) => {
        // this.props.history.push("/create_exam");
        console.log(error);
      }
    );
  };
  addQuestion = () => {
    this.count += 1;
    this.forceUpdate();
  };

  updateTitle = (e) => {
    e.persist();
    this.setState({
      title: this.title.value,
    });
  };

  removeQuestion = () => {
    if (this.count > 1) this.count -= 1;
    this.forceUpdate();
  };
  render() {
    return (
      
      <div>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, shrink-to-fit=no"
        />
        <title>Home - Brand</title>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Montserrat:400,400i,700,700i,600,600i"
        />
                <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css"
        />
        <link
          rel="stylesheet"
          href="https://unicons.iconscout.com/release/v2.1.9/css/unicons.css"
        />
        <link rel="stylesheet" href="assets/css/BreveSansTitle-Book.css" />
        <link
          rel="stylesheet"
          href="assets/css/Hurme%20Geometric%20Sans%201.css"
        />
        <link rel="stylesheet" href="assets/fonts/simple-line-icons.min.css" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/baguettebox.js/1.10.0/baguetteBox.min.css"
        />
        <link rel="stylesheet" href="assets/css/vanilla-zoom.min.css" />
        <nav
          className="navbar navbar-light navbar-expand-lg sticky-top shadow-lg clean-navbar"
          style={{
            background: "#ffffff",
            paddingTop: "12.2px",
            paddingBottom: "7.2px",
            paddingRight: "0px",
            paddingLeft: "23px",
            borderWidth: "6px",
          }}
        >
          <div className="container-fluid">
            <a
              className="navbar-brand logo"
              href="#"
              style={{
                color: "#DF2E2E",
                fontFamily: '"Hurme Geometric Sans 1"',
                fontWeight: "bold",
                fontSize: "33px",
                padding: "0px",
                letterSpacing: "1px",
              }}
            >
              Questet
            </a>
            <button
              data-bs-toggle="collapse"
              className="navbar-toggler"
              data-bs-target="#navcol-1"
            >
              <span className="visually-hidden">Toggle navigation</span>
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navcol-1">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item" style={{ paddingRight: "145px" }}>
                  <div />
                </li>
                <li className="nav-item">
                  <button
                    className="btn"
                    type="button"
                    style={{
                      fontFamily: '"Hurme Geometric Sans 1"',
                      fontWeight: "bold",
                      color: "#D82148",
                      letterSpacing: "0px",
                    }}
                  >
                    Sign in
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    className="btn"
                    type="button"
                    style={{
                      background: "#ffc700",
                      fontFamily: '"Hurme Geometric Sans 1"',
                      fontWeight: "bold",
                    }}
                  >
                    Sign up
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <main className="page landing-page" style={{ paddingTop: "0px" }}>
          <section
            className="shadow-lg"
            style={{ background: "#3c65c4", paddingBottom: "62px" }}
          >
            <h1
              style={{
                paddingLeft: "0px",
                paddingTop: "50px",
                textAlign: "center",
                color: "rgb(255,255,255)",
              }}
            >
              Title:
              <input
                type="text"
                ref={(ref) => (this.title = ref)}
                onChange={this.updateTitle}
                style={{
                  marginLeft: "17px",
                  width: "633.4px",
                  borderRadius: "10px",
                  height: "49px",
                  fontSize: "23px",
                  color: "rgb(0,0,0)",
                  paddingLeft: "10px",
                }}
                placeholder="Enter title here"
                required
              />
            </h1>
            <div className="container">
              {(() => {
                const rows = [];
                for (let i = 0; i < this.count; i++) {
                  rows.push(
                    <Question
                      id={i + 1}
                      onDataChange={this.handleChange}
                      onAnswerChange={this.handleAnswerChange}
                    />
                  );
                }
                return rows;
              })()}

              <div
                className="d-flex d-xxl-flex justify-content-center justify-content-xxl-center"
                style={{
                  paddingLeft: "13px",
                  marginTop: "22px",
                  marginRight: "27px",
                }}
              >
                <button
                  type="button"
                  className="btn"
                  onClick={() => this.removeQuestion()}
                  style={{
                    background: "#c90101",
                    fontWeight: "bold",
                    color: "rgb(255,255,255)",
                    width: "100%",
                    height: "51px",
                  }}
                >
                  Remove question
                </button>
                <button
                  className="btn"
                  type="button"
                  onClick={this.addQuestion}
                  style={{
                    background: "#00a210",
                    fontWeight: "bold",
                    color: "rgb(255,255,255)",
                    width: "100%",
                    height: "51px",
                  }}
                >
                  Add question
                </button>
              </div>
              <div
                className="text-center"
                style={{ paddingTop: "67px", paddingBottom: "160px" }}
              >
                <button
                  className="btn"
                  type="button"
                  onClick={this.submit}
                  style={{
                    background: "#ffffff",
                    height: "60px",
                    width: "170.025px",
                    fontWeight: "bold",
                    fontSize: "16px",
                  }}
                >
                  Create Exam
                </button>
              </div>
            </div>
            <div
              className="text-center"
              style={{ paddingTop: "67px", paddingBottom: "160px" }}
            >
              <button
                className="btn"
                type="button"
                style={{
                  background: "#3a88b6",
                  height: "60px",
                  width: "170.025px",
                  fontWeight: "bold",
                  fontSize: "16px",
                }}
              >
                Create Exam
              </button>
            </div>
          </section>
        </main>
        <footer className="page-footer dark">
          <div className="container">
            <div className="row">
              <div className="col-sm-3">
                <h5>Get started</h5>
                <ul>
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">Sign up</a>
                  </li>
                  <li>
                    <a href="#">Downloads</a>
                  </li>
                </ul>
              </div>
              <div className="col-sm-3">
                <h5>About us</h5>
                <ul>
                  <li>
                    <a href="#">Company Information</a>
                  </li>
                  <li>
                    <a href="#">Contact us</a>
                  </li>
                  <li>
                    <a href="#">Reviews</a>
                  </li>
                </ul>
              </div>
              <div className="col-sm-3">
                <h5>Support</h5>
                <ul>
                  <li>
                    <a href="#">FAQ</a>
                  </li>
                  <li>
                    <a href="#">Help desk</a>
                  </li>
                  <li>
                    <a href="#">Forums</a>
                  </li>
                </ul>
              </div>
              <div className="col-sm-3">
                <h5>Legal</h5>
                <ul>
                  <li>
                    <a href="#">Terms of Service</a>
                  </li>
                  <li>
                    <a href="#">Terms of Use</a>
                  </li>
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
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
