import { Wrapper, WeatherContainer } from '../Styles/styles';
import { BackButton } from '../BackButton/BackButton';
import Moment from 'react-moment';
import { Boop } from '../../Animations/Boop';
//Styles
import {
  ReturnToHomepageButton,
  MainWeather,
  Tomorrow,
  ThirdDay,
  FourthDay,
  FiveDay,
  SixDay,
  SevenDay
} from './Styles/styles_weekdays';

import {
  Date,
  City,
  Conditions,
  WeatherImgWrapper,
  WeekdayWrapper,
  WeekdayConditions,
  Temp,
  TodayHigh,
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

export const WeatherUI = ({
  city,
  dates,
  temperatureNow,
  conditionsToday,
  temperatureNowHigh,
  temperatureTomorrow,
  conditionsTomorrow,
  conditionsIDTomorrow,
  temperatureDay3,
  conditionsDay3,
  conditionsID3,
  temperatureDay4,
  conditionsDay4,
  conditionsID4,
  temperatureDay5,
  conditionsDay5,
  conditionsID5,
  temperatureDay6,
  conditionsDay6,
  conditionsID6,
  temperatureDay7,
  conditionsDay7,
  conditionsID7
}) => {
  return (
    <>
      <ReturnToHomepageButton>
        <BackButton />
      </ReturnToHomepageButton>
      <Wrapper>
        <WeatherContainer>
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
                <h1>{JSON.stringify(temperatureNow).slice(0, 2)}&#176;</h1>
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
              <h1>{JSON.stringify(temperatureTomorrow).slice(0, 2)}&#176;</h1>
            </FutureTemps>
          </Tomorrow>
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
              <h1>{JSON.stringify(temperatureDay3).slice(0, 2)}&#176;</h1>
            </FutureTemps>
          </ThirdDay>
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
              <h1>{JSON.stringify(temperatureDay4).slice(0, 2)}&#176;</h1>
            </FutureTemps>
          </FourthDay>
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
              <h1>{JSON.stringify(temperatureDay5).slice(0, 2)}&#176;</h1>
            </FutureTemps>
          </FiveDay>
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
              <h1>{JSON.stringify(temperatureDay6).slice(0, 2)}&#176;</h1>
            </FutureTemps>
          </SixDay>
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
              <h1>{JSON.stringify(temperatureDay7).slice(0, 2)}&#176;</h1>
            </FutureTemps>
          </SevenDay>
        </WeatherContainer>
      </Wrapper>
    </>
  );
};
