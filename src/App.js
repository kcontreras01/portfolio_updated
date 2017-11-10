import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import './App.css';
import Portfolio from "./Components/Portfolio.js";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Portfolio/>
      </BrowserRouter>

    );
  }
}

export default App;

