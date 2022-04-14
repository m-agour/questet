import React, { Component, useState   } from 'react';


function Question() {
  const [formValues, setFormValues] = useState([{ name: ""}])
  
  let handleChange = (i, e) => {
    let newFormValues = [...formValues];
    newFormValues[i][e.target.name] = e.target.value;
    setFormValues(newFormValues);
  }

let addFormFields = () => {
    setFormValues([...formValues, { name: ""}])
  }

let removeFormFields = (i) => {
    let newFormValues = [...formValues];
    newFormValues.splice(i, 1);
    setFormValues(newFormValues)
}

let handleSubmit = (event) => {
    event.preventDefault();
    alert(JSON.stringify(formValues));
}
  

    return(
      
        <div   className="row" style={{paddingTop: '23px', paddingBottom: '17px'}}>
        <div className="col">
          <div className="card" style={{borderRadius: '8px'}}>
            <div  className="card-body" style={{paddingLeft: '54px', paddingTop: '20px', paddingBottom: '20px'}}>
              <h4 className="d-flex align-items-center card-title" style={{fontSize: '24px', paddingBottom: '0px', marginBottom: '0px', fontWeight: 'bold', marginTop: '19px'}}>Question:&nbsp;<textarea    className="d-flex align-items-center" style={{width: '80%', marginLeft: '21px', height: '43.6px', paddingLeft: '13px', paddingTop: '4px'}} placeholder="Type your question." required defaultValue={""} /><br /><br /></h4>
              <div className="d-flex justify-content-center align-items-center" style={{paddingBottom: '19px'}}>
                <h4  className="d-flex align-items-center" style={{fontSize: '18px', paddingBottom: '0px', marginTop: '27px', fontWeight: 'bold', color: 'var(--bs-red)'}}>Upload Image&nbsp; &nbsp;&nbsp;<br /><br /></h4><input type="file" />
              </div>
              <div  className="d-flex justify-content-center align-items-center align-content-center" style={{marginBottom: '22px'}}>
                <div className="form-check" style={{marginTop: '0px', marginRight: '46px', fontSize: '23px', color: 'var(--bs-pink)'}}><input className="form-check-input" type="radio" id="s_1" defaultValue="s_1" name="t_1" defaultChecked /><label className="form-check-label" htmlFor="s_1" style={{color: 'rgb(121,0,164)', fontWeight: 'bold'}}>Single Answer question</label></div>
                <div className="form-check" style={{fontSize: '23px', color: 'var(--bs-pink)'}}><input className="form-check-input" type="radio" id="m_1" defaultValue="m_1" name="t_1" /><label className="form-check-label" htmlFor="m_1" style={{fontWeight: 'bold'}}>Multi Answer question<br /></label></div>
              </div>
              <h4 className="card-title" style={{fontSize: '24px', fontWeight: 'bold', paddingBottom: '12px', marginBottom: '0px', marginLeft: '6px'}}>Answers:</h4>  
              <form  onSubmit={handleSubmit}>
              {formValues.map((element, index)  => (  
              <div key={index} onChange={e => handleChange(index, e)}> 
                    <div   >
                    <div   style={{marginBottom: '19px', marginTop: '6px'}}>
                      <div  className="row">
                        <div   className="col d-flex justify-content-center align-items-center" style={{width: '80%', minWidth: '80%', maxWidth: '80%'}}><label className="form-label" style={{fontWeight: 'bold', marginLeft: '11px', marginTop: '5px', fontSize: '23px', color: 'rgb(63,70,78)'}}>{1}:&nbsp;&nbsp;</label>
                        <input value={element.name || ""} onChange={e => handleChange(index, e)}  type="text" name="name"    style={{width: '95%', height: '46px', minWidth: '50%', fontSize: '22px', paddingLeft: '11px', paddingTop: '5px'}} /></div>            
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
              <div className="d-flex d-xxl-flex justify-content-center justify-content-xxl-center" style={{paddingLeft: '13px', marginTop: '22px', marginRight: '70px'}}>
                  <button   className="btn" type="button"  onClick={() => addFormFields()}  style={{background: '#00a210', fontWeight: 'bold', color: 'rgb(255,255,255)'}} >Add answer</button>
                  <button   className="btn" type="button" onClick={() => removeFormFields()}   style={{background: '#c90101', fontWeight: 'bold', color: 'rgb(255,255,255)'}} >Remove answer</button>
              </div>
              </div>
               ))}
               </form>
               <div className="text-center" style={{paddingTop: '67px', paddingBottom: '160px'}}><button className="btn" type="button" onClick={handleSubmit}  style={{background: '#3a88b6', height: '60px', width: '170.025px', fontWeight: 'bold', fontSize: '16px'}}>Create Exam</button></div>
            </div>
          </div>
        </div>
      </div>

      )
    }   


export default Question;