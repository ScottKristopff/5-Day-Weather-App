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
import { sizeHeight } from '@mui/system';

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
  conditionsID5
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
              <h1>{JSON.stringify(temperatureNow).slice(0, 2)}&#176;</h1>
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
          <Today>
            <WeekDays>
              <p>Today</p>
            </WeekDays>
            {conditionsID === 'Clouds' && <PartlyCloudyImage />}
            {conditionsID === 'Rain' && <RainImage />}
            {conditionsID === 'Drizzle' && <RainImage />}
            {conditionsID === 'Thunderstorm' && <StormImage />}
            {conditionsID === 'Snow' && <SnowImage />}
            {conditionsID === 'Atmosphere' && <FogImage />}
            {conditionsID === 'Clear' && <SunnyImage />}
            <FutureTemps>
              <h1>{JSON.stringify(temperatureNow).slice(0, 2)}&#176;</h1>
            </FutureTemps>
          </Today>
          <Tomorrow>
            <WeekDays>
              <p>
                <Moment add={{ days: 1 }} format="ddd">
                  {dates}
                </Moment>
              </p>
            </WeekDays>
            {conditionsIDTomorrow === 'Clouds' && <PartlyCloudyImage />}
            {conditionsIDTomorrow === 'Rain' && <RainImage />}
            {conditionsIDTomorrow === 'Drizzle' && <RainImage />}
            {conditionsIDTomorrow === 'Thunderstorm' && <StormImage />}
            {conditionsIDTomorrow === 'Snow' && <SnowImage />}
            {conditionsIDTomorrow === 'Atmosphere' && <FogImage />}
            {conditionsIDTomorrow === 'Clear' && <SunnyImage />}
            <FutureTemps>
              <h1>{JSON.stringify(temperatureTomorrow).slice(0, 2)}&#176;</h1>
            </FutureTemps>
          </Tomorrow>
          <ThirdDay>
            <WeekDays>
              <p>
                <Moment add={{ days: 2 }} format="ddd">
                  {dates}
                </Moment>
              </p>
            </WeekDays>
            {conditionsID3 === 'Clouds' && <PartlyCloudyImage />}
            {conditionsID3 === 'Rain' && <RainImage />}
            {conditionsID3 === 'Drizzle' && <RainImage />}
            {conditionsID3 === 'Thunderstorm' && <StormImage />}
            {conditionsID3 === 'Snow' && <SnowImage />}
            {conditionsID3 === 'Atmosphere' && <FogImage />}
            {conditionsID3 === 'Clear' && <SunnyImage />}
            <FutureTemps>
              <h1>{JSON.stringify(temperatureDay3).slice(0, 2)}&#176;</h1>
            </FutureTemps>
          </ThirdDay>
          <FourthDay>
            <WeekDays>
              <Moment add={{ days: 3 }} format="ddd">
                {dates}
              </Moment>
            </WeekDays>
            {conditionsID4 === 'Clouds' && <PartlyCloudyImage />}
            {conditionsID4 === 'Rain' && <RainImage />}
            {conditionsID4 === 'Drizzle' && <RainImage />}
            {conditionsID4 === 'Thunderstorm' && <StormImage />}
            {conditionsID4 === 'Snow' && <SnowImage />}
            {conditionsID4 === 'Atmosphere' && <FogImage />}
            {conditionsID4 === 'Clear' && <SunnyImage />}
            <FutureTemps>
              <h1>{JSON.stringify(temperatureDay4).slice(0, 2)}&#176;</h1>
            </FutureTemps>
          </FourthDay>
          <FiveDay>
            <WeekDays>
              <Moment add={{ days: 4 }} format="ddd">
                {dates}
              </Moment>
            </WeekDays>
            {conditionsID5 === 'Clouds' && <PartlyCloudyImage />}
            {conditionsID5 === 'Rain' && <RainImage />}
            {conditionsID5 === 'Drizzle' && <RainImage />}
            {conditionsID5 === 'Thunderstorm' && <StormImage />}
            {conditionsID5 === 'Snow' && <SnowImage />}
            {conditionsID5 === 'Atmosphere' && <FogImage />}
            {conditionsID5 === 'Clear' && <SunnyImage />}
            <FutureTemps>
              <h1>{JSON.stringify(temperatureDay5).slice(0, 2)}&#176;</h1>
            </FutureTemps>
          </FiveDay>
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
  grid-column: span 2 / auto;
  height: 500px;
  min-width: 500px;
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
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const ThirdDay = styled.div`
  background-color: rgba(250, 250, 250, 0.88);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 12px;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const FourthDay = styled.div`
  background-color: rgba(250, 250, 250, 0.88);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 12px;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const FiveDay = styled.div`
  background-color: rgba(250, 250, 250, 0.88);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 12px;
  grid-column: span 2 / auto;
  height: 390px;
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
  position: relative;
  /*   font-weight: 400; */
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
  padding-top: 45px;
  padding-left: 20px;
`;

//Images
const PartlyCloudyImage = styled.div`
  background-image: url(${partlycloudy});
  height: 180px;
  width: 180px;
  background-size: 100%;
  /*   margin-left: 20px; */
  margin-top: 20px;
`;

const RainImage = styled.div`
  background-image: url(${rain});
  height: 180px;
  width: 180px;
  background-size: 100%;
  /*   margin-left: 22px; */
  margin-top: 20px;
`;

const StormImage = styled.div`
  background-image: url(${storms});
  background-repeat: no-repeat;
  height: 180px;
  width: 180px;
  background-size: 100%;
  /*   margin-left: 17px; */
  margin-top: 20px;
`;

const SnowImage = styled.div`
  background-image: url(${snow});
  height: 180px;
  width: 180px;
  background-size: 100%;
  /*  margin-left: 17px; */
  margin-top: 20px;
`;

const FogImage = styled.div`
  background-image: url(${fog});
  height: 180px;
  width: 180px;
  background-size: 100%;
  /* margin-left: 17px; */
  margin-top: 20px;
`;

const SunnyImage = styled.div`
  background-image: url(${sunny});
  height: 180px;
  width: 180px;
  background-size: 100%;
  /* margin-left: 15px; */
  margin-top: 20px;
`;
