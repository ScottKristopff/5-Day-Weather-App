import styled from 'styled-components/macro';
import { mobile } from '../../../reponsive';
import { tablet } from '../../../reponsive';

export const AppWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 64px 32px;
  overflow: none;
  ${mobile({})}
`;

//Weather UI Wrapper Styled Components

export const Wrapper = styled.div`
  width: 50%;
  min-height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  ${mobile({})}
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
  ${mobile({
    gridTemplateColumns: '1fr',
    gridColumnGap: '10px',
    gridRowGap: '20px',
    minHeight: '350px',
    maxHeight: '550px'
  })}

  ${tablet({})}
`;
