import React, { Component, useState } from "react";

function Answer(){
  const [inputFields, setInputFields] = useState([
    { answer: '', rightanswer: '' }
  ])
 const handleFormChange = (index, event) => {
    let data = [...inputFields];
    data[index][event.target.name] = event.target.value;
    setInputFields(data);
    console.log(data)
 }
 const addFields = () => {
  let newfield = { answer: '', rightanswer: ''  }

  setInputFields([...inputFields, newfield])
}
const removeFields = (index) => {
  let data = [...inputFields];
  data.splice(index, 1)
  setInputFields(data)
}
    return (
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
              <form>
        {inputFields.map((input, index) => {
          return (
              <div key={index}>
              <div style={{ marginBottom: "19px", marginTop: "6px" }}>
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
                        marginTop: "5px",
                        fontSize: "23px",
                        color: "rgb(63,70,78)",
                      }}
                    >
                
                    </label>
                    <input
                      type="text"
                      name="answer"
                      value={input.answer}
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
                      <input
                        type="checkbox"
                        id="r_1_1"
                        style={{
                          fontWeight: "bold",
                          color: "var(--bs-indigo)",
                          fontSize: "21px",
                        }}
                      />
                      <div className="form-check">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="rightanswer"
                            value={input.rightanswer}
                            onChange={event => handleFormChange(index, event)}
                            style={{
                              fontWeight: "bold",
                              color: "var(--bs-indigo)",
                              fontSize: "21px",
                            }}
                            defaultChecked
                          />
                        <label
                          className="form-check-label"
                          htmlFor="r_1_1"
                          style={{
                            fontWeight: "bold",
                            color: "var(--bs-indigo)",
                            fontSize: "21px",
                          }}
                        >
                          Right Answer
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div style={{ marginBottom: "19px", marginTop: "6px" }}></div>
              <button
                    className="btn"
                    type="button"
                    onClick={() => removeFields(index)}
                    style={{
                      background: "#c90101",
                      fontWeight: "bold",
                      color: "rgb(255,255,255)",
                    }}
                  >
                    Remove answer
                  </button>
            </div>
            )
            })}
            </form>
              <div>
                
                <div
                  className="d-flex d-xxl-flex justify-content-center justify-content-xxl-center"
                  style={{
                    paddingLeft: "13px",
                    marginTop: "22px",
                    marginRight: "70px",
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
                    }}
                  >
                    Add answer
                  </button>
                  
                </div>
            </div>
        </div>
      
    );
  }

export default Answer;
