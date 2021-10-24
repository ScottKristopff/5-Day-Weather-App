import { MainContent, WeatherContainer } from '../Styles/styles';
import { BackButton } from '../BackButton/BackButton';
import styled from 'styled-components/macro';
import Moment from 'react-moment';

//Images
import partlycloudy from '../images/cloudy.png';
import rain from '../images/rain.png';
import snow from '../images/snow.png';
import fog from '../images/fog.png';
import storms from '../images/storms.png';
import sunny from '../images/sunny.png';
import { Boop } from '../../Animations/Boop';

export const WeatherUI = ({
  city,
  dates,
  temperatureNow,
  conditionsToday,
  temperatureNowHigh,
  windSpeed,
  conditionsID,
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
  /*   let date = new Date(); */

  return (
    <>
      <ReturnToHomepageButton>
        <BackButton />
      </ReturnToHomepageButton>
      <MainContent>
        <WeatherContainer>
          <MainWeather>
            <Date>
              <p>
                <Moment format="MMMM do[, ] YYYY">{dates}</Moment>
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
      </MainContent>
    </>
  );
};

const ReturnToHomepageButton = styled.div`
  position: absolute;
  top: 50px;
  left: 20px;
`;

const MainWeather = styled.div`
  grid-row: span 2 / auto;
  height: 610px;
  width: 610px;
  background-color: rgba(250, 250, 250, 0.88);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Today = styled.div`
  background-color: rgba(250, 250, 250, 0.88);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 12px;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Tomorrow = styled.div`
  background-color: rgba(250, 250, 250, 0.88);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 12px;
  height: 300px;
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const ThirdDay = styled.div`
  background-color: rgba(250, 250, 250, 0.88);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 12px;
  height: 300px;
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const FourthDay = styled.div`
  background-color: rgba(250, 250, 250, 0.88);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 12px;
  height: 300px;
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const FiveDay = styled.div`
  background-color: rgba(250, 250, 250, 0.88);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 12px;
  /*   grid-column: span 2 / auto; */
  height: 300px;
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SixDay = styled.div`
  background-color: rgba(250, 250, 250, 0.88);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 12px;
  /*   grid-column: span 2 / auto; */
  height: 300px;
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SevenDay = styled.div`
  background-color: rgba(250, 250, 250, 0.88);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 12px;
  /*   grid-column: span 2 / auto; */
  height: 300px;
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

//Weather Data Styles
const Date = styled.p`
  font-size: 1rem;
  margin-top: 5px;
  color: #848484;
  position: relative;
`;

const City = styled.h2`
  font-size: 2.8rem;
  font-family: 'Montserrat', sans-serif;
  position: relative;
  /* bottom: 100px; */
`;

const Conditions = styled.h3`
  font-size: 2rem;
  font-weight: 400;
`;

const TempWrapper = styled.div``;

const WeatherImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 20px;
`;

const WeekdayWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-bottom: 10px;
`;

const WeekdayConditions = styled.p`
  font-size: 1.2rem;
  padding-left: 12px;
`;

const Temp = styled.h1`
  font-size: 12rem;
  margin-left: 50px;
  padding-left: -50px;
  height: min-content;
  width: min-content;
`;

const TodayHigh = styled.p`
  font-size: 1.3rem;
  font-weight: 300;
  line-height: 1.2;
  margin: 10px;
  padding-left: -10px;
`;

const WeekDays = styled.p`
  font-size: 2rem;
  padding-left: 10px;
`;

const FutureTemps = styled.h1`
  font-size: 3rem;
  /*   padding-top: 45px; */
  padding-left: 20px;
`;

//Images
const PartlyCloudyImage = styled.div`
  background-image: url(${partlycloudy});
  height: 100px;
  width: 100px;
  background-size: 100%;
  /*   margin-left: 20px; */
  margin-top: 20px;
  /*   transition: all 0.5s ease;

  &:hover {
    transform: scale(1.4);
  } */
`;

const RainImage = styled.div`
  background-image: url(${rain});
  height: 100px;
  width: 100px;
  background-size: 100%;
  /*   margin-left: 22px; */
  margin-top: 20px;
  /*   transition: all 0.5s ease;

  &:hover {
    transform: scale(1.4);
  } */
`;

const StormImage = styled.div`
  background-image: url(${storms});
  background-repeat: no-repeat;
  height: 100px;
  width: 100px;
  background-size: 100%;
  /*   margin-left: 17px; */
  margin-top: 20px;
  /*   transition: all 0.5s ease;

  &:hover {
    transform: scale(1.4);
  } */
`;

const SnowImage = styled.div`
  background-image: url(${snow});
  height: 100px;
  width: 100px;
  background-size: 100%;
  /*  margin-left: 17px; */
  margin-top: 20px;
  /*   transition: all 0.5s ease;

  &:hover {
    transform: scale(1.4);
  } */
`;

const FogImage = styled.div`
  background-image: url(${fog});
  height: 100px;
  width: 100px;
  background-size: 100%;
  /* margin-left: 17px; */
  margin-top: 20px;
  /*   transition: all 0.5s ease;

  &:hover {
    transform: scale(1.4);
  } */
`;

const SunnyImage = styled.div`
  background-image: url(${sunny});
  height: 100px;
  width: 100px;
  background-size: 100%;
  /* margin-left: 15px; */
  margin-top: 20px;
  /*   transition: all 0.5s ease;

  &:hover {
    transform: scale(1.4);
  } */
`;
