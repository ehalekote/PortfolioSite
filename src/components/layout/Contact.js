import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import '../../App.css';

class Contact extends React.Component {

  
  render(){
    return (
      <div className="text-overlay" id="MainLeft">
        <h1 id="MainHeadHeader">
          CONTACT 
		  <br/>
          ME
        </h1>
          <p id="MainHeadSecondary">
            Always happy to <span id="bigmoji">📧</span> , <span id="bigmoji">📞</span> , or <span id="bigmoji">💬</span>.
          </p>
      </div>

    );
  }

}

export default Contact;
