import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import '../../App.css';

//Sub-Components
import GalleryCard from "./GalleryCard";




class Gallery extends React.Component {
  render() {
    return (
    <div className="text-overlay" id="gallery">
      <div id="galleryRow">
        <div id="galleryCol">
          <GalleryCard
            coverPicture="https://github.com/ehalekote/PortfolioSite/blob/master/src/images/Aeroponics.jpg?raw=true"
            description="AUTOMATED AEROPONICS"
          />
          <GalleryCard
            coverPicture="https://github.com/ehalekote/PortfolioSite/blob/master/src/images/SmartRock.jpg?raw=true"
            description="SMART ROCK PCB"
          />
          <GalleryCard
            coverPicture="https://github.com/ehalekote/PortfolioSite/blob/master/src/images/ComingSoon.jpg?raw=true"
            description="COMING SOON!"
          />
        </div>
        <div id="galleryCol">
          <GalleryCard
            coverPicture="https://github.com/ehalekote/PortfolioSite/blob/master/src/images/SeaCow.jpg?raw=true"
            description="SEA COW ROBOTICS"
          />
          <GalleryCard
            coverPicture="https://github.com/ehalekote/PortfolioSite/blob/master/src/images/balur.jpg?raw=true"
            description="BALUR ESTATE WEBSITE"
          />
        </div>
        <div id="galleryCol">
          <GalleryCard
            coverPicture="https://github.com/ehalekote/PortfolioSite/blob/master/src/images/Armada.jpg?raw=true"
            description="ARMADA PROTOCOL WEBSITE"
          />
          <GalleryCard
            coverPicture="https://github.com/ehalekote/PortfolioSite/blob/master/src/images/Nara.jpg?raw=true"
            description="NATIONAL AUTONOMOUS RELIEF & AID APP"
          />
        </div>
        <div id="galleryCol">
          <GalleryCard
            coverPicture="https://github.com/ehalekote/PortfolioSite/blob/master/src/images/TabbyTax.jpg?raw=true"
            description="TABBY TAX CHAT BOT"
          />
          <GalleryCard
            coverPicture="https://github.com/ehalekote/PortfolioSite/blob/master/src/images/ComingSoon.jpg?raw=true"
            description="Coming Soon!"
          />
        </div>
      </div>
    </div>
    );
  }
}

export default Gallery;
