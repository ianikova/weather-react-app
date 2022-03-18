import React, { useState } from "react";
import axios from "axios";
import ReactAnimatedWeather from "react-animated-weather";

export default function Main(props) {
  let [useFahrenheit, setUseFahrenheit] = useState(false);
  function showFahrenheit(event) {
    event.preventDefault();
    setUseFahrenheit(true);
  }

  function showCelsius(event) {
    event.preventDefault();
    setUseFahrenheit(false);
  }

  function getTemperature(t) {
    if (!t) {
      return t;
    }
    if (useFahrenheit) {
      return Math.round((t * 9) / 5) + 32;
    } else {
      return Math.round(t);
    }
  }

  let currentTime = new Date();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let currentDay = days[currentTime.getDay()];

  let todayDateTime = `${currentDay} ${currentTime.getHours()}:${
    (currentTime.getMinutes() < 10 ? "0" : "") + currentTime.getMinutes()
  }`;

  const [inputCity, setInputCity] = useState("");
  const [city, setCity] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [weather, setWeather] = useState({});

  console.log(loaded);

  function weatherDisplay(response) {
    setWeather({
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      minTemperature: response.data.main.temp_min,
      maxTemperature: response.data.main.temp_max,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
    setLoaded(true);
  }

  function searchCity(event) {
    event.preventDefault();
    let apiKey = "7991ccdfd610572f9774b2a3ea5cd2a3";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${inputCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(weatherDisplay);
    setCity(inputCity);
  }

  function changeInputCity(event) {
    setInputCity(event.target.value);
  }

  return (
    <div>
      <div className="container">
        <div className="weather-app">
          <form className="search-form">
            <div className="row">
              <div className="col-6">
                <input
                  type="search"
                  className="form-control search-city"
                  placeholder="Type a city"
                  onChange={changeInputCity}
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary mb-2 shadow"
                onClick={searchCity}
              >
                Search
              </button>
            </div>
          </form>
          <a href="/" id="current-location">
            Current Location
          </a>
        </div>
      </div>

      <div className="container container-chosen-city">
        <div className="row">
          <div className="col-4 side-chosen-city">
            <div>
              <h1 className="chosen-city">{city}</h1>
              <h6 id="date-time">{todayDateTime}</h6>
              <div className="row">
                <div className="col-5">
                  <ReactAnimatedWeather
                    icon="CLEAR_DAY"
                    color="black"
                    size={50}
                    animate={true}
                  />
                  <div className="main-temperature">
                    <span className="temperature" id="temperature">
                      {getTemperature(weather.temperature)}
                    </span>
                    <span className="units">
                      <a
                        href="/"
                        id="celsius-link"
                        className="selected-temperature"
                        onClick={showCelsius}
                      >
                        °C
                      </a>
                      |
                      <a href="/" id="fahrenheit-link" onClick={showFahrenheit}>
                        °F
                      </a>
                    </span>
                  </div>
                </div>
                <div className="col-6">
                  <ul>
                    <li>
                      <em>
                        <strong>
                          <span id="weather-description">
                            {weather.description}
                          </span>
                        </strong>
                      </em>
                    </li>
                    <li>
                      <em>
                        Humidity: <span id="humidity">{weather.humidity}</span>%
                      </em>
                    </li>
                    <li>
                      <em>
                        Max. temperature:{" "}
                        <span id="max-temp">
                          {getTemperature(weather.maxTemperature)}
                        </span>
                        °
                      </em>
                    </li>
                    <li>
                      <em>
                        Min. temperature:{" "}
                        <span id="min-temp">
                          {getTemperature(weather.minTemperature)}
                        </span>
                        °
                      </em>
                    </li>
                    <li>
                      <em>
                        Wind: <span id="wind">{weather.wind}</span> km/h
                      </em>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="col-2 week-day-container">
            <div className="day-of-the-week" id="day-of-the-week-0">
              Mon
            </div>
            <div>
              <ReactAnimatedWeather
                icon="CLEAR_DAY"
                color="black"
                size={50}
                animate={true}
              />
            </div>
            <div className="minor-temperature">
              <span className="temperature" id="temperature-day-0">
                8°
              </span>
            </div>
          </div>
          <div className="col-2 week-day-container">
            <div className="day-of-the-week" id="day-of-the-week-1">
              Tue
            </div>
            <div>
              <ReactAnimatedWeather
                icon="CLEAR_DAY"
                color="black"
                size={50}
                animate={true}
              />
            </div>
            <div className="minor-temperature">
              <span className="temperature" id="temperature-day-1">
                8°
              </span>
            </div>
          </div>
          <div className="col-2 week-day-container">
            <div className="day-of-the-week" id="day-of-the-week-2">
              Wed
            </div>
            <div>
              <ReactAnimatedWeather
                icon="CLEAR_DAY"
                color="black"
                size={50}
                animate={true}
              />
            </div>
            <div className="minor-temperature">
              <span className="temperature" id="temperature-day-2">
                8°
              </span>
            </div>
          </div>
          <div className="col-2 week-day-container">
            <div className="day-of-the-week" id="day-of-the-week-3">
              Thur
            </div>
            <div>
              <ReactAnimatedWeather
                icon="CLEAR_DAY"
                color="black"
                size={50}
                animate={true}
              />
            </div>
            <div className="minor-temperature">
              <span className="temperature" id="temperature-day-3">
                8°
              </span>
            </div>
          </div>
          <div className="col-2 week-day-container">
            <div className="day-of-the-week" id="day-of-the-week-4">
              Fri
            </div>
            <div>
              <ReactAnimatedWeather
                icon="CLEAR_DAY"
                color="black"
                size={50}
                animate={true}
              />
            </div>
            <div className="minor-temperature">
              <span className="temperature" id="temperature-day-4">
                8°
              </span>
            </div>
          </div>

          <div className="col-2 week-day-container">
            <div className="day-of-the-week" id="day-of-the-week-5">
              Sat
            </div>
            <div>
              <ReactAnimatedWeather
                icon="CLEAR_DAY"
                color="black"
                size={50}
                animate={true}
              />
            </div>
            <div className="minor-temperature">
              <span className="temperature" id="temperature-day-5">
                8°
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
