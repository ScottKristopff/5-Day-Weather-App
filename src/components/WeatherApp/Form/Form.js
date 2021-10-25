/* import TextField from '@mui/material/TextField'; */
import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { Wrapper, MainTitle, InputContainer, WeatherButton, Input } from './Styles/styles';
import { useHistory } from 'react-router-dom';
import useSound from 'use-sound';
import bubble from '../../Sounds/bubbles.mp3';

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
  const [play, { stop }] = useSound(bubble, { volume: 2.0 });

  const [isHovering, setIsHovering] = useState(false);
  return (
    <>
      <Wrapper>
        <MainTitle>
          <h1>Your Weather</h1>
        </MainTitle>
        <InputContainer>
          <Input value={searchQuery} onChange={handleChange} placeholder="Toronto" />
        </InputContainer>
        <WeatherButton>
          <Button
            size="large"
            variant="contained"
            color="primary"
            onMouseEnter={() => {
              setIsHovering(true);
              play();
            }}
            onMouseLeave={() => {
              setIsHovering(false);
              stop();
            }}
            value={searchQuery}
            disabled={!searchQuery}
            onClick={apiWeatherCallAndChangeUrl}
          >
            Weather Forecast
          </Button>
        </WeatherButton>
      </Wrapper>
    </>
  );
};
