import React from "react";
import logo from "./logo.svg";
import "./App.css";

const API_ENDPOINT =
  "https://crudcrud.com/api/3f64258e256b4d8ca26c19e29e18c5d5";

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  testing() {
    console.log(API_ENDPOINT);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a className="App-link" target="_blank" rel="noopener noreferrer">
            Learn React
          </a>
          <button onSubmit={this.testing()}>Test Button</button>
        </header>
      </div>
    );
  }
}
