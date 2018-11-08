import React from 'react';
import '../App.css';
import hamburger from '../hamburger.png';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "../Home";


class Dropdown extends React.Component {
constructor(props){
 super(props);

 this.state = {
       displayMenu: false,
       isLoggedin: props.isLoggedin,
       items: props.items
     };

  this.showDropdownMenu = this.showDropdownMenu.bind(this);
  this.hideDropdownMenu = this.hideDropdownMenu.bind(this);

};

showDropdownMenu(event, props) {
    event.preventDefault();
    this.setState({
      displayMenu: true,
      isLoggedin: props.isLoggedin,
      items: props.items }, () => {
      document.addEventListener('click', this.hideDropdownMenu);
    });
  }

  hideDropdownMenu(props) {
    this.setState({ displayMenu: false,
    isLoggedin: props.isLoggedin,
    items: props.items }, () => {
      document.removeEventListener('click', this.hideDropdownMenu);
    });

  }

  render() {
    return (
        <div  className="nav-menu" >
        <div className="button" onClick={this.showDropdownMenu} style = {{background:"#222",width:"50px"}}>
        <img src={hamburger} className="Hamburger-menu-image" alt="Hamburger Menu" style = {{background:"#222",width:"32px", height:"32px"}} />
        </div>{ this.state.displayMenu ? (
          <ul className="nav-ul" >
          <li className="nav-li" ><Link className="nav-a" to="/">Home</Link></li>
          <li className="nav-li" ><Link className="nav-a" href="Teaching">Teaching</Link></li>
          <li className="nav-li" ><Link className="nav-a" href="Research">Research</Link></li>
          <li className="nav-li" ><Link className="nav-a" href="Reviews">Reviews</Link></li>
          <li className="nav-li" ><Link className="nav-a" href="Services">Services</Link></li>
          <li className="nav-li" ><Link className="nav-a" href="GenerateReport">Generate Report</Link></li>
          <li className="nav-li" ><Link className="nav-a" href="Settings">Settings</Link></li>
          <li className="nav-li" ><Link className="nav-a" href="LogOut">Log Out</Link></li>
          <Route path="/" exact component={Home} />
          </ul>
        ):
        (
          null
        )
        }

       </div>

    );
  }
}

export default Dropdown;

// <Route path="/Reviews/" component={Reviews} />
// <Route path="/Services/" component={Services} />
