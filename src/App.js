import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Quiz from  './Quiz';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to my React projects</h2>
          <h4>This is a simple game I made with ReactJS</h4>
        </div>
        <Quiz />
      </div>
    );
  }
}

export default App;
