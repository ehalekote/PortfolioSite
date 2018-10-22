import React from "react";
import PropTypes from "prop-types";
import '../../App.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faTwitter, faLinkedin} from '@fortawesome/free-brands-svg-icons' 

library.add(faGithub, faTwitter, faLinkedin); 

class MainHead extends React.Component {
constructor(props) {
    super(props);
    this.state = {
      
      setColorGH: "gray",
      setColorT: "gray",
      setColorL: "gray",
      enterColor: "#176614",
      exitColor: "gray"

    };
  }

  //------------------------------------------
   handleOverGH = () => {
      this.setState({
          setColorGH: this.props.submitColor
      });
    }

    handleOutGH = () => {
      this.setState({
      setColorGH: this.state.exitColor
    });
    }
    //------------------------------------------
    handleOverT = () => {
      this.setState({
          setColorT: this.props.submitColor
      });
    }

    handleOutT = () => {
      this.setState({
      setColorT: this.state.exitColor
    });
    }
    //------------------------------------------
    handleOverL = () => {
      this.setState({
          setColorL: this.props.submitColor
      });
    }

    handleOutL = () => {
      this.setState({
      setColorL: this.state.exitColor
    });
    }
    //------------------------------------------
    handleClick = () => {
      this.setState({
        setColorGH: this.state.exitColor,
        setColorT: this.state.exitColor,
        setColorL: this.state.exitColor
      });
    }



  render(){
    return (
      <div className="text-overlay" id="MainLeft">
        <h1 id="MainHeadHeader">
          ESHAN
          <br/>
          HALEKOTE
        </h1>
          <p id="MainHeadSecondary">
            <a href="https://github.com/ehalekote"><FontAwesomeIcon icon={['fab', 'github']} size="lg" color={this.state.setColorGH} onMouseOver={() => this.handleOverGH()} onMouseOut={() => this.handleOutGH()} onClick={() => this.handleClick()}/></a>
              &nbsp;|&nbsp; 
            <a href="https://twitter.com/Eshan___"><FontAwesomeIcon icon={['fab', 'twitter']} size="lg" color={this.state.setColorT} onMouseOver={() => this.handleOverT()} onMouseOut={() => this.handleOutT()} onClick={() => this.handleClick()}/></a> 
              &nbsp;|&nbsp; 
            <a href="https://www.linkedin.com/in/eshanhalekote/"><FontAwesomeIcon icon={['fab', 'linkedin']} size="lg" color={this.state.setColorL} onMouseOver={() => this.handleOverL()} onMouseOut={() => this.handleOutL()} onClick={() => this.handleClick()}/></a>
            <br/> 
            I'm a fullstack, blockchain, and embedded software <span id="bigmoji">👨🏽‍💻</span>.
            <br/>
            If I'm not working, I'm <span id="bigmoji">🧗🏽‍♂️</span> or <span id="bigmoji">🍽️</span>.
            <br/>
            The University of Texas at Austin ECE <span id="bigmoji">🤘🏽</span>.
            <br/>
          </p>
      </div>
    );
  }

}

export default MainHead;
