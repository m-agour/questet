import React, { Component } from 'react';
import { useEffect } from 'react';
import { useForm, useFieldArray } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

<<<<<<< HEAD
export class Answer extends React.Component {
  state = {
          selectedCode: '',
          selectedLanguage: 1,
      }

  handleLangChange = () => {
      var lang = this.dropdown.value;
      this.props.onSelectLanguage(lang);            
  }
    
  render() {
    return(  
        <div   >
=======
class Answer extends Component {
    render(){
    return(

        <div >
>>>>>>> 9720f1376c84662eba9c00b60d0d031e0eba6e3f
        <div   style={{marginBottom: '19px', marginTop: '6px'}}>
          <div  className="row">
            <div   className="col d-flex justify-content-center align-items-center" style={{width: '80%', minWidth: '80%', maxWidth: '80%'}}><label className="form-label" style={{fontWeight: 'bold', marginLeft: '11px', marginTop: '5px', fontSize: '23px', color: 'rgb(63,70,78)'}}>{1}:&nbsp;&nbsp;</label>
            <input   type="text" name="name"    style={{width: '95%', height: '46px', minWidth: '50%', fontSize: '22px', paddingLeft: '11px', paddingTop: '5px'}} /></div>
            <div className="col d-flex align-items-center" style={{width: '20%'}}>
              <div className="d-flex align-items-center">
                  <input type="checkbox" id="r_1_1" style={{fontWeight: 'bold', color: 'var(--bs-indigo)', fontSize: '21px'}} />
                <div className="form-check">
                    <input className="form-check-input" type="radio" id="r_1_1" name="r_1_1"  style={{fontWeight: 'bold', color: 'var(--bs-indigo)', fontSize: '21px'}} defaultChecked /><label className="form-check-label" htmlFor="r_1_1" style={{fontWeight: 'bold', color: 'var(--bs-indigo)', fontSize: '21px'}}>Right Answer</label></div>
              </div>

            </div>  
          </div>
        </div>
        <div style={{marginBottom: '19px', marginTop: '6px'}}>
        </div>
      </div>
<<<<<<< HEAD
      )}
   
} 
=======
    
      )
   }
}
export default Answer;
>>>>>>> 9720f1376c84662eba9c00b60d0d031e0eba6e3f
