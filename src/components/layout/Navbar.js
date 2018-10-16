import React from "react";
import PropTypes from "prop-types";
import '../../App.css';

class Navbar extends React.Component {

  
  render(){
    return (
      <div className="text-overlay" id="Navbar">
        <a className="Navlink" href='#'><h1 className="innerNav">About</h1></a>
        <a className="Navlink" href='#'><h1 className="innerNav">Portfolio</h1></a>
        <a className="Navlink" href='#'><h1 className="innerNav">Contact</h1></a>
      </div>

    );
  }

}

export default Navbar;
