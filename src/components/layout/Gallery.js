import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import '../../App.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

//Sub-Components
import GalleryCard from "./GalleryCard";
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

library.add(faTimes);



class Gallery extends React.Component {
constructor(props) {
    super(props);
    this.state = {
      exitIcon: "black",
      inDescription: false,
      title:"N/A",
      description:"N/A",
      images:[]
    };
  }  

  handleClick = (ctitle, cdescription, cimages) =>{
    this.setState({
      title:ctitle,
      description:cdescription,
      images:cimages,
      inDescription: !(this.state.inDescription)
    });
  }

  handleOverExit = () => {
    this.setState({
      exitIcon: this.props.textColor
    });
  }

  handleOutExit = () => {
    this.setState({
      exitIcon: 'black'
    });
  }

  handleExitClick = () => {
    this.setState({
      exitIcon: 'black',
      inDescription: !(this.state.inDescription)
    });
  }

  createCarousel = () => {
    
    let carousel = []

    for (let j = 0; j < this.state.images.length; j++) {
      carousel.push(
        <div>
            <img src={this.state.images[j]} /> 
        </div>
      )
    }

    return carousel

  }


  render() {
    const inDescription = this.state.inDescription;
    let displayInGallery;

    if(inDescription){
      displayInGallery = (
        <div className="text-overlay descriptionBox"  id="gallery">
          <FontAwesomeIcon icon="times" size="3x" color={this.state.exitIcon} style={{float:'right', marginTop:'9px', marginRight:'15px'}} onMouseOver={() => this.handleOverExit()} onMouseOut={() => this.handleOutExit()} onClick={() => this.handleExitClick()}/> 
          <h1>{this.state.title}</h1>
          <p>{this.state.description}</p>
          <div className="text-overlay" id="carouselFrame">
            <Carousel showThumbs={false} autoPlay={true} showIndicators={false}>
                {this.createCarousel()}
            </Carousel>
          </div>
        </div>
      )
    } else {
      displayInGallery = (
        <div className="text-overlay" id="gallery">
          <div id="galleryRow">
            <div id="galleryCol">
              <GalleryCard
                coverPicture="https://github.com/ehalekote/PortfolioSite/blob/master/src/images/Aeroponics.jpg?raw=true"
                title="AUTOMATED AEROPONICS GROW SYSTEM"
                description="Aeroponics uses a nutrient rich mist to provide a plant with the necessary elements to survive. A Raspberry Pi automates the misting cycle and logs images of the process. Some benefits of aeroponics include: a clean environment which reduces the need for  pesticides, conservation of water, and conservation of space. Check out my featured instructable here."
                textColor={this.props.textColor}
                carouselPictures=""
                toggleDescription = {this.handleClick.bind(this)}
                carouselPictures={["https://github.com/ehalekote/PortfolioSite/blob/master/src/images/Aeroponics1.jpg?raw=true","https://github.com/ehalekote/PortfolioSite/blob/master/src/images/Aeroponics2.jpg?raw=true", "https://github.com/ehalekote/PortfolioSite/blob/master/src/images/Aeroponics.jpg?raw=true"]}
              />
              <GalleryCard
                coverPicture="https://github.com/ehalekote/PortfolioSite/blob/master/src/images/SmartRock.jpg?raw=true"
                title="SMART ROCK GEOLOGICAL RESEARCH PCB"
                description= "This device was designed to log valuable sediment flow data by being placed inside a river. The setup consists of an injection molded high density plastic outer shell which resembles a rock. Inside are 2 custom PCBs designed based off of the arduino platform, and include a full inertial measurement unit, real time clock, and SD card writer to store data."
                textColor={this.props.textColor}
                toggleDescription = {this.handleClick.bind(this)}
                carouselPictures={["https://github.com/ehalekote/PortfolioSite/blob/master/src/images/SmartRock1.jpg?raw=true","https://github.com/ehalekote/PortfolioSite/blob/master/src/images/SmartRock.jpg?raw=true"]}
              />
              <GalleryCard
                coverPicture="https://github.com/ehalekote/PortfolioSite/blob/master/src/images/ComingSoon.jpg?raw=true"
                title="COMING SOON!"
                description=""
                textColor={this.props.textColor}
                carouselPictures=""
                toggleDescription = {this.handleClick.bind(this)}
              />
            </div>
            <div id="galleryCol">
              <GalleryCard
                coverPicture="https://github.com/ehalekote/PortfolioSite/blob/master/src/images/SeaCow.jpg?raw=true"
                title="SEA COW UNDERWATER ROBOT"
                description="SeaCow is an underwater remotely operated vehicle completely designed and assembled by UT’s Marine Technology Society for use in competitive robotic settings.  SeaCow is capable of grasping submerged objects with a custom single servo driven gripper, HD video feedback, and two custom superbright LED rings onboard for illumination."
                textColor={this.props.textColor}
                carouselPictures={["https://github.com/ehalekote/PortfolioSite/blob/master/src/images/SeaCow1.png?raw=true", "https://github.com/ehalekote/PortfolioSite/blob/master/src/images/SeaCow2.jpg?raw=true", "https://github.com/ehalekote/PortfolioSite/blob/master/src/images/SeaCow.jpg?raw=true"]}
                toggleDescription = {this.handleClick.bind(this)}
              />
              <GalleryCard
                coverPicture="https://github.com/ehalekote/PortfolioSite/blob/master/src/images/balur.jpg?raw=true"
                title="BALUR COFFEE ESTATE WEBSITE"
                description="Balur Estate’s 400 acres of pristine coffee plantation originates back to the 1840’s, and the planter’s bungalow turned homestay still retains portions of the original architecture dating back to 1853. We welcome you to spend a few days exploring our small piece of Mudigere coffee, Chikmagalur cuisine, and Indian heritage at beautiful Balur Estate."
                textColor={this.props.textColor}
                toggleDescription = {this.handleClick.bind(this)}
                carouselPictures={["https://github.com/ehalekote/PortfolioSite/blob/master/src/images/balur1.jpg?raw=true","https://github.com/ehalekote/PortfolioSite/blob/master/src/images/balur2.jpg?raw=true","https://github.com/ehalekote/PortfolioSite/blob/master/src/images/balur3.jpg?raw=true","https://github.com/ehalekote/PortfolioSite/blob/master/src/images/balur.jpg?raw=true"]}
              />
            </div>
            <div id="galleryCol">
              <GalleryCard
                coverPicture="https://github.com/ehalekote/PortfolioSite/blob/master/src/images/Armada.jpg?raw=true"
                title="ARMADA PROTOCOL WEBSITE"
                description="Armada is a permissionless protocol for easily sharing ownership of tokenized assets, including video game items, real estate, and everything in between. Armada seeks to foster global financial inclusion by empowering any person, regardless of wealth, to easily buy into a fraction of a tokenized asset."
                textColor={this.props.textColor}
                carouselPictures={["https://github.com/ehalekote/PortfolioSite/blob/master/src/images/Armada.jpg?raw=true"]}
                toggleDescription = {this.handleClick.bind(this)}
              />
              <GalleryCard
                coverPicture="https://github.com/ehalekote/PortfolioSite/blob/master/src/images/Nara.jpg?raw=true"
                title="NATIONAL AUTONOMOUS RELIEF & AID MOBILE APP"
                description="NARA is an interactive alert system on platforms people already use like SMS and Facebook. For emergency management teams, NARA allows for targeted messages to be pushed out based on disaster victims' geography, needs, and self-reported safety statuses. NARA is a 2017 DoD National Security Technology Accelerator Hackathon winner."
                textColor={this.props.textColor}
                toggleDescription = {this.handleClick.bind(this)}
                carouselPictures={["https://github.com/ehalekote/PortfolioSite/blob/master/src/images/Nara1.png?raw=true","https://github.com/ehalekote/PortfolioSite/blob/master/src/images/Nara2.png?raw=true","https://github.com/ehalekote/PortfolioSite/blob/master/src/images/Nara3.png?raw=true","https://github.com/ehalekote/PortfolioSite/blob/master/src/images/Nara.jpg?raw=true"]}
              />
            </div>
            <div id="galleryCol">
              <GalleryCard
                coverPicture="https://github.com/ehalekote/PortfolioSite/blob/master/src/images/TabbyTax.jpg?raw=true"
                title="TABBY TAX FACEBOOK CHAT BOT"
                description="TabbyTax is a Facebook MessengerBot created at Hack Princeton in Spring 2017. 
                            It compiles simple tax forms for submission to the IRS, all via Facebook Messenger. TabbyTax is optimized for US first-time taxpayers, students, and participants earning
                            under $30,000."
                textColor={this.props.textColor}
                carouselPictures={["https://github.com/ehalekote/PortfolioSite/blob/master/src/images/TabbyTax1.jpg?raw=true","https://github.com/ehalekote/PortfolioSite/blob/master/src/images/TabbyTax2.jpg?raw=true","https://github.com/ehalekote/PortfolioSite/blob/master/src/images/TabbyTax.jpg?raw=true"]}
                toggleDescription = {this.handleClick.bind(this)}
              />
              <GalleryCard
                coverPicture="https://github.com/ehalekote/PortfolioSite/blob/master/src/images/ComingSoon.jpg?raw=true"
                title="COMING SOON!"
                description=""
                textColor={this.props.textColor}
                carouselPictures=""
                toggleDescription = {this.handleClick.bind(this)}
              />r
            </div>
          </div>
        </div>
      )
    }

    return (
    <div>
      {displayInGallery}
    </div>
    );
  }
}

export default Gallery;
