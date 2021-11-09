import React from 'react';
import Moment from 'react-moment';
import { Boop } from '../../Animations/Boop';
//Styles
import { FiveDay } from './Styles/styles_weekdays';

import {
  WeatherImgWrapper,
  WeekdayWrapper,
  WeekdayConditions,
  WeekDays,
  FutureTemps
} from './Styles/styles_weatherdata';

import {
  PartlyCloudyImage,
  RainImage,
  StormImage,
  FogImage,
  SunnyImage,
  SnowImage
} from './Styles/styles_images';
const WeatherDay5 = ({ dates, conditionsDay5, conditionsID5, temperatureDay5 }) => {
  return (
    <>
      <FiveDay>
        <WeekdayWrapper>
          <WeekDays>
            <Moment add={{ days: 4 }} format="ddd">
              {dates}
            </Moment>
          </WeekDays>
          <WeekdayConditions>{conditionsDay5}</WeekdayConditions>
        </WeekdayWrapper>
        <WeatherImgWrapper>
          <Boop x={0} y={-10}>
            {conditionsID5 === 'Clouds' && <PartlyCloudyImage />}
            {conditionsID5 === 'Rain' && <RainImage />}
            {conditionsID5 === 'Drizzle' && <RainImage />}
            {conditionsID5 === 'Thunderstorm' && <StormImage />}
            {conditionsID5 === 'Snow' && <SnowImage />}
            {conditionsID5 === 'Atmosphere' && <FogImage />}
            {conditionsID5 === 'Clear' && <SunnyImage />}
          </Boop>
        </WeatherImgWrapper>
        <FutureTemps>
          <h1>{temperatureDay5}&#176;</h1>
        </FutureTemps>
      </FiveDay>
    </>
  );
};

export default WeatherDay5;
