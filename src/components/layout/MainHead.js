import React from "react";
import PropTypes from "prop-types";
import '../../App.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons' 

library.add(faFacebookF); 

class MainHead extends React.Component {
  
  render(){
    return (
      <div className="text-overlay" id="MainLeft">
        <h1 id="MainHeadHeader">
          ESHAN
          <br/>
          HALEKOTE
        </h1>
          <p id="MainHeadSecondary">
            I'm a fullstack, blockchain, and embedded software <span id="bigmoji">👨‍💻</span>.
            <br/>
            If I'm not working, I'm <span id="bigmoji">🧗‍</span> or <span id="bigmoji">🍽️</span>.
            <br/>
            The University of Texas at Austin ECE <span id="bigmoji">🤘</span>.
            <br/>
            <FontAwesomeIcon icon={['fab', 'facebook-f']} /> | <FontAwesomeIcon icon={['fab', 'facebook-f']} /> | <FontAwesomeIcon icon={['fab', 'facebook-f']} />
          </p>
      </div>
    );
  }

}

export default MainHead;
