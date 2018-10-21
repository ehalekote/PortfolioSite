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
          />
          <GalleryCard
            coverPicture="https://github.com/ehalekote/PortfolioSite/blob/master/src/images/SmartRock.jpg?raw=true"
          />
          <GalleryCard
            coverPicture="https://github.com/ehalekote/PortfolioSite/blob/master/src/images/Nara.jpg?raw=true"
          />
        </div>
        <div id="galleryCol">
          <GalleryCard
            coverPicture="https://github.com/ehalekote/PortfolioSite/blob/master/src/images/SeaCow.jpg?raw=true"
          />
          <GalleryCard
            coverPicture="https://github.com/ehalekote/PortfolioSite/blob/master/src/images/balur.png?raw=true"
          />
        </div>
        <div id="galleryCol">
          <GalleryCard
            coverPicture="https://github.com/ehalekote/PortfolioSite/blob/master/src/images/Armada.png?raw=true"
          />
          <GalleryCard
            coverPicture="https://github.com/ehalekote/PortfolioSite/blob/master/src/images/Nara.jpg?raw=true"
          />
        </div>
        <div id="galleryCol">
          <GalleryCard
            coverPicture="https://github.com/ehalekote/PortfolioSite/blob/master/src/images/TabbyTax.png?raw=true"
          />
          <GalleryCard
            coverPicture="https://github.com/ehalekote/PortfolioSite/blob/master/src/images/balur.png?raw=true"
          />
        </div>
      </div>
    </div>
    );
  }
}

export default Gallery;
