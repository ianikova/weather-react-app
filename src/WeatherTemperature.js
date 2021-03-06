import React from "react";

export default function WeatherTemperature(props) {
  const unit = props.unit;
  const setUnit = props.setUnit;

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("imperial");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("metric");
  }

  /*
  function fahrenheit() {
    return (props.temperature * 9) / 5 + 32;
  }
  */
  console.log(props);

  if (unit === "metric") {
    return (
      <div className="WeatherTemperature">
        <span className="temperature">{Math.round(props.temperature)}</span>
        <span className="unit">
          °C
          <a href="/" onClick={showFahrenheit}>
            |°F
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div className="WeatherTemperature">
        <span className="temperature">{Math.round(props.temperature)}</span>
        <span className="unit">
          <a href="/" onClick={showCelsius}>
            °C |
          </a>
          °F
        </span>
      </div>
    );
  }
}
