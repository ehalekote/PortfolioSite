import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import '../../App.css';

class ContactForm extends React.Component {

  
  render(){
    return (
      <div className="text-overlay" id="ContactFormRight">
          <form id="cform">
            <p id="ContactFormText">Name:</p>
            <input type="text" name="Name" className="shortBox"></input><br/>
            <p id="ContactFormText">Subject:</p>
            <input type="text" name="Subject" className="shortBox"></input><br/>
            <p id="ContactFormText">Message:</p>
            <textarea rows="4" cols="50" name="Message" className="messageBox"></textarea>
            <input type="submit" value="Submit"></input>
           </form>
      </div>

    );
  }

}

export default ContactForm;
