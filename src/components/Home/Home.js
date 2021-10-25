import React from 'react';
import Weather from '../WeatherApp/Weather/Weather';
import { Wrapper } from './Styles/styles';

const Home = () => {
  return (
    <div>
      <Wrapper>
        <Weather />
      </Wrapper>
    </div>
  );
};

export default Home;
