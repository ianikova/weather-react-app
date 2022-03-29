import React from "react";
import Navbar from "./Navbar";
import Weather from "./Weather";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Weather defaultCity="Miami" />
      <div className="navbar fixed-bottom signature">
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
