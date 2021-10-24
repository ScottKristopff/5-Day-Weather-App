import styled from 'styled-components/macro';

export const AppWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-position: center bottom;
  padding: 0;
  /* background-image: url('https://images.unsplash.com/photo-1428908728789-d2de25dbd4e2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80'); */
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
`;
export const MainContent = styled.div`
  width: 50%;
  min-height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

/* export const WeatherContainer = styled.div`
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-gap: 10px;
  width: 
  margin: 0 auto;
`; */

export const WeatherContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 10px;
  grid-row-gap: 10px;
  margin: 0 auto;
  width: 100vw;
`;

/* export const MainContent = styled.div`
  width: 650px;
  height: 477px;
  background-color: rgba(250, 250, 250, 0.88);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 12px;
  margin: auto;
  display: block;
  transform: translateY(-50px);
`; */
