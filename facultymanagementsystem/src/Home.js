import React from 'react';
import logo from './logo.svg';
import Login from './Components/Login';
import Dropdown from'./Components/Dropdown';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Home extends React.Component{
  constructor(props) {
     super(props);
     this.state = {
        displayMenu: false,
       isLoggedin: false,
       items: [],
     };
     Home.ctx = this;
    }

  render(){
    return (
      <Router {...this.state}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Dropdown  {...this.state} />
        </header>
        <p className="App-intro">
        </p>
        <Login {...this.state} />
      </div>
      </Router>
    );
  }
}

export default Home;
