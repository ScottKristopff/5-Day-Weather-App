import React from 'react';
import Weather from '../WeatherApp/Weather/Weather';
import { Wrapper } from './Styles/styles';

const Home = () => {
  return (
    <>
      <Wrapper>
        <Weather />
      </Wrapper>
    </>
  );
};

export default Home;
