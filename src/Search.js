import React, { useState } from "react";

export default function Search() {
  return (
    <div className="container">
      <div className="weather-app">
        <form className="search-form">
          <div className="row">
            <div className="col-6">
              <input
                type="search"
                className="form-control search-city"
                placeholder="Type a city"
              />
            </div>
            <button type="submit" className="btn btn-primary mb-2 shadow">
              Search
            </button>
          </div>
        </form>
        <a href="#" id="current-location">
          Current Location
        </a>
      </div>
    </div>
  );
}
