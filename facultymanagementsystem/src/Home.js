import React from 'react';
import logo from './logo.svg';
import Login from './Admin/Components/Login';
import Dropdown from './Admin/Components/Dropdown';
export default function Home(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome</h1>
        </header>
        <Dropdown pageWrapId={"page-wrap"} outerContainerId={"App"} />
		<div>
        <p className="App-intro">
        
		 <Login/>
		
		
        </p>
        </div>
      </div>
    );

  }
