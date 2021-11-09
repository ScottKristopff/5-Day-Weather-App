import React, { useState, useEffect } from 'react';
import { AppWrapper } from '../Styles/styles';
import { Route, Switch } from 'react-router-dom';

//?Component Imports
import { WeatherUI } from '../WeatherUI/WeatherUI';
import { Forum } from '../Forum/Forum';

const Weather = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [weatherData, setWeatherData] = useState({
    city: '',
    dates: '',
    temperatureNow: '',
    temperatureNowHigh: '',
    conditionsToday: '',
    conditionsID: '',
    windSpeed: '',
    temperatureTomorrow: '',
    conditionsTomorrow: '',
    conditionsIDTomorrow: '',
    temperatureDay3: '',
    conditionsDay3: '',
    conditionsID3: '',
    temperatureDay4: '',
    conditionsDay4: '',
    conditionsID4: '',
    temperatureDay5: '',
    conditionsDay5: '',
    conditionsID5: '',
    temperatureDay6: '',
    conditionsDay6: '',
    conditionsID6: '',
    temperatureDay7: '',
    conditionsDay7: '',
    conditionsID7: ''
  });

  //Api Fetch Request
  const handleWeatherFetchClick = async () => {
    /*  require('dotenv').config(); */
    /* const API_KEY = process.env.TOKEN_WEATHER_API; */
    const API_KEY = 'f1cdc7b61d7768768219833b1d28a7d5';
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${searchQuery.toLowerCase()}&appid=${API_KEY}&units=imperial`
      );
      const data = await response.json();
      console.log(data);
      setWeatherData({
        city: data.city.name,
        dates: data.list[0].dt_txt,
        temperatureNow: Math.round(data.list[0].main.temp),
        temperatureNowHigh: Math.round(data.list[0].main.temp_max),
        conditionsToday: data.list[0].weather[0].description,
        conditionsID: data.list[0].weather[0].main,
        windSpeed: data.list[0].wind.speed,
        temperatureTomorrow: Math.round(data.list[7].main.temp),
        conditionsTomorrow: data.list[7].weather[0].description,
        conditionsIDTomorrow: data.list[7].weather[0].main,
        temperatureDay3: Math.round(data.list[15].main.temp),
        conditionsDay3: data.list[15].weather[0].description,
        conditionsID3: data.list[15].weather[0].main,
        temperatureDay4: Math.round(data.list[23].main.temp),
        conditionsDay4: data.list[23].weather[0].description,
        conditionsID4: data.list[23].weather[0].main,
        temperatureDay5: Math.round(data.list[30].main.temp),
        conditionsDay5: data.list[30].weather[0].description,
        conditionsID5: data.list[30].weather[0].main,
        temperatureDay6: Math.round(data.list[35].main.temp),
        conditionsDay6: data.list[35].weather[0].description,
        conditionsID6: data.list[35].weather[0].main,
        temperatureDay7: Math.round(data.list[15].main.temp),
        conditionsDay7: data.list[15].weather[0].description,
        conditionsID7: data.list[15].weather[0].main
      });
    } catch (error) {
      setWeatherData(undefined);
      console.log('Something went wrong get help', error);
    }
  };

  // Gio-Location Fetch Request

  useEffect(() => {
    const url = 'https://ipapi.co/json/';

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setSearchQuery(data.city);
      } catch (error) {
        console.log('Gio-Location Error', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <AppWrapper>
        <Switch>
          <Route path="/WeatherUI" exact>
            <WeatherUI
              city={weatherData.city}
              dates={weatherData.dates}
              temperatureNow={weatherData.temperatureNow}
              temperatureNowHigh={weatherData.temperatureNowHigh}
              conditionsToday={weatherData.conditionsToday}
              windSpeed={weatherData.windSpeed}
              conditionsID={weatherData.conditionsID}
              temperatureTomorrow={weatherData.temperatureTomorrow}
              conditionsTomorrow={weatherData.conditionsTomorrow}
              conditionsIDTomorrow={weatherData.conditionsIDTomorrow}
              temperatureDay3={weatherData.temperatureDay3}
              conditionsDay3={weatherData.conditionsDay3}
              conditionsID3={weatherData.conditionsID3}
              temperatureDay4={weatherData.temperatureDay4}
              conditionsDay4={weatherData.conditionsDay4}
              conditionsID4={weatherData.conditionsID4}
              temperatureDay5={weatherData.temperatureDay5}
              conditionsDay5={weatherData.conditionsDay5}
              conditionsID5={weatherData.conditionsID5}
              temperatureDay6={weatherData.temperatureDay6}
              conditionsDay6={weatherData.conditionsDay6}
              conditionsID6={weatherData.conditionsID6}
              temperatureDay7={weatherData.temperatureDay7}
              conditionsDay7={weatherData.conditionsDay7}
              conditionsID7={weatherData.conditionsID7}
            />
          </Route>
          <Route path="/">
            <Forum
              handleWeatherFetchClick={handleWeatherFetchClick}
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
            />
          </Route>
        </Switch>
      </AppWrapper>
    </>
  );
};

export default Weather;
