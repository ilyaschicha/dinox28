import React from "react";
import logo from "../assets/logo.svg";
import { Helmet } from "react-helmet";
import "../css/App.css";

function Contact() {
  return (
    <div className="App">
      <div>
        <Helmet>
          <title>Dinox - Catalogue</title>
        </Helmet>
        <h1>Catalogue</h1>
      </div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default Contact;
