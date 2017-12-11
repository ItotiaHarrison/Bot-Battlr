import React, { Component } from "react";
import Navigation from "./Navigation";
import BotsContainer from "./BotsContainer";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <BotsContainer />
      </div>
    );
  }
}

export default App;
