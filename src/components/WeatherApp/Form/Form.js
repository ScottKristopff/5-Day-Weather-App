/* import TextField from '@mui/material/TextField'; */
import React, { useState } from 'react';
import Button from '@mui/material/Button';
import '../Form/Styles/styles.css';
import {
  Wrapper,
  MainTitle,
  InputContainer,
  WeatherButton,
  Input,
  FormWrapper,
  ErrorMessageSpan
} from './Styles/styles';
import { useHistory } from 'react-router-dom';
/* import useSound from 'use-sound';
import bubble from '../../Sounds/bubbles.mp3'; */

export const Form = ({ searchQuery, handleWeatherFetchClick, setSearchQuery }) => {
  //Handlers
  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const history = useHistory();

  const apiWeatherCallAndChangeUrl = () => {
    handleWeatherFetchClick();
    history.push('/WeatherUI');
  };

  //Sounds
  /*  const [play, { stop }] = useSound(bubble, { volume: 2.0 });

  const [isHovering, setIsHovering] = useState(false); */
  return (
    <>
      <Wrapper>
        <MainTitle>
          <h1>Your Weather</h1>
        </MainTitle>
        <form>
          <input
            type="text"
            value={searchQuery}
            onChange={handleChange}
            placeholder="Toronto"
            required
            pattern="^([a-zA-Z\u0080-\u024F]+(?:. |-| |'))*[a-zA-Z\u0080-\u024F]{4,}$"
          />
          <span className="error">
            City name should be 4-16 characters and shouldn't include any special characters
          </span>
        </form>
        <WeatherButton>
          <Button
            size="large"
            variant="contained"
            color="primary"
            /*             onMouseEnter={() => {
              setIsHovering(true);
              play();
            }}
            onMouseLeave={() => {
              setIsHovering(false);
              stop();
            }} */
            value={searchQuery}
            disabled={!searchQuery}
            onClick={apiWeatherCallAndChangeUrl}
            /*   isHovering={isHovering} */
          >
            Weather Forecast
          </Button>
        </WeatherButton>
      </Wrapper>
    </>
  );
};
