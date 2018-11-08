import React, { Component } from 'react';
import Summary from './Summary.js';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Login extends React.Component{
  constructor(props) {
     super(props);
     this.state = {
       displayMenu: props.displayMenu,
       isLoggedin: props.isLoggedin,
       items: props.items,
     };
     Login.ctx = this;
    }

    updateView(state){
      console.log(state);
    }
// body[0].user_name
     getPHP(){
       // fetch('http://mortondevsite.com/eval/api/v1/users')
       // .then(res => res.json())
       // .then(body => {
       //   Login.ctx.setState({
       //     isLoggedin: true,
       //     items: body,
       //   });
       //   console.log(Login.ctx.state);
       //   Login.ctx.updateView(Login.ctx.state);
       // })
       // .catch(err => console.log(err));

             fetch("http://mortondevsite.com/eval/api/v1/users/login",
             {
               method: "POST",
               body: JSON.stringify({name: "nmorton2@emich.edu", password: "password"})
             })
             .then(function(res){ console.log(res.json()) })
             .catch(function(res){ console.log(res) })
     }

    render() {
      return (
        <Route path="/" render={() => this.state.isLoggedin ?
        <Summary {...this.state} /> : (
          <div className="App-login">
          <form>
          <input type="text" data-test="username" placeholder="Enter your Email..." />
          <br/>
          <input type="password" data-test="password" placeholder="Enter your Password..."/>
          <br/>
          <br/>

          </form>
          <button onClick={this.getPHP}>Login</button>
          </div>)} />
        );
    }

  }

  export default Login;
