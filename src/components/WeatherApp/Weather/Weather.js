import React, { useState } from 'react';
import { AppWrapper } from '../Styles/styles';
import { Route, Switch } from 'react-router-dom';

//?Component Imports
import { WeatherUI } from '../WeatherUI/WeatherUI';
import { Form } from '../Form/Form';

const Weather = () => {
  // Query States
  const [weatherData, setWeatherData] = useState(undefined);
  const [searchQuery, setSearchQuery] = useState('Toronto');

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

  //*Day 6
  const [temperatureDay6, setTemperatureDay6] = useState('');
  const [conditionsDay6, setConditionsDay6] = useState(undefined);
  const [conditionsID6, setConditionsID6] = useState(undefined);

  //*Day 7
  const [temperatureDay7, setTemperatureDay7] = useState('');
  const [conditionsDay7, setConditionsDay7] = useState(undefined);
  const [conditionsID7, setConditionsID7] = useState(undefined);

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

        //Day 6
        setTemperatureDay6(data.list[35].main.temp);
        setConditionsDay6(data.list[35].weather[0].description);
        setConditionsID6(data.list[35].weather[0].main);

        //Day 7
        setTemperatureDay7(data.list[15].main.temp);
        setConditionsDay7(data.list[15].weather[0].description);
        setConditionsID7(data.list[15].weather[0].main);
      }
    } catch (e) {
      setWeatherData(undefined);
    }
  };

  return (
    <>
      <AppWrapper>
        <Switch>
          <Route path="/WeatherUI" exact>
            <WeatherUI
              city={city}
              dates={dates}
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
              temperatureDay6={temperatureDay6}
              conditionsDay6={conditionsDay6}
              conditionsID6={conditionsID6}
              temperatureDay7={temperatureDay7}
              conditionsDay7={conditionsDay7}
              conditionsID7={conditionsID7}
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
      </AppWrapper>
    </>
  );
};

export default Weather;
