import React from "react";
import Navbar from "./Navbar";
import Main from "./Main";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />
      <div class="navbar fixed-bottom signature">
        <small>
          <a
            href="https://github.com/ianikova/weather-react-app"
            target="_blank"
            rel="noreferrer"
          >
            Open-source code
          </a>
          , by Anna Ianikova
        </small>
      </div>
    </div>
  );
}
