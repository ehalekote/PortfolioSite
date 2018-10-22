import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import '../../App.css';

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


  render() {
    const inDescription = this.state.inDescription;
    let displayInGallery;

    if(inDescription){
      displayInGallery = (
        <div className="text-overlay descriptionBox"  id="gallery">
          <FontAwesomeIcon icon="times" size="3x" color={this.state.exitIcon} style={{float:'right', marginTop:'9px', marginRight:'15px'}} onMouseOver={() => this.handleOverExit()} onMouseOut={() => this.handleOutExit()} onClick={() => this.handleExitClick()}/> 
          <h1>{this.state.title}</h1>
          <p>{this.state.description}</p>
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
                description="An automated aeroponics plant growing system."
                textColor={this.props.textColor}
                carouselPictures=""
                toggleDescription = {this.handleClick.bind(this)}
              />
              <GalleryCard
                coverPicture="https://github.com/ehalekote/PortfolioSite/blob/master/src/images/SmartRock.jpg?raw=true"
                title="SMART ROCK GEOLOGICAL RESEARCH PCB"
                description= "This device was designed to log valuable sediment flow data in rivers and streams. The setup consists of an injection molded high density plastic outer shell which resembles a rock. Inside the shell is a cavity for a custom 2 part PCB designed based off of the arduino micro computing platform. Notable features include a full inertial measurement unit, real time clock, and SD card writer to store data. Once a battery, PCB, and RFID chip are placed inside the airtight plastic shell, the device can be thrown into a river and collected at a later date (found via scanning the river for the RFID chip). The device utilizes a low power mode to sleep until it is woken up by motion, at which point it will begin logging motion/orientation data to the sd card."
                textColor={this.props.textColor}
                carouselPictures=""
                toggleDescription = {this.handleClick.bind(this)}
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
                description=""
                textColor={this.props.textColor}
                carouselPictures=""
                toggleDescription = {this.handleClick.bind(this)}
              />
              <GalleryCard
                coverPicture="https://github.com/ehalekote/PortfolioSite/blob/master/src/images/balur.jpg?raw=true"
                title="BALUR COFFEE ESTATE WEBSITE"
                description=""
                textColor={this.props.textColor}
                toggleDescription = {this.handleClick.bind(this)}
              />
            </div>
            <div id="galleryCol">
              <GalleryCard
                coverPicture="https://github.com/ehalekote/PortfolioSite/blob/master/src/images/Armada.jpg?raw=true"
                title="ARMADA PROTOCOL WEBSITE"
                description=""
                textColor={this.props.textColor}
                carouselPictures=""
                toggleDescription = {this.handleClick.bind(this)}
              />
              <GalleryCard
                coverPicture="https://github.com/ehalekote/PortfolioSite/blob/master/src/images/Nara.jpg?raw=true"
                title="NATIONAL AUTONOMOUS RELIEF & AID MOBILE APP"
                description=""
                textColor={this.props.textColor}
                toggleDescription = {this.handleClick.bind(this)}
              />
            </div>
            <div id="galleryCol">
              <GalleryCard
                coverPicture="https://github.com/ehalekote/PortfolioSite/blob/master/src/images/TabbyTax.jpg?raw=true"
                title="TABBY TAX FACEBOOK CHAT BOT"
                description=""
                textColor={this.props.textColor}
                carouselPictures=""
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
