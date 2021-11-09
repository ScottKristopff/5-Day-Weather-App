import React from 'react';
import Moment from 'react-moment';
import { Boop } from '../../Animations/Boop';
//Styles
import { SevenDay } from './Styles/styles_weekdays';

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
const WeatherDay7 = ({ dates, conditionsDay7, conditionsID7, temperatureDay7 }) => {
  return (
    <>
      <SevenDay>
        <WeekdayWrapper>
          <WeekDays>
            <Moment add={{ days: 6 }} format="ddd">
              {dates}
            </Moment>
          </WeekDays>
          <WeekdayConditions>{conditionsDay7}</WeekdayConditions>
        </WeekdayWrapper>
        <WeatherImgWrapper>
          <Boop x={0} y={-10}>
            {conditionsID7 === 'Clouds' && <PartlyCloudyImage />}
            {conditionsID7 === 'Rain' && <RainImage />}
            {conditionsID7 === 'Drizzle' && <RainImage />}
            {conditionsID7 === 'Thunderstorm' && <StormImage />}
            {conditionsID7 === 'Snow' && <SnowImage />}
            {conditionsID7 === 'Atmosphere' && <FogImage />}
            {conditionsID7 === 'Clear' && <SunnyImage />}
          </Boop>
        </WeatherImgWrapper>
        <FutureTemps>
          <h1>{temperatureDay7}&#176;</h1>
        </FutureTemps>
      </SevenDay>
    </>
  );
};

export default WeatherDay7;
