import React, { Component } from 'react';

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
       </div>
     );
   }

   }

   export default Summary;
