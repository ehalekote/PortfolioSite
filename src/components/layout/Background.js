import React from "react";
import Particles from 'react-particles-js';
import PropTypes from "prop-types";

class Background extends React.Component { 

  handleClick = () => {
    this.props.colorGetter()
  }
  

//Just FYI I edited the div in 'react-particles-js' file to always be 100% in order to fit the Canvas to the whole screen
  render(){
    return (
      <div className="canvasDiv" onClick={() => this.handleClick()}>
        <Particles 
              params={{
                "particles": {
                  "number": {
                    "value": 30,
                    "density": {
                      "enable": true,
                      "value_area": 800
                    }
                  },
                  "color": {
                    "value": this.props.backgroundColor  
                  },
                  "shape": {
                    "type": "circle",
                    "stroke": {
                      "width": 0,
                      "color": ["#176614"]
                    },
                    "polygon": {
                      "nb_sides": 5
                    },
                    "image": {
                      "src": "img/github.svg",
                      "width": 100,
                      "height": 100
                    }
                  },
                  "opacity": {
                    "value": 1,
                    "random": true,
                    "anim": {
                      "enable": true,
                      "speed": 1,
                      "opacity_min": 0.1,
                      "sync": false
                    }
                  },
                  "size": {
                    "value": 6,
                    "random": true,
                    "anim": {
                      "enable": true,
                      "speed": 1,
                      "size_min": 1.9,
                      "sync": false
                    }
                  },
                  "line_linked": {
                    "enable": false,
                    "distance": 150,
                    "color": "#ffffff",
                    "opacity": 0.4,
                    "width": 1
                  },
                  "move": {
                    "enable": true,
                    "speed": 2,
                    "direction": "right",
                    "random": false,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false,
                    "attract": {
                      "enable": false,
                      "rotateX": 600,
                      "rotateY": 1200
                    }
                  }
                },
                "interactivity": {
                  "detect_on": "canvas",
                  "events": {
                    "onhover": {
                      "enable": false,
                      "mode": "grab"
                    },
                    "onclick": {
                      "enable": false,
                      "mode": "push"
                    },
                    "resize": true
                  },
                  "modes": {
                    "grab": {
                      "distance": 400,
                      "line_linked": {
                        "opacity": 1
                      }
                    },
                    "bubble": {
                      "distance": 400,
                      "size": 40,
                      "duration": 2,
                      "opacity": 8,
                      "speed": 3
                    },
                    "repulse": {
                      "distance": 200,
                      "duration": 0.4
                    },
                    "push": {
                      "particles_nb": 4
                    },
                    "remove": {
                      "particles_nb": 2
                    }
                  }
                },
                "retina_detect": true
                }
              }
              style={{
                width: '100%',
                height:'100%',
                }
              }
            />
      </div>
    );
  }

}

export default Background;
