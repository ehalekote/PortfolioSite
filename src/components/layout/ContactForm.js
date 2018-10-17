import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import '../../App.css';

class ContactForm extends React.Component {
constructor(props) {
    super(props);
    this.state = {
      
      setColor: "gray",
      enterColor: "#d90a0a",
      exitColor: "gray"

    };
  }

   handleEnter = () => {
      this.setState({
          setColor: this.props.submitColor
      }, () => {
          document.querySelector(".submitBox").style.color = this.state.setColor;
          document.querySelector(".submitBox").style.borderColor = this.state.setColor;
      })
    }

    handleLeave = () => {
      this.setState({
      setColor: this.state.exitColor
    });
    }

    handleClick = () => {
      alert("Message Sent.");
    }

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
            <input type="submit" value="Submit" className="submitBox" onMouseEnter={() => this.handleEnter()} onMouseLeave={() => this.handleLeave()} onClick={() => this.handleClick()}></input>
           </form>
      </div>

    )
  }

}

export default ContactForm;
