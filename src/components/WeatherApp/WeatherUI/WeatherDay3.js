import React from 'react';
import Moment from 'react-moment';
import { Boop } from '../../Animations/Boop';
//Styles
import { ThirdDay } from './Styles/styles_weekdays';

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
const WeatherDay3 = ({ dates, conditionsDay3, conditionsID3, temperatureDay3 }) => {
  return (
    <>
      <ThirdDay>
        <WeekdayWrapper>
          <WeekDays>
            <p>
              <Moment add={{ days: 2 }} format="ddd">
                {dates}
              </Moment>
            </p>
          </WeekDays>
          <WeekdayConditions>{conditionsDay3}</WeekdayConditions>
        </WeekdayWrapper>
        <WeatherImgWrapper>
          <Boop x={0} y={-10}>
            {conditionsID3 === 'Clouds' && <PartlyCloudyImage />}
            {conditionsID3 === 'Rain' && <RainImage />}
            {conditionsID3 === 'Drizzle' && <RainImage />}
            {conditionsID3 === 'Thunderstorm' && <StormImage />}
            {conditionsID3 === 'Snow' && <SnowImage />}
            {conditionsID3 === 'Atmosphere' && <FogImage />}
            {conditionsID3 === 'Clear' && <SunnyImage />}
          </Boop>
        </WeatherImgWrapper>
        <FutureTemps>
          <h1>{temperatureDay3}&#176;</h1>
        </FutureTemps>
      </ThirdDay>
    </>
  );
};

export default WeatherDay3;
