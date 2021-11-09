import React from 'react';
import Moment from 'react-moment';
import { Boop } from '../../Animations/Boop';
//Styles
import { SixDay } from './Styles/styles_weekdays';

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
const WeatherDay6 = ({ dates, conditionsDay6, conditionsID6, temperatureDay6 }) => {
  return (
    <>
      <SixDay>
        <WeekdayWrapper>
          <WeekDays>
            <Moment add={{ days: 5 }} format="ddd">
              {dates}
            </Moment>
          </WeekDays>
          <WeekdayConditions>{conditionsDay6}</WeekdayConditions>
        </WeekdayWrapper>
        <WeatherImgWrapper>
          <Boop x={0} y={-10}>
            {conditionsID6 === 'Clouds' && <PartlyCloudyImage />}
            {conditionsID6 === 'Rain' && <RainImage />}
            {conditionsID6 === 'Drizzle' && <RainImage />}
            {conditionsID6 === 'Thunderstorm' && <StormImage />}
            {conditionsID6 === 'Snow' && <SnowImage />}
            {conditionsID6 === 'Atmosphere' && <FogImage />}
            {conditionsID6 === 'Clear' && <SunnyImage />}
          </Boop>
        </WeatherImgWrapper>
        <FutureTemps>
          <h1>{temperatureDay6}&#176;</h1>
        </FutureTemps>
      </SixDay>
    </>
  );
};

export default WeatherDay6;
