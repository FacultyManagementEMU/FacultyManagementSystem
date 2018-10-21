import React from 'react';
import logo from './logo.svg';
import Login from './Components/Login';
import Dropdown from'./Components/Dropdown';

export default function Home(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Dropdown />
        </header>
        <p className="App-intro">
        </p>
        <Login/>
      </div>
    );

  }
