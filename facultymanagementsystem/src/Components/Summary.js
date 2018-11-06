import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

  class Summary extends React.Component{
    constructor(props){
      super(props);
      this.state = {
        isLoggedin: props.isLoggedin,
        items: props.items,
      };
      Summary.ctx = this;
   }

   render() {
     return(
       <div className="App-summary">
       <h2>Welcome {this.state.items[0].user_name}! </h2>
       
       <div className="Research-summary" >
          <p>Research:</p>
      </div>
      <div className="Service-summary" >
        <p>Services:</p>
      </div>
      <div className="Teaching-summary" >
        <p>Teaching:</p>
      </div>
      <div className="Reviews-summary" >
        <p>Reviews:</p>
      </div>
       </div>
     );
   }

   }

   export default Summary;
