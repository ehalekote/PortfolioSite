import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import '../../App.css';

class Navbar extends React.Component {
constructor(props) {
    super(props);
    this.state = {
      
      setColorA: "#91969e",
      setColorP: "#91969e",
      setColorC: "#91969e",
      enterColor: "#176614",
      exitColor: "#91969e"

    };
  }

  //------------------------------------------
   handleOverA = () => {
      this.setState({
          setColorA: this.props.submitColor
      });
    }

    handleOutA = () => {
      this.setState({
      setColorA: this.state.exitColor
    });
    }
    //------------------------------------------
    handleOverP = () => {
      this.setState({
          setColorP: this.props.submitColor
      });
    }

    handleOutP = () => {
      this.setState({
      setColorP: this.state.exitColor
    });
    }
    //------------------------------------------
    handleOverC = () => {
      this.setState({
          setColorC: this.props.submitColor
      });
    }

    handleOutC = () => {
      this.setState({
      setColorC: this.state.exitColor
    });
    }


  
  render(){
    return (
      <div className="text-overlay" id="Navbar">
        <Link to="/"><a className="Navlink" href='#'><h1 className="innerNav" style={{color: this.state.setColorA}} onMouseOver={() => this.handleOverA()} onMouseOut={() => this.handleOutA()} >ABOUT</h1></a></Link>
        <Link to="/portfolio"><a className="Navlink" href='#'><h1 className="innerNav" style={{color: this.state.setColorP}} onMouseOver={() => this.handleOverP()} onMouseOut={() => this.handleOutP()} >PORTFOLIO</h1></a></Link>																				
        <Link to="/contact"><a className="Navlink" href='#'><h1 className="innerNav" style={{color: this.state.setColorC}} onMouseOver={() => this.handleOverC()} onMouseOut={() => this.handleOutC()} >CONTACT</h1></a></Link>
      </div>

    );
  }

}

export default Navbar;
