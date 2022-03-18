import React from "react";

export default function Navbar() {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand" href="/">
          <img
            className="logo"
            src="https://www.pngfind.com/pngs/m/273-2733257_icon-weather-portal-comments-weather-icons-png-white.png"
            alt="weather-logo"
          />
          Weather Around The World
        </a>
      </div>
    </nav>
  );
}
