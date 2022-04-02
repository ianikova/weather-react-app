import React, { useState, useEffect } from "react";
import axios from "axios";
import WeatherIcon from "./WeatherIcon";
import WeatherTopCityTemperature from "./WeatherTopCityTemperature";

export default function WeatherTopCity(props) {
  const city = props.city;
  const units = props.units;

  const [weatherData, setWeatherData] = useState({ ready: false });

  useEffect(() => {
    search();
  }, [city]);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      icon: response.data.weather[0].icon,
      date: new Date(response.data.dt * 1000),
    });
  }

  function search() {
    let apiKey = "7991ccdfd610572f9774b2a3ea5cd2a3";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(handleResponse);
  }

  return weatherData.ready ? (
    <div className="col-2">
      <h6 className="topCityTitle">{city}</h6>
      <div className="clearfix">
        <div>
          <WeatherIcon code={weatherData.icon} size={30} />
        </div>
        <div>
          <WeatherTopCityTemperature celsius={weatherData.temperature} />
        </div>
      </div>
    </div>
  ) : null;
}
