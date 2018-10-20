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
            coverPicture="https://getflywheel.com/wp-content/uploads/2018/01/instagram-dimensions-square-flywheel.png"
          />
          <GalleryCard
            coverPicture="https://pbs.twimg.com/profile_images/378800000532546226/dbe5f0727b69487016ffd67a6689e75a_400x400.jpeg"
          />
          <GalleryCard
            coverPicture="https://pbs.twimg.com/profile_images/378800000532546226/dbe5f0727b69487016ffd67a6689e75a_400x400.jpeg"
          />
        </div>
        <div id="galleryCol">
          <GalleryCard
            coverPicture="https://pbs.twimg.com/profile_images/378800000532546226/dbe5f0727b69487016ffd67a6689e75a_400x400.jpeg"
          />
          <GalleryCard
            coverPicture="https://pbs.twimg.com/profile_images/378800000532546226/dbe5f0727b69487016ffd67a6689e75a_400x400.jpeg"
          />
        </div>
        <div id="galleryCol">
          <GalleryCard
            coverPicture="https://pbs.twimg.com/profile_images/378800000532546226/dbe5f0727b69487016ffd67a6689e75a_400x400.jpeg"
          />
          <GalleryCard
            coverPicture="https://pbs.twimg.com/profile_images/378800000532546226/dbe5f0727b69487016ffd67a6689e75a_400x400.jpeg"
          />
        </div>
      </div>
    </div>
    );
  }
}

export default Gallery;
