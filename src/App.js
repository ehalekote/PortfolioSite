import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";

//Components
import Background from "./components/layout/Background";
import MainHead from "./components/layout/MainHead";
import Navbar from "./components/layout/Navbar";
import Portfolio from "./components/layout/Portfolio";
import Contact from "./components/layout/Contact";
import ContactForm from "./components/layout/ContactForm";


class App extends Component {
	constructor(){
		super();
		this.state = {
		  submitColor: "#d90a0a"
		};
	}

	colorGetterHandler = (particleColors) => {
	  this.setState({
	    submitColor: particleColors
	  });
	}

	render() {
		return (
		      <div className="app">
		        <BrowserRouter>
			        <div>
			        	<Navbar/>	
			        	<Route exact path="/" component={MainHead} />
			        	<Route path="/portfolio" component={Portfolio} />
			        	<Route path="/contact" component={Contact} />
			        	<Route
						  path='/contact'
						  render={(props) => <ContactForm submitColor={this.state.submitColor} />}
						/>

			        </div>
		        </BrowserRouter>
		        	<Background
		        		colorGetter = {this.colorGetterHandler.bind(this)}
		        	/>
		      </div>
		    
		);
		}
	}

export default App;
