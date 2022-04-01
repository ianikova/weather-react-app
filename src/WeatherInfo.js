import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row main-row">
        <div className="col-6 side-chosen-city">
          <h1 className="chosen-city">{props.data.city}</h1>
          <div className="summary-description">
            <h6 id="date-time">
              <FormattedDate date={props.data.date} />
            </h6>
            <span className="text-capitalize" id="weather-description">
              {props.data.description}
            </span>
          </div>
        </div>
      </div>

      <div className="row secondary-row">
        <div className="col-2">
          <div className="clearfix">
            <div className="float-left">
              <WeatherIcon code={props.data.icon} size={52} />
            </div>

            <div className="float-left">
              <WeatherTemperature
                temperature={props.data.temperature}
                unit={props.unit}
                setUnit={props.setUnit}
              />
            </div>
          </div>
        </div>
        <div className="col-3">
          <ul>
            <li>
              <em>
                Humidity: <span id="humidity">{props.data.humidity}</span>%
              </em>
            </li>
            <li>
              <em>
                Wind: <span id="wind">{props.data.wind}</span> km/h
              </em>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
