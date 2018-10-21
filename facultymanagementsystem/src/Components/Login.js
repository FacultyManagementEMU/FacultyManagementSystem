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
        <form>
        <input type="text" data-test="username" placeholder="Enter your Email..." />
        <br/>
        <input type="password" data-test="password" placeholder="Enter your Password..."/>
        <br/>
        <br/>
        <button onClick={this.getPHP}>Login</button>
        </form>
        </div>
      );
    }

  }

  export default Login;
