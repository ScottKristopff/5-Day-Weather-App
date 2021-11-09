import { Wrapper, WeatherContainer } from '../Styles/styles';
import { BackButton } from '../BackButton/BackButton';

import { ReturnToHomepageButton } from './Styles/styles_weekdays';
import WeatherMain from './WeatherMain';
import WeatherTmrw from './WeatherTmrw';
import WeatherDay3 from './WeatherDay3';
import WeatherDay4 from './WeatherDay4';
import WeatherDay5 from './WeatherDay5';
import WeatherDay6 from './WeatherDay6';
import WeatherDay7 from './WeatherDay7';

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
      <ReturnToHomepageButton>{<BackButton />}</ReturnToHomepageButton>
      <Wrapper>
        <WeatherContainer>
          <WeatherMain
            dates={dates}
            city={city}
            temperatureNow={temperatureNow}
            conditionsToday={conditionsToday}
            temperatureNowHigh={temperatureNowHigh}
          />
          <WeatherTmrw
            dates={dates}
            conditionsTomorrow={conditionsTomorrow}
            conditionsIDTomorrow={conditionsIDTomorrow}
            temperatureTomorrow={temperatureTomorrow}
          />
          <WeatherDay3
            dates={dates}
            conditionsDay3={conditionsDay3}
            conditionsID3={conditionsID3}
            temperatureDay3={temperatureDay3}
          />
          <WeatherDay4
            dates={dates}
            conditionsDay4={conditionsDay4}
            conditionsID4={conditionsID4}
            temperatureDay4={temperatureDay4}
          />
          <WeatherDay5
            dates={dates}
            conditionsDay5={conditionsDay5}
            conditionsID5={conditionsID5}
            temperatureDay5={temperatureDay5}
          />
          <WeatherDay6
            dates={dates}
            conditionsDay6={conditionsDay6}
            conditionsID6={conditionsID6}
            temperatureDay6={temperatureDay6}
          />
          <WeatherDay7
            dates={dates}
            conditionsDay7={conditionsDay7}
            conditionsID7={conditionsID7}
            temperatureDay7={temperatureDay7}
          />
        </WeatherContainer>
      </Wrapper>
    </>
  );
};
