import React, { Component } from 'react';
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
import '../../App.css';

class GalleryCard extends React.Component { 
  
  handleClick = () => {
    this.props.toggleDescription(this.props.title, this.props.description, this.props.carouselPictures);
  }

  render(){
  	const {
	      coverPicture,
	      title,
	      description,
	      carouselPictures,
	      textColor,
	    } = this.props;

	return (
	<div id="galleryImgContainer">
    	<img src={coverPicture} />
    	<div class="cardDescription" style={{border:'4px solid black'}} onClick={() => this.handleClick({title},{description},{carouselPictures})}>
    		<p class="cardText" style={{color:'black'}}>{title}</p>
    	</div>
  	</div>
    );
  }

}

GalleryCard.PropTypes = {
	coverPicture: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	carouselPictures: PropTypes.arrayOf(PropTypes.string).isRequired,
	textColor: PropTypes.string.isRequired
};

export default GalleryCard;
