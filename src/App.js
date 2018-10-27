import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch, hashHistory } from "react-router-dom";
import { HashRouter } from 'react-router-dom'


//Components
import Background from "./components/layout/Background";
import MainHead from "./components/layout/MainHead";
import Navbar from "./components/layout/Navbar";
import Portfolio from "./components/layout/Portfolio";
import Contact from "./components/layout/Contact";
import ContactForm from "./components/layout/ContactForm";
import Gallery from "./components/layout/Gallery";


class App extends Component { 
	constructor(){
		super();
		this.state = {
		  highlightColor: "#176614"
		};
	}

	highlightColorSetter = () =>{
		var letters = '0123456789ABCDEF';
	    var color = '#';
	    for (var i = 0; i < 6; i++) {
	      color += letters[Math.floor(Math.random() * 16)];
	    }

	    this.setState({
	    highlightColor: color
	  });

	}
	render() {
		return (
		      <div className="app">
		        <HashRouter>
		        
			        <div>
			        	<Route
			        		path="/"
			        		render={(props) => <Navbar submitColor={this.state.highlightColor} />}
			        	/>	
			        	<Route 
			        		exact path="/" 
			        		render={(props) => <MainHead submitColor={this.state.highlightColor} />}
		        		/>
			        	<Route path="/portfolio" component={Portfolio} />
			        	<Route 
			        		path="/portfolio" 
			        		render={(props) => <Gallery textColor={this.state.highlightColor} />}
		        		/>
			        	<Route path="/contact" component={Contact} />
			        	<Route
						  	path='/contact'
						  	render={(props) => <ContactForm submitColor={this.state.highlightColor} />}
						/>
						<Background
			        		colorGetter = {this.highlightColorSetter.bind(this)}
			        		backgroundColor={this.state.highlightColor}
		        		/>
			        </div>

		        </HashRouter>
		      </div>
		    
		);
		}
	}

export default App;
