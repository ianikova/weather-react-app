import React, { useState, useEffect } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import WeatherTopCities from "./WeatherTopCities";

export default function Weather(props) {
  const [units, setUnits] = useState("metric");
  const [city, setCity] = useState(props.defaultCity);
  const [weatherData, setWeatherData] = useState({ ready: false });

  useEffect(() => {
    search();
  }, [props.defaultCity]);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      minTemperature: response.data.main.temp_min,
      maxTemperature: response.data.main.temp_max,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: response.data.weather[0].icon,
      date: new Date(response.data.dt * 1000),
      city: response.data.name,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function search(newUnits) {
    if (!newUnits) {
      newUnits = units;
    }
    let apiKey = "7991ccdfd610572f9774b2a3ea5cd2a3";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${newUnits}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function showPosition(position) {
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    let apiKey = "7991ccdfd610572f9774b2a3ea5cd2a3";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function getCurrentPosition(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(showPosition);
  }

  function changeUnits(units) {
    setUnits(units);
    search(units);
  }

  return (
    <div>
      <div className="container">
        <div className="weather-app">
          <form onSubmit={handleSubmit} className="search-form">
            <div className="row">
              <div className="col-6">
                <input
                  type="search"
                  placeholder="Enter a city.."
                  className="form-control"
                  autoFocus="on"
                  onChange={handleCityChange}
                />
              </div>
              <div className="col-3">
                <input
                  type="submit"
                  value="Search"
                  className="btn btn-primary w-10"
                />
              </div>
            </div>
          </form>
          <a href="/" id="current-location" onClick={getCurrentPosition}>
            Current Location
          </a>
        </div>
      </div>

      {weatherData.ready ? (
        <div className="container container-chosen-city">
          <WeatherInfo data={weatherData} unit={units} setUnit={changeUnits} />
          <WeatherForecast
            coordinates={weatherData.coordinates}
            units={units}
          />
        </div>
      ) : null}

      {weatherData.ready ? (
        <div className="container">
          <div className="top-cities">
            <WeatherTopCities data={weatherData} units={units} />
          </div>
        </div>
      ) : null}
    </div>
  );
}
