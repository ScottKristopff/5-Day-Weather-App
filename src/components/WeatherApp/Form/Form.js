import React from 'react';
import Button from '@mui/material/Button';
import '../Form/Styles/styles.css';
import { Wrapper, MainTitle, WeatherButton } from './Styles/styles';
import { useHistory } from 'react-router-dom';

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
