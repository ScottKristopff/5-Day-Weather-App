import React from 'react';
import { MainWeather } from './Styles/styles_weekdays';
import { Date, City, Conditions, Temp, TodayHigh } from './Styles/styles_weatherdata';
import Moment from 'react-moment';
import { Boop } from '../../Animations/Boop';
const WeatherMain = ({ dates, city, temperatureNow, conditionsToday, temperatureNowHigh }) => {
  return (
    <>
      <MainWeather>
        <Date>
          <p>
            <Moment format="MMM Do[, ] YYYY">{dates}</Moment>
          </p>
        </Date>
        <City>
          <h3>{city}</h3>
        </City>
        <Temp>
          <Boop rotation={10} scale={1}>
            <h1>{temperatureNow}°</h1>
          </Boop>
        </Temp>
        <Conditions>
          <h2>{conditionsToday}</h2>
        </Conditions>
        <TodayHigh>
          <p>
            The high today will be {temperatureNowHigh}° {/* with winds at {windSpeed} mph */}
          </p>
        </TodayHigh>
      </MainWeather>
    </>
  );
};

export default WeatherMain;
