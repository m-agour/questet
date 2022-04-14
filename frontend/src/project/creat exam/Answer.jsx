import React, { Component, useState } from "react";

class Answer extends Component {
  state = {
    multiple: true,
  };
  id = this.props.id;

  handleChange = () => {
    var data = this.data.value;
    var correct = this.correct.checked;
    this.props.onDataChange(this.id, { data: data, correct: correct });
  };

  render() {
    return (
      <div>
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
                {this.id}:&nbsp;&nbsp;
              </label>
              <input
                type="text"
                name="name"
                ref={(ref) => (this.data = ref)}
                onChange={this.handleChange}
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
                  {this.state.multiple && (
                    <input
                      className="form-check-input"
                      ref={(ref) => (this.correct = ref)}
                      type="radio"
                      name="1"
                      style={{
                        fontWeight: "bold",
                        color: "var(--bs-indigo)",
                        fontSize: "21px",
                      }}
                      defaultChecked
                    />
                  )}
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
      </div>
    );
  }
}
export default Answer;
