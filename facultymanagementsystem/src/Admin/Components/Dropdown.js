import React, { Component } from 'react';
import { elastic as Menu } from 'react-burger-menu';

  class Dropdown extends React.Component{
    showSettings(event) {
      event.preventDefault();
    }
    render() {
      return(
        <div classname="App-dropdown">
          <Menu>
            <a id="home" className="menu-item" href="/">Home</a>
            <a id="about" className="menu-item" href="/about">About</a>
            <a id="contact" className="menu-item" href="/contact">Contact</a>
            <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a>
          </Menu>
          </div>
      );
    }

  }
  export default Dropdown;
