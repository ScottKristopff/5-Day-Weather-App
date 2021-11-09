import React from 'react';
import Moment from 'react-moment';
import { Boop } from '../../Animations/Boop';
//Styles
import { Tomorrow } from './Styles/styles_weekdays';

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
const WeatherTmrw = ({ dates, conditionsTomorrow, conditionsIDTomorrow, temperatureTomorrow }) => {
  return (
    <>
      <Tomorrow>
        <WeekdayWrapper>
          <WeekDays>
            <p>
              <Moment add={{ days: 1 }} format="ddd">
                {dates}
              </Moment>
            </p>
          </WeekDays>
          <WeekdayConditions>{conditionsTomorrow}</WeekdayConditions>
        </WeekdayWrapper>
        <WeatherImgWrapper>
          <Boop x={0} y={-10}>
            {conditionsIDTomorrow === 'Clouds' && <PartlyCloudyImage />}
            {conditionsIDTomorrow === 'Rain' && <RainImage />}
            {conditionsIDTomorrow === 'Drizzle' && <RainImage />}
            {conditionsIDTomorrow === 'Thunderstorm' && <StormImage />}
            {conditionsIDTomorrow === 'Snow' && <SnowImage />}
            {conditionsIDTomorrow === 'Atmosphere' && <FogImage />}
            {conditionsIDTomorrow === 'Clear' && <SunnyImage />}
          </Boop>
        </WeatherImgWrapper>
        <FutureTemps>
          <h1>{temperatureTomorrow}&#176;</h1>
        </FutureTemps>
      </Tomorrow>
    </>
  );
};

export default WeatherTmrw;
