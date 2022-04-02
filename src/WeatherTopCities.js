import React from "react";
import WeatherTopCity from "./WeatherTopCity";

export default function WeatherTopCities(props) {
  return (
    <div className="WeatherInfoTopCity">
      <div className="row">
        <WeatherTopCity city="New York" units={props.units} />
        <WeatherTopCity city="Tokyo" units={props.units} />
        <WeatherTopCity city="Moscow" units={props.units} />
        <WeatherTopCity city="London" units={props.units} />
        <WeatherTopCity city="Sydney" units={props.units} />
        <WeatherTopCity city="San Paolo" units={props.units} />
      </div>
    </div>
  );
}
