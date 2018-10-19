import React, { Component } from 'react';

  class Login extends React.Component{
    getPHP(){
      fetch('http://mortondevsite.com/eval/api/v1/users')
      .then(res => res.json())
      .then(body => console.log(body))
      .catch(err => console.log(err));
    }
    render() {
      return(
        <div classname="App-login">
          <button onClick={this.getPHP}>Test</button>
        </div>
      );
    }

  }

  // <form>
  // <label>User Name:</label>
  // <br/>
  // <input type="text" data-test="username" />
  // <br/>
  // <label>Password:</label>
  // <br/>
  // <input type="password" data-test="password" />
  // <br/>
  export default Login;
