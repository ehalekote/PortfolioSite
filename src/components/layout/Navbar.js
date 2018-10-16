import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import '../../App.css';

class Navbar extends React.Component {

  
  render(){
    return (
      <div className="text-overlay" id="Navbar">
        <Link to="/"><a className="Navlink" href='#'><h1 className="innerNav">ABOUT</h1></a></Link>
        <Link to="/portfolio"><a className="Navlink" href='#'><h1 className="innerNav">PORTFOLIO</h1></a></Link>
        <Link to="/contact"><a className="Navlink" href='#'><h1 className="innerNav">CONTACT</h1></a></Link>
      </div>

    );
  }

}

export default Navbar;
