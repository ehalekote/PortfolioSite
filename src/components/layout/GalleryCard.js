import React, { Component } from 'react';
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
import '../../App.css';

class GalleryCard extends React.Component { 

  render(){
  	const {
	      coverPicture,
	      //title,
	      //description,
	      //carouselPictures
	      //particleColor
	    } = this.props;

	return (
	<div id="galleryImgContainer">
    	<img src={coverPicture} />
  	</div>
    );
  }

}

GalleryCard.PropTypes = {
	//coverPicture: PropTypes.string.isRequired,
	//title: PropTypes.string.isRequired,
	//description: PropTypes.string.isRequired,
	//carouselPictures: PropTypes.arrayOf(PropTypes.string).isRequired,
	//particleColor: PropTypes.string.isRequired
};

export default GalleryCard;
