import React, { Component } from 'react';
import Summary from './Summary.js';

class Login extends React.Component{
  constructor(props) {
     super(props);
     this.state = {
       isLoggedin: false,
       items: [],
     };
     Login.ctx = this;
    }

    updateView(state){
      console.log(state);
    }
// body[0].user_name
     getPHP(){
       fetch('http://mortondevsite.com/eval/api/v1/users')
       .then(res => res.json())
       .then(body => {
         Login.ctx.setState({
           isLoggedin: true,
           items: body,
         });
         console.log(Login.ctx.state);
         Login.ctx.updateView(Login.ctx.state);
       })
       .catch(err => console.log(err));
     }

    render() {
      return this.state.isLoggedin ? (
        <Summary {...this.state} />
      ) : (
        <div className="App-login">
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
