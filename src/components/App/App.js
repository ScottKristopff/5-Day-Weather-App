import React, { useState } from 'react';
import styled from 'styled-components/macro';
import { Route, Switch } from 'react-router-dom';
//?Component Imports
import { WeatherUI } from '../WeatherUI/WeatherUI';
import { Form } from '../Form/Form';

export const App = () => {
  // Query States
  const [weatherData, setWeatherData] = useState(undefined);
  const [searchQuery, setSearchQuery] = useState('');

  //Weather Information States
  //* Day & Date
  const [city, setCity] = useState(undefined);
  const [dates, setDates] = useState(undefined);

  //* Current Weather
  const [temperatureNow, setTemperatureNow] = useState('');
  const [temperatureNowHigh, setTemperatureNowHigh] = useState(undefined);
  const [conditionsToday, setConditionsToday] = useState(undefined);
  const [conditionsID, setConditionsID] = useState(undefined);
  const [windSpeed, setWindSpeed] = useState(undefined);

  //* Tomorrow
  const [temperatureTomorrow, setTemperatureTomorrow] = useState('');
  const [conditionsTomorrow, setConditionsTomorrow] = useState(undefined);
  const [conditionsIDTomorrow, setConditionsIDTomorrow] = useState(undefined);

  //* Day 3
  const [temperatureDay3, setTemperatureDay3] = useState('');
  const [conditionsDay3, setConditionsDay3] = useState(undefined);
  const [conditionsID3, setConditionsID3] = useState(undefined);

  //* Day 4
  const [temperatureDay4, setTemperatureDay4] = useState('');
  const [conditionsDay4, setConditionsDay4] = useState(undefined);
  const [conditionsID4, setConditionsID4] = useState(undefined);

  //* Day 5
  const [temperatureDay5, setTemperatureDay5] = useState('');
  const [conditionsDay5, setConditionsDay5] = useState(undefined);
  const [conditionsID5, setConditionsID5] = useState(undefined);

  const handleWeatherFetchClick = async () => {
    const API_KEY = 'f1cdc7b61d7768768219833b1d28a7d5';
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${searchQuery.toLowerCase()}&appid=${API_KEY}&units=imperial`
      );
      const data = await response.json();
      if (!weatherData) {
        console.log(data);

        //city & data
        setDates(data.list[0].dt_txt);
        setCity(data.city.name);
        //current
        setTemperatureNow(data.list[0].main.temp);
        setTemperatureNowHigh(data.list[0].main.temp_max);
        setConditionsToday(data.list[0].weather[0].description);
        setConditionsID(data.list[0].weather[0].main);
        setWindSpeed(data.list[0].wind.speed);

        //Tomorrow
        setTemperatureTomorrow(data.list[7].main.temp);
        setConditionsTomorrow(data.list[7].weather[0].description);
        setConditionsIDTomorrow(data.list[7].weather[0].main);

        //day 3
        setTemperatureDay3(data.list[15].main.temp);
        setConditionsDay3(data.list[15].weather[0].description);
        setConditionsID3(data.list[15].weather[0].main);

        //day 4
        setTemperatureDay4(data.list[23].main.temp);
        setConditionsDay4(data.list[23].weather[0].description);
        setConditionsID4(data.list[23].weather[0].main);

        //day 5
        setTemperatureDay5(data.list[30].main.temp);
        setConditionsDay5(data.list[30].weather[0].description);
        setConditionsID5(data.list[30].weather[0].main);
      }
    } catch (e) {
      setWeatherData(undefined);
    }
  };

  return (
    <>
      <Main>
        <Switch>
          <Route path="/WeatherUI" exact>
            <WeatherUI
              city={city}
              date={dates}
              temperatureNow={temperatureNow}
              temperatureNowHigh={temperatureNowHigh}
              conditionsToday={conditionsToday}
              windSpeed={windSpeed}
              conditionsID={conditionsID}
              temperatureTomorrow={temperatureTomorrow}
              conditionsTomorrow={conditionsTomorrow}
              conditionsIDTomorrow={conditionsIDTomorrow}
              temperatureDay3={temperatureDay3}
              conditionsDay3={conditionsDay3}
              conditionsID3={conditionsID3}
              temperatureDay4={temperatureDay4}
              conditionsDay4={conditionsDay4}
              conditionsID4={conditionsID4}
              temperatureDay5={temperatureDay5}
              conditionsDay5={conditionsDay5}
              conditionsID5={conditionsID5}
            />
          </Route>
          <Route path="/">
            <Form
              handleWeatherFetchClick={handleWeatherFetchClick}
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
            />
          </Route>
        </Switch>
      </Main>
    </>
  );
};

const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 64px 32px;
  min-height: 100%;
  background-image: url('https://images.unsplash.com/photo-1428908728789-d2de25dbd4e2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center bottom;
`;

export default App;
