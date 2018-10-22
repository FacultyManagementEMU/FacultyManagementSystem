import React from 'react';
import '../App.css';
import hamburger from '../hamburger.png';


class Dropdown extends React.Component {
constructor(){
 super();

 this.state = {
       displayMenu: false,
     };

  this.showDropdownMenu = this.showDropdownMenu.bind(this);
  this.hideDropdownMenu = this.hideDropdownMenu.bind(this);

};

showDropdownMenu(event) {
    event.preventDefault();
    this.setState({ displayMenu: true }, () => {
    document.addEventListener('click', this.hideDropdownMenu);
    });
  }

  hideDropdownMenu() {
    this.setState({ displayMenu: false }, () => {
      document.removeEventListener('click', this.hideDropdownMenu);
    });

  }

  render() {
    return (
        <div  className="nav-menu" >
        <div className="button" onClick={this.showDropdownMenu} style = {{background:"#222",width:"50px"}}>
        <img src={hamburger} className="Hamburger-menu-image" alt="Hamburger Menu" style = {{background:"#222",width:"32px", height:"32px"}} />
        </div>

          { this.state.displayMenu ? (
          <ul className="nav-ul" >
         <li className="nav-li" ><a className="nav-a" href="#Home">Home</a></li>
         <li className="nav-li" ><a className="nav-a" href="#Teaching">Teaching</a></li>
         <li className="nav-li" ><a className="nav-a" href="#Research">Research</a></li>
         <li className="nav-li" ><a className="nav-a" href="#PeerReviews">Peer Reviews</a></li>
         <li className="nav-li" ><a className="nav-a" href="#Services">Services</a></li>
         <li className="nav-li" ><a className="nav-a" href="#GenerateReport">Generate Report</a></li>
         <li className="nav-li" ><a className="nav-a" href="#Settings">Settings</a></li>
         <li className="nav-li" ><a className="nav-a" href="#LogOut">Log Out</a></li>
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
