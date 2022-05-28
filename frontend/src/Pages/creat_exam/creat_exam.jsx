import React, { Component, useState } from "react";
import Topbar from "../../component/topbar/topbar";
export default  function Creat_exam(){
  const [inputFields, setInputFields] = useState([
    { quistion: '', image: '', Degree:'',SandM: '' ,answer1: '',answer2: '',answer3: '',answer4: '',rightanswer:'' }

  ])
  const [title, settitle] = useState('')
  const handletitleChange = event=> {
    settitle({titleval:event.target.value});
    console.log(title)
  };
  const [visible, setVisible] = useState(false);
  const [Exame_Key, setExame_Key] = useState('')
  const handlekeyChange = key=> {
    setExame_Key({Keyval:key.target.value});
    console.log(Exame_Key)
  };
  const removeKey = (KeyR) => {
    let data = [Exame_Key];
    data.splice(KeyR, 1)
    setExame_Key(data)
  }
  const [datevalu, setValue] = useState('');
  function onChangeDateTime(sev) {
  if (!sev.target['validity'].valid) return;
  const sdt= sev.target['value'] + ':00Z';
  setValue(sdt);
  console.log(sdt)
  }
  const [dateEndvalu, setEndValue] = useState('');
  function onChangeEndDateTime(Eev) {
  if (!Eev.target['validity'].valid) return;
  const edt= Eev.target['value'] + ':00Z';
  setEndValue(edt);
  console.log(edt)
  }
  
  const handleFormChange = (index,event) => {
    let data = [...inputFields];
    data[index][event.target.name] = event.target.value;
    setInputFields(data);
    console.log(data)
 }
  const addFields = () => {
    let newfield = { quistion: '', image: '',SandM: '' ,answer1: '',answer2: '',answer3: '',answer4: '',rightanswer:'' }
  
    setInputFields([...inputFields, newfield])
  }
  const removeFields = (index) => {
    let data = [...inputFields];
    data.splice(index, 1)
    setInputFields(data)
  }
  const submit = (e) => {
    e.preventDefault();
    console.log(inputFields,title,datevalu,dateEndvalu,Exame_Key)
}
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
      <Topbar/>
      <main className="page landing-page" style={{ paddingTop: "0px" }}>
        <section
          className="shadow-lg"
          style={{ background: "#3c65c4", paddingBottom: "62px" }}
        > 
        <div>
        <h4 style={{marginLeft: "17px"}}>Start date and Time:-</h4> <input  value={(datevalu || '').toString().substring(0, 16)} onChange={onChangeDateTime} type="datetime-local" name="datevalu" style={{
                marginLeft: "17px",
                width: "633.4px",
                borderRadius: "10px",
                height: "49px",
                fontSize: "23px",
                color: "rgb(0,0,0)",
                paddingLeft: "10px",
              }}  />
        </div>
        <div>
        <h4 style={{marginLeft: "17px"}}>End date and Time:-</h4> <input  value={(dateEndvalu || '').toString().substring(0, 16)} onChange={onChangeEndDateTime} type="datetime-local" name="datevalu" style={{
                marginLeft: "17px",
                width: "633.4px",
                borderRadius: "10px",
                height: "49px",
                fontSize: "23px",
                color: "rgb(0,0,0)",
                paddingLeft: "10px",
              }}  />
        </div>
          <h1
            style={{paddingLeft: "0px",paddingTop: "50px",textAlign: "center", color: "rgb(255,255,255)",}}>
            Title:
            <input
              type="text"
              name="title"
              onChange={handletitleChange}
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
          <div>
           <button className="btn" style={{ border: "3px solid ", background: "white",fontWeight: "bold",fontSize:"20px",width: "7%",marginLeft: "675px"}} onClick={() => setVisible(true)}>Privet</button>
           <button className="btn" style={{ border: "3px solid ",background: "white",fontWeight: "bold",fontSize:"20px",width: "7%"}}  onClick={() => {setVisible(false); removeKey() }} >Public</button>
            {visible && <div className="d-flex justify-content-center align-items-center"
                style={{ paddingBottom: "19px" }}>
                <h4
                 className="d-flex align-items-center card-title" style={{fontSize: "24px",color:"white",paddingBottom: "0px",marginBottom: "0px",fontWeight: "bold",}}>Exame_Key:</h4>
                <input 
                className="d-flex align-items-center"
                name="Exame_Key"
                onChange={handlekeyChange}
                type="text"
                placeholder="Type The Q.Degree"
                style={{fontSize:"20px",width: "20%",marginLeft: "10px",height: "43.6px", paddingLeft: "13px",paddingTop: "4px",marginRight: "100px"}}/>
              </div>}
          </div>
          <div  className="container">
          <form>
        {inputFields.map((input, index) => {
          return (
          <div key={index}
        className="row"
        style={{ paddingTop: "23px", paddingBottom: "17px" }}
      >
        <div className="col" >
          <div className="card" style={{ borderRadius: "8px" }}>
            <div
              className="card-body"
              style={{
                paddingLeft: "54px",
                paddingTop: "20px",
                paddingBottom: "20px",
              }}
            >
              <h4
                className="d-flex align-items-center card-title"
                style={{
                  fontSize: "24px",
                  paddingBottom: "0px",
                  marginBottom: "0px",
                  fontWeight: "bold",
                  marginTop: "19px",
                }}
              >
                Question :&nbsp; 
                <textarea
                  className="d-flex align-items-center"
                  name="quistion"
                  value={input.quistion}
                  onChange={event => handleFormChange(index, event)}
                  style={{
                    width: "80%",
                    marginLeft: "21px",
                    height: "43.6px",
                    paddingLeft: "13px",
                    paddingTop: "4px",
                  }}
                  placeholder="Type your question."
                  required
                  defaultValue={""}
                />
                <br />
                <br />
              </h4>
              <div className="d-flex justify-content-center align-items-center"
                style={{ paddingBottom: "19px" }}
              >
                <h4
                 className="d-flex align-items-center card-title"
                 style={{
                   fontSize: "24px",
                   paddingBottom: "0px",
                   marginBottom: "0px",
                   fontWeight: "bold",
                 }}
                >
                  Q_Degree:</h4>
                <input 
                className="d-flex align-items-center"
                name="Degree"
                 value={input.Degree}
                 onChange={event => handleFormChange(index, event)}
                 type="text"
                 placeholder="Type The Q.Degree"
                 style={{
                  fontSize:"20px",
                  width: "20%",
                  marginLeft: "10px",
                  height: "43.6px",
                  paddingLeft: "13px",
                  paddingTop: "4px",
                  marginRight: "100px"
                }} />
              </div>
              <div
                className="d-flex justify-content-center align-items-center"
                style={{ paddingBottom: "19px" }}
              >
                <h4
                  className="d-flex align-items-center"
                  style={{
                    fontSize: "18px",
                    paddingBottom: "0px",
                    marginTop: "27px",
                    fontWeight: "bold",
                    color: "var(--bs-red)",
                  }}
                >
                  Upload Image&nbsp; &nbsp;&nbsp;
                  <br />
                  <br />
                </h4>
                <input 
                name="image"
                 value={input.image}
                 onChange={event => handleFormChange(index, event)}
                 type="file" />
              </div>
              <div
                className="d-flex justify-content-center align-items-center align-content-center"
                style={{ marginBottom: "22px" }}
              >
                <div
                  className="form-check"
                  style={{
                    marginTop: "0px",
                    marginRight: "46px",
                    fontSize: "23px",
                    color: "var(--bs-pink)",
                  }}
                >
                  <input
                    className="form-check-input"
                    type="radio"
                    id="s_1"
                    name="SandM"
                    
                    defaultChecked
                  />
                  <label
                    className="form-check-label"
                    htmlFor="s_1"
                    style={{ color: "rgb(121,0,164)", fontWeight: "bold" }}
                  >
                    Single Answer question
                  </label>
                </div>
                <div
                  className="form-check"
                  style={{ fontSize: "23px", color: "var(--bs-pink)" }}
                >
                  <input
                    className="form-check-input"
                    type="radio"
                    id="m_1"
                   
                    name="SandM"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="m_1"
                  >
                    Multi Answer question
                    <br />
                  </label>
                </div>
              </div>
              <div>
            <h4
                className="card-title"
                style={{
                  fontSize: "24px",
                  fontWeight: "bold",
                  paddingBottom: "12px",
                  marginBottom: "0px",
                  marginLeft: "6px",
                }}
              >
                Answers:
              </h4>
              <div >
              <div style={{ marginBottom: "19px", marginTop: "6px" }}>
              <ol>
                <div className="row">
                  <div
                    className="col d-flex justify-content-center align-items-center"
                    style={{ width: "80%", minWidth: "80%", maxWidth: "80%" }}
                  >
                    <label
                      className="form-label"
                      style={{
                        fontWeight: "bold",
                        marginLeft: "11px",
                        height: "46px",
                        marginTop: "5px",
                        fontSize: "23px",
                        color: "rgb(63,70,78)",
                      }}
                        
                    >
                      <li  style={{  fontSize:"26px"}}></li>
                    </label>
                    <input
                      type="text"
                      name="answer1"
                      value={input.answer1}
                      onChange={event => handleFormChange(index, event)}
                      style={{
                        width: "95%",
                        height: "46px",
                        minWidth: "50%",
                        fontSize: "22px",
                        paddingLeft: "11px",
                        paddingTop: "5px",
                      }}
                    />
                  </div>
                  <div
                    className="col d-flex align-items-center"
                    style={{ width: "20%" }}
                  >
                    <div className="d-flex align-items-center">
                    <label style={{
                          fontWeight: "bold",
                          color: "var(--bs-indigo)",
                          fontSize: "21px",}}>
                      <input
                        type="radio"
                        name="rightanswer"
                        value="rightanswer1"
                        onChange={event => handleFormChange(index, event)}
                      /> Right Answer
                      </label>
                    </div>
                  </div>
                  <div
                    className="col d-flex justify-content-center align-items-center"
                    style={{ width: "80%", minWidth: "80%", maxWidth: "80%" }}
                  >
                    <label
                      className="form-label"
                      style={{
                        fontWeight: "bold",
                        marginLeft: "11px",
                        height: "46px",
                        marginTop: "5px",
                        fontSize: "23px",
                        color: "rgb(63,70,78)",
                      }}
                    >
                   <li  style={{  fontSize:"26px"}}></li>
                    </label>
                    <input
                      type="text"
                      name="answer2"
                      value={input.answer2}
                      onChange={event => handleFormChange(index, event)}
                      style={{
                        width: "95%",
                        height: "46px",
                        minWidth: "50%",
                        fontSize: "22px",
                        paddingLeft: "11px",
                        paddingTop: "5px",
                      }}
                    />
                    
                  </div>
                  <div
                    className="col d-flex align-items-center"
                    style={{ width: "20%" }}
                  >
                    <div className="d-flex align-items-center">
                    <label style={{
                          fontWeight: "bold",
                          color: "var(--bs-indigo)",
                          fontSize: "21px",}}>
                      <input
                        type="radio"
                        name="rightanswer"
                        value="rightanswer2"
                        onChange={event => handleFormChange(index, event)}
                      /> Right Answer
                      </label>
                    </div>
                  </div>
                  <div
                    className="col d-flex justify-content-center align-items-center"
                    style={{ width: "80%", minWidth: "80%", maxWidth: "80%" }}
                  >
                    <label
                      className="form-label"
                      style={{
                        fontWeight: "bold",
                        marginLeft: "11px",
                        marginTop: "5px",
                        height: "46px",
                        fontSize: "23px",
                        color: "rgb(63,70,78)",
                      }}
                    >
                    <li  style={{  fontSize:"26px"}}></li>
                    </label>
                    <input
                      type="text"
                      name="answer3"
                      value={input.answer3}
                      onChange={event => handleFormChange(index, event)}
                      style={{
                        width: "95%",
                        height: "46px",
                        minWidth: "50%",
                        fontSize: "22px",
                        paddingLeft: "11px",
                        paddingTop: "5px",
                      }}
                    />
                    
                  </div>
                  <div
                    className="col d-flex align-items-center"
                    style={{ width: "20%" }}
                  >
                    <div className="d-flex align-items-center">
                    <label style={{
                          fontWeight: "bold",
                          color: "var(--bs-indigo)",
                          fontSize: "21px",}}>
                    <input
                        type="radio"
                        name="rightanswer"
                        value="rightanswer3"
                        onChange={event => handleFormChange(index, event)}
                      /> Right Answer
                      </label>
                    </div>
                  </div>
                  <div
                    className="col d-flex justify-content-center align-items-center"
                    style={{ width: "80%", minWidth: "80%", maxWidth: "80%" }}
                  >
                    <label
                      className="form-label"
                      style={{
                        fontWeight: "bold",
                        marginLeft: "11px",
                        height: "46px",
                        marginTop: "5px",
                        fontSize: "23px",
                        color: "rgb(63,70,78)",
                      }}
                    >
                   <li  style={{  fontSize:"26px"}}></li>
                    </label>
                    <input
                      type="text"
                      name="answer4"
                      value={input.answer4}
                      onChange={event => handleFormChange(index, event)}
                      style={{
                        width: "95%",
                        height: "46px",
                        minWidth: "50%",
                        fontSize: "22px",
                        paddingLeft: "11px",
                        paddingTop: "5px",
                      }}
                    />
                    
                  </div>
                  <div
                    className="col d-flex align-items-center"
                    style={{ width: "20%" }}
                  >
                    <div className="d-flex align-items-center">
                    <label style={{
                          fontWeight: "bold",
                          color: "var(--bs-indigo)",
                          fontSize: "21px",}}>  
                    <input
                        type="radio"
                        name="rightanswer"
                        value="rightanswer4"
                        onChange={event => handleFormChange(index, event)}

                      /> Right Answer
                      </label>
                    </div>
                  </div>
                </div>
                </ol>
              </div>
              <div style={{ marginBottom: "19px", marginTop: "6px" }}></div>
            </div>
        </div>
            </div>
            
          </div>
        </div>
        <button
                type="button"
                className="btn"
                onClick={() => removeFields(index)}
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
      </div>
      )
      })}
      </form>
            <div
              className="d-flex d-xxl-flex justify-content-center justify-content-xxl-center"
              style={{
                paddingLeft: "13px",
                marginTop: "22px",
                marginRight: "27px",
              }}
            >
              <button
                className="btn"
                type="button"
                onClick={addFields}
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
                onClick={submit}
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
