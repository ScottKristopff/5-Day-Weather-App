import React from 'react';
import Moment from 'react-moment';
import { Boop } from '../../Animations/Boop';
//Styles
import { FourthDay } from './Styles/styles_weekdays';

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
const WeatherDay4 = ({ dates, conditionsDay4, conditionsID4, temperatureDay4 }) => {
  return (
    <>
      <FourthDay>
        <WeekdayWrapper>
          <WeekDays>
            <Moment add={{ days: 3 }} format="ddd">
              {dates}
            </Moment>
          </WeekDays>
          <WeekdayConditions>{conditionsDay4}</WeekdayConditions>
        </WeekdayWrapper>
        <WeatherImgWrapper>
          <Boop x={0} y={-10}>
            {conditionsID4 === 'Clouds' && <PartlyCloudyImage />}
            {conditionsID4 === 'Rain' && <RainImage />}
            {conditionsID4 === 'Drizzle' && <RainImage />}
            {conditionsID4 === 'Thunderstorm' && <StormImage />}
            {conditionsID4 === 'Snow' && <SnowImage />}
            {conditionsID4 === 'Atmosphere' && <FogImage />}
            {conditionsID4 === 'Clear' && <SunnyImage />}
          </Boop>
        </WeatherImgWrapper>
        <FutureTemps>
          <h1>{temperatureDay4}&#176;</h1>
        </FutureTemps>
      </FourthDay>
    </>
  );
};

export default WeatherDay4;
