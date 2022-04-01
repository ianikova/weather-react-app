import React from "react";
import TopCityFormattedDate from "./TopCityFormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTopCityTemperature from "./WeatherTopCityTemperature";

export default function WeatherTopCities(props) {
  return (
    <div className="WeatherInfoTopCity">
      <div className="row">
        <div className="col-2">
          <h6 className="topCityTitle">New York</h6>
          <div>
            <TopCityFormattedDate date={props.data.date} />
          </div>
          <div className="clearfix">
            <div>
              <WeatherIcon code={props.data.icon} size={30} />
            </div>
            <div>
              <WeatherTopCityTemperature celsius={props.data.temperature} />
            </div>
          </div>
        </div>
        <div className="col-2">
          <h6 className="topCityTitle">Tokyo</h6>
          <div>
            <TopCityFormattedDate date={props.data.date} />
          </div>
          <div className="clearfix">
            <div>
              <WeatherIcon code={props.data.icon} size={30} />
            </div>
            <div>
              <WeatherTopCityTemperature celsius={props.data.temperature} />
            </div>
          </div>
        </div>
        <div className="col-2">
          <h6 className="topCityTitle">Moscow</h6>
          <div>
            <TopCityFormattedDate date={props.data.date} />
          </div>
          <div className="clearfix">
            <div>
              <WeatherIcon code={props.data.icon} size={30} />
            </div>
            <div>
              <WeatherTopCityTemperature celsius={props.data.temperature} />
            </div>
          </div>
        </div>
        <div className="col-2">
          <h6 className="topCityTitle">London</h6>
          <div>
            <TopCityFormattedDate date={props.data.date} />
          </div>
          <div className="clearfix">
            <div>
              <WeatherIcon code={props.data.icon} size={30} />
            </div>
            <div>
              <WeatherTopCityTemperature celsius={props.data.temperature} />
            </div>
          </div>
        </div>
        <div className="col-2">
          <h6 className="topCityTitle">Sydney</h6>
          <div>
            <TopCityFormattedDate date={props.data.date} />
          </div>
          <div className="clearfix">
            <div>
              <WeatherIcon code={props.data.icon} size={30} />
            </div>
            <div>
              <WeatherTopCityTemperature celsius={props.data.temperature} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
