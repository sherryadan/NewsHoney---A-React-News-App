import "./App.css";

import React, { Component } from "react";
import Navbar from "./components/Navbar";

//Basic Class based Component
export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
      </div>
    );
  }
}
