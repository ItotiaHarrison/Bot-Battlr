import React, { Component } from "react";
import Navigation from "./components/Navigation";
import BotsPage from "./containers/BotsPage";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BotsPage />
      </div>
    );
  }
}

export default App;
