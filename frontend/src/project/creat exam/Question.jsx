import React, { Component } from 'react';
import { useEffect } from 'react';
import { useForm, useFieldArray } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import Answer from './Answer';

class Question  extends Component {
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
    return(
      
        <div   className="row" style={{paddingTop: '23px', paddingBottom: '17px'}}>
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
              <form  onSubmit={this.handleSubmit}>
              {this.state.formValues.map((element, index) => (  
              <div key={index} onChange={e => this.handleChange(index, e)}> 
                 
                <Answer />      
                                   
              <div className="d-flex d-xxl-flex justify-content-center justify-content-xxl-center" style={{paddingLeft: '13px', marginTop: '22px', marginRight: '70px'}}>
                  <button   className="btn" type="button"  onClick={() => this.addFormFields()}  style={{background: '#00a210', fontWeight: 'bold', color: 'rgb(255,255,255)'}} >Add answer</button>
                  <button   className="btn" type="button" onClick={() => this.removeFormFields()}   style={{background: '#c90101', fontWeight: 'bold', color: 'rgb(255,255,255)'}} >Remove answer</button>
              </div>

              
              </div>
               ))}
               </form>
            </div>
          </div>
        </div>
      </div>

      )
    }   
  }

export default Question;