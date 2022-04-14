import React, { Component } from 'react';
 

class exam extends React.Component {
    constructor(pass) {
        super(pass)
        this.state = { 
           Values: [{adanswer: ""}]
         };
        this.handleSubmit2 = this.handleSubmit2.bind(this)
      }
      
      
      
      handleChange(i, e) {
        let Values = this.state.Values;
        Values[i][e.target.name] = e.target.value;
        this.setState({ Values });
      }
    
      addFields() {
        this.setState(({
          Values: [...this.state.Values, {adanswer: "", all: "" }]
        }))
      }
    
      removeFields(i) {
        let Values = this.state.Values;
        Values.splice(i, 1);
        this.setState({ Values });
      }
    
      handleSubmit(event) {
        event.preventDefault();
        alert(JSON.stringify(this.state.Values));
      }
      
      
    render() {   

    }
}
 
export default exam;