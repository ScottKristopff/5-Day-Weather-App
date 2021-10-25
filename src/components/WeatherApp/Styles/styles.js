import styled from 'styled-components/macro';

export const AppWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 64px 32px;
`;

//Weather UI Wrapper Styled Components

export const Wrapper = styled.div`
  width: 50%;
  min-height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

//CSS Grid Weather UI Container
export const WeatherContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 10px;
  grid-row-gap: 10px;
  margin: 0 auto;
  width: 100vw;
`;
