import React, { Component, Fragment } from 'react';
import Home from "./Home";
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
      <Fragment>
        <Route path="/" component={ Home } />
      </Fragment>
      </Router>
    );
  }
}

export default App;
