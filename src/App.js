import React, { Component } from 'react';
import './App.css';

//Components
import Background from "./components/layout/Background";
import MainHead from "./components/layout/MainHead";
import Navbar from "./components/layout/Navbar";


class App extends Component {
  render() {
    return (
      <div className="app">
        <Navbar/>
        <MainHead/>
        <Background/>
      </div>
    );
  }
}

export default App;
