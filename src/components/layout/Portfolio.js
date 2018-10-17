import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import '../../App.css';

class Portfolio extends React.Component {

  
  render(){
    return (
      <div className="text-overlay" id="MainLeft">
        <h1 id="MainHeadHeader">
          MY 
		  <br/>
          WORK
        </h1>
          <p id="MainHeadSecondary">
            Building the next <span id="bigmoji">🚀</span>.
          </p>
      </div>

    );
  }

}

export default Portfolio;